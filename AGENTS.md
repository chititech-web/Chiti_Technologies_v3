# Chiti Technologies Premium — Project Guide

> **Brand & Positioning:** See [`docs/BRAND_PLAYBOOK.md`](./docs/BRAND_PLAYBOOK.md) for vocabulary, competitive landscape, visual hierarchy rules, and positioning guidelines.
> **Operations:** See [`docs/OPERATIONS_PLAYBOOK.md`](./docs/OPERATIONS_PLAYBOOK.md) for CMS framework, client onboarding, handoff templates, and AI prompts.
> **File Governance:** See [`docs/FILE_GOVERNANCE.md`](./docs/FILE_GOVERNANCE.md) for deletion protocol and naming conventions.

## Build & Dev Commands
- `npm run dev` — development server
- `npm run build` — production build (25 static pages + 1 API route)
- `npm run lint` — lint check
- `npm start` — production server

## Project Structure
```
src/
├── app/
│   ├── globals.css                      # All CSS: theme tokens, glass, aurora, keyframes
│   ├── layout.tsx                       # Root layout (fonts, metadata, theme-clip div)
│   ├── robots.ts                        # SEO: robots.txt rules
│   ├── sitemap.ts                       # SEO: sitemap.xml (all locales + case studies)
│   ├── manifest.ts                      # PWA manifest
│   └── [locale]/
│       ├── layout.tsx                   # Locale layout: ThemeProvider, Preloader, CustomCursor,
│       │                                  AuroraBackground, Navbar, SmoothScrollProvider, Footer, Nova
│       ├── page.tsx                     # Home page: Hero → Metrics → Architecture → Services → Work → Process → About → CTA
│       ├── about/page.tsx               # Chiti philosophy: sanskrit glyph, pillars, blueprint
│       ├── contact/page.tsx             # Single-step inquiry form (name, email, company, budget, type, message)
│       ├── services/page.tsx            # Services detail page
│       ├── work/page.tsx                # Work archive
│       └── work/[slug]/                 # Case study pages: Problem → System Overview → Challenges → Decisions → Screens → Features → Impact → Reflection
       │   ├── page.tsx                 # Server (generateStaticParams + generateMetadata per slug)
│           └── CaseStudyClient.tsx      # Client rendering
├── components/
│   ├── Button.tsx                       # Re-export from @chiti/ui
│   ├── Container.tsx                    # Wrapper: default, narrow, wide sizes
│   ├── FadeIn.tsx                       # Framer Motion whileInView wrapper
│   ├── Section.tsx                      # Section with optional border
│   ├── Navbar.tsx                       # Fixed nav, scroll background, mobile hamburger, magnetic Start Project
│   ├── Footer.tsx                       # 4-column footer grid
│   ├── Logo.tsx                         # Logo image + "CHITI TECHNOLOGIES"
│   ├── ThemeToggle.tsx                  # Clip-path circular animation, next-themes
│   ├── ThemeProvider.tsx                # next-themes wrapper
│   ├── LanguageToggle.tsx              # English/Hindi switch
│   ├── AuroraBackground.tsx             # SVG turbulence blobs + particles + grid overlay
│   ├── CanvasParticles.tsx              # Vanilla canvas 150-particle field, mouse-tilt
│   ├── CustomCursor.tsx                 # Magnetic cursor, dot+ring, context text, lerp follow
│   ├── Preloader.tsx                    # Boot sequence: typewriter → counter 0-100% → fade out (first-visit)
│   ├── SmoothScrollProvider.tsx         # Lenis + GSAP ScrollTrigger, disabled <768px
│   ├── sections/
│   │   ├── Hero.tsx                     # Slideshow (persistent video + AnimatePresence images), GSAP text-split headline,
│   │   │                                   CanvasParticles, system modules, floating orbs, metrics strip (99.9%/12ms/256)
│   │   ├── MetricsStrip.tsx             # System Health Dashboard: terminal header, GSAP counter 0→target, SVG sparklines
│   │   ├── SystemArchitecture.tsx       # 5-step workflow (Audit→Architecture→Build→Deploy→Evolve), glass node cards
│   │   ├── ServicesGrid.tsx             # 3 service cards: Identity Infrastructure, Automation & Workflow, Scalable Design Systems
│   │   ├── WorkShowcase.tsx             # Horizontal scroll (Lenis + ScrollTrigger), parallax tilt, video hover preview
│   │   ├── Process.tsx                  # 3-step timeline (Design→Prototype→Engineer)
│   │   ├── AboutPreview.tsx             # Homepage about preview: image + "Clean interfaces. Strong systems."
│   │   ├── CTASection.tsx               # CTA panel with gradient blobs, magnetic buttons, Calendly link
│   └── nova/                            # Nova AI concierge
│       └── Nova.tsx
├── data/
│   └── case-studies.ts                  # 5 case studies: NetQ Command, TS Aromatics, House of Giriraj, BatchFlow, Bighi Brothers
├── hooks/
│   └── useParallaxTilt.ts               # Mouse-tracking 3D tilt hook (±3°, perspective 800px)
└── messages/
    ├── en.json                          # English translations (all UI labels, services, architecture, about)
    └── hi.json                          # Hindi translations (parallel keys)
```

