// @ts-check

import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://gatsby.artimora.dev",
	integrations: [sitemap(), react()],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},

		imageService: "cloudflare",
	}),
	trailingSlash: "ignore",
	output: "static",
	compressHTML: true,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	vite: {
		server: {
			watch: {
				usePolling: true,
			},
		},
	},
});
