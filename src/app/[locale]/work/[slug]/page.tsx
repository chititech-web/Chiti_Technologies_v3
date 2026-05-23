import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { orderedCaseStudies } from "@/data/case-studies";
import CaseStudyClient from "./CaseStudyClient";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    orderedCaseStudies.map((study) => ({
      locale,
      slug: study.slug,
    }))
  );
}

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = orderedCaseStudies.find((s) => s.slug === slug);
  if (!study) return { title: "Case Study" };
  return {
    title: study.title,
    description: study.summary,
    openGraph: {
      title: `${study.title} — Chiti Technologies`,
      description: study.summary,
      images: [{ url: study.images.hero }],
    },
  };
}

export default function CaseStudyPage() {
  return <CaseStudyClient />;
}
