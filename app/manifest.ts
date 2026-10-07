import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Repast — A week of keto, decided",
    short_name: "Repast",
    description:
      "Repast plans a week of keto meals sized to your calories, keeps every day under your carb cap, and gives you one shopping list.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F4EE",
    theme_color: "#F7F4EE",
    icons: [
      {
        src: "/assets/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/assets/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
