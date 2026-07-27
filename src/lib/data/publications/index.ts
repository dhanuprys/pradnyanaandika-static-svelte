import type { AcademicPublication } from './types';
import { SITE_CONFIG } from '$lib/config/site';

export const PUBLICATIONS: AcademicPublication[] = [
	{
		id: 'ai-learning-assistant-systematic-review',
		title:
			"The Impact of AI-Based Learning Assistant on Students' Learning Outcomes: A Systematic Review",
		journal: 'Computers & Education',
		indexing: 'Scopus Q1',
		year: 2024,
		doi: '10.1016/j.compedu.2024.104921',
		targetUrl: 'https://doi.org/10.1016/j.compedu.2024.104921',
		abstract:
			'Systematic analysis of conversational AI and automated feedback algorithms implemented in higher education classrooms across 45 empirical studies.',
		authors: [
			'Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.',
			'Prof. Dr. I Made Candiasa',
			'Dr. Gede Rasben Dantes'
		],
		citationCount: 42,
		publisher: 'Elsevier',
		isFeatured: true
	},
	{
		id: 'vr-immersive-biology-education',
		title:
			'Virtual Reality Immersive Environment for Cellular Biology: Enhancing Spatial Visualization and Retention',
		journal: 'IEEE Transactions on Learning Technologies',
		indexing: 'Scopus Q1',
		year: 2023,
		doi: '10.1109/TLT.2023.3289104',
		targetUrl: 'https://doi.org/10.1109/TLT.2023.3289104',
		abstract:
			'Empirical study testing 3D VR simulation environments for high school biology subjects, demonstrating significant gains in post-test conceptual retention.',
		authors: ['Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.', 'Dr. I Gede Partha Sindu'],
		citationCount: 38,
		publisher: 'IEEE',
		isFeatured: true
	},
	{
		id: 'learning-analytics-adaptive-model',
		title:
			'Adaptive Learning Model Based on Real-Time Learning Analytics in Higher Education Blended Environments',
		journal: 'International Journal of Educational Technology in Higher Education',
		indexing: 'Scopus Q1',
		year: 2023,
		doi: '10.1186/s41239-023-00412-x',
		targetUrl: 'https://doi.org/10.1186/s41239-023-00412-x',
		abstract:
			'Design and implementation of dynamic dashboard analytics tracking student engagement indicators across Moodle learning management systems.',
		authors: ['Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.', 'Putu Hendra Suputra'],
		citationCount: 29,
		publisher: 'SpringerOpen',
		isFeatured: true
	},
	{
		id: 'teknopedagogi-ai-teacher-training',
		title:
			'Desain Model Pelatihan Teknopedagogi Berbasis AI untuk Meningkatkan Kompetensi Digital Guru di Daerah 3T',
		journal: 'Jurnal Teknologi Pendidikan Indonesia',
		indexing: 'Sinta 2',
		year: 2024,
		doi: '10.23887/jtpi.v12i1.65821',
		targetUrl: 'https://doi.org/10.23887/jtpi.v12i1.65821',
		abstract:
			'Studi pengembangan kerangka pelatihan pendidik abad 21 menggunakan teknologi micro-learning terdistribusi pada wilayah terpencil.',
		authors: ['Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.'],
		citationCount: 15,
		publisher: 'Undiksha Press',
		isFeatured: false
	},
	{
		id: 'automated-essay-scoring-nlp',
		title:
			'Automated Indonesian Essay Scoring System Using Sentence Transformers and Semantic Similarity Metrics',
		journal: 'Journal of Educational Computing Research',
		indexing: 'Scopus Q2',
		year: 2022,
		doi: '10.1177/0735633122110482',
		targetUrl: 'https://doi.org/10.1177/0735633122110482',
		abstract:
			'Evaluation of sentence embedding transformers for semantic scoring of Indonesian academic essays, showing high correlation with human expert raters.',
		authors: ['Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.'],
		citationCount: 21,
		publisher: 'SAGE Publications',
		isFeatured: false
	}
];

/** Return all academic publications */
export function getAllPublications(): AcademicPublication[] {
	return PUBLICATIONS;
}

/** Return featured publications for homepage/showcase */
export function getFeaturedPublications(): AcademicPublication[] {
	return PUBLICATIONS.filter((item) => item.isFeatured);
}

/** Find a specific publication by ID */
export function getPublicationById(id: string): AcademicPublication | undefined {
	return PUBLICATIONS.find((item) => item.id === id);
}

/** Generate JSON-LD ScholarlyArticle Schema for SEO */
export function getPublicationSchema(item: AcademicPublication) {
	return {
		'@context': 'https://schema.org',
		'@type': 'ScholarlyArticle',
		'@id': `${SITE_CONFIG.url}/portofolio#pub-${item.id}`,
		headline: item.title,
		name: item.title,
		abstract: item.abstract,
		datePublished: `${item.year}-01-01`,
		sameAs: item.doi ? `https://doi.org/${item.doi}` : item.targetUrl,
		url: item.targetUrl || `${SITE_CONFIG.url}/portofolio`,
		publication: {
			'@type': 'Periodical',
			name: item.journal
		},
		publisher: item.publisher
			? {
					'@type': 'Organization',
					name: item.publisher
				}
			: undefined,
		author: item.authors.map((authorName) => ({
			'@type': 'Person',
			name: authorName
		}))
	};
}
