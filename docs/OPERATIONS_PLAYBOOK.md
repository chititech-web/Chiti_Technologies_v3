# Chiti Technologies — Operations Playbook

> Internal execution guide. Update as workflows mature.

---

## 1. CMS Decision Framework

### When to use Decap CMS (Git-based)

| Criteria | Fit |
|---|---|
| Client type | Single-owner businesses, boutique brands, portfolio sites |
| Content complexity | Structured content (products, services, team members) |
| Editors | 1-3 people max |
| Budget | Lower (no server costs, free tier Vercel/Netlify) |
| Developer skill | Comfortable with Git, YAML, CLI |
| Real-time collaboration | Not needed |
| Version history | Important (built-in via Git) |

### When to use WordPress

| Criteria | Fit |
|---|---|
| Client type | Growing businesses, content-heavy blogs, e-commerce |
| Content complexity | Unstructured, mixed content, custom post types |
| Editors | 3+ people, varying technical skill |
| Budget | Medium (hosting + plugins) |
| Developer skill | PHP, MySQL, WP ecosystem knowledge |
| Real-time collaboration | Desired |
| Plugins/ecosystem | Needed (SEO, forms, bookings, etc.) |

### When to use a headless CMS (Strapi, Payload, Sanity)

| Criteria | Fit |
|---|---|
| Client type | Multi-platform brands (web + mobile app) |
| Content complexity | High, with custom content relationships |
| Editors | Multiple, need dashboard customization |
| Budget | Higher (hosting + development) |
| Developer skill | Full-stack, API design |
| Customization | Needs bespoke editorial workflows |
| Performance | Critical (headless = fast frontend) |

### Decision flowchart

```
Client walks in
    │
    ├── Needs e-commerce / blog / plugins?
    │   └── YES → WordPress
    │
    ├── Has 3+ editors / needs real-time collab?
    │   ├── YES → Headless CMS (Strapi/Sanity)
    │   └── NO  → Continue ↓
    │
    ├── Content is structured (products, listings)?
    │   ├── YES → Decap CMS (Git-based)
    │   └── NO  → WordPress or Headless
    │
    ├── Client tech-savvy enough for Git-based editing?
    │   ├── YES → Decap CMS
    │   └── NO  → WordPress
```

---

## 2. Tech Stack Options

### Stack A: Decap CMS (our signature)

```
Frontend:     Vite + vanilla HTML/CSS/JS
CMS:          Decap CMS 3.x
Auth:         GitHub OAuth
Hosting:      Vercel (free tier)
Media:        Git repo or Cloudinary
Domain:       Hostinger DNS → Vercel
Cost:         ~₹0/month (domain only)
```

### Stack B: WordPress

```
Frontend:     WordPress with custom theme
CMS:          Built-in WordPress admin
Auth:         WordPress users/roles
Hosting:      Shared WP hosting (Hostinger, SiteGround)
Media:        WordPress media library
Domain:       Hostinger DNS → WP host
Cost:         ~₹500-1500/month
SEO:          Yoast / Rank Math plugin
E-commerce:   WooCommerce
```

### Stack C: Headless (Next.js + Strapi)

```
Frontend:     Next.js / Nuxt
CMS:          Strapi / Payload CMS / Sanity
Auth:         JWT / OAuth
Hosting:      Vercel + Railway / DigitalOcean
Media:        Cloudinary / Uploadcare
Domain:       Hostinger DNS → Vercel
Cost:         ~₹2000-5000/month
```

---

## 3. Client Onboarding Workflow

### Phase 1: Discovery

```
□ Client brief call
□ Identify content types and business objectives
□ Determine stage fit (Digital Presence / Growth / Partner)
□ Choose CMS (use decision framework)
□ Send proposal aligned to engagement stage
```

### Phase 2: Scaffold (Day 2-3)

```
□ Set up GitHub repo
□ Create project from template
□ Configure CMS with sample collections
□ Set up Vercel preview deployment
□ Share preview link for early feedback
```

### Phase 3: Content population

```
□ Client provides images and data
□ Use AI to generate names and descriptions
□ Fill in spec fields from certificates
□ Upload images via CMS media library
□ Client reviews in preview environment
```

### Phase 4: Polish & SEO

```
□ Set up JSON-LD structured data
□ Generate sitemap.xml
□ Add meta titles/descriptions
□ Configure Open Graph tags
□ Add Google Analytics / Search Console
```

### Phase 5: Launch

```
□ Point domain DNS to Vercel
□ Verify SSL certificate (auto)
□ Test all routes
□ Final client sign-off
```

### Phase 6: Handoff

```
□ Share CMS login URL (/admin)
□ 15-min training session (record for reference)
□ Provide handoff document
□ Begin monthly retainer if applicable
```

---

## 4. Git Workflow for Clients

### Branch strategy

```
main ───────────── Production (live site)
  └── develop ──── CMS edits go here
       └── feature/* ── Experimentation
```

