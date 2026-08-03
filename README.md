# Aathi — Developer Portfolio

Java Full Stack Developer portfolio. Single-page scroll site with anchor navigation.

## Status: Milestone 8 complete (Footer added — layout shell fully built)

React + Vite + Tailwind + React Router are installed and wired up. Dark mode works via a
`ThemeContext`. **Navbar, Hero, About, Skills, Projects, Contact, and Footer** are all
built and mounted. Every planned component from the original roadmap now exists — remaining
work is polish (responsive/QA, performance/SEO/accessibility) and deployment.

⚠️ Still carrying two known placeholders: the **email** in `profile.js`
(`aathithirunav@gmail.com`) and the **Resume button** in the Footer, which is intentionally
disabled with a "coming soon" label until a résumé file exists.

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 3** (pinned to v3, not v4 — keeps the classic `tailwind.config.js` workflow)
- **React Router 7** (`react-router-dom`) — client-side routing, `BrowserRouter`
- **Framer Motion** — not installed yet, will be added in the animation milestone

## Folder structure

```
src/
├── assets/                 icons, images
├── components/
│   ├── layout/              Navbar.jsx, Footer.jsx built
│   ├── sections/             Hero.jsx, About.jsx, Skills.jsx, Projects.jsx, Contact.jsx built
│   └── ui/                   SkillBadge.jsx, ProjectCard.jsx built | Button.jsx (not built yet)
├── context/
│   └── ThemeContext.jsx     built — dark/light state, localStorage, system preference
├── data/                    profile.js (now incl. email/github/linkedin), skills.js, projects.js built
├── pages/                   (empty — reserved if we ever need actual routes beyond the single page)
├── App.jsx                  built — router shell + all 5 content sections + Footer mounted
├── main.jsx                 built — BrowserRouter + ThemeProvider wrapper
└── index.css                built — Tailwind directives + base theme rules
```

Import alias `@/` points to `src/` (configured in `vite.config.js` + `jsconfig.json`), e.g.
`import Navbar from '@/components/layout/Navbar'`.

## Design tokens (in `tailwind.config.js`)

| Token                    | Light     | Dark      |
|--------------------------|-----------|-----------|
| `background`             | `#FAFAF9` | `#0B0E14` |
| `surface` (cards)        | `#FFFFFF` | `#131720` |
| `foreground` (text)      | `#14171F` | `#E7E9EE` |
| `muted` (secondary text) | `#6B7280` | `#8B93A5` |
| `accent`                 | `#3B6FE0` | `#5B8CFF` |
| `border`                 | `#E5E7EB` | `#232838` |

Fonts: **Space Grotesk** (`font-display`, headings) / **Inter** (`font-body`, default) /
**JetBrains Mono** (`font-mono`, for tech tags, code-flavored accents — a deliberate nod to
the backend/engineering identity). Loaded via Google Fonts in `index.html`.

## Dark mode

- Strategy: Tailwind `darkMode: 'class'`, toggled via `ThemeContext` (`src/context/ThemeContext.jsx`).
- Persisted to `localStorage` under key `portfolio-theme`.
- Falls back to system preference (`prefers-color-scheme`) if no explicit choice has been made,
  and keeps following system changes until the user picks a theme manually.
- A small blocking script in `index.html` applies the theme class before first paint, so there's
  no flash of the wrong theme on load.
- Usage in any component: `const { theme, toggleTheme, isDark } = useTheme()`.

## Navbar

- Fixed to the top, transparent over the hero, gains a blurred solid background + bottom
  border once `window.scrollY > 8`.
- Logo mark: `<Aathi/>` with the brackets in `font-mono text-accent` — small nod to the dev
  identity, kept restrained.
- Desktop: inline links + theme toggle. Mobile (`< 768px`): hamburger icon opens a dropdown
  panel with the same links, animated via `max-height` transition (no Framer Motion yet).
- Uses `lucide-react` for the Menu/X/Sun/Moon icons (newly added dependency).
- Does **not** yet do scroll-spy active-link highlighting — deferred until section ids
  actually exist, so it can be tested for real instead of against nothing.

## Known non-issue

`npm audit` flags a high-severity advisory on `react-router-dom` (GHSA-qwww-vcr4-c8h2). It only
affects the unstable RSC (React Server Components) APIs — this project is a plain client-side SPA
using `BrowserRouter`, so it doesn't apply. Left as-is rather than force a v8 major upgrade.

## Running locally

```
npm install
npm run dev
```

## Hero

- Full-viewport section, center-aligned, content vertically centered.
- Eyebrow styled as a config/JSON key-value pair (`role: "Java Full Stack Developer"`) in
  `font-mono` — a small signature tying the visual language to REST/Spring config files.
- Headline works the name in directly rather than a generic greeting; tagline leans into the
  "full stack, not just my favorite half" framing.
- Two CTAs (`View Projects` → `#projects`, `Get in Touch` → `#contact`) and a bouncing
  scroll-cue (`#about`) — all no-ops until those sections exist.
- No Framer Motion here — entrance/scroll animation is deferred to the dedicated animation
  milestone. The only motion is Tailwind's built-in `animate-bounce` on the scroll cue.

## About

