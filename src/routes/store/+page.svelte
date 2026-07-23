<script lang="ts">
	import {
		Search,
		MonitorPlay,
		FileText,
		Layout,
		Video,
		ShieldCheck,
		Zap,
		HeadphonesIcon,
		Award,
		Star,
		ArrowRight
	} from '@lucide/svelte';
	import ProductCard from '$lib/components/ui/ProductCard.svelte';
	import CtaBanner from '$lib/components/ui/CtaBanner.svelte';
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const categories = [
		{ id: 'all', label: 'Semua Produk', desc: 'Lihat semua', icon: null },
		{ id: 'modul', label: 'Modul Pembelajaran', desc: 'Modul PDF & E-Book', icon: FileText },
		{ id: 'video', label: 'Video Course', desc: 'Kursus Video Premium', icon: MonitorPlay },
		{ id: 'template', label: 'Template Penelitian', desc: 'Template & Dokumen', icon: Layout },
		{ id: 'media', label: 'Media Pembelajaran', desc: 'Media Interaktif', icon: MonitorPlay },
		{ id: 'webinar', label: 'Webinar Rekaman', desc: 'Rekaman Webinar', icon: Video }
	];

	let activeCategory = $state('all');

	let filteredProducts = $derived(
		activeCategory === 'all'
			? data.products
			: data.products.filter((p) => p.tags?.includes(activeCategory))
	);
</script>

<svelte:head>
	<title>Academy Store - Andika Academy</title>
</svelte:head>

<!-- Store Hero -->
<section class="relative overflow-hidden bg-primary-950 pt-12 pb-24 text-white">
	<div
		class="absolute inset-0 z-0 opacity-10"
		style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px;"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div
			class="mb-4 inline-flex items-center rounded-full border border-primary-800 bg-primary-900/50 px-3 py-1 text-sm font-medium text-primary-200 backdrop-blur-sm"
		>
			ACADEMY STORE
		</div>

		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<h1 class="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
					Dapatkan Materi Berkualitas untuk Meningkatkan Kompetensi Anda
				</h1>
				<p class="mb-8 max-w-xl text-lg text-primary-200">
					Modul, video course, template, media pembelajaran, dan webinar rekaman pilihan untuk guru,
					dosen, peneliti, dan praktisi pendidikan.
				</p>

				<div class="relative max-w-lg">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<Search class="h-5 w-5 text-gray-400" />
					</div>
					<input
						type="text"
						class="block w-full rounded-lg border border-gray-300 bg-white p-4 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
						placeholder="Cari produk yang Anda butuhkan..."
					/>
					<button
						type="submit"
						class="absolute right-2.5 bottom-2.5 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 focus:outline-none"
						>Cari</button
					>
				</div>
			</div>

			<div class="relative hidden h-full min-h-87.5 lg:block">
				<!-- Placeholder for digital products mockup image -->
				<img
					src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
					alt="Digital Products Collection"
					class="absolute inset-0 h-full w-full rotate-2 rounded-2xl object-cover shadow-2xl transition-transform duration-500 hover:rotate-0"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Category Filter -->
