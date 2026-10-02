import type { Icon } from '@lucide/svelte';

export interface BadgeConfig {
	name: string;
	url?: string;
	label?: string;
	labelBg?: string;
	labelColor?: string;
	icon?: typeof Icon;
	svg?: string;
}

import { SITE_CONFIG } from '$cms/site';

export const profileConfig = {
	name: SITE_CONFIG.author.name,
	role: SITE_CONFIG.author.role,
	description: SITE_CONFIG.description,
	image: SITE_CONFIG.author.avatar,
	badges: [
		{
			name: 'Google Scholar',
			url: 'https://scholar.google.com/citations?user=Vgma1ukAAAAJ&hl=id',
			svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Google Scholar</title><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>'
		},
		{
			name: 'SINTA',
			url: 'https://sinta.kemdiktisaintek.go.id/authors/profile/6942849',
			svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>SINTA</title><path d="M12 1.25l3.22 6.53 7.21 1.05-5.21 5.08 1.23 7.18L12 17.65l-6.45 3.39 1.23-7.18-5.21-5.08 7.21-1.05z"/></svg>'
		},
		{
			name: 'ORCID',
			url: 'https://orcid.org/0000-0002-9132-7871',
			svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#A6CE39"><title>ORCID</title><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/></svg>'
		}
	] as BadgeConfig[]
};
