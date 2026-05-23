# Chiti Studio - Technical & Design Journal

> Documentation for team members working on Chiti Studio projects.

---

## Table of Contents

1. [Chiti Studio Premium (Website)](#1-chiti-studio-premium-website)
   - [Project Overview](#project-overview)
   - [Tech Stack](#tech-stack)
   - [Design System](#design-system)
   - [Project Structure](#project-structure)
   - [Key Components](#key-components)
   - [Styling Approach](#styling-approach)
   - [Development Commands](#development-commands)

2. [Nova - Adaptive Cinematic Concierge](#2-nova---adaptive-cinematic-concierge)
   - [Product Vision](#product-vision)
   - [Architecture](#architecture)
   - [Embedded Version (Next.js)](#embedded-version-nextjs)
   - [Standalone Version](#standalone-version)
   - [Configuration Options](#configuration-options)
   - [Integration Guide](#integration-guide)
   - [Video Requirements](#video-requirements)
   - [API Endpoint](#api-endpoint)

3. [Assets & Resources](#3-assets--resources)

---

## 1. Chiti Studio Premium (Website)

### Project Overview

- **Project Name**: chiti-studio-premium
- **Type**: Premium agency portfolio website (Next.js App Router)
- **Purpose**: Showcase Chiti Studio's design and development services
- **Status**: Built with production-ready components

### Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | ^15.3.1 |
| UI Library | React | ^19.1.0 |
| Language | TypeScript | ^5.8.3 |
| Styling | Tailwind CSS | ^4.1.4 |
| Animation | Framer Motion | ^12.6.5 |
| Icons | Lucide React | ^0.487.0 |
| State | Zustand | ^5.x |
| Theme | next-themes | ^0.4.6 |
| Fonts | Google Fonts (Epilogue, Manrope) | - |

### Design System

#### Color Palette

The design uses a dark theme with cyan/teal as primary accent. Colors are defined in `src/app/globals.css`:

| Color | Hex | Usage |
|-------|-----|-------|
| Surface | `#0a0f14` | Main background |
| Primary | `#4dd0e1` | Cyan - main accent |
| Secondary | `#5c7cfa` | Deep blue |
| Tertiary | `#b388ff` | Deep purple |
| Accent | `#00bfa5` | Aurora teal |
| Error | `#ff5252` | Error states |

#### Typography

- **Headline Font**: Epilogue (variable weights: 400, 700, 800, 900)
- **Body Font**: Manrope (weights: 400, 500, 600, 700, 800)

#### Visual Effects

1. **Aurora Background**: Animated gradient blobs with drift and pulse animations
2. **Glassmorphism**: `.glass` and `.glass-panel` classes for frosted glass effects
3. **Grid Floor**: Perspective grid at bottom of viewport
4. **Particle Effects**: Floating particle animations
5. **Neon Effects**: Glows, lines, and text shadows for premium feel

### Project Structure

```
chiti-studio-premium/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/
│   │   │   └── lead/           # Nova lead capture API
│   │   │       └── route.ts
│   │   ├── about/page.tsx      # About page
│   │   ├── contact/page.tsx    # Contact page
│   │   ├── globals.css         # Design system & animations
│   │   ├── layout.tsx          # Root layout with Nova
│   │   ├── page.tsx            # Home page
│   │   └── work/page.tsx       # Work showcase
│   ├── components/
│   │   ├── nova/               # Nova embedded components
│   │   │   ├── Nova.tsx
│   │   │   ├── Sphere.tsx
│   │   │   ├── VideoPlayer.tsx
│   │   │   ├── QuestionPanel.tsx
│   │   │   └── ConversationEngine.tsx
│   │   ├── sections/           # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── MetricsStrip.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── WorkShowcase.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── AboutPreview.tsx
│   │   │   └── CTASection.tsx
│   │   ├── AuroraBackground.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   ├── Navbar.tsx
│   │   ├── Section.tsx
│   │   └── ThemeProvider.tsx
│   ├── store/
│   │   └── useNovaStore.ts     # Zustand store for Nova
│   └── data/
│       └── conversation.json    # Nova conversation flow
├── public/
│   └── nova/
│       ├── nova-embed.js       # Standalone embed script
│       └── videos/             # Nova videos (add your own)
├── package.json
├── next.config.ts
├── tsconfig.json
└── NOVA_SETUP.md              # Nova setup instructions
```

### Key Components

| Component | Purpose |
|-----------|---------|
| `AuroraBackground.tsx` | Animated gradient background with blobs |
| `ThemeProvider.tsx` | Dark/light theme toggle (dark only for now) |
| `Navbar.tsx` | Navigation with smooth scrolling |
| `Hero.tsx` | Main hero section with animations |
| `ServicesGrid.tsx` | Services showcase |
| `WorkShowcase.tsx` | Portfolio/projects display |
| `Nova.tsx` | Embedded concierge (bottom-right trigger) |

### Styling Approach

- **Tailwind CSS v4** with `@theme` directive for custom properties
- Custom utility classes in `globals.css`:
  - `.glass` - Frosted glass effect
  - `.aurora-blob-*` - Animated background blobs
  - `.gradient-text` - Gradient text effect
  - `.system-module` - Card with glow hover
- Animations defined as CSS keyframes
- No external CSS modules needed

### Development Commands

```bash
# Install dependencies
npm install
npm install zustand  # For Nova

# Development
npm run dev

# Production build
npm run build

# Start production
npm run start

# Lint
npm run lint
```

---

## 2. Nova - Adaptive Cinematic Concierge

### Product Vision

Nova is NOT a chatbot. It's a **Cinematic Front Office System** that replaces contact forms with a guided, human-feeling interaction layer.

> "Before a user interacts with your product, they should be received."

**Core Philosophy**:
- Slow is premium
- Silence is intentional
- Less words, more weight

**Experience Flow**:
1. Welcome Video (emotion)
2. Intent Selection (control)
3. Guided Qualification (clarity)
4. Data Capture (context)
5. Summary Display (confirmation)
6. Closing Video (warm handoff)

### Architecture

Nova exists in two forms:

| Version | Location | Use Case |
|---------|----------|----------|
| Embedded | `src/components/nova/` | Direct integration in Next.js |
| Standalone | `nova-standalone/` | Embed on any website |

---

### Embedded Version (Next.js)

#### File Structure

```
src/components/nova/
├── Nova.tsx                  # Main container + modal
├── Sphere.tsx                # Floating trigger button
├── VideoPlayer.tsx           # Video component with subtitle overlay
├── QuestionPanel.tsx         # Options buttons + input forms
└── ConversationEngine.tsx    # Flow logic + state management

src/store/
└── useNovaStore.ts           # Zustand state (isOpen, currentStep, leadData)

src/data/
└── conversation.json         # Flow configuration

src/app/api/lead/route.ts     # POST endpoint to capture leads
```

#### State Management (Zustand)

```typescript
interface NovaState {
  isOpen: boolean;
  currentStep: string;
  leadData: {
    name: string;
    email: string;
    projectType: string;
    budget: string;
    timeline: string;
    intentCategory: string;
  };
  isPlaying: boolean;
  isComplete: boolean;
  leadStatus: 'high-priority' | 'qualified' | 'low-intent';
}
```

#### Conversation Flow (conversation.json)

Each step defines:
- `type`: video | question | input | completion
- `videoUrl`: path to video file
- `subtitle`: text overlay for videos
- `question`: text for question steps
- `options`: button choices (label, value, nextStep)
- `inputType`: text | email
- `storeKey`: which leadData field to save

#### Lead Scoring

| Signal | Score |
|--------|-------|
| SaaS/Product project | +2 |
| Budget 1L+ | +2 |
| Immediate timeline | +2 |

- 4+ points = **High Priority**
- 2-3 points = **Qualified**
- 0-1 points = **Low Intent**

---

### Standalone Version

For non-Next.js websites (WordPress, plain HTML, etc.).

#### Files

```
nova-standalone/
├── dist/
│   └── nova-embed.js          # Minified embed script (~600 lines)
├── public/nova/videos/
│   └── config.json            # Video configuration
├── demo.html                  # Test page
└── README.md                  # Setup instructions
```

#### Embed Code

```html
<script 
  src="https://your-domain.com/nova/nova-embed.js"
  data-api="https://your-domain.com/api/lead"
  data-position="bottom-right"
  data-primaryColor="#6366f1"
  data-accentColor="#8b5cf6"
></script>
```

#### Programmatic Control

```javascript
// Open Nova
Nova.open();

// Close Nova  
Nova.close();

// Update config
Nova.setConfig('position', 'bottom-left');
```

---

### Configuration Options

| Attribute | Values | Default |
|-----------|--------|---------|
| `data-position` | `bottom-right`, `bottom-left` | `bottom-right` |
| `data-primaryColor` | hex color | `#6366f1` |
| `data-accentColor` | hex color | `#8b5cf6` |
| `data-api` | URL | `/api/lead` |

---

### Integration Guide

#### For chiti-studio-premium (Already Integrated)

1. Add videos to `public/nova/videos/`:
   - welcome.mp4
   - thinking.mp4
   - acknowledgement.mp4
   - approval.mp4
   - closing.mp4

2. Install Zustand: `npm install zustand`

3. Run: `npm run dev`

4. Click the purple sphere in bottom-right to test

#### For Other Websites

1. Copy `nova-embed.js` to your public folder

2. Add videos to your public videos folder

3. Add the script tag to your HTML

4. Optionally set up a `/api/lead` endpoint

---

### Video Requirements

| Video | Duration | Purpose |
|-------|----------|---------|
| welcome | 4-5s | Entry - Nova introduces herself |
| thinking | 2-3s | Transition - Shows Nova is considering |
| acknowledgement | 2-3s | Response - Acknowledges user choice |
| approval | 2-3s | High-value signal - Positive confirmation |
| closing | 4-5s | Exit - Final message before handoff |

**Specifications**:
- Format: MP4
- Size: <2MB each recommended
- Audio: None or minimal
- Style: Consistent with brand (your videos from Threshold_Assistant)

---

### Interactive Movie Experience (v3)

Nova version 3 implements an immersive cinematic experience:

1. **Container**: 480px width, 9:16 aspect ratio (853px tall)
2. **Unified Interface**: All interaction happens *inside* the video frame
3. **Simultaneous Playback**: Questions appear overlayed while video plays
4. **Navigation**: Back/forward controls to change previous answers
5. **No external UI**: Everything lives within the single frame

**Flow**:
- Welcome video plays → question overlayed at bottom
- User selects option → crossfade to next video with next question
- User can navigate back/forward through conversation history
- Feels like interacting with a person, not a chatbot

**Files Modified**:
- `conversation.json`: Every question has `videoUrl` field
- `VideoPlayer.tsx`: Combined video + question + navigation controls
- `Nova.tsx`: Fixed 480px × 853px container
- `useNovaStore.ts`: Added history tracking for back/forward navigation

---

### API Endpoint

**Route**: `POST /api/lead`

**Request Body**:
```json
{
  "name": "John",
  "email": "john@example.com",
  "projectType": "website",
  "budget": "50k-1l",
  "timeline": "month"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Lead captured successfully"
}
```

**Note**: Currently logs to console. To add email notifications, integrate Resend or Nodemailer in `src/app/api/lead/route.ts`.

---

## 3. Assets & Resources

### Original Assets

Located in `C:\Users\User\Documents\Chiti_Studio\Threshold_Assistant\`:

| Folder | Contents |
|--------|----------|
| `Assistant/` | 21 images (UI inspiration, avatars) |
| `Video/` | 6 video files (WhatsApp videos - source for Nova) |

### PRD Document

Full product specifications: `Threshold_Assistant/PRD.txt` (449 lines)

---

## Quick Start for New Team Members

### Setting Up chiti-studio-premium

```bash
cd chiti-studio-premium
npm install
npm install zustand
npm run dev
```

### Adding Nova Videos

1. Create folder: `public/nova/videos/`
2. Copy videos from `Threshold_Assistant/Video/`
3. Rename/format as needed per `conversation.json`

### Building for Production

```bash
npm run build
npm run start
```

### Customizing the Design

- **Colors**: Edit `--color-*` variables in `src/app/globals.css`
- **Fonts**: Change in `src/app/layout.tsx` (Epilogue, Manrope)
- **Animations**: Adjust keyframe timings in `globals.css`
- **Nova Flow**: Edit `src/data/conversation.json`

---

*Last Updated: April 2026*
*Maintainer: Chiti Studio Team*