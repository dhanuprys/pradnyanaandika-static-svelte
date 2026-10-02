import type { Product } from '../types';
import coverImg from './cover.png';

export const product: Omit<Product, 'id'> = {
	name: 'Master Template Skripsi & Tesis',
	category: 'template',
	shortDescription:
		'Format template Word yang sudah disesuaikan dengan standar pedoman penulisan akademik.',
	description: `Hemat waktu berminggu-minggu dengan menggunakan Master Template kami.
	Template Microsoft Word ini sudah dilengkapi dengan format heading otomatis, daftar isi otomatis, daftar tabel, dan daftar gambar yang sesuai dengan standar kampus pada umumnya.
	Sangat mudah disesuaikan dengan pedoman spesifik universitas Anda.`,
	price: 50000,
	originalPrice: 85000,
	currency: 'IDR',
	images: [
		coverImg,
		'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80'
	],
	imageCaptions: [
		'Tampilan Cover Master Template',
		'Format Daftar Isi & Bab Otomatis',
		'Layout Halaman Pengesahan & Pernyataan',
		'Panduan Video Langkah demi Langkah'
	],
	features: [
		'Daftar Isi Otomatis',
		'Daftar Gambar & Tabel Otomatis',
		'Format Heading & Sub-heading Standar',
		'Template Halaman Pengesahan & Pernyataan',
		'Panduan Penggunaan Video'
	],
	specifications: {
		fileFormat: ['DOCX', 'DOTX'],
		fileSize: '4.2 MB',
		language: 'Bahasa Indonesia'
	},
	stock: 999,
	rating: 4.9,
	reviewsCount: 96,
	isFeatured: true,
	isPopular: true,
	tags: ['template', 'skripsi', 'tesis', 'word', 'formatting']
};
