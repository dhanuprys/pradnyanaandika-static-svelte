import { getProductById, getProductIds, getAllProducts } from '$lib/data/products';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
	try {
		const product = await getProductById(params.productId);
		const allProducts = await getAllProducts();
		const relatedProducts = allProducts.filter((p) => p.id !== params.productId).slice(0, 3);
		return { product, relatedProducts };
	} catch {
		throw error(404, `Product not found: ${params.productId}`);
	}
};

export const entries: EntryGenerator = async () => {
	const ids = await getProductIds();
	return ids.map((id) => ({ productId: id }));
};
