import type { Product } from './types';
import { extractSlug } from '../utils';
import { SITE_CONFIG } from '$cms/site';

type ProductModule = { product: Omit<Product, 'id'> };

/** Get all products. */
export async function getAllProducts(): Promise<Product[]> {
	const modules = import.meta.glob<ProductModule>('/src/cms/products/*/index.ts', {
		eager: true
	});

	const products: Product[] = [];

	for (const [path, module] of Object.entries(modules)) {
		const slug = extractSlug(path);
		products.push({
			id: slug,
			...module.product
		});
	}

	// Sort alphabetically by name
	products.sort((a, b) => a.name.localeCompare(b.name));

	return products;
}

/** Get a single product by its ID (slug). Throws an error if not found. */
export async function getProductById(id: string): Promise<Product> {
	// import.meta.glob requires a literal, so we glob all and find the match
	const modules = import.meta.glob<ProductModule>('/src/cms/products/*/index.ts');

	const matchingEntry = Object.entries(modules).find(([path]) => extractSlug(path) === id);

	if (!matchingEntry) {
		throw new Error(`Product not found: ${id}`);
	}

	const [, loader] = matchingEntry;
	const module = await loader();

	return {
		id,
		...module.product
	};
}

/** Get all product IDs for prerendering. */
export async function getProductIds(): Promise<string[]> {
	const products = await getAllProducts();
	return products.map((p) => p.id);
}

/** Generate JSON-LD Product Schema for SEO. */
export function getProductSchema(product: Product) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Product',
		'@id': `${SITE_CONFIG.url}/store/${product.id}`,
		name: product.name,
		description: product.description || product.shortDescription,
		image: product.images,
		offers: {
			'@type': 'Offer',
			priceCurrency: product.currency,
			price: product.price,
			availability: 'https://schema.org/InStock'
		},
		brand: {
			'@type': 'Brand',
			name: SITE_CONFIG.name
		}
	};
}
