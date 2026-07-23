import type { Component } from 'svelte';

/**
 * Frontmatter schema for blog posts.
 * This interface defines all the metadata fields available in a blog post's YAML frontmatter.
 */
export interface BlogFrontmatter {
	/** The blog post title */
	title: string;
	/** Short description/excerpt for listings and SEO */
	description: string;
	/** Publication date in ISO format (YYYY-MM-DD) — canonical date source */
	date: string;
	/** Last updated date in ISO format (YYYY-MM-DD) */
	updated?: string;
	/** Author name */
	author: string;
	/** Tags for categorization */
	tags: string[];
	/** Whether this is a draft (hidden in production, visible in dev) */
	draft?: boolean;
	/** Override the default <title> tag for SEO */
	seoTitle?: string;
	/** Override the default meta description for SEO */
	seoDescription?: string;
}

/**
 * A blog post with metadata but without the rendered content.
 * Used for listing pages where we only need metadata.
 */
export interface BlogPost {
	/** URL-safe slug derived from the folder name (date prefix stripped) */
	slug: string;
	/** Parsed frontmatter metadata */
	metadata: BlogFrontmatter;
	/** Estimated reading time (e.g., "5 min read") */
	readingTime: string;
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
