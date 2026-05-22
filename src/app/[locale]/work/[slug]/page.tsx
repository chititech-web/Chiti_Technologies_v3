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

export default function CaseStudyPage() {
  return <CaseStudyClient />;
}
