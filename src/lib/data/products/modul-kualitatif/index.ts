import type { Product } from '../types';
import coverImg from './cover.png';

export const product: Omit<Product, 'id'> = {
	name: 'E-Modul: Panduan Penelitian Kualitatif',
	category: 'modul',
	shortDescription:
		'Modul praktis untuk memahami metode kualitatif, dari wawancara hingga analisis tematik.',
	description: `Buku digital (E-Modul) ini membahas tuntas pendekatan penelitian kualitatif.
	Mulai dari paradigma penelitian, cara menyusun instrumen wawancara yang menggali mendalam, teknik observasi partisipatoris, hingga cara melakukan analisis tematik menggunakan software NVivo atau secara manual.`,
	price: 150000,
	originalPrice: 220000,
	currency: 'IDR',
	images: [
		coverImg,
		'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
	],
	imageCaptions: [
		'Sampul Utama E-Modul',
		'Pratinjau Halaman Isi & Pembahasan Bab',
		'Panduan Instrumen Wawancara & NVivo',
		'Bonus Matriks Sintesis & Lembar Kerja'
	],
	features: [
		'150+ Halaman Materi Padat',
		'Contoh Instrumen Wawancara',
		'Panduan Analisis Tematik',
		'Studi Kasus Jurnal Q1',
		'Format PDF & EPUB'
	],
	specifications: {
		fileFormat: ['PDF', 'EPUB'],
		fileSize: '18.5 MB',
		pageCount: 165,
		language: 'Bahasa Indonesia'
	},
	stock: 999,
	rating: 5.0,
	reviewsCount: 128,
	isFeatured: true,
	isPopular: true,
	tags: ['modul', 'kualitatif', 'wawancara', 'analisis-tematik', 'buku']
};
