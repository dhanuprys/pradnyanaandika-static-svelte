import type { EdtechInnovation, EdtechInnovationWithContent, InovasiMdsvexModule } from './types';
import { extractSlug, createSchemaAuthor } from '../utils';
import { SITE_CONFIG } from '$cms/site';

/** Get all EdTech innovations. */
export function getAllInovasi(): EdtechInnovation[] {
	const modules = import.meta.glob<InovasiMdsvexModule>('/src/cms/inovasi/**/page.svx', {
		eager: true
	});

	const innovations: EdtechInnovation[] = [];

	for (const [path, module] of Object.entries(modules)) {
		const { metadata } = module;
		const slug = extractSlug(path);

		innovations.push({
			id: slug,
			...metadata
		});
	}

	return innovations;
}

/** Get a single innovation by its slug, including rendered content. */
export async function getInovasiById(id: string): Promise<EdtechInnovationWithContent> {
	const modules = import.meta.glob<InovasiMdsvexModule>('/src/cms/inovasi/**/page.svx');

	const matchingEntry = Object.entries(modules).find(([path]) => extractSlug(path) === id);

	if (!matchingEntry) {
		throw new Error(`Innovation not found: ${id}`);
	}

	const [, loader] = matchingEntry;
	const module = await loader();

	return {
		id,
		...module.metadata,
		content: module.default
	};
}

/** Generate JSON-LD SoftwareApplication Schema for SEO. */
export function getInovasiSchema(item: EdtechInnovation) {
	return {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		'@id': `${SITE_CONFIG.url}/portofolio#inovasi-${item.id}`,
		name: item.title,
		description: item.description,
		applicationCategory: 'EducationalApplication',
		operatingSystem: 'Web Browser',
		author: createSchemaAuthor()
	};
}
