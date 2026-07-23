<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * BlogLayout is used as the default mdsvex layout.
	 * mdsvex passes all frontmatter fields as individual props.
	 */
	let {
		title,
		description,
		date,
		updated,
		author,
		tags = [],
		draft = false,
		seoTitle,
		seoDescription,
		children
	}: {
		title: string;
		description: string;
		date: string;
		updated?: string;
		author: string;
		tags?: string[];
		draft?: boolean;
		seoTitle?: string;
		seoDescription?: string;
		children: Snippet;
	} = $props();

	const formattedDate = $derived(
		new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);

	const formattedUpdated = $derived(
		updated
			? new Date(updated).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})
			: null
	);

	const pageTitle = $derived(seoTitle ?? title);
	const pageDescription = $derived(seoDescription ?? description);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />

	<!-- Open Graph -->
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:type" content="article" />

	<!-- Article metadata -->
	<meta property="article:published_time" content={date} />
	{#if updated}
		<meta property="article:modified_time" content={updated} />
	{/if}
	<meta property="article:author" content={author} />
	{#each tags as tag (tag)}
		<meta property="article:tag" content={tag} />
	{/each}
</svelte:head>

<article class="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
	<!-- Draft indicator -->
	{#if draft}
		<div
			class="mb-6 rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400"
		>
			⚠️ This post is a draft and will not be visible in production.
		</div>
	{/if}

	<!-- Article header -->
	<header class="mb-8">
		<h1 class="text-3xl leading-tight font-bold tracking-tight text-gray-900 sm:text-4xl">
			{title}
		</h1>

		<div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
			<span>{author}</span>
			<span>·</span>
			<time datetime={date}>{formattedDate}</time>
			{#if formattedUpdated}
				<span>·</span>
				<span>Updated {formattedUpdated}</span>
			{/if}
		</div>

		{#if tags.length > 0}
			<div class="mt-3 flex flex-wrap gap-2">
				{#each tags as tag (tag)}
					<span
						class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
					>
						{tag}
					</span>
				{/each}
			</div>
		{/if}
	</header>

	<!-- Article content with Tailwind Typography prose styling -->
	<div class="prose max-w-none prose-gray">
		{@render children()}
	</div>
</article>
