<script lang="ts">
	import { SITE_CONFIG } from '$lib/config/site';

	interface Props {
		title?: string;
		description?: string;
		canonical?: string;
		type?: 'website' | 'article' | 'profile' | 'product';
		image?: string;
		author?: string;
		publishedTime?: string;
		modifiedTime?: string;
		keywords?: string[];
		jsonLd?: Record<string, unknown> | Record<string, unknown>[];
	}

	let {
		title = SITE_CONFIG.defaultTitle,
		description = SITE_CONFIG.description,
		canonical,
		type = 'website',
		image = SITE_CONFIG.defaultOgImage,
		author = SITE_CONFIG.author.name,
		publishedTime,
		modifiedTime,
		keywords = SITE_CONFIG.keywords,
		jsonLd
	}: Props = $props();

	let fullTitle = $derived(
		title.includes('Andika Academy') || title.includes('Pradnyana')
			? title
			: `${title} | ${SITE_CONFIG.name}`
	);

	let formattedKeywords = $derived(keywords.join(', '));
	let jsonLdScript = $derived(
		jsonLd ? JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : null
	);
</script>

<svelte:head>
	<!-- Standard Title & Meta -->
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={formattedKeywords} />
	<meta name="author" content={author} />
	<meta name="robots" content="index, follow" />

	<!-- Canonical Link -->
	{#if canonical}
		<link rel="canonical" href={canonical} />
	{/if}

	<!-- Open Graph Meta Tags -->
	<meta property="og:site_name" content={SITE_CONFIG.name} />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	{#if canonical}
		<meta property="og:url" content={canonical} />
	{/if}
	<meta property="og:locale" content="id_ID" />

	<!-- Article specific Open Graph properties -->
	{#if type === 'article'}
		{#if publishedTime}
			<meta property="article:published_time" content={publishedTime} />
		{/if}
		{#if modifiedTime}
			<meta property="article:modified_time" content={modifiedTime} />
		{/if}
		<meta property="article:author" content={author} />
	{/if}

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	<!-- JSON-LD Structured Data Injection -->
	{#if jsonLdScript}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html '<script type="application/ld+json">' + jsonLdScript + '</script>'}
	{/if}
</svelte:head>
