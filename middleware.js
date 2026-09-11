import { next } from '@vercel/functions';

export const config = {
  matcher: '/mockups/:path*',
};

function slugFromPath(pathname) {
  const parts = pathname.split('/').filter(Boolean); // ['mockups', '<slug>', ...]
  return parts[1] || '';
}

function envVarName(slug) {
  return `MOCKUP_PASS_${slug.toUpperCase().replace(/[^A-Z0-9]+/g, '_')}`;
}

function unauthorized(realm) {
  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': `Basic realm="${realm}"` },
  });
}

export default function middleware(request) {
  const url = new URL(request.url);
  const slug = slugFromPath(url.pathname);

  // _template is not a real client mockup — never serve it directly.
  if (!slug || slug === '_template') {
    return unauthorized('mockups');
  }

  const expectedPassword = process.env[envVarName(slug)];
  if (!expectedPassword) {
    // No password configured for this slug — deny by default rather than
    // accidentally exposing a mockup someone forgot to protect.
    return unauthorized(slug);
  }

  const authHeader = request.headers.get('authorization') || '';
  const [scheme, encoded] = authHeader.split(' ');

  if (scheme !== 'Basic' || !encoded) {
    return unauthorized(slug);
  }

  let decoded = '';
  try {
    decoded = atob(encoded);
  } catch {
    return unauthorized(slug);
  }

  // Basic Auth sends "username:password" — only the password matters here,
  // clients can type anything (or nothing) as the username.
  const separator = decoded.indexOf(':');
  const password = separator === -1 ? decoded : decoded.slice(separator + 1);

  if (password !== expectedPassword) {
    return unauthorized(slug);
  }

  return next();
}