## Key Libraries & Versions
- Next.js 15.5, React 19, TypeScript 5.8
- Framer Motion 12.6 (layout animations: FadeIn, AnimatePresence)
- GSAP 7.x + ScrollTrigger (text splitting, counter animation, horizontal scroll)
- Lenis 1.x (smooth scroll)
- next-intl 4.12 (i18n routing, `en` + `hi`)
- next-themes 0.4 (dark/light toggle)
- Tailwind CSS 4.1 (with `@container` queries)
- lucide-react (icons)
- Zustand (Nova state)

## Conventions
- **"use client"** for interactive components; server components for static pages
- **Translations**: All UI text in `messages/{locale}.json`, accessed via `useTranslations()` hook
- **Animation tiers**: Framer Motion for layout/fade transitions; GSAP for scroll-triggered/sequential animations; CSS for micro-animations (hover, keyframes)
- **No comments in code** (unless required for clarity)
- **Mobile**: `sm:` / `md:` breakpoints, `@container` queries for container-relative sizing
- **Smooth scroll**: Lenis active on desktop >768px only; native scroll on mobile
- **Cursor**: Custom cursor on hover-capable devices only (`matchMedia("(hover: hover)")`)
- **Preloader**: SessionStorage flag, `?preview` param bypasses cache

## Animations Overview
| Element | Technique | Trigger |
|---|---|---|
| Hero headline | GSAP word stagger (y, opacity, rotateX) | Scroll |
| Hero slideshow | Framer Motion AnimatePresence + persistent `<video>` | Timer 4s |
| Hero particles | Vanilla `<canvas>` RAF loop | Mouse move |
| Metrics counter | GSAP textContent snap 0→target | ScrollTrigger |
| Services cards | CSS hover lift + arrow slide | Hover |
| Architecture steps | Framer Motion FadeIn stagger | Scroll |
| Work cards | CSS hover grayscale→color + scale | Hover |
| Work cards 3D tilt | Vanilla JS mousemove (useParallaxTilt hook) | Mouse |
| Work horizontal scroll | Lenis + GSAP ScrollTrigger scrub | Scroll |
| Work video preview | `<video>` on hover | Hover |
| Theme toggle | CSS clip-path circle expansion | Click |
| Cursor | RAF lerp, magnetic pull | Mouse |
| Grid pulse | CSS keyframes on `::after` | Auto |
| Sparklines | SVG stroke-dashoffset animation | Hover |
| Aurora blobs | CSS keyframes (drift/pulse) | Auto |
| Preloader | GSAP timeline | Page load (first-visit) |

## Page Load Sizes
- Home: 248 kB First Load JS (GSAP + Lenis + CanvasParticles + Framer Motion)
- About: 218 kB
- Contact: 173 kB
- Services: 179 kB
- Work: 193 kB
- Work/[slug]: 197 kB
- Shared base: 102 kB

## Case Studies Data Structure
Each case study in `src/data/case-studies.ts` has:
```ts
slug, title, client, subtitle, role, year, summary, category, tags,
techStack, keyFeatures, images (hero, cover, logo?, diagram?),
testimonial?, liveUrl?, metrics, featured, problem, systemOverview,
keyChallenges, designDecisions, interfaceScreens, screenIntro, impact,
reflection, journal?
```

## Video Files
- Small MP4s (~3 MB each) in `public/case-studies/house-of-giriraj/`:
  `curation.mp4`, `maharani-viraasat.mp4`, `raj-tilak.mp4`
- Tracked via Git LFS: `public/case-studies/**/*.mp4` in `.gitattributes`
- Persistent `<video>` element outside AnimatePresence with dynamic src swapping
- User interaction listener for iOS autoplay compliance

## SEO
- `src/app/robots.ts` — allows all, disallows `/api/`, sitemap URL set
- `src/app/sitemap.ts` — all locales × static pages + case study pages, priority tiers
- `src/app/manifest.ts` — PWA name, icon, theme/background colors
- `src/app/layout.tsx` — metadata: `title.template`, `robots`, `alternates.languages`, `twitter:card`, OG
- `src/app/[locale]/work/[slug]/page.tsx` — `generateMetadata()` per project (dynamic OG image)

## Deployment
- Hosted on Vercel (25/25 static pages)
- `unoptimized` on all slide `<Image>` components (avoids Vercel optimization timeout)
- API route: `POST /api/lead` (currently logs to console)
- Git LFS required for video clone
