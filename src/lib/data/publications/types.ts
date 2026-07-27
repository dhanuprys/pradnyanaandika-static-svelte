export type PublicationIndexing =
	| 'Scopus Q1'
	| 'Scopus Q2'
	| 'Scopus Q3'
	| 'Scopus Q4'
	| 'Sinta 1'
	| 'Sinta 2';

export interface AcademicPublication {
	id: string;
	title: string;
	journal: string;
	indexing: PublicationIndexing;
	year: number;
	doi?: string;
	targetUrl?: string;
	abstract: string;
	authors: string[];
	citationCount?: number;
	publisher?: string;
	coverImage?: string;
	pdfUrl?: string;
	isFeatured?: boolean;
}
