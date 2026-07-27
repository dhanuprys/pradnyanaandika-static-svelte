<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	import SEO from '$lib/components/seo/SEO.svelte';
	import { getPersonSchema, getOrganizationSchema } from '$lib/config/site';

	let { children } = $props();
	const baseSchemas = [getPersonSchema(), getOrganizationSchema()];
</script>

<SEO jsonLd={baseSchemas} />
<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800">
	<Header />
	<main class="flex grow flex-col">
		{@render children()}
	</main>
	<Footer />
</div>
