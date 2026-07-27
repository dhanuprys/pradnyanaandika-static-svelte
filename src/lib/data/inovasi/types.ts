export type InovasiStatus = 'Production' | 'Beta' | 'Prototype';

export interface EdtechInnovation {
	id: string;
	title: string;
	status: InovasiStatus;
	techStack: string[];
	description: string;
	image: string;
	demoUrl?: string;
	features: string[];
}
