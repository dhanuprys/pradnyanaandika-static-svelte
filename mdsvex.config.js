import { defineMDSveXConfig, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { resolve } from 'node:path';

// Initialize Shiki highlighter once for build performance
const highlighter = await createHighlighter({
	themes: ['github-dark'],
	langs: [
		'javascript',
		'typescript',
		'svelte',
		'html',
		'css',
		'json',
		'bash',
		'markdown',
		'yaml',
		'python',
		'rust',
		'go',
		'sql',
		'diff'
	]
});

const config = defineMDSveXConfig({
	extensions: ['.svx', '.md'],
	remarkPlugins: [remarkGfm],
	// @ts-expect-error — rehype plugins use newer unified types incompatible with mdsvex's types
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
	highlight: {
		highlighter: async (code, lang) => {
			const html = escapeSvelte(
				highlighter.codeToHtml(code, { lang: lang ?? 'text', theme: 'github-dark' })
			);
			return `{@html \`${html}\`}`;
		}
	},
	layout: {
		_: resolve(import.meta.dirname, './src/lib/components/blog/BlogLayout.svelte')
	}
});

export default config;
