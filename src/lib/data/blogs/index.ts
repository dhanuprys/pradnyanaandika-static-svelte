import { dev } from '$app/environment';
import type { BlogPost, BlogPostWithContent, MdsvexModule } from './types';

/**
 * Blog post file structure:
 *   src/lib/data/blogs/YYYY/MM-DD/slug/page.svx
 *
 * The nested date folder structure keeps the filesystem organized:
 *   2025/
 *     07-23/
 *       getting-started/
 *         page.svx
 *         cover.jpg
 *
 * IMPORTANT: import.meta.glob requires string literals — the pattern cannot be
 * extracted to a variable. Each glob call must use the literal string directly.
 */

/**
 * Extracts the slug from a glob-matched file path.
 *
 * Path format: /src/lib/data/blogs/YYYY/MM-DD/slug/page.svx
 * We extract the folder name just before page.svx as the slug.
 *
 * @example
 * extractSlug('/src/lib/data/blogs/2025/07-23/getting-started/page.svx')
 * // => 'getting-started'
 */
function extractSlug(path: string): string {
	const parts = path.split('/');
	// slug is the second-to-last segment (before "page.svx")
	return parts[parts.length - 2];
}

/**
 * Calculate estimated reading time based on word count.
 * Assumes ~200 words per minute average reading speed.
 */
function calculateReadingTime(text: string): string {
	const words = text.trim().split(/\s+/).length;
	const minutes = Math.ceil(words / 200);
	return `${minutes} min read`;
}

/**
 * Get all published blog posts with metadata.
 * Posts are sorted by date (newest first).
 * Draft posts are excluded in production but included in dev mode.
 */
export async function getAllPosts(): Promise<BlogPost[]> {
	const modules = import.meta.glob<MdsvexModule>('/src/lib/data/blogs/**/page.svx', {
		eager: true
	});

	// Also import the raw content for reading time calculation
	const rawModules = import.meta.glob('/src/lib/data/blogs/**/page.svx', {
		eager: true,
		query: '?raw',
		import: 'default'
	});

	const posts: BlogPost[] = [];

	for (const [path, module] of Object.entries(modules)) {
		const { metadata } = module;

		// Skip drafts in production
		if (!dev && metadata.draft) continue;

		const slug = extractSlug(path);
		const raw = (rawModules[path] as string) ?? '';
		const readingTime = calculateReadingTime(raw);

		posts.push({ slug, metadata, readingTime });
	}

	// Sort by date descending (newest first)
	posts.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

	return posts;
}

/**
 * Get a single blog post by its slug, including its rendered content component.
 * Throws an error if the post is not found.
 */
export async function getPostBySlug(slug: string): Promise<BlogPostWithContent> {
	const modules = import.meta.glob<MdsvexModule>('/src/lib/data/blogs/**/page.svx');

	// Find the matching path by slug
	const matchingEntry = Object.entries(modules).find(([path]) => extractSlug(path) === slug);

	if (!matchingEntry) {
		throw new Error(`Blog post not found: ${slug}`);
	}

	const [path, loader] = matchingEntry;
	const module = await loader();

	// Get raw content for reading time
	const rawModules = import.meta.glob('/src/lib/data/blogs/**/page.svx', {
		query: '?raw',
		import: 'default'
	});
	const rawLoader = rawModules[path];
	const raw = rawLoader ? ((await rawLoader()) as string) : '';
	const readingTime = calculateReadingTime(raw);

	return {
		slug,
		metadata: module.metadata,
		content: module.default,
		readingTime
	};
}

/**
 * Get all valid blog post slugs.
 * Used by SvelteKit's `entries()` function to prerender all blog post pages.
 */
export async function getPostSlugs(): Promise<string[]> {
	const posts = await getAllPosts();
	return posts.map((post) => post.slug);
}
