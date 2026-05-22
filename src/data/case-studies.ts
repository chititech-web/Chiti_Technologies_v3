export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  tags: string[];
  niche: string;
  engagement: string;
  timeline: string;
  techStack: string[];
  challenge: string;
  approach: string;
  results: string;
  keyFeatures: string[];
  images: {
    hero: string;
    mockups: string[];
    logo?: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
  liveUrl: string;
  metrics: { label: string; value: string }[];
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ts-aromatics",
    title: "TS Aromatics — B2B Essential Oils Platform",
    client: "TS Aromatics",
    category: "B2B E-Commerce Platform",
    tags: ["Web Development", "UI/UX", "B2B", "E-Commerce", "i18n"],
    niche: "B2B essential oils & botanical ingredients",
    engagement: "Digital Presence",
    timeline: "8 weeks",
    techStack: [
      "Next.js 16 (App Router, Turbopack)",
      "TypeScript 5",
      "Tailwind CSS v4",
      "Three.js + React Three Fiber",
      "Framer Motion 12",
      "next-intl (i18n)",
      "Zod v4",
      "Prisma v7",
      "Vercel",
    ],
    challenge:
      "TS Aromatics needed a procurement platform that could communicate technical legitimacy to serious B2B buyers — manufacturers, wellness founders, and formulators who demand GC/MS documentation, molecular transparency, and ingredient intelligence. The existing site lacked the technical depth to support procurement teams making sourcing decisions.",
    approach:
      "We built a sensorial, heat-reactive interface that combines scientific rigour with premium brand experience. Every element — from the scroll-driven fluid simulation to the interactive chromatogram — serves the dual purpose of engaging visitors while demonstrating technical credibility. The platform features 73 product pages with GC/MS data, a 3D molecular explorer, a B2B enquiry cart, and a full educational academy with 8 articles.",
    results:
      "The platform delivers a procurement experience that rivals industry leaders in both technical documentation depth and brand experience. The interactive chromatogram, molecular explorer, and live batch documentation transform complex data into a compelling sales narrative. Early engagement metrics show strong time-on-site from procurement professionals, with the academy and technical documentation pages driving the highest conversion signals.",
    keyFeatures: [
      "Interactive Canvas chromatogram with real EMG peak shapes and hover-to-identify tooltips",
      "3D molecular explorer with force-directed graph of 35 molecules and IFRA restriction rings",
      "Global sourcing globe with animated arc dashes from India to 5 international ports",
      "Scroll-driven heat system that drives bubble physics, glow opacity, and turbulence",
      "73 product pages with GC/MS documentation and COA builder",
      "Full English / Hindi i18n with cookie-based detection",
      "B2B enquiry cart context with Zod-validated server actions",
      "Educational academy with 8 technical articles",
    ],
    images: {
      hero: "https://www.tsaromatics.in/images/sections/social-botanical.png",
      mockups: [
        "https://www.tsaromatics.in/images/logo-dark.svg",
        "https://www.tsaromatics.in/images/sections/social-botanical.png",
      ],
      logo: "https://www.tsaromatics.in/images/logo-dark.svg",
    },
    testimonial: {
      quote:
        "Chiti Studio understood exactly what we needed — a platform that speaks to procurement professionals in a language they trust. The chromatogram integration alone has changed how our clients evaluate our products.",
      author: "Prabhakar Kumar",
      title: "Technical Lead, TS Aromatics",
    },
    liveUrl: "https://www.tsaromatics.in/en",
    metrics: [
      { label: "Products", value: "73" },
      { label: "Academy Articles", value: "8" },
      { label: "Languages", value: "2" },
      { label: "3D Molecules", value: "35" },
    ],
    featured: true,
  },
  {
    slug: "house-of-giriraj",
    title: "House of Giriraj — Luxury Fine Jewelry",
    client: "Shree Giriraj Gems and Jewels",
    category: "Luxury Brand Website",
    tags: ["Web Development", "CMS", "Luxury", "E-Commerce", "Decap CMS"],
    niche: "High-end fine jewelry & bespoke gemstones",
    engagement: "Digital Presence",
    timeline: "6 weeks",
    techStack: [
      "Vite + Vanilla HTML/CSS/JS",
      "Decap CMS 3.x",
      "GitHub OAuth",
      "Tailwind CSS",
      "Vercel (hosting)",
      "JSON-LD Structured Data",
      "Automated sitemap generation",
      "Cloudinary",
    ],
    challenge:
      "Shree Giriraj Gems and Jewels, established in 1995, needed a digital presence that matched the quality and exclusivity of their physical atelier. Their previous site did not reflect the calibre of their GIA-certified collections or their 30-year heritage. They needed a system that would let them update product inventory independently while maintaining a luxury editorial feel.",
    approach:
      "We designed a dark, cinematic experience that treats each product as a collectable artefact. A Decap CMS with 7 category-specific collections (Chokers, Necklaces, Chandeliers, Bracelets, Bangles, Rings, Studs) lets the client manage products through a branded admin panel. The data flow — CMS → Markdown files → static site — ensures zero server costs and instant load times. JSON-LD structured data was implemented across all product pages for rich search results, and an automated sitemap pipeline ensures all 30+ product pages are indexed.",
    results:
      "A production-grade luxury site that the client can fully manage through their CMS. The bespoke enquiry funnel has streamlined high-value client acquisition. Lighthouse scores exceed 90 on both desktop and mobile. The site now serves as the brand's primary digital storefront, with the CMS enabling the team to add new collections and update inventory without developer involvement.",
    keyFeatures: [
      "Decap CMS with 7 product collections and rich media fields",
      "Multi-page luxury funnel (home, collections, product detail, bespoke, heritage, contact)",
      "Automated product sync from CMS to static site",
      "JSON-LD structured data for all products and organization schema",
      "Automated sitemap generation (34+ URLs)",
      "Bespoke enquiry form with WhatsApp integration",
      "Hero + atelier video with optimized image fallbacks",
      "Responsive image pipeline (AVIF/WebP variants)",
    ],
    images: {
      hero: "https://house-of-giriraj.vercel.app/assets/images/global/hero.png",
      mockups: [
        "https://house-of-giriraj.vercel.app/assets/images/global/House_of_Giriraj.svg",
        "https://house-of-giriraj.vercel.app/assets/images/products/diamond-macro/hero.jpg",
      ],
      logo: "https://house-of-giriraj.vercel.app/assets/images/global/House_of_Giriraj.svg",
    },
    liveUrl: "https://house-of-giriraj.vercel.app",
    metrics: [
      { label: "Collections", value: "7" },
      { label: "Heritage", value: "30+ years" },
      { label: "CMS-managed Products", value: "30+" },
      { label: "Lighthouse Score", value: "90+" },
    ],
    featured: true,
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
