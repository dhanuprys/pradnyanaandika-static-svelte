import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for .svelte files, except libraries and mdsvex-processed files.
				// mdsvex generates legacy $$props syntax incompatible with runes mode.
				runes: ({ filename }) => {
					if (filename.split(/[/\\]/).includes('node_modules')) return undefined;
					if (filename.endsWith('.md') || filename.endsWith('.svx')) return undefined;
					return true;
				}
			},
			adapter: adapter(),
			prerender: {
				entries: ['*', '/blogs', '/rss.xml', '/sitemap.xml', '/store']
			},
			preprocess: [mdsvex(mdsvexConfig)],
			extensions: ['.svelte', ...(mdsvexConfig.extensions ?? [])]
		})
	],
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: 'chromium', headless: true }]
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**']
				}
			},

			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
