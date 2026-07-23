import type { Product } from './types';

/**
 * Extracts the product slug from a glob-matched file path.
 *
 * Path format: /src/lib/data/products/slug/index.ts
 * We extract the folder name as the slug.
 */
function extractSlug(path: string): string {
	const parts = path.split('/');
	return parts[parts.length - 2];
}

type ProductModule = { product: Omit<Product, 'id'> };

/**
 * Get all products.
 */
export async function getAllProducts(): Promise<Product[]> {
	// Import all index.ts files within product subdirectories
	const modules = import.meta.glob<ProductModule>('/src/lib/data/products/*/index.ts', {
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

/**
 * Get a single product by its ID (slug).
 * Throws an error if not found.
 */
export async function getProductById(id: string): Promise<Product> {
	// import.meta.glob requires a literal, so we glob all and find the match
	const modules = import.meta.glob<ProductModule>('/src/lib/data/products/*/index.ts');

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

/**
 * Get all product IDs for prerendering.
 */
export async function getProductIds(): Promise<string[]> {
	const products = await getAllProducts();
	return products.map((p) => p.id);
}
