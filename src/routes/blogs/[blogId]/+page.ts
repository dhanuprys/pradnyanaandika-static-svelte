import { getPostBySlug, getPostSlugs } from '$lib/data/blogs/index';

export const prerender = true;

export async function load({ params }) {
	const post = await getPostBySlug(params.blogId);
	return {
		content: post.content,
		metadata: post.metadata,
		slug: post.slug,
		readingTime: post.readingTime
	};
}

export async function entries() {
	const slugs = await getPostSlugs();
	return slugs.map((blogId) => ({ blogId }));
}
