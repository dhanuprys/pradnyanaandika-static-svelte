import type { Product } from '../types';
import coverImg from './cover.png';

export const product: Omit<Product, 'id'> = {
	name: 'Video Course: SPSS & SmartPLS Masterclass',
	shortDescription: 'Master quantitative data analysis step-by-step with real research datasets.',
	description: `This comprehensive video course is designed for students and researchers who want to master data analysis using SPSS and SmartPLS.
	We cover everything from basic descriptive statistics to advanced structural equation modeling (SEM).
	Includes practice datasets, a digital workbook, and lifetime access to the video platform.`,
	price: 250000,
	currency: 'IDR',
	images: [coverImg],
	features: [
		'15+ Hours of HD Video Content',
		'Step-by-step SPSS Tutorials',
		'SmartPLS SEM Modeling Guide',
		'Includes Practice Datasets',
		'Certificate of Completion'
	],
	stock: 100,
	tags: ['video', 'course', 'spss', 'smartpls', 'quantitative', 'statistics']
};
