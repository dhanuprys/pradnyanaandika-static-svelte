<script lang="ts">
	import { Search, ArrowRight, BookOpen, Clock, Send } from '@lucide/svelte';
	import ArticleCard from '$lib/components/ui/ArticleCard.svelte';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { SITE_CONFIG } from '$lib/config/site';
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const categories = [
		{ id: 'all', label: 'Semua Artikel' },
		{ id: 'analisis-data', label: 'Analisis Data' },
		{ id: 'metodologi', label: 'Metodologi Penelitian' },
		{ id: 'publikasi-scopus', label: 'Publikasi Scopus' },
		{ id: 'ai-education', label: 'AI & Education' },
		{ id: 'vr-learning', label: 'VR Learning' }
	];

	let selectedCategory = $state('all');
	let searchQuery = $state('');
	let currentPage = $state(1);
	const ITEMS_PER_PAGE = 6;

	let filteredPosts = $derived(
		data.posts.filter((post) => {
			const matchesCategory =
				selectedCategory === 'all' ||
				post.metadata.category === selectedCategory ||
				(post.metadata.tags && post.metadata.tags.includes(selectedCategory));

			const query = searchQuery.toLowerCase();
			const matchesSearch =
				!query ||
				post.metadata.title.toLowerCase().includes(query) ||
				post.metadata.description.toLowerCase().includes(query);

			return matchesCategory && matchesSearch;
		})
	);

	let featuredPost = $derived.by(() => {
		if (filteredPosts.length === 0) return null;
		const explicitFeatured = filteredPosts.find((p) => p.metadata.isFeatured);
		return explicitFeatured || filteredPosts[0];
	});

	let regularPosts = $derived.by(() => {
		if (!featuredPost) return filteredPosts;
		return filteredPosts.filter((p) => p.slug !== featuredPost.slug);
	});

	let postsToPaginate = $derived.by(() => {
		return featuredPost && regularPosts.length > 0 ? regularPosts : filteredPosts;
	});

	let totalPages = $derived.by(() => {
		return Math.max(1, Math.ceil(postsToPaginate.length / ITEMS_PER_PAGE));
	});

	let displayedPosts = $derived.by(() => {
		const start = (currentPage - 1) * ITEMS_PER_PAGE;
		return postsToPaginate.slice(start, start + ITEMS_PER_PAGE);
	});

	function selectCategory(catId: string) {
		selectedCategory = catId;
		currentPage = 1;
	}

	function handleSearchInput() {
		currentPage = 1;
	}

	function goToPage(p: number) {
		if (p >= 1 && p <= totalPages) {
			currentPage = p;
			if (typeof window !== 'undefined') {
				window.scrollTo({ top: 400, behavior: 'smooth' });
			}
		}
	}
</script>

<SEO
	title="Blog & Artikel Edukasi | Dr. I Ketut Andika Pradnyana"
	description="Kumpulan artikel edukator & panduan praktis Dr. I Ketut Andika Pradnyana seputar AI Education, VR Learning, Strategi Publikasi Scopus, dan Analisis Data."
	canonical="{SITE_CONFIG.url}/blogs"
/>

