import type { Product } from '../types';
import coverImg from './cover.png';

export const product: Omit<Product, 'id'> = {
	name: 'E-Modul: Panduan Penelitian Kualitatif',
	shortDescription:
		'Modul praktis untuk memahami metode kualitatif, dari wawancara hingga analisis tematik.',
	description: `Buku digital (E-Modul) ini membahas tuntas pendekatan penelitian kualitatif.
	Mulai dari paradigma penelitian, cara menyusun instrumen wawancara yang menggali mendalam, teknik observasi partisipatoris, hingga cara melakukan analisis tematik menggunakan software NVivo atau secara manual.`,
	price: 150000,
	currency: 'IDR',
	images: [coverImg],
	features: [
		'150+ Halaman Materi Padat',
		'Contoh Instrumen Wawancara',
		'Panduan Analisis Tematik',
		'Studi Kasus Jurnal Q1',
		'Format PDF & EPUB'
	],
	stock: 999,
	tags: ['modul', 'kualitatif', 'wawancara', 'analisis-tematik', 'buku']
};
