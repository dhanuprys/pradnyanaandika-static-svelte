import { getPostBySlug, getPostSlugs } from '$cms';
import { getProductById } from '$cms';
import type { Product } from '$cms';

export const prerender = true;

export async function load({ params }) {
	const post = await getPostBySlug(params.blogId);

	let relatedProducts: Product[] = [];
	if (post.metadata.relatedProductIds && post.metadata.relatedProductIds.length > 0) {
		const productPromises = post.metadata.relatedProductIds.map((id) =>
			getProductById(id).catch(() => null)
		);
		const results = await Promise.all(productPromises);
		relatedProducts = results.filter((p): p is Product => p !== null);
	}

	return {
		content: post.content,
		metadata: post.metadata,
		slug: post.slug,
		readingTime: post.readingTime,
		image: post.image,
		relatedProducts
	};
}

export async function entries() {
	const slugs = await getPostSlugs();
	return slugs.map((blogId) => ({ blogId }));
}
