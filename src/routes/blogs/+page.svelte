<script lang="ts">
	import ArticleCard from '$lib/components/ui/ArticleCard.svelte';
	import CtaBanner from '$lib/components/ui/CtaBanner.svelte';
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Blog - Andika Academy</title>
</svelte:head>

<!-- Blog Hero -->
<section class="relative overflow-hidden bg-primary-950 pt-16 pb-24 text-white">
	<div
		class="absolute inset-0 z-0 opacity-10"
		style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px;"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h1 class="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">Blog & Artikel Edukasi</h1>
		<p class="mx-auto mb-8 max-w-2xl text-lg text-primary-200">
			Temukan artikel terbaru seputar inovasi pendidikan, teknologi pembelajaran, tips penelitian,
			dan tren terkini di dunia akademik.
		</p>
	</div>
</section>

<!-- Blog Grid -->
<section class="bg-slate-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#if data.posts.length === 0}
				<div class="col-span-full py-12 text-center text-gray-500">
					<p>Belum ada artikel.</p>
				</div>
			{:else}
				{#each data.posts as post (post.slug)}
					<ArticleCard
						image={post.image || ''}
						category={post.metadata.tags[0]}
						date={new Date(post.metadata.date).toLocaleDateString('id-ID', {
							day: 'numeric',
							month: 'long',
							year: 'numeric'
						})}
						title={post.metadata.title}
						href={resolve(`/blogs/${post.slug}`)}
					/>
				{/each}
			{/if}
		</div>

		<div class="mt-16 flex justify-center">
			<nav class="flex items-center gap-2">
				<button
					class="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-slate-500 hover:bg-gray-50 disabled:opacity-50"
					disabled>Sebelumnya</button
				>
				<button
					class="rounded-lg border border-primary-600 bg-primary-600 px-4 py-2 text-sm font-medium text-white"
					>1</button
				>
				<button
					class="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50"
					>2</button
				>
				<button
					class="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50"
					>3</button
				>
				<button
					class="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-slate-500 hover:bg-gray-50"
					>Selanjutnya</button
				>
			</nav>
		</div>
	</div>
</section>

<!-- Call to action -->
<section class="py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<CtaBanner
			title="Punya topik menarik untuk dibahas?"
			description="Kirimkan ide atau tulisan Anda untuk dipublikasikan di blog kami."
			buttonText="Kirim Tulisan"
			buttonHref="/contact"
		/>
	</div>
</section>
