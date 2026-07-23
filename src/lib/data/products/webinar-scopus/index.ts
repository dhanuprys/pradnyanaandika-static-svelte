import type { Product } from '../types';
import coverImg from './cover.png';

export const product: Omit<Product, 'id'> = {
	name: 'Rekaman Webinar: Academic Writing for Scopus',
	shortDescription: 'Trik dan strategi menembus jurnal internasional bereputasi tinggi.',
	description: `Dapatkan akses rekaman eksklusif webinar kami tentang strategi penulisan artikel ilmiah untuk jurnal Scopus (Q1/Q2).
	Materi dibawakan langsung oleh reviewer jurnal internasional.
	Anda akan belajar struktur IMRAD yang efektif, cara merespons reviewer, dan menghindari desk-rejection.`,
	price: 100000,
	currency: 'IDR',
	images: [coverImg],
	features: [
		'Rekaman Webinar 3 Jam',
		'Slide Presentasi Lengkap (PDF)',
		'Template Cover Letter untuk Editor',
		'Daftar Jurnal Scopus Fast-Track',
		'Akses Seumur Hidup'
	],
	stock: 999,
	tags: ['webinar', 'scopus', 'jurnal', 'publikasi', 'academic-writing']
};
