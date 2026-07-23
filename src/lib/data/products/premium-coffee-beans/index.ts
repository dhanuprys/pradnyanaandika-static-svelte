import type { Product } from '../types';
import coverImg from './cover.png';
import detailImg from './detail.png';

export const product: Omit<Product, 'id'> = {
	name: 'Premium Coffee Beans',
	shortDescription: 'Rich, smooth, and locally sourced single origin roast.',
	description: `Experience the finest selection of hand-picked coffee beans. 
	Our Ethiopia Yirgacheffe single origin roast offers a vibrant and complex flavor profile.
	Perfect for pour-over, french press, or your daily espresso.`,
	price: 25.00,
	currency: 'USD',
	images: [coverImg, detailImg],
	features: [
		'100% Arabica',
		'Medium Roast',
		'Fair Trade Certified',
		'Tasting notes: Bergamot, Floral, Blueberry'
	],
	stock: 50,
	tags: ['coffee', 'beverage', 'single-origin']
};
