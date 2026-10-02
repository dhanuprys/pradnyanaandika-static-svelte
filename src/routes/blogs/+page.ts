import { getAllPosts } from '$cms';

export const prerender = true;

export async function load() {
	const posts = await getAllPosts();
	return { posts };
}
