import type { Component } from 'svelte';

export type InovasiStatus = 'Production' | 'Beta' | 'Prototype';

export interface InovasiFrontmatter {
	title: string;
	status: InovasiStatus;
	techStack: string[];
	description: string;
	image: string;
	demoUrl?: string;
	features: string[];
}

export interface EdtechInnovation extends InovasiFrontmatter {
	id: string; // The slug
}

export interface EdtechInnovationWithContent extends EdtechInnovation {
	content: Component;
}

export interface InovasiMdsvexModule {
	default: Component;
	metadata: InovasiFrontmatter;
}
