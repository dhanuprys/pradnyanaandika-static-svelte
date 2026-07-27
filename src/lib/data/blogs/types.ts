import type { Component } from 'svelte';

export type BlogCategory =
	'ai-education' | 'vr-learning' | 'metodologi' | 'publikasi-scopus' | 'analisis-data';

export interface AuthorProfile {
	name: string;
	avatar?: string;
	role?: string;
	bio?: string;
}

/**
 * Frontmatter schema for blog posts.
 * Defines all metadata fields available in a blog post's YAML frontmatter.
 */
export interface BlogFrontmatter {
	/** The blog post title */
	title: string;
	/** Short description/excerpt for listings and SEO */
	description: string;
	/** Primary domain category */
	category: BlogCategory;
	/** Publication date in ISO format (YYYY-MM-DD) — canonical date source */
	date: string;
	/** Last updated date in ISO format (YYYY-MM-DD) */
	updated?: string;
	/** Author name or detailed profile */
	author: string | AuthorProfile;
	/** Tags for sub-categorization & search */
	tags: string[];
	/** Is pinned as featured hero highlight */
	isFeatured?: boolean;
	/** Linked store product IDs for cross-selling */
	relatedProductIds?: string[];
	/** Whether this is a draft (hidden in production, visible in dev) */
	draft?: boolean;
	/** Override the default <title> tag for SEO */
	seoTitle?: string;
	/** Override the default meta description for SEO */
	seoDescription?: string;
	/** Social sharing image */
	ogImage?: string;
	/** Canonical URL */
	canonicalUrl?: string;
}

/**
 * A blog post with metadata but without the rendered content.
 * Used for listing pages where we only need metadata.
 */
export interface BlogPost {
	/** URL-safe slug derived from the folder name */
	slug: string;
	/** Parsed frontmatter metadata */
	metadata: BlogFrontmatter;
	/** Estimated reading time (e.g., "5 min read") */
	readingTime: string;
	/** Imported URL to the cover image */
	image?: string;
}

/**
 * A blog post with its rendered Svelte component content.
 * Used on the individual post detail page.
 */
export interface BlogPostWithContent extends BlogPost {
	/** The mdsvex-compiled Svelte component */
	content: Component;
}

/**
 * Raw module shape returned by import.meta.glob for .md files processed by mdsvex.
 */
export interface MdsvexModule {
	default: Component;
	metadata: BlogFrontmatter;
}
