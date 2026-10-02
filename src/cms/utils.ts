import { SITE_CONFIG } from '$cms/site';

/**
 * Extract slug from a glob-matched file path.
 * Works for all content types: blogs, inovasi, products.
 *
 * @example
 * extractSlug('/src/cms/blogs/2025/07-23/getting-started/page.svx')
 * // => 'getting-started'
 *
 * extractSlug('/src/cms/products/modul-kualitatif/index.ts')
 * // => 'modul-kualitatif'
 */
export function extractSlug(path: string): string {
	const parts = path.split('/');
	return parts[parts.length - 2];
}

/**
 * Calculate estimated reading time based on word count.
 * Assumes ~200 words per minute average reading speed.
 */
export function calculateReadingTime(text: string): string {
	const words = text.trim().split(/\s+/).length;
	const minutes = Math.ceil(words / 200);
	return `${minutes} min read`;
}

/**
 * Create a JSON-LD Person author object referencing the canonical site config.
 * Use this in all schema generators for consistency.
 */
export function createSchemaAuthor(name?: string) {
	return {
		'@type': 'Person' as const,
		name: name ?? SITE_CONFIG.author.name
	};
}
