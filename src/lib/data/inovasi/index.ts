import type { EdtechInnovation } from './types';
import { SITE_CONFIG } from '$lib/config/site';

export const INNOVATIONS: EdtechInnovation[] = [
	{
		id: 'kodibot-web-platform',
		title: 'KodiBot AI - Conversational Tutor Suite',
		status: 'Production',
		techStack: ['Svelte 5', 'Python Fast API', 'OpenAI API', 'TailwindCSS'],
		description:
			'Platform web berbasis kecerdasan buatan yang menyediakan tutoring interaktif 24/7 dan umpan balik otomatis untuk tugas akademik.',
		image:
			'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
		demoUrl: 'https://wa.me/6281338005074',
		features: [
			'Umpan balik naskah real-time',
			'Integrasi Rubrik Akademik Scopus',
			'Multi-Bahasa (Indonesia & Inggris)'
		]
	},
	{
		id: 'vr-biosim-lab',
		title: 'VR BioSim - Lab Biologi Virtual Imersif',
		status: 'Beta',
		techStack: ['WebXR', 'Three.js', 'Unity 3D', 'WebAssembly'],
		description:
			'Simulasi laboratorium biologi virtual yang memungkinkan mahasiswa melakukan eksperimen seluler tanpa perangkat keras laboratorium fisik yang mahal.',
		image:
			'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
		demoUrl: 'https://wa.me/6281338005074',
		features: [
			'Interaksi Objek 3D 360 Derajat',
			'Kuis Pembelajaran Berbasis Gamelan',
			'Dukungan Headset VR Mobile'
		]
	},
	{
		id: 'scopus-article-analyzer',
		title: 'Scopus Draft Reviewer & Grammar Assessment',
		status: 'Prototype',
		techStack: ['Python NLP', 'Transformers', 'SvelteKit'],
		description:
			'Perangkat lunak analisis kualitas naskah ilmiah untuk mendeteksi keselarasan struktur abstrak, sitasi, dan kaidah kebahasaan Scopus.',
		image:
			'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
		demoUrl: 'https://wa.me/6281338005074',
		features: [
			'Deteksi Kelengkapan Bab Otomatis',
			'Rekomendasi Sitasi Jurnal Relevan',
			'Export Laporan Penilaian PDF'
		]
	}
];

export function getAllInovasi(): EdtechInnovation[] {
	return INNOVATIONS;
}

export function getInovasiSchema(item: EdtechInnovation) {
	return {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		'@id': `${SITE_CONFIG.url}/portofolio#inovasi-${item.id}`,
		name: item.title,
		description: item.description,
		applicationCategory: 'EducationalApplication',
		operatingSystem: 'Web Browser',
		author: {
			'@type': 'Person',
			name: SITE_CONFIG.author.name
		}
	};
}
