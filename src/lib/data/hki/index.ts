import type { HkiRecord } from './types';
import { SITE_CONFIG } from '$lib/config/site';

export const HKI_RECORDS: HkiRecord[] = [
	{
		id: 'kodibot-ai-software-copyright',
		title: 'KodiBot AI - Software Asisten Cerdas Pembelajaran Adaptif Berbasis Conversational Agent',
		hkiType: 'Hak Cipta',
		registrationNumber: 'EC00202410892',
		registrationDate: '15 Maret 2024',
		creators: ['Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.', 'Tim Pengembang EdTech Undiksha'],
		description:
			'Hak cipta program komputer untuk sistem kecerdasan buatan berbasis NLP yang mampu memberikan umpan balik pembelajaran adaptif secara otomatis.',
		certificateUrl: 'https://dgip.go.id'
	},
	{
		id: 'vr-biology-media-copyright',
		title: 'Modul Simulasi Interaktif 3D Virtual Reality Anatomi Seluler Biologi',
		hkiType: 'Hak Cipta',
		registrationNumber: 'EC00202387120',
		registrationDate: '20 November 2023',
		creators: ['Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.'],
		description:
			'Hak cipta karya seni gambar dan media digital interaktif VR 3D untuk lingkungan simulasi sains imersif.',
		certificateUrl: 'https://dgip.go.id'
	},
	{
		id: 'essay-scoring-algorithm-patent',
		title: 'Metode dan Sistem Penilaian Esai Akademik Otomatis Berbasis Transformator Kalimat',
		hkiType: 'Paten Sederhana',
		registrationNumber: 'S00202401245',
		registrationDate: '10 Januari 2024',
		creators: ['Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.'],
		description:
			'Inovasi metode perhitung berbasis ekstraksi vektor semantik untuk evaluasi teks karya tulis ilmiah otomatis.',
		certificateUrl: 'https://dgip.go.id'
	}
];

export function getAllHki(): HkiRecord[] {
	return HKI_RECORDS;
}

export function getHkiSchema(item: HkiRecord) {
	return {
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		'@id': `${SITE_CONFIG.url}/portofolio#hki-${item.id}`,
		name: item.title,
		description: item.description,
		datePublished: item.registrationDate,
		author: item.creators.map((name) => ({
			'@type': 'Person',
			name
		}))
	};
}
