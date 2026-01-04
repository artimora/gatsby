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

// unix timestamps in seconds (GMT/UTC+0)
const MILLISECONDS_PER_SECOND = 1000;

export const tillPhaseTwoStart = new Date(
  1_776_297_600 * MILLISECONDS_PER_SECOND
);
export const tillPhaseThreeStart = new Date(
  1_893_456_000 * MILLISECONDS_PER_SECOND
);
export const tillPhaseThreeEnd = new Date(
  2_010_614_400 * MILLISECONDS_PER_SECOND
);
