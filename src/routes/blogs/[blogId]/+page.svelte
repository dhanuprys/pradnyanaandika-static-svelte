<script lang="ts">
	import type { Component } from 'svelte';
	import {
		ArrowLeft,
		ArrowRight,
		Calendar,
		Clock,
		Copy,
		Check,
		User,
		BookOpen,
		ShoppingBag
	} from '@lucide/svelte';
	import { resolve } from '$app/paths';

	import SEO from '$lib/components/seo/SEO.svelte';
	import { SITE_CONFIG } from '$lib/config/site';

	import { onMount } from 'svelte';

	let { data } = $props();

	const Content: Component = $derived(data.content);

	let copied = $state(false);
	let scrollProgress = $state(0);

	function updateScrollProgress() {
		if (typeof window !== 'undefined') {
			const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
			if (totalHeight > 0) {
				scrollProgress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
			}
		}
	}

	onMount(() => {
		window.addEventListener('scroll', updateScrollProgress);
		return () => window.removeEventListener('scroll', updateScrollProgress);
	});

	function copyToClipboard() {
		if (typeof window !== 'undefined') {
			navigator.clipboard.writeText(window.location.href);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		}
	}

	const articleSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		'@id': `${SITE_CONFIG.url}/blogs/${data.slug}#article`,
		headline: data.metadata?.title,
		description: data.metadata?.description,
		datePublished: data.metadata?.date,
		dateModified: data.metadata?.updated ?? data.metadata?.date,
		image: data.image || data.metadata?.ogImage || SITE_CONFIG.defaultOgImage,
		author: {
			'@type': 'Person',
			name: SITE_CONFIG.author.name,
			url: `${SITE_CONFIG.url}/about`
		},
		publisher: {
			'@type': 'Organization',
			name: SITE_CONFIG.name,
			url: SITE_CONFIG.url,
			logo: {
				'@type': 'ImageObject',
				url: SITE_CONFIG.publisher.logo
			}
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `${SITE_CONFIG.url}/blogs/${data.slug}`
		}
	});
</script>

<SEO
	title="{data.metadata?.title || 'Artikel'} | Dr. I Ketut Andika Pradnyana"
	description={data.metadata?.description || SITE_CONFIG.description}
	canonical="{SITE_CONFIG.url}/blogs/{data.slug}"
	type="article"
	image={data.image || data.metadata?.ogImage || SITE_CONFIG.defaultOgImage}
	publishedTime={data.metadata?.date}
	modifiedTime={data.metadata?.updated}
	keywords={data.metadata?.tags
		? [...SITE_CONFIG.keywords, ...data.metadata.tags]
		: SITE_CONFIG.keywords}
	jsonLd={articleSchema}
/>

<!-- Reading Progress Bar -->
<div class="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-200/20 pointer-events-none">
	<div
		class="h-full bg-blue-500 transition-all duration-150 ease-out shadow-sm"
		style="width: {scrollProgress}%;"
	></div>
</div>

