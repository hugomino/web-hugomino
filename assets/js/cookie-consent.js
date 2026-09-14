/*
 * Shared cookie-consent banner for Hugo Miño's own pages (not client mockups).
 * No cookies of its own — the consent choice lives in localStorage, which is
 * the consent mechanism itself and doesn't require consent to use.
 *
 * Loads Google Tag Manager only after explicit "Aceptar". The standard GTM
 * install also adds a <noscript><iframe> right after <body> that loads
 * unconditionally — deliberately NOT included here, because it can't respect
 * consent (no JS = no way to ask first) and would defeat the whole point of
 * gating this behind opt-in.
 */
(function () {
  var GTM_CONTAINER_ID = 'GTM-53N4XGR7';
  var STORAGE_KEY = 'cookie-consent';

  function getConsent() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* private browsing / storage blocked — banner will just reappear next visit */
    }
  }

  function loadAnalytics() {
    if (!GTM_CONTAINER_ID || window.__gtmLoaded) return;
    window.__gtmLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_CONTAINER_ID;
    document.head.appendChild(script);
  }

  function injectStyles() {
    if (document.getElementById('cookie-consent-styles')) return;
    var style = document.createElement('style');
    style.id = 'cookie-consent-styles';
    style.textContent =
      '#cookie-consent{position:fixed;left:0;right:0;bottom:0;z-index:200;' +
      'background:var(--bg-alt,#fff);border-top:1px solid var(--border,#e0ddd8);' +
      'padding:20px clamp(20px,4vw,48px);display:flex;flex-wrap:wrap;gap:16px 24px;' +
      'align-items:center;justify-content:space-between;' +
      'font-family:var(--font-sans,system-ui,sans-serif);' +
      'box-shadow:0 -8px 24px -12px rgba(0,0,0,.15)}' +
      '#cookie-consent p{margin:0;font-size:13.5px;line-height:1.6;color:var(--text-muted,#72726f);max-width:640px;font-weight:300}' +
      '#cookie-consent a{color:var(--text,#0f0f0e);text-decoration:underline}' +
      '#cookie-consent .cc-actions{display:flex;gap:10px;flex-shrink:0}' +
      '#cookie-consent button{font-family:inherit;font-size:12.5px;font-weight:600;letter-spacing:.03em;' +
      'padding:11px 22px;border:1px solid var(--border,#e0ddd8);background:transparent;color:var(--text,#0f0f0e);cursor:pointer}' +
      '#cookie-consent button.cc-accept{background:var(--accent,#1b4332);border-color:var(--accent,#1b4332);color:#fff}' +
      '#cookie-consent[hidden]{display:none}';
    document.head.appendChild(style);
  }

  function buildBanner() {
    var el = document.createElement('div');
    el.id = 'cookie-consent';
    el.setAttribute('role', 'region');
    el.setAttribute('aria-label', 'Aviso de cookies');
    el.innerHTML =
      '<p>Usamos cookies de analítica (a través de Google Tag Manager) solo si las aceptas. ' +
      'Puedes cambiar de opinión cuando quieras. Más información en la ' +
      '<a href="/cookies/">política de cookies</a>.</p>' +
      '<div class="cc-actions">' +
      '<button type="button" class="cc-reject">Rechazar</button>' +
      '<button type="button" class="cc-accept">Aceptar</button>' +
      '</div>';
    document.body.appendChild(el);

    el.querySelector('.cc-accept').addEventListener('click', function () {
      setConsent('accepted');
      loadAnalytics();
      el.hidden = true;
    });
    el.querySelector('.cc-reject').addEventListener('click', function () {
      setConsent('rejected');
      el.hidden = true;
    });

    return el;
  }

  function init() {
    injectStyles();
    var banner = buildBanner();
    var consent = getConsent();

    if (consent === 'accepted') {
      banner.hidden = true;
      loadAnalytics();
    } else if (consent === 'rejected') {
      banner.hidden = true;
    } else {
      banner.hidden = false;
    }

    // Footer "Preferencias de cookies" links call this to reopen the banner.
    window.reopenCookieConsent = function () {
      banner.hidden = false;
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
