import { getProductById, getProductIds } from '$lib/data/products';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
	try {
		const product = await getProductById(params.productId);
		return { product };
	} catch {
		throw error(404, `Product not found: ${params.productId}`);
	}
};

export const entries: EntryGenerator = async () => {
	const ids = await getProductIds();
	return ids.map((id) => ({ productId: id }));
};