- Two-column layout (`sm:grid-cols-[200px_1fr]`): a label column (`// About` eyebrow +
  heading) and a content column (paragraph + education). Stacks to one column on mobile.
- Establishes a reusable header pattern: `// SectionName` in `font-mono text-accent` plus
  a short `<h2>`. Skills/Projects/Contact should reuse this same eyebrow style for visual
  consistency, even if their content layout below it differs.
- Also establishes the section vertical-padding convention: `py-24 sm:py-32`. Reuse this
  for the remaining sections so spacing rhythm stays even down the page.
- Education is folded in as a compact bordered credential (icon + text), not a separate
  section — per the original roadmap decision to avoid over-fragmenting a one-line detail.

## Skills

- Reuses the `// SectionName` eyebrow + `sm:grid-cols-[200px_1fr]` layout from About.
- Grouped into **Backend** (Java, Spring Boot, Spring Security, REST APIs, MySQL),
  **Frontend** (React, JavaScript, HTML, CSS, Tailwind CSS), and
  **Tools & Fundamentals** (Git, Docker, Data Structures & Algorithms) — scannable rather
  than one flat wall of 13 pills.
- `SkillBadge.jsx` (new, in `components/ui/`): a plain `font-mono` pill, no brand icons.
  Considered adding tech-brand icons (Java, React, MySQL, etc. each have their own brand
  color) but skipped it deliberately — mixing five or six brand colors would undercut the
  restrained cobalt/neutral palette the rest of the site uses. Text-only pills stay
  consistent with that.

## Projects

- Reuses the `// SectionName` eyebrow + `sm:grid-cols-[200px_1fr]` layout from About/Skills.
- **Two-tier hierarchy**, per the original roadmap: JWT Authentication System and Ecommerce
  Backend API render as larger "Featured" cards (own row, more padding, feature-list
  bullets), while Weather Dashboard and Todo Application render as smaller cards under a
  "More Projects" label — same audience-fit reasoning as before (backend work gets the
  weight, for this recruiter audience).
- `ProjectCard.jsx` (new, in `components/ui/`) reuses `SkillBadge` for the tech-stack tags
  instead of building a second near-identical pill component.
- **All "View Code" links currently point to the GitHub profile root**
  (`https://github.com/aathi1412`), not per-repo URLs — none were provided. Update
  `githubUrl` on each entry in `data/projects.js` once the actual repo links exist.
- Icon note: `lucide-react` doesn't ship a GitHub logo (brand icons were dropped from the
  library). Used `Code2` (a `</>` glyph) instead — also keeps things consistent with the
  no-brand-icons decision made in the Skills milestone.

## Contact

- Reuses the `// SectionName` eyebrow + `sm:grid-cols-[200px_1fr]` layout from the other
  sections. Heading: "Let's build something great." — the closing-CTA framing the roadmap
  called for.
- Three link tiles: Email, GitHub, LinkedIn — bordered cards, accent on hover.
- GitHub/LinkedIn use real brand marks (`FaGithub`/`FaLinkedin` from `react-icons/fa`, new
  dependency), unlike Skills' plain-text pills. Reasoning is different, not inconsistent:
  these are two well-known single-color glyphs that adopt `currentColor`, not a handful of
  differently-colored official logos — so they don't fight the palette the way five or six
  brand-colored tech icons would have.
- **Email is a placeholder** (`aathithirunav@gmail.com` in `profile.js`) — no real address was
  ever given. Flagged loudly here and in the file itself; swap it before deploying.

**Note on how this milestone went:** `Contact.jsx`, the `profile.js` contact fields, and the
`App.jsx` mount were already present in the workspace when this session started — not
written by me in this session. I reviewed rather than assumed: kept the layout and the safe
placeholder-email pattern, but swapped the generic icons for real GitHub/LinkedIn marks and
strengthened the closing copy to match the original spec, then verified the build myself.

## Footer

- Two-tier layout: top row is brand (`<Aathi/>` logo, same mark as Navbar, for a deliberate
  open/close bookend) + quick actions; bottom row is copyright + "Back to top".
- GitHub/LinkedIn as compact icon-only circular buttons (`react-icons/fa`, same as Contact),
  not full tiles — Footer is meant to be quieter than Contact, not a repeat of it.
- **Resume button is a real disabled `<button>`**, not a dead link — `disabled` +
  `aria-disabled="true"` + a visible "(coming soon)" label, so it reads as intentionally
  unavailable rather than broken. Swap it for a real `<a href="/resume.pdf" download>` once
  a résumé file exists (there's already a placeholder path reserved at
  `public/resume.pdf` from Milestone 1).
- Copyright year is computed via `new Date().getFullYear()`, not hardcoded — stays correct
  without maintenance.
- Mounted **outside** the `<Routes>` block in `App.jsx` (Navbar is too) — both persist
  regardless of route, in case real routes ever get added later.

## Next milestone

All originally-planned components now exist. What's left, per the roadmap, is polish and
shipping — pick one:
- **Animation & micro-interaction pass** (install Framer Motion, scroll-triggered reveals,
  refine hover states)
- **Responsive & cross-browser QA pass**
- **Performance, SEO & accessibility pass**
- **Deployment**
