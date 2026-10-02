import type { Icon } from '@lucide/svelte';

export interface SiteLink {
	name: string;
	href: string;
}

export interface ServiceLink {
	name: string;
	href: string;
	icon: typeof Icon;
}

export interface SocialLink {
	id: string;
	name: string;
	url: string;
	svg?: string;
}
