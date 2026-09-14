# CLAUDE.md — Hugo Miño Personal Website

## Project Overview

This is a personal website for Hugo Miño, designed as a professional positioning platform rather than a traditional CV.

Its purpose is to:

- Increase perceived professional value in the job market
- Support career leverage within current employment
- Enable future transitions to higher-impact roles or independent work
- Communicate a hybrid profile: Environmental Science + AI + Systems Optimization + Product Thinking

The website is not a general freelance marketplace listing or a public portfolio of client work. It combines the personal positioning narrative above with one directed commercial page (`/servicios/`) for web development and automation services — see **Comercial** below. That page exists on its own terms; it does not turn the rest of the site into a service catalog.

---

## Core Identity

Hugo Miño is positioned as a:

Environmental Systems & AI Optimization professional

Working at the intersection of:

- Environmental science and sustainability systems
- Artificial intelligence applied to real-world processes
- Industrial and operational optimization
- Product thinking and system design

Secondary dimension:

- Intellectual / reflective writing on technology, behavior, and systems (supporting layer, not primary focus)

---

## Tone of Voice

- Intellectual, structured, and precise
- Minimal emotional language
- No hype, marketing tone, or exaggerated claims
- Quiet confidence rather than persuasion
- Analytical and systems-oriented framing

Avoid:

- “passion for innovation” style clichés
- startup marketing language
- vague inspirational statements

---

## Website Structure

### 1. Hero Section

Purpose: immediate positioning

Leads with the AI/technical facet first — the environmental science identity is the second beat, carried by About (see below). This ordering is intentional: it's what makes the site work as an entry point for `/servicios/` without turning the whole site into a sales page.

Content:

- Name: Hugo Miño
- Title/eyebrow: AI & process optimization framing (currently: studying the Máster en IA Aplicada a la Optimización de Procesos Productivos, UTAMED)
- Subheading: names the master's program and connects it to applied work (web development, automations)
- Photo: a professional/technical-looking portrait (not a field or lab photo — that belongs to About)

CTA:

- Primary: View Services (`/servicios/`)
- Secondary: Contact

---

### 2. About

Focus: identity and functional profile

Leads with the environmental science identity ("Soy ambientólogo") and a lab/field photo — this is the grounding/credibility beat that follows the AI-first Hero. Do not swap this order without also revisiting Hero; the two sections are designed as a pair (tech first, environmental foundation second).

Include:

- Academic background:
  - Environmental Science (UAH)
  - MSc in AI applied to industrial optimization (Visual Business School + UTAMED)
- Current role:
  - Technical auditor and process optimization lead at ACSOS (Grupo AireLimpio)
- Core capabilities:
  - systems analysis
  - process optimization
  - applied AI integration
  - environmental systems thinking

End with identity synthesis:
“A systems-oriented professional working at the intersection of environmental science and computational optimization.”

---

### 3. Focus Areas

Three pillars:

1. AI applied to operational systems
2. Environmental and sustainability systems
3. Product and system design

Note: technology stack should remain flexible and evolving.

---

### 4. Projects (Main Section)

Each project must follow this structure:

- Context
- Problem
- Approach
- Outcome / status

Projects:

#### LectorApp

A digital product designed to improve reading habits in a high-dopamine digital environment.

Positioning:

- behavioral systems + product design
- technology used as a tool for habit formation, not distraction

---

#### ACSOS / Grupo AireLimpio – AI-driven process optimization

Work focused on implementing optimization strategies and exploring agentic AI in real industrial processes.

Positioning:

- real-world application of AI
- operational impact

---

#### IMDEA Water Research

Research on wastewater valorization from brewery effluents using bioreactors for fertilizer production.

Positioning:

- applied environmental research
- circular economy systems

---

#### Handball Club Project (in development)

Building an organizational structure from scratch.

Positioning:

- systems creation in human/organizational domain
- execution and leadership

---

### 5. Experience

Simplified timeline:

