import { dev } from '$app/environment';
import { extractSlug, calculateReadingTime } from '../utils';
import { SITE_CONFIG } from '$cms/site';
import type { BlogPost, BlogPostWithContent, MdsvexModule } from './types';

/**
 * Blog post file structure:
 *   src/lib/cms/blogs/YYYY/MM-DD/slug/page.svx
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
 * Get all published blog posts with metadata.
 * Posts are sorted by date (newest first).
 * Draft posts are excluded in production but included in dev mode.
 */
export async function getAllPosts(): Promise<BlogPost[]> {
	const modules = import.meta.glob<MdsvexModule>('/src/cms/blogs/**/page.svx', {
		eager: true
	});

	// Also import the raw content for reading time calculation
	const rawModules = import.meta.glob('/src/cms/blogs/**/page.svx', {
		eager: true,
		query: '?raw',
		import: 'default'
	});

	// Import cover images
	const coverImages = import.meta.glob('/src/cms/blogs/**/cover.png', {
		eager: true,
		query: '?url',
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

		// Find the matching cover image
		const imagePath = path.replace('page.svx', 'cover.png');
		const image = (coverImages[imagePath] as string) ?? '';

		posts.push({ slug, metadata, readingTime, image });
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
	const modules = import.meta.glob<MdsvexModule>('/src/cms/blogs/**/page.svx');

	// Find the matching path by slug
	const matchingEntry = Object.entries(modules).find(([path]) => extractSlug(path) === slug);

	if (!matchingEntry) {
		throw new Error(`Blog post not found: ${slug}`);
	}

	const [path, loader] = matchingEntry;
	const module = await loader();

	// Get raw content for reading time
	const rawModules = import.meta.glob('/src/cms/blogs/**/page.svx', {
		query: '?raw',
		import: 'default'
	});
	const rawLoader = rawModules[path];
	const raw = rawLoader ? ((await rawLoader()) as string) : '';
	const readingTime = calculateReadingTime(raw);

	const coverImages = import.meta.glob('/src/cms/blogs/**/cover.png', {
		query: '?url',
		import: 'default'
	});
	const imagePath = path.replace('page.svx', 'cover.png');
	const imageLoader = coverImages[imagePath];
	const image = imageLoader ? ((await imageLoader()) as string) : '';

	return {
		slug,
		metadata: module.metadata,
		content: module.default,
		readingTime,
		image
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

/**
 * Generate JSON-LD Article Schema for SEO.
 */
export function getBlogSchema(post: BlogPost) {
	const authorName =
		typeof post.metadata.author === 'string' ? post.metadata.author : post.metadata.author.name;

	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		'@id': `${SITE_CONFIG.url}/blogs/${post.slug}`,
		headline: post.metadata.title,
		description: post.metadata.description,
		datePublished: post.metadata.date,
		dateModified: post.metadata.updated ?? post.metadata.date,
		image: post.image || undefined,
		author: {
			'@type': 'Person',
			name: authorName
		},
		publisher: {
			'@type': 'Organization',
			name: SITE_CONFIG.name,
			logo: SITE_CONFIG.publisher.logo
		}
	};
}
