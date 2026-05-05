import type { SiteInfo } from "@/lib/page-info";

export const siteInfo: SiteInfo = {
  title: "artimora",
  license: "MIT",
  keywords: ["artimora", "studio", "software", "code", "dates", "planning"],
  robots: "all",
  locale: "en_US",
  twitter: {
    card: "summary_large_image",
    siteUsername: "@artimorastudios",
  },
  author: {
    name: "copper",
    twitterUsername: "@copperdevs",
  },
};

export const tillPhaseTwoStart = new Date("2026-06-31T00:00:00Z");
export const tillPhaseThreeStart = new Date("2030-01-31T00:00:00Z");
export const tillPhaseThreeEnd = new Date("2034-01-31T00:00:00Z");
