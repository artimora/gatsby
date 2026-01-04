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

export const tillPhaseTwoStart = new Date(1776297600);
export const tillPhaseThreeStart = new Date(1893456000);
export const tillPhaseThreeEnd = new Date(2010614400);
