<script lang="ts">
	import type { Component } from 'svelte';
	import {
		ArrowLeft,
		Calendar,
		Clock,
		Copy,
		Check,
		User,
		BookOpen,
		Sparkles
	} from '@lucide/svelte';
	import { resolve } from '$app/paths';

	let { data } = $props();

	const Content: Component = $derived(data.content);

	let copied = $state(false);

	function copyToClipboard() {
		if (typeof window !== 'undefined') {
			navigator.clipboard.writeText(window.location.href);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		}
	}
</script>

<svelte:head>
	<title>{data.metadata?.title || 'Artikel'} - Andika Academy</title>
</svelte:head>

<div class="bg-slate-50/50 pb-16 text-slate-800">
	<!-- Top Hero Header (Standard max-w-7xl container width) -->
	<section class="relative overflow-hidden bg-primary-950 pt-24 pb-20 text-white lg:pt-32 lg:pb-24">
		<div
			class="absolute inset-0 z-0 opacity-15"
			style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 36px 36px;"
		></div>

		<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<!-- Back Button & Breadcrumb -->
			<div class="mb-6 flex flex-wrap items-center justify-between gap-4">
				<a
					href={resolve('/blogs')}
					class="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold text-slate-200 backdrop-blur-xs transition-colors hover:bg-white/20 hover:text-white"
				>
					<ArrowLeft class="h-4 w-4" /> Kembali ke Blog
				</a>

				<nav class="flex items-center gap-2 text-xs text-slate-400">
					<a href={resolve('/')} class="hover:text-white">Home</a>
					<span>/</span>
					<a href={resolve('/blogs')} class="hover:text-white">Blog</a>
					<span>/</span>
					<span class="truncate max-w-[280px] text-slate-300 font-medium">{data.metadata?.title}</span>
				</nav>
			</div>

			<!-- Tag Badge -->
			{#if data.metadata?.tags?.[0]}
				<span class="mb-4 inline-block rounded-lg bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-xs">
					{data.metadata.tags[0]}
				</span>
			{/if}

			<!-- Title -->
			<h1 class="mb-6 max-w-4xl text-2xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
				{data.metadata?.title}
			</h1>

			<!-- Article Meta Info Row -->
			<div class="flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs text-slate-300">
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
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
		<!-- Cover Image -->
		{#if data.image}
			<div class="mb-12 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl">
				<img
					src={data.image}
					alt={data.metadata?.title}
					class="h-auto max-h-[480px] w-full object-cover"
				/>
			</div>
		{/if}

		<!-- Grid: Main Content + Sidebar -->
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-12">
			<!-- Main Article Body (8 cols) -->
			<main class="lg:col-span-8">
				<div class="rounded-3xl border border-gray-100 bg-white p-6 sm:p-10 shadow-xs">
					<!-- Article Description / Lead Paragraph -->
					{#if data.metadata?.description}
						<p class="mb-8 text-base sm:text-lg leading-relaxed text-slate-700 font-medium border-l-4 border-blue-600 pl-4 py-1 italic bg-blue-50/50 rounded-r-xl">
							{data.metadata.description}
						</p>
					{/if}

					<!-- Article Body Prose -->
					<div class="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600 prose-img:rounded-2xl">
						<Content />
					</div>

					<!-- Share Section -->
					<div class="mt-10 border-t border-gray-100 pt-6 flex flex-wrap items-center justify-between gap-4">
						<span class="text-xs font-bold uppercase tracking-wider text-slate-500">
							Bagikan Artikel Ini
						</span>

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
					<h3 class="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-gray-100 pb-3">
						Penulis Artikel
					</h3>
					<div class="flex items-center gap-4 mb-4">
						<img
							src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
							alt="Dr. Andika"
							class="h-14 w-14 rounded-2xl object-cover shadow-sm"
						/>
						<div>
							<div class="text-sm font-bold text-slate-900">Dr. I Ketut Andika Pradnyana</div>
							<div class="text-xs text-slate-500">Peneliti & Dosen</div>
						</div>
					</div>
					<p class="text-xs text-slate-600 leading-relaxed mb-4">
						Dosen dan peneliti di bidang teknologi pendidikan yang berfokus pada AI, VR, dan inovasi media pembelajaran.
					</p>
					<a
						href={resolve('/about')}
						class="flex w-full items-center justify-center gap-1.5 rounded-xl bg-slate-100 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-200 transition-colors"
					>
						Lihat Profil Penulis <User class="h-3.5 w-3.5" />
					</a>
				</div>

				<!-- Store Cross-Selling Widget -->
				{#if data.relatedProducts && data.relatedProducts.length > 0}
					<div class="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-indigo-50/50 p-6 text-slate-900 shadow-xs">
						<div class="mb-3 flex items-center justify-between">
							<span class="rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">
								REKOMENDASI PRODUK
							</span>
							<Sparkles class="h-4 w-4 text-blue-600" />
						</div>

						<h3 class="mb-4 text-sm font-bold text-slate-900 border-b border-blue-100 pb-2">
							Materi & Produk Terkait
						</h3>

						<div class="space-y-4">
							{#each data.relatedProducts as item (item.id)}
								<a
									href={resolve(`/store/${item.id}`)}
									class="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-xs transition-all hover:border-blue-300 hover:shadow-md"
								>
									<img
										src={item.images[0]}
										alt={item.name}
										class="h-14 w-14 shrink-0 rounded-xl object-cover"
									/>
									<div class="min-w-0 flex-1">
										<h4 class="truncate text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
											{item.name}
										</h4>
										<p class="text-[11px] font-bold text-blue-600 mt-0.5">
											{new Intl.NumberFormat('id-ID', { style: 'currency', currency: item.currency, maximumFractionDigits: 0 }).format(item.price)}
										</p>
									</div>
								</a>
							{/each}
						</div>

						<a
							href={resolve('/store')}
							class="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-700 transition-colors"
						>
							Kunjungi Store <BookOpen class="h-3.5 w-3.5" />
						</a>
					</div>
				{:else}
					<!-- Default Store CTA Widget -->
					<div class="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 text-slate-900 shadow-xs">
						<div class="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs">
							<BookOpen class="h-5 w-5" />
						</div>
						<h3 class="mb-2 text-base font-bold text-slate-900">Modul & Template Pembelajaran</h3>
						<p class="mb-4 text-xs leading-relaxed text-slate-600">
							Dapatkan modul PDF, template proposal penelitian, dan media interaktif untuk mendukung kegiatan akademik Anda.
						</p>
						<a
							href={resolve('/store')}
							class="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-700 transition-colors"
						>
							Kunjungi Academy Store
						</a>
					</div>
				{/if}
			</aside>
		</div>
	</div>
</div>
