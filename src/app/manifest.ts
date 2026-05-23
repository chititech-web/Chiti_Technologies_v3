import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chiti Technologies — Intelligent Systems & Digital Design",
    short_name: "Chiti Technologies",
    description:
      "We build intelligent systems, automation workflows, and scalable digital infrastructure.",
    start_url: "/en",
    display: "standalone",
    background_color: "#0a0a0b",
    theme_color: "#5b6abf",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
