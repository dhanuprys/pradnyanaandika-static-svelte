<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { Toaster } from 'svelte-sonner';

	import SEO from '$lib/components/seo/SEO.svelte';
	import { getPersonSchema, getOrganizationSchema } from '$lib/config/site';

	import ScrollToTop from '$lib/components/ui/ScrollToTop.svelte';

	let { children } = $props();
	const baseSchemas = [getPersonSchema(), getOrganizationSchema()];
</script>

<SEO jsonLd={baseSchemas} />
<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div
	class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-slate-50 font-sans text-slate-800"
>
	<Header />
	<main class="flex w-full grow flex-col">
		{@render children()}
	</main>
	<Footer />
	<ScrollToTop />
	<Toaster position="top-right" richColors />
</div>
