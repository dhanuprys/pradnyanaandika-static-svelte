<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { Toaster } from 'svelte-sonner';

	import SEO from '$lib/components/seo/SEO.svelte';
	import { getPersonSchema, getOrganizationSchema } from '$cms/site';

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
	<Toaster
		position="bottom-right"
		expand={false}
		toastOptions={{
			classes: {
				toast:
					'group flex w-full items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] font-sans text-slate-800',
				title: 'text-sm font-bold text-slate-900',
				description: 'text-xs text-slate-500 mt-0.5'
			}
		}}
	/>
</div>
