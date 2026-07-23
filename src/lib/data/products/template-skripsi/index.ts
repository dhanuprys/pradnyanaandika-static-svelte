import type { Product } from '../types';
import coverImg from './cover.png';

export const product: Omit<Product, 'id'> = {
	name: 'Master Template Skripsi & Tesis',
	shortDescription:
		'Format template Word yang sudah disesuaikan dengan standar pedoman penulisan akademik.',
	description: `Hemat waktu berminggu-minggu dengan menggunakan Master Template kami.
	Template Microsoft Word ini sudah dilengkapi dengan format heading otomatis, daftar isi otomatis, daftar tabel, dan daftar gambar yang sesuai dengan standar kampus pada umumnya.
	Sangat mudah disesuaikan dengan pedoman spesifik universitas Anda.`,
	price: 50000,
	currency: 'IDR',
	images: [coverImg],
	features: [
		'Daftar Isi Otomatis',
		'Daftar Gambar & Tabel Otomatis',
		'Format Heading & Sub-heading Standar',
		'Template Halaman Pengesahan & Pernyataan',
		'Panduan Penggunaan Video'
	],
	stock: 999,
	tags: ['template', 'skripsi', 'tesis', 'word', 'formatting']
};
