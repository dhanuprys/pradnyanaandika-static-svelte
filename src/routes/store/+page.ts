import { getAllProducts } from '$lib/data/products';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async () => {
	const products = await getAllProducts();

	return {
		products
	};
};
