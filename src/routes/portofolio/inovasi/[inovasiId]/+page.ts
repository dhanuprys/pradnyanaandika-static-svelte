import { error } from '@sveltejs/kit';
import { getInovasiById } from '$cms';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const inovasi = await getInovasiById(params.inovasiId);

	if (!inovasi) {
		throw error(404, `Inovasi not found: ${params.inovasiId}`);
	}

	return {
		inovasi
	};
};
