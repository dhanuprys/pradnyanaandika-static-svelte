import type { Product } from '../types';
import coverImg from './cover.png';

export const product: Omit<Product, 'id'> = {
	name: 'Rekaman Webinar: Academic Writing for Scopus',
	category: 'webinar',
	shortDescription: 'Trik dan strategi menembus jurnal internasional bereputasi tinggi.',
	description: `Dapatkan akses rekaman eksklusif webinar kami tentang strategi penulisan artikel ilmiah untuk jurnal Scopus (Q1/Q2).
	Materi dibawakan langsung oleh reviewer jurnal internasional.
	Anda akan belajar struktur IMRAD yang efektif, cara merespons reviewer, dan menghindari desk-rejection.`,
	price: 100000,
	originalPrice: 150000,
	currency: 'IDR',
	images: [
		coverImg,
		'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
	],
	imageCaptions: [
		'Poster Utama Rekaman Webinar',
		'Sesi Presentasi Strategi Penulisan Scopus',
		'Slide Materi IMRAD & Cover Letter Editor',
		'Bonus List Jurnal Scopus Fast-Track'
	],
	features: [
		'Rekaman Webinar 3 Jam',
		'Slide Presentasi Lengkap (PDF)',
		'Template Cover Letter untuk Editor',
		'Daftar Jurnal Scopus Fast-Track',
		'Akses Seumur Hidup'
	],
	specifications: {
		fileFormat: ['MP4 HD', 'PDF Slides'],
		duration: '3.0 Hours',
		language: 'Bahasa Indonesia'
	},
	stock: 999,
	rating: 4.8,
	reviewsCount: 62,
	isFeatured: true,
	isPopular: true,
	tags: ['webinar', 'scopus', 'jurnal', 'publikasi', 'academic-writing']
};
