export type ResearchCategory =
	| 'penelitian-terapan'
	| 'penelitian-dasar'
	| 'pengembangan-media'
	| 'inovasi-teknologi';

export interface ResearchProject {
	id: string;
	title: string;
	category: ResearchCategory;
	categoryLabel: string;
	funding: string;
	year: number;
	description: string;
	shortDescription?: string;
	image: string;
	targetUrl?: string;
	authors?: string[];
	tags?: string[];
	isFeatured?: boolean;
}
