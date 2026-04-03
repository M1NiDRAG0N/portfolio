# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start local dev server (http://localhost:5173/portfolio/)
npm run build      # Type-check + production build → dist/
npm run preview    # Preview production build locally
npm run deploy     # Build + push to gh-pages branch (GitHub Pages)
```

No linter or test suite is configured.

## Architecture

Single-page portfolio site. Vite + React 19 + TypeScript + Tailwind CSS 3, deployed to GitHub Pages at `base: '/portfolio/'`.

**Section order** (matches scroll flow):
`home` → `about` → `tech` → `work` → `contact`

This order is declared in two places that must stay in sync:
- `src/hooks/useActiveSection.ts` — `SECTIONS` array drives IntersectionObserver
- `src/App.tsx` — `SECTION_ORDER` and `SECTION_DOTS` drive the scroll progress rail

### Key patterns

**Language / i18n** — `src/context/LanguageContext.tsx` holds `'ko' | 'en'` state. All translatable strings live in `src/i18n/translations.ts`. Components call `useLang()` to get `{ lang, t, toggle }`.

**Scroll hooks**
- `useActiveSection` — detects which section is centered in the viewport via IntersectionObserver (`rootMargin: '-35% 0px -35% 0px'`). Returns a `SectionId`.
- `useScrollProgress` — returns a 0–1 float for the scroll rail fill.
- `useInView` — one-shot trigger used to fire entrance animations when elements enter the viewport.

**Animations** — entirely CSS-class-based (no animation library). Entrance animations swap between `fade-up-init`/`fade-up-done`, `slide-left-init`/`slide-left-done`, `slide-right-init`/`slide-right-done` defined in `src/index.css`. Hero elements use dedicated keyframe classes (`animate-hero-role`, etc.).

**Scroll nav** — `scroll-behavior: smooth` (CSS) + `scroll-margin-top: 5rem` on `section[id]` handles smooth anchor navigation and header offset automatically. No JS scroll handler needed.

### Content to update

- **Projects** — data array at top of `src/components/SelectedWorks.tsx`
- **Career timeline** — `timeline` array at top of `src/components/About.tsx`
- **Tech stacks** — `stacks` array at top of `src/components/TechStacks.tsx`
- **Translations / copy** — `src/i18n/translations.ts`
- **Profile photo** — place `profile.jpg` in `public/`. Referenced as `/portfolio/profile.jpg`.

### GitHub Pages deployment

The `base` in `vite.config.ts` must match the GitHub repo name. If the repo is renamed, update `base` here and in the `src/components/About.tsx` image `src` attribute (`/portfolio/profile.jpg`).