<div class="bg-slate-50/50 pb-16 text-slate-800">
	<!-- Top Hero Header (Standard max-w-7xl container width) -->
	<section class="relative overflow-hidden bg-primary-950 pt-24 pb-20 text-white lg:pt-32 lg:pb-24">
		<div
			class="absolute inset-0 z-0 opacity-15"
			style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 36px 36px;"
		></div>

		<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<!-- Integrated Breadcrumb & Back Navigation -->
			<div class="mb-6 flex items-center justify-between gap-4">
				<nav class="flex items-center gap-2 text-xs text-slate-300">
					<a
						href={resolve('/blogs')}
						class="inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-xs transition-colors hover:bg-white/20"
					>
						<ArrowLeft class="h-4 w-4 text-blue-400" /> Kembali ke Blog
					</a>
					<span class="text-slate-500">/</span>
					<span class="hidden max-w-[320px] truncate font-medium text-slate-400 sm:inline"
						>{data.metadata?.title}</span
					>
				</nav>

				<a href={resolve('/')} class="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
					Beranda
				</a>
			</div>

			<!-- Tag Badge -->
			{#if data.metadata?.tags?.[0]}
				<span
					class="mb-4 inline-block rounded-lg bg-blue-600 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-xs"
				>
					{data.metadata.tags[0]}
				</span>
			{/if}

			<!-- Title -->
			<h1
				class="mb-6 max-w-4xl text-2xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
			>
				{data.metadata?.title}
			</h1>

			<!-- Article Meta Info Row -->
			<div
				class="flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs text-slate-300"
			>
				{#if data.metadata?.date}
					<div class="flex items-center gap-2">
						<Calendar class="h-4 w-4 text-blue-400" />
						<span>
							{new Date(data.metadata.date).toLocaleDateString('id-ID', {
								day: 'numeric',
								month: 'long',
								year: 'numeric'
							})}
						</span>
					</div>
				{/if}

				<div class="flex items-center gap-2">
					<Clock class="h-4 w-4 text-blue-400" />
					<span>{data.readingTime || '5 min baca'}</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Main Article Container (Standard max-w-7xl) -->
	<div class="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
		<!-- Cover Image -->
		{#if data.image}
			<div
				class="mb-8 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl sm:mb-12 sm:rounded-3xl"
			>
				<img
					src={data.image}
					alt={data.metadata?.title}
					class="h-auto max-h-[260px] w-full object-cover sm:max-h-[380px] md:max-h-[480px]"
				/>
			</div>
		{/if}

		<!-- Grid: Main Content + Sidebar -->
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-12">
			<!-- Main Article Body (8 cols) -->
			<main class="lg:col-span-8">
				<div class="rounded-none border-0 bg-transparent p-0 shadow-none sm:rounded-3xl sm:border sm:border-gray-100 sm:bg-white sm:p-10 sm:shadow-xs">
					<!-- Article Description / Lead Paragraph -->
					{#if data.metadata?.description}
						<p
							class="mb-8 rounded-r-xl border-l-4 border-blue-600 bg-blue-50/50 py-1 pl-4 text-base leading-relaxed font-medium text-slate-700 italic sm:text-lg"
						>
							{data.metadata.description}
						</p>
					{/if}

					<!-- Article Body Prose -->
					<div
						class="prose prose-lg max-w-none prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600 prose-img:rounded-2xl"
					>
						<Content />
					</div>

					<!-- Share & Article Navigation Section -->
					<div
						class="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6"
					>
						<a
							href={resolve('/blogs')}
							class="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-extrabold text-slate-800 transition-colors hover:bg-blue-600 hover:text-white"
						>
							<ArrowLeft class="h-4 w-4" /> Kembali ke Daftar Artikel
						</a>

						<button
							onclick={copyToClipboard}
							class="flex items-center gap-1.5 rounded-xl border border-gray-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100"
						>
							{#if copied}
								<Check class="h-4 w-4 text-emerald-600" /> Link Disalin!
							{:else}
								<Copy class="h-4 w-4" /> Salin Link Artikel
							{/if}
						</button>
					</div>
				</div>
			</main>

			<!-- Sidebar Widgets (4 cols) -->
			<aside class="space-y-8 lg:col-span-4">
				<!-- Author Widget (Single non-redundant author block) -->
				<div class="rounded-3xl border border-gray-100 bg-white p-6 shadow-xs">
					<h3
						class="mb-4 border-b border-gray-100 pb-3 text-sm font-bold tracking-wider text-slate-900 uppercase"
					>
						Penulis Artikel
					</h3>
					<div class="mb-4 flex items-center gap-4">
						<img
							src={resolve('/images/andika.png')}
							alt="Dr. Andika"
							class="h-14 w-14 rounded-2xl object-cover shadow-sm"
						/>
						<div>
							<div class="text-sm font-bold text-slate-900">Dr. I Ketut Andika Pradnyana</div>
							<div class="text-xs text-slate-500">Peneliti & Dosen</div>
						</div>
					</div>
					<p class="mb-4 text-xs leading-relaxed text-slate-600">
						Dosen dan peneliti di bidang teknologi pendidikan yang berfokus pada AI, VR, dan inovasi
						media pembelajaran.
					</p>
					<a
						href={resolve('/about')}
						class="flex w-full items-center justify-center gap-1.5 rounded-xl bg-slate-100 py-2.5 text-xs font-bold text-slate-800 transition-colors hover:bg-slate-200"
					>
						Lihat Profil Penulis <User class="h-3.5 w-3.5" />
					</a>
				</div>

				<!-- Store Cross-Selling Widget -->
				{#if data.relatedProducts && data.relatedProducts.length > 0}
					<div
						class="rounded-2xl border border-gray-100 bg-white p-5 text-slate-900 shadow-xs"
					>
						<div class="mb-3 flex items-center justify-between border-b border-gray-100 pb-3">
							<h3 class="text-xs font-extrabold uppercase tracking-wider text-slate-500">
								Materi & Produk Terkait
							</h3>
							<ShoppingBag class="h-4 w-4 text-slate-400" />
						</div>

						<div class="space-y-3">
							{#each data.relatedProducts as item (item.id)}
								<a
									href={resolve(`/store/${item.id}`)}
									class="group flex items-center gap-3 rounded-xl border border-gray-100 bg-slate-50/50 p-2.5 shadow-xs transition-all hover:border-slate-300 hover:bg-white hover:shadow-md"
								>
									<img
										src={item.images[0]}
										alt={item.name}
										class="h-12 w-12 shrink-0 rounded-lg object-cover"
									/>
									<div class="min-w-0 flex-1">
										<h4
											class="truncate text-xs font-bold text-slate-900 transition-colors group-hover:text-blue-600"
										>
											{item.name}
										</h4>
										<p class="mt-0.5 text-[11px] font-bold text-slate-700">
											{new Intl.NumberFormat('id-ID', {
												style: 'currency',
												currency: item.currency,
												maximumFractionDigits: 0
											}).format(item.price)}
										</p>
									</div>
								</a>
							{/each}
						</div>

						<a
							href={resolve('/store')}
							class="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white shadow-xs transition-colors hover:bg-blue-600"
						>
							Kunjungi Store <ArrowRight class="h-3.5 w-3.5" />
						</a>
					</div>
				{:else}
					<!-- Default Store CTA Widget -->
					<div
						class="rounded-2xl border border-gray-100 bg-white p-5 text-slate-900 shadow-xs"
					>
						<div class="mb-3 flex items-center justify-between border-b border-gray-100 pb-3">
							<h3 class="text-xs font-extrabold uppercase tracking-wider text-slate-500">
								Modul & Template Pembelajaran
							</h3>
							<ShoppingBag class="h-4 w-4 text-slate-400" />
						</div>
						<p class="mb-4 text-xs leading-relaxed text-slate-600">
							Dapatkan modul PDF, template proposal penelitian, dan media interaktif untuk mendukung
							kegiatan akademik Anda.
						</p>
						<a
							href={resolve('/store')}
							class="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white shadow-xs transition-colors hover:bg-blue-600"
						>
							Kunjungi Academy Store <ArrowRight class="h-3.5 w-3.5" />
						</a>
					</div>
				{/if}
			</aside>
		</div>
	</div>
</div>
