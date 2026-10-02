import type { Product } from '../types';
import coverImg from './cover.png';

export const product: Omit<Product, 'id'> = {
	name: 'Video Course: SPSS & SmartPLS Masterclass',
	category: 'video',
	shortDescription: 'Master quantitative data analysis step-by-step with real research datasets.',
	description: `This comprehensive video course is designed for students and researchers who want to master data analysis using SPSS and SmartPLS.
	We cover everything from basic descriptive statistics to advanced structural equation modeling (SEM).
	Includes practice datasets, a digital workbook, and lifetime access to the video platform.`,
	price: 250000,
	originalPrice: 380000,
	currency: 'IDR',
	images: [
		coverImg,
		'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
	],
	imageCaptions: [
		'Tampilan Banner Utama Video Course',
		'Dashboard Platform Pembelajaran Video',
		'Praktik Analisis SPSS & SmartPLS SEM',
		'Dataset Latihan & Sertifikat Kelulusan'
	],
	features: [
		'15+ Hours of HD Video Content',
		'Step-by-step SPSS Tutorials',
		'SmartPLS SEM Modeling Guide',
		'Includes Practice Datasets',
		'Certificate of Completion'
	],
	specifications: {
		fileFormat: ['MP4 HD', 'ZIP Datasets'],
		duration: '15.5 Hours',
		language: 'Bahasa Indonesia & English'
	},
	stock: 100,
	rating: 5.0,
	reviewsCount: 78,
	isFeatured: true,
	isPopular: true,
	tags: ['video', 'course', 'spss', 'smartpls', 'quantitative', 'statistics']
};
