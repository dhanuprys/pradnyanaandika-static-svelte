export interface Product {
	/** URL-friendly slug derived from folder name */
	id: string;
	/** Product name */
	name: string;
	/** Short description for cards/listings */
	shortDescription: string;
	/** Detailed HTML or text description */
	description: string;
	/** Price amount */
	price: number;
	/** Currency code (e.g., 'USD', 'IDR') */
	currency: string;
	/** Array of image URLs (imported via Vite). First image is the cover. */
	images: string[];
	/** List of key features */
	features: string[];
	/** Inventory count */
	stock: number;
	/** Optional tags for filtering/categorization */
	tags?: string[];
}
