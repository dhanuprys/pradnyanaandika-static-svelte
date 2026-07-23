import { getAllPosts } from '$lib/data/blogs/index';

export const prerender = true;

export async function load() {
	const posts = await getAllPosts();
	return { posts };
}