- ACSOS (current)
- IMDEA Water (research)
- Academic formation

No redundancy with Projects section.

---

### 6. Writing / Ideas (Secondary Layer)

Optional section.

Content:

- AI and systems thinking
- sustainability and technology
- human behavior and attention systems
- reading, cognition, and digital habits

Tone:

- reflective, analytical, concise

This section is not core positioning, but enhances intellectual depth.

---

### 7. Current Work

Active projects:

- LectorApp
- Agentic AI implementation in operations
- Handball club development

Purpose: show ongoing execution.

---

### 8. Contact

Minimal and professional:

- Email
- LinkedIn

No unnecessary friction.

---

## Design Principles

- Minimalist, editorial-inspired layout
- Systems/grid-based structure
- Subtle technical aesthetic (data, networks, process visualization)
- No heavy visual branding
- Focus on clarity and hierarchy of information

---

## Comercial — Venta de Páginas Web y Automatizaciones

A dedicated page, `/servicios/`, offers web development and AI-driven automation services to local businesses. It exists alongside the personal positioning site, not instead of it:

- Content: what's offered (custom web pages, AI automation flows), how the process works (short conversation → real no-commitment mockup → launch if it fits), and a contact CTA. Same analytical, no-hype tone as the rest of the site — no pricing tables, testimonials, or urgency language.
- **Never names or links specific clients** on this public page, even as case studies or logos, until a client has explicitly agreed to be shown. Client mockups are confidential by default (see below).
- Linked from the main nav (`Servicios`) and from the Hero's primary CTA.

### Client mockups (`mockups/`)

Each prospective client gets a one-off mockup of a possible website, sent privately so they can evaluate it before committing:

- One folder per client at `mockups/<slug>/`, gated by Vercel Edge Middleware (`middleware.js`) requiring a per-client password (HTTP Basic Auth, `MOCKUP_PASS_<SLUG>` env var). Each client's link and password are theirs alone — never shared or listed together anywhere.
- `mockups/index.html` is the one public, client-agnostic page under this path (the middleware explicitly allows it through) — it explains that access is by private link and offers a contact fallback. It must never list or hint at which clients have a mockup.
- A mockup's own internal notes (business research, pricing strategy, competitor analysis — e.g. a `LEEME.md` alongside a mockup) must never be deployed publicly: keep it excluded via `.vercelignore`. It's for Hugo's reference only, and the client could otherwise read it with their own mockup password.
- Each mockup carries its own visible disclaimer (`noindex` + an on-page notice) that it's a demo, not the client's official site.

---

## Legal

Hugo's own pages (`index.html`, `servicios/`, `lectorapp/`, `mockups/index.html` — **not** client mockups, which represent someone else's business) carry:

- `aviso-legal/`, `privacidad/`, `cookies/` — Aviso Legal, Privacidad and Cookies pages, linked from each page's footer.
- A shared cookie-consent banner (`assets/js/cookie-consent.js`) gating Google Tag Manager (container `GTM-53N4XGR7`, which currently manages Google Analytics) behind explicit opt-in, with an equally-accessible "Rechazar" and a "Preferencias de cookies" footer link to reopen/change the choice later. Deliberately skips the standard `<noscript>` GTM iframe — it can't respect consent (no JS, no way to ask first) and would defeat the point of the gate. If tags change inside the GTM container, keep `cookies/index.html`'s cookie table in sync.
- Self-hosted fonts (`assets/fonts/`) instead of loading from Google Fonts, to avoid an unnecessary third-party IP transfer.

Rule for any future form that collects personal data (none exist today — every contact point is a plain `mailto:` link): it needs its own basic data-protection notice and an explicit consent checkbox before submission, per the Privacidad page's terms. Don't add a data-collecting form without that.

---

## Key Narrative

This website should communicate:

“A professional working on the design and optimization of complex systems using environmental science and artificial intelligence.”

Not:

- freelancer
- influencer
- pure academic researcher

But:

- systems builder with applied impact
