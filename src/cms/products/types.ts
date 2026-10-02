export type ProductCategory = 'modul' | 'video' | 'template' | 'media' | 'webinar';

export interface ProductSpecification {
	/** Array of file formats, e.g. ['PDF', 'EPUB'] */
	fileFormat?: string[];
	/** Human readable file size, e.g. '15 MB' */
	fileSize?: string;
	/** Content duration for video/webinar, e.g. '3.5 Hours' */
	duration?: string;
	/** Total page count for e-books/modules */
	pageCount?: number;
	/** Primary language of material */
	language?: string;
}

export interface Product {
	/** URL-friendly slug derived from folder name */
	id: string;
	/** Product name */
	name: string;
	/** Strict product category */
	category: ProductCategory;
	/** Short description for cards/listings */
	shortDescription: string;
	/** Detailed HTML or text description */
	description: string;
	/** Current active price */
	price: number;
	/** Original pre-discount price for sales badge display */
	originalPrice?: number;
	/** Currency code (e.g., 'USD', 'IDR') */
	currency: string;
	/** Array of product image URLs (First image is the main cover/thumbnail) */
	images: string[];
	/** Optional descriptive labels/captions corresponding to each product photo in images */
	imageCaptions?: string[];
	/** List of key features */
	features: string[];
	/** Technical specs */
	specifications?: ProductSpecification;
	/** Inventory count */
	stock: number;
	/** Average rating (out of 5) */
	rating?: number;
	/** Total reviews count */
	reviewsCount?: number;
	/** Is featured on hero / top picks */
	isFeatured?: boolean;
	/** Is top popular item */
	isPopular?: boolean;
	/** Optional tags for filtering/categorization */
	tags?: string[];
	/** Optional direct checkout URL */
	checkoutUrl?: string;
}
