export const SITE_CONFIG = {
	name: 'Andika Academy',
	shortName: 'Andika Academy',
	url: 'https://pradnya.com', // Replace with production domain if different
	defaultTitle: 'Dr. I Ketut Andika Pradnyana | Andika Academy',
	titleTemplate: '%s - Andika Academy',
	description:
		'Situs resmi & akademi Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd. Bimbingan & edukasi seputar AI in Education, VR Learning, Publikasi Scopus, Metodologi Penelitian, dan Analisis Data.',
	keywords: [
		'I Ketut Andika Pradnyana',
		'Dr. I Ketut Andika Pradnyana',
		'Ketut Andika',
		'Andika Pradnyana',
		'Andika Academy',
		'AI in Education',
		'VR Learning',
		'Publikasi Scopus',
		'Metodologi Penelitian',
		'Analisis Data',
		'Dr. Andika'
	],
	author: {
		name: 'Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.',
		shortName: 'I Ketut Andika Pradnyana',
		role: 'Dosen, Peneliti & Edukator Teknopedagogi',
		jobTitle: 'Lecturer & Researcher in Educational Technology',
		avatar: 'https://pradnya.com/images/andika.png',
		url: 'https://pradnya.com/about',
		sameAs: [
			'https://scholar.google.com',
			'https://scopus.com',
			'https://linkedin.com',
			'https://youtube.com'
		]
	},
	publisher: {
		name: 'Andika Academy',
		logo: 'https://pradnya.com/favicon.svg'
	},
	contact: {
		phone: '+62 813-3800-5074',
		whatsapp: '6281338005074',
		whatsappUrl: 'https://wa.me/6281338005074',
		email: 'info@andikaacademy.id'
	},
	defaultOgImage: 'https://pradnya.com/images/andika.png'
};

/**
 * Returns canonical Person JSON-LD object for Dr. I Ketut Andika Pradnyana
 */
export function getPersonSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		'@id': `${SITE_CONFIG.url}/about#person`,
		name: SITE_CONFIG.author.name,
		alternateName: [
			'I Ketut Andika Pradnyana',
			'Dr. I Ketut Andika Pradnyana',
			'Ketut Andika',
			'Andika Pradnyana',
			'Dr. Andika'
		],
		url: SITE_CONFIG.author.url,
		image: SITE_CONFIG.author.avatar,
		jobTitle: SITE_CONFIG.author.jobTitle,
		description: SITE_CONFIG.description,
		knowsAbout: [
			'Educational Technology',
			'Artificial Intelligence in Education',
			'Virtual Reality Learning',
			'Scopus Academic Publishing',
			'Research Methodology',
			'Data Analysis'
		],
		sameAs: SITE_CONFIG.author.sameAs
	};
}

/**
 * Returns WebSite & Organization JSON-LD object
 */
export function getOrganizationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'EducationalOrganization',
		'@id': `${SITE_CONFIG.url}/#organization`,
		name: SITE_CONFIG.name,
		url: SITE_CONFIG.url,
		logo: SITE_CONFIG.publisher.logo,
		founder: {
			'@type': 'Person',
			name: SITE_CONFIG.author.name
		},
		description: SITE_CONFIG.description
	};
}
