import type { ResearchProject } from './types';
import { SITE_CONFIG } from '$lib/config/site';

export const RESEARCH_PROJECTS: ResearchProject[] = [
	{
		id: 'kodibot-ai',
		title: 'Pengembangan KodiBot AI sebagai Asisten Cerdas untuk Pembelajaran Adaptif',
		category: 'penelitian-terapan',
		categoryLabel: 'Penelitian Terapan',
		funding: 'Kemendikbudristek (2024)',
		year: 2024,
		description:
			'Inovasi asisten kecerdasan buatan berbasis Natural Language Processing (NLP) yang dirancang khusus untuk memandu mahasiswa dan guru dalam interaksi pembelajaran terpersonalisasi.',
		shortDescription: 'Asisten kecerdasan buatan berbasis NLP untuk pembelajaran terpersonalisasi.',
		image:
			'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
		targetUrl: 'https://scholar.google.com',
		authors: ['Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.'],
		tags: ['AI', 'KodiBot', 'Learning Analytics', 'NLP'],
		isFeatured: true
	},
	{
		id: 'vr-biologi',
		title: 'Pengembangan Media Pembelajaran Biologi Berbasis Virtual Reality (VR) Imersif',
		category: 'pengembangan-media',
		categoryLabel: 'Pengembangan Media',
		funding: 'DRTPM (2023)',
		year: 2023,
		description:
			'Media pembelajaran interaktif 3D Virtual Reality untuk mensimulasikan struktur seluler dan anatomi biologis dalam lingkungan belajar 3D imersif.',
		shortDescription: 'Media interaktif VR 3D imersif untuk simulasi laboratorium dan struktur sel.',
		image:
			'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
		targetUrl: 'https://scholar.google.com',
		authors: ['Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.'],
		tags: ['VR', 'Virtual Reality', 'Biologi', 'Imersif'],
		isFeatured: true
	},
	{
		id: 'learning-analytics',
		title: 'Model Pembelajaran Adaptif Berbasis Learning Analytics untuk Meningkatkan Hasil Belajar',
		category: 'penelitian-dasar',
		categoryLabel: 'Penelitian Dasar',
		funding: 'Internal Undiksha (2022)',
		year: 2022,
		description:
			'Riset pemodelan analitik data pembelajaran (Learning Analytics) untuk memprediksi tingkat pemahaman siswa secara real-time dan memberikan rekomendasi materi.',
		shortDescription: 'Pemodelan analitik data pembelajaran untuk memprediksi tingkat pemahaman siswa.',
		image:
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
		targetUrl: 'https://scholar.google.com',
		authors: ['Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.'],
		tags: ['Learning Analytics', 'Adaptif', 'Big Data'],
		isFeatured: true
	},
	{
		id: 'ai-assessment-system',
		title: 'Sistem Evaluasi Otomatis Esai Akademik Menggunakan Model Bahasa Terdistribusi',
		category: 'inovasi-teknologi',
		categoryLabel: 'Inovasi Teknologi',
		funding: 'Hibah Penelitian Kebangsaan (2024)',
		year: 2024,
		description:
			'Pengembangan algoritma penilaian esai otomatis berakurasi tinggi untuk mempercepat umpan balik asesmen mahasiswa pada kelas berkapasitas besar.',
		shortDescription: 'Sistem penilaian esai akademik otomatis berbasis Large Language Model.',
		image:
			'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
		targetUrl: 'https://scopus.com',
		authors: ['Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.'],
		tags: ['AI Assessment', 'NLP', 'LLM', 'Automated Grading'],
		isFeatured: false
	},
	{
		id: 'microlearning-platform',
		title: 'Pengembangan Framework Micro-Learning Teknopedagogi bagi Pendidik Abad 21',
		category: 'pengembangan-media',
		categoryLabel: 'Pengembangan Media',
		funding: 'Pengabdian & Riset Terapan (2023)',
		year: 2023,
		description:
			'Desain kerangka kerja modul mikro (micro-learning) berbasis mobile untuk meningkatkan efisiensi pelatihan guru terpencil.',
		shortDescription: 'Framework modul micro-learning mobile untuk efisiensi pelatihan pendidik.',
		image:
			'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
		targetUrl: 'https://scholar.google.com',
		authors: ['Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.'],
		tags: ['Microlearning', 'Teknopedagogi', 'Mobile Learning'],
		isFeatured: false
	}
];

/** Return all research projects */
export function getAllResearch(): ResearchProject[] {
	return RESEARCH_PROJECTS;
}

/** Return featured research projects for homepage/showcase */
export function getFeaturedResearch(): ResearchProject[] {
	return RESEARCH_PROJECTS.filter((item) => item.isFeatured);
}

/** Filter research projects by category */
export function getResearchByCategory(category: string): ResearchProject[] {
	if (!category || category === 'all') return RESEARCH_PROJECTS;
	return RESEARCH_PROJECTS.filter(
		(item) => item.category === category || item.tags?.includes(category)
	);
}

/** Find a specific research project by ID */
export function getResearchById(id: string): ResearchProject | undefined {
	return RESEARCH_PROJECTS.find((item) => item.id === id);
}

/** Generate JSON-LD ScholarlyArticle / ResearchProject Schema for SEO */
export function getResearchSchema(item: ResearchProject) {
	return {
		'@context': 'https://schema.org',
		'@type': 'ResearchProject',
		'@id': `${SITE_CONFIG.url}/portofolio#${item.id}`,
		name: item.title,
		description: item.description,
		image: item.image,
		url: item.targetUrl || `${SITE_CONFIG.url}/portofolio`,
		funder: {
			'@type': 'Organization',
			name: item.funding
		},
		author: {
			'@type': 'Person',
			name: SITE_CONFIG.author.name
		}
	};
}