<div class="bg-slate-50/50 pb-12 text-slate-800">
	<!-- Hero Section (Clean navy hero without top badge) -->
	<section class="relative overflow-hidden bg-primary-950 pt-24 pb-16 lg:pt-32 lg:pb-20">
		<div
			class="absolute inset-0 z-0 opacity-15"
			style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 36px 36px;"
		></div>

		<div class="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<h1 class="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
				Blog & Artikel Edukasi
			</h1>
			<p class="mx-auto mb-8 max-w-2xl text-base text-slate-300 sm:text-lg">
				Temukan artikel terbaru seputar inovasi pendidikan, teknologi pembelajaran, tips penelitian,
				dan tren terkini di dunia akademik.
			</p>

			<!-- Search Bar -->
			<div class="mx-auto max-w-xl">
				<div class="relative">
					<input
						type="text"
						bind:value={searchQuery}
						oninput={handleSearchInput}
						placeholder="Cari topik atau judul artikel..."
						class="w-full rounded-2xl border border-white/20 bg-white/10 py-3.5 pr-12 pl-5 text-base text-white placeholder-slate-400 shadow-xl backdrop-blur-md focus:border-blue-400 focus:outline-none sm:text-sm"
					/>
					<Search class="absolute top-3.5 right-4 h-5 w-5 text-slate-300" />
				</div>
			</div>
		</div>
	</section>

	<!-- Category Filter Bar -->
	<section class="py-8">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div
				class="no-scrollbar flex snap-x items-center gap-2 overflow-x-auto border-b border-gray-200 pb-4 whitespace-nowrap"
			>
				{#each categories as category (category.id)}
					<button
						onclick={() => selectCategory(category.id)}
						class="flex min-h-[44px] shrink-0 snap-start items-center justify-center rounded-xl px-4 py-2.5 text-xs font-bold whitespace-nowrap transition-all sm:text-sm
						{selectedCategory === category.id
							? 'bg-blue-600 text-white shadow-xs'
							: 'border border-gray-200 bg-white text-slate-600 hover:bg-slate-50'}"
					>
						{category.label}
					</button>
				{/each}
			</div>
		</div>
	</section>

	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Featured Post (Compact height card) -->
		{#if featuredPost}
			<section class="mb-12">
				<div
					class="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xs transition-all hover:shadow-md"
				>
					<div class="flex flex-col items-stretch lg:flex-row">
						<!-- Image with controlled height -->
						<div class="relative aspect-[16/9] w-full shrink-0 lg:aspect-auto lg:w-1/2">
							<img
								src={featuredPost.image ||
									'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
								alt={featuredPost.metadata.title}
								class="h-full max-h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:max-h-[340px]"
							/>
							<span
								class="absolute top-3 left-3 rounded-lg bg-blue-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-xs"
							>
								ARTIKEL TERBARU
							</span>
						</div>

						<!-- Content -->
						<div class="flex flex-1 flex-col justify-between p-6 lg:p-7">
							<div>
								<div class="mb-2 flex items-center gap-3 text-xs text-slate-500">
									<span class="font-bold text-blue-600"
										>{featuredPost.metadata.tags?.[0] || 'Edukasi'}</span
									>
									<span>•</span>
									<span class="flex items-center gap-1">
										<Clock class="h-3.5 w-3.5" /> 5 min baca
									</span>
									<span>•</span>
									<span
										>{new Date(featuredPost.metadata.date).toLocaleDateString('id-ID', {
											day: 'numeric',
											month: 'short',
											year: 'numeric'
										})}</span
									>
								</div>

								<h2
									class="mb-3 text-xl leading-snug font-bold text-slate-900 transition-colors group-hover:text-blue-600 sm:text-2xl"
								>
									<a href={resolve(`/blogs/${featuredPost.slug}`)}>
										{featuredPost.metadata.title}
									</a>
								</h2>

								<p class="mb-4 line-clamp-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
									{featuredPost.metadata.description ||
										'Simak ulasan mendalam mengenai perkembangan teknologi terbaru serta implementasi praktisnya untuk efektivitas pembelajaran.'}
								</p>
							</div>

							<div class="flex items-center justify-between border-t border-gray-100 pt-3">
								<div class="flex items-center gap-2">
									<div
										class="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-[11px] font-bold text-blue-700"
									>
										DA
									</div>
									<span class="text-xs font-bold text-slate-800">Dr. Andika</span>
								</div>

								<a
									href={resolve(`/blogs/${featuredPost.slug}`)}
									class="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700"
								>
									Baca Artikel <ArrowRight
										class="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		{/if}

		<!-- Articles Grid -->
		<section class="mb-12">
			<h2 class="mb-6 text-xl font-bold text-slate-900">Artikel Lainnya</h2>

			{#if filteredPosts.length === 0}
				<div
					class="rounded-2xl border border-gray-100 bg-white py-16 text-center text-slate-500 shadow-xs"
				>
					<BookOpen class="mx-auto mb-3 h-10 w-10 text-slate-300" />
					<p class="text-base font-semibold text-slate-700">Belum ada artikel yang sesuai.</p>
					<p class="mt-1 text-xs text-slate-400">
						Coba gunakan kata kunci pencarian atau kategori lain.
					</p>
				</div>
			{:else}
				<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each displayedPosts as post (post.slug)}
						<ArticleCard
							image={post.image ||
								'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
							category={post.metadata.tags?.[0] || 'Edukasi'}
							date={new Date(post.metadata.date).toLocaleDateString('id-ID', {
								day: 'numeric',
								month: 'long',
								year: 'numeric'
							})}
							title={post.metadata.title}
							href={resolve(`/blogs/${post.slug}`)}
						/>
					{/each}
				</div>
			{/if}
		</section>

		<!-- Pagination Bar -->
		{#if totalPages > 1}
			<section class="mb-12 flex justify-center">
				<nav class="flex items-center gap-2">
					<button
						onclick={() => goToPage(currentPage - 1)}
						disabled={currentPage === 1}
						class="flex min-h-[44px] items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white"
					>
						Sebelumnya
					</button>

					{#each Array.from({ length: totalPages }, (_, i) => i + 1) as pageNum (pageNum)}
						<button
							onclick={() => goToPage(pageNum)}
							class="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl px-4 py-2 text-xs font-bold transition-all
							{currentPage === pageNum
								? 'bg-blue-600 text-white shadow-md'
								: 'border border-gray-200 bg-white text-slate-700 hover:bg-slate-50'}"
						>
							{pageNum}
						</button>
					{/each}

					<button
						onclick={() => goToPage(currentPage + 1)}
						disabled={currentPage === totalPages}
						class="flex min-h-[44px] items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white"
					>
						Selanjutnya
					</button>
				</nav>
			</section>
		{/if}

		<!-- CTA Banner -->
		<section>
			<div
				class="flex flex-col items-center justify-between gap-6 rounded-2xl bg-blue-600 p-6 text-white shadow-md sm:flex-row sm:p-8"
			>
				<div>
					<h3 class="mb-1 text-lg font-bold text-white sm:text-xl">
						Punya topik menarik untuk dibahas?
					</h3>
					<p class="text-xs text-blue-100 sm:text-sm">
						Kirimkan ide atau tulisan Anda untuk dipublikasikan di blog kami.
					</p>
				</div>

				<a
					href={resolve('/contact')}
					class="flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-blue-600 shadow-xs transition-colors hover:bg-blue-50 sm:text-sm"
				>
					Kirim Tulisan <Send class="h-4 w-4" />
				</a>
			</div>
		</section>
	</div>
</div>
