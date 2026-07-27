import type { PengabdianProgram } from './types';
import { SITE_CONFIG } from '$lib/config/site';

export const PENGABDIAN_PROGRAMS: PengabdianProgram[] = [
	{
		id: 'pelatihan-ai-guru-bali-3t',
		title: 'Pelatihan Literasi AI & Pembuatan Media Digital untuk Pendidik di Wilayah 3T Bali',
		location: 'Buleleng & Karangasem, Bali',
		partner: 'Dinas Pendidikan & PGRI Bali',
		year: 2024,
		beneficiaries: '120+ Guru SMA/SMK',
		description:
			'Program pendampingan dan workshop pembuatan bahan ajar berbantuan AI untuk meningkatkan efektivitas pengajaran pendidik.',
		image:
			'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
		outcomes: [
			'120 Modul Pembelajaran Ter-generate AI',
			'Peningkatan Skor Kompetensi Digital Guru +45%',
			'Pemberian Sertifikat Pelatihan Resmi'
		]
	},
	{
		id: 'workshop-metodologi-penelitian-dosen-muda',
		title: 'Pendampingan Penulisan Artikel Scopus dan Metodologi Penelitian Bagi Dosen Pemula',
		location: 'Singaraja, Bali',
		partner: 'LPM Undiksha & konsorsium perguruan tinggi',
		year: 2023,
		beneficiaries: '85+ Dosen & Peneliti',
		description:
			'Kegiatan pengabdian masyarakat berupa bootcamp penulisan draft naskah jurnal ilmiah terindeks bereputasi internasional.',
		image:
			'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
		outcomes: [
			'18 Draft Artikel Siap Submit Scopus',
			'Panduan E-Book Metodologi Praktis',
			'Sesi Klinik Mentoring 1-on-1'
		]
	}
];

export function getAllPengabdian(): PengabdianProgram[] {
	return PENGABDIAN_PROGRAMS;
}

export function getPengabdianSchema(item: PengabdianProgram) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Event',
		'@id': `${SITE_CONFIG.url}/portofolio#pengabdian-${item.id}`,
		name: item.title,
		description: item.description,
		location: {
			'@type': 'Place',
			name: item.location
		},
		organizer: {
			'@type': 'Person',
			name: SITE_CONFIG.author.name
		}
	};
}