### CMS config per client

```yaml
backend:
  name: github
  repo: client-org/client-repo
  branch: develop
local_backend: true
```

### Template files for new clients

```
admin/index.html              ← branded admin page
src/cms.js                    ← CMS init
api/oauth.js                  ← GitHub OAuth
scripts/sync-products.cjs     ← data pipeline
scripts/csv-to-md.cjs         ← CSV import
```

Update per client:

```
public/admin/config.yml       ← collections, repo, branch
src/data.js                   ← generated from products
```

---

## 5. Client Handoff Document Template

```
────────────────────────────────────────
  PROJECT HANDOFF — [CLIENT NAME]
────────────────────────────────────────

LIVE SITE:     https://[client-domain].com
CMS LOGIN:     https://[client-domain].com/admin
ENGAGEMENT:    [Digital Presence / Growth / Partner]

── ACCESS ──
GitHub Repo:   github.com/[org]/[repo]
Vercel Team:   [vercel-team-name]
Domain DNS:    Hostinger → CNAME to cname.vercel-dns.com

── CMS GUIDE ──
1. Go to /admin
2. Sign in with GitHub
3. Click a collection in the sidebar
4. Click an entry to edit
5. Upload images via the image fields
6. Click "Save" — changes go to staging
7. Notify agency to review and publish

── SUPPORT ──
Chiti Technologies
[Email/Phone]
────────────────────────────────────────
```

---

## 6. Case Study Template

For every client, publish a case study on the site using this structure:

```
# Case Study: [Client Name]

## At a Glance
- Client: [name]
- Niche: [industry]
- Engagement: [Digital Presence / Growth / Partner]
- Timeline: [X weeks]
- Tech Stack: [list]

## The Challenge
[3-4 sentences describing the business problem before we started]

## Our Approach
[3-4 sentences on strategy, design decisions, technical architecture]

## Key Features Delivered
- Feature 1
- Feature 2
- Feature 3

## The Results
- Outcome 1 (quantified if possible)
- Outcome 2
- Client testimonial

## Tech Stack
[Detailed breakdown]

Screenshots / Video walkthrough
```

---

## 7. Pre-Launch Checklist

```
□ SSL certificate active (auto with Vercel)
□ 301 redirects configured (if migrating)
□ Custom 404 page
□ Sitemap.xml submitted to Google Search Console
□ robots.txt configured
□ Google Analytics installed
□ Open Graph meta tags on all pages
□ JSON-LD structured data working
□ All images optimized (AVIF/WebP fallbacks)
□ Mobile responsive tested
□ Lighthouse score > 80 (desktop + mobile)
□ Contact form working
□ WhatsApp/social links working
□ CMS /admin accessible
□ Client has login credentials
□ DNS propagated (check with whatsmydns.net)
```

---

## 8. Tools & Services Reference

| Tool | Purpose | Cost |
|---|---|---|
| Vercel | Frontend hosting | Free / $20 pro |
| Netlify | Alternative hosting | Free / $19 pro |
| Hostinger | Domain registration | ₹800-1500/yr |
| Cloudinary | Image hosting + CDN | Free (25GB) |
| GitHub | Code + CMS backend | Free |
| Google Analytics | Visitor tracking | Free |
| Google Search Console | SEO | Free |
| Hotjar / Clarity | Session recording | Free tier |

---

## 9. Learning Roadmap

### Month 1-3: Foundation

```
□ Master Decap CMS (collections, widgets, workflows)
□ Master Vite deployment (Vercel/Netlify)
□ Understand JSON-LD structured data
□ Learn Git branching strategy for clients
```

### Month 3-6: Scale

```
□ Learn Strapi or Payload CMS (headless)
□ Learn React or Vue for custom frontends
□ Master WordPress theme development
□ Build client onboarding template system
```

### Month 6-12: Automate

```
□ Build per-client generator from templates
□ Learn CI/CD pipelines (GitHub Actions)
□ Automate sitemap, SEO checks, backups
□ Build client portal for status tracking
```

---

## 10. AI Prompt Templates

### For product details from images

```
You are a luxury jewelry product manager. From this image, generate:
1. A regal product name (format: "The {Adjective} {Noun}")
2. A short tagline (format: "{Category} • {Highlight}")
3. A 2-3 sentence rich description
4. A suggested category from [chokers, necklaces, chandeliers,
   bracelets, bangles, rings, studs]
Use evocative, high-end jewelry language.
```

### For SEO meta descriptions

```
Write a compelling meta description (max 155 chars) for this product.
Include the product name, key material, and a call to action.
Product: {name}
Description: {description}
```

### For client proposals

```
Write a professional web development proposal for [client type].
Engagement stage: [Stage 1/2/3].
Include: strategic value, CMS benefits, hosting details, SEO.
Tone: premium, technical but approachable.
```
