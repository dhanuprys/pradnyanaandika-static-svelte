import { getAllPosts } from '$cms';
import { getAllProducts } from '$cms';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async () => {
	const posts = await getAllPosts();
	const products = await getAllProducts();

	return {
		posts: posts.slice(0, 3),
		products: products.slice(0, 4)
	};
};