<section class="relative z-20 mx-auto -mt-12 mb-16 max-w-7xl px-4 sm:px-6 lg:px-8">
	<div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
		{#each categories as category (category.id)}
			<button
				onclick={() => (activeCategory = category.id)}
				class="flex h-24 flex-col items-center justify-center rounded-xl border p-4 text-center shadow-md transition-all
				{activeCategory === category.id
					? '-translate-y-1 transform border-primary-600 bg-primary-600 text-white'
					: 'border-gray-100 bg-white text-slate-700 hover:border-primary-200'}"
			>
				{#if category.icon}
					<category.icon
						class="mb-2 h-6 w-6 {activeCategory === category.id
							? 'text-white'
							: 'text-primary-600'}"
					/>
				{/if}
				<div class="text-sm font-bold">{category.label}</div>
				{#if category.desc && activeCategory !== category.id}
					<div class="mt-1 text-[10px] text-slate-500">{category.desc}</div>
				{/if}
			</button>
		{/each}
	</div>
</section>

<!-- Produk Terbaru Section -->
<section class="py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-8 flex items-end justify-between border-b border-gray-200 pb-4">
			<h2 class="text-2xl font-bold text-slate-900">Produk Terbaru</h2>
			<a
				href={resolve('/store')}
				class="flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700"
			>
				Lihat Semua Produk <ArrowRight class="ml-1 h-4 w-4" />
			</a>
		</div>
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#if filteredProducts.length === 0}
				<div class="col-span-full py-12 text-center text-gray-500">
					<p>Belum ada produk di kategori ini.</p>
				</div>
			{:else}
				{#each filteredProducts as product}
					<ProductCard
						image={product.images[0]}
						title={product.name}
						description={product.shortDescription}
						price={new Intl.NumberFormat('id-ID', {
							style: 'currency',
							currency: product.currency
						}).format(product.price)}
						rating={5}
						reviews={product.stock}
						href={resolve(`/store/${product.id}`)}
					/>
				{/each}
			{/if}
		</div>
	</div>
</section>

<!-- Produk Populer Section -->
<section class="bg-slate-50 py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-8 flex items-end justify-between border-b border-gray-200 pb-4">
			<h2 class="text-2xl font-bold text-slate-900">Produk Populer</h2>
			<a
				href={resolve('/store')}
				class="flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700"
			>
				Lihat Semua Produk <ArrowRight class="ml-1 h-4 w-4" />
			</a>
		</div>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
			{#each [{ t: 'Instrumen Penelitian', p: 'Rp79.000', r: 54 }, { t: 'Media Interaktif', p: 'Rp129.000', r: 47 }, { t: 'Panduan Artikel Ilmiah', p: 'Rp69.000', r: 38 }, { t: 'Webinar Rekaman', p: 'Rp59.000', r: 31 }, { t: 'Asset 3D Edukasi', p: 'Rp149.000', r: 25 }] as prod (prod.t)}
				<div
					class="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-primary-300"
				>
					<div>
						<div
							class="mb-3 flex h-24 w-full items-center justify-center rounded bg-primary-100 text-primary-300"
						>
							<FileText class="h-8 w-8" />
						</div>
						<h3 class="mb-2 line-clamp-2 text-sm leading-tight font-bold text-slate-900">
							{prod.t}
						</h3>
					</div>
					<div>
						<div class="mb-1 font-bold text-primary-700">{prod.p}</div>
						<div class="flex items-center text-xs text-accent-500">
							{#each [0, 1, 2] as i (i)}<Star class="h-3 w-3 fill-current" />{/each}
							<span class="ml-1 text-slate-500">({prod.r})</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Features Row -->
<section class="border-y border-gray-100 bg-white py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-2 gap-8 divide-x divide-gray-100 md:grid-cols-4">
			<div class="flex items-center gap-4 px-4">
				<ShieldCheck class="h-10 w-10 shrink-0 text-primary-600" />
				<div>
					<h4 class="text-sm font-bold text-slate-900">Aman & Terpercaya</h4>
					<p class="text-xs text-slate-500">Pembayaran aman melalui sistem terpercaya.</p>
				</div>
			</div>
			<div class="flex items-center gap-4 px-4">
				<Zap class="h-10 w-10 shrink-0 text-primary-600" />
				<div>
					<h4 class="text-sm font-bold text-slate-900">Akses Instan</h4>
					<p class="text-xs text-slate-500">Langsung akses & download setelah pembayaran.</p>
				</div>
			</div>
			<div class="flex items-center gap-4 px-4">
				<HeadphonesIcon class="h-10 w-10 shrink-0 text-primary-600" />
				<div>
					<h4 class="text-sm font-bold text-slate-900">Dukungan 24/7</h4>
					<p class="text-xs text-slate-500">Tim kami siap membantu kapan saja.</p>
				</div>
			</div>
			<div class="flex items-center gap-4 px-4">
				<Award class="h-10 w-10 shrink-0 text-primary-600" />
				<div>
					<h4 class="text-sm font-bold text-slate-900">Kualitas Terjamin</h4>
					<p class="text-xs text-slate-500">Materi berkualitas dari praktisi & akademisi.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Testimonials -->
<section class="bg-slate-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="mb-8 text-2xl font-bold text-slate-900">Apa Kata Mereka?</h2>
		<div class="grid gap-6 md:grid-cols-3">
			{#each [{ name: 'Dewi Lestari, M.Pd.', role: 'Dosen', review: 'Materi sangat lengkap dan mudah dipahami. Sangat membantu dalam penelitian saya.' }, { name: 'Rizky Pratama, S.Pd., Gr.', role: 'Guru', review: 'Template artikelnya luar biasa! Membantu saya publikasi di jurnal Scopus Q2.' }, { name: 'I Made Budiarta, M.Pd.', role: 'Dosen', review: 'Video course VR Learning sangat aplikatif dan bisa langsung diimplementasikan.' }] as t (t.name)}
				<div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
					<div class="mb-4 flex text-accent-500">
						{#each [0, 1, 2, 3, 4] as i (i)}<Star class="h-4 w-4 fill-current" />{/each}
					</div>
					<p class="mb-6 text-sm text-slate-700 italic">"{t.review}"</p>
					<div>
						<div class="font-bold text-slate-900">{t.name}</div>
						<div class="text-xs text-slate-500">{t.role}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<CtaBanner
			title="Belum menemukan yang Anda cari?"
			description="Hubungi kami untuk rekomendasi produk terbaik sesuai kebutuhan Anda."
			buttonText="Hubungi Kami"
			buttonHref="/contact"
		/>
	</div>
</section>
