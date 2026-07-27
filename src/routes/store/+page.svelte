<script lang="ts">
	import {
		Search,
		BookOpen,
		FileText,
		MonitorPlay,
		Video,
		ShoppingBag,
		ShoppingCart,
		Star,
		ChevronRight,
		ArrowRight,
		ShieldCheck,
		DownloadCloud,
		Headphones,
		Award,
		MessageCircle,
		FileCode
	} from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { SITE_CONFIG } from '$lib/config/site';
	import ProductCard from '$lib/components/ui/ProductCard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const categories = [
		{ id: 'all', label: 'Semua Produk', desc: 'Lihat semua', icon: ShoppingBag },
		{ id: 'modul', label: 'Modul Pembelajaran', desc: 'Modul PDF & E-Book', icon: BookOpen },
		{ id: 'video', label: 'Video Course', desc: 'Kursus Video Premium', icon: MonitorPlay },
		{ id: 'template', label: 'Template Penelitian', desc: 'Template & Dokumen', icon: FileText },
		{ id: 'media', label: 'Media Pembelajaran', desc: 'Media Interaktif', icon: FileCode },
		{ id: 'webinar', label: 'Webinar Rekaman', desc: 'Rekaman Webinar', icon: Video }
	];

	let activeCategory = $state('all');
	let searchQuery = $state('');
	let sortBy = $state<'latest' | 'price-asc' | 'price-desc' | 'popular'>('latest');
	let currentPage = $state(1);
	const ITEMS_PER_PAGE = 8;

	/** Format currency for display */
	function formatPrice(price: number, currency: string): string {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency,
			maximumFractionDigits: 0
		}).format(price);
	}

	/** Products filtered by active category, search query, and sorting selection */
	let filteredProducts = $derived.by(() => {
		let result = [...data.products];

		// Strict Filter by category (match against product.category or tags fallback)
		if (activeCategory !== 'all') {
			result = result.filter(
				(p) => p.category === activeCategory || p.tags?.some((t) => t.includes(activeCategory))
			);
		}

		// Filter by search query
		if (searchQuery.trim()) {
			const q = searchQuery.trim().toLowerCase();
			result = result.filter(
				(p) =>
					p.name.toLowerCase().includes(q) ||
					p.shortDescription.toLowerCase().includes(q) ||
					p.tags?.some((t) => t.toLowerCase().includes(q)) ||
					p.category.toLowerCase().includes(q)
			);
		}

		// Sort products
		if (sortBy === 'price-asc') {
			result.sort((a, b) => a.price - b.price);
		} else if (sortBy === 'price-desc') {
			result.sort((a, b) => b.price - a.price);
		} else if (sortBy === 'popular') {
			result.sort((a, b) => (b.reviewsCount ?? 0) - (a.reviewsCount ?? 0));
		}

		return result;
	});

	let totalPages = $derived(Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)));

	let displayedProducts = $derived.by(() => {
		const start = (currentPage - 1) * ITEMS_PER_PAGE;
		return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
	});

	function selectCategory(catId: string) {
		activeCategory = catId;
		currentPage = 1;
	}

	function handleSearchInput() {
		currentPage = 1;
	}

	function goToPage(p: number) {
		if (p >= 1 && p <= totalPages) {
			currentPage = p;
			if (typeof window !== 'undefined') {
				window.scrollTo({ top: 500, behavior: 'smooth' });
			}
		}
	}
</script>

<SEO
	title="Academy Store - Modul, E-Book & Tools | Dr. I Ketut Andika Pradnyana"
	description="Toko resmi Andika Academy oleh Dr. I Ketut Andika Pradnyana. Modul pelatihan AI, e-book metodologi penelitian, template data analisis, & instrumen publikasi Scopus."
	canonical="{SITE_CONFIG.url}/store"
/>

<div class="bg-slate-50/50 py-8 text-slate-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Hero Section -->
		<section
			class="relative mb-8 overflow-hidden rounded-3xl border border-gray-100 bg-slate-100/70 p-6 sm:p-10 lg:p-12"
		>
			<div class="grid items-center gap-8 lg:grid-cols-12">
				<!-- Left Text & Search -->
				<div class="lg:col-span-7">
					<span
						class="mb-3 inline-block text-xs font-bold tracking-wider text-indigo-600 uppercase"
					>
						ACADEMY STORE
					</span>
					<h1
						class="mb-4 text-3xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
					>
						Dapatkan Materi Berkualitas untuk Meningkatkan Kompetensi Anda
					</h1>
					<p class="mb-6 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
						Modul, video course, template, media pembelajaran, dan webinar rekaman pilihan untuk
						guru, dosen, peneliti, dan praktisi pendidikan.
					</p>

					<div class="relative max-w-md">
						<input
							type="text"
							bind:value={searchQuery}
							oninput={handleSearchInput}
							placeholder="Cari produk yang Anda butuhkan..."
							class="w-full rounded-xl border border-gray-200 bg-white py-3.5 pr-10 pl-4 text-base text-slate-800 placeholder-slate-400 shadow-xs focus:border-blue-500 focus:outline-none sm:text-sm"
						/>
						<Search class="absolute top-3.5 right-3.5 h-4 w-4 text-slate-400" />
					</div>
				</div>

				<!-- Right Hero Graphic / Mockup -->
				<div class="relative hidden justify-center lg:col-span-5 lg:flex">
					<div class="relative flex items-center justify-center">
						<img
							src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
							alt="Academy Digital Learning Mockup"
							class="h-auto max-h-[300px] w-auto rounded-2xl border border-gray-200/80 object-cover shadow-xl"
						/>
					</div>
				</div>
			</div>
		</section>

		<!-- Category Filter Tabs Bar -->
		<section class="mb-12">
			<div
				class="no-scrollbar flex snap-x items-center gap-3 overflow-x-auto rounded-2xl border border-gray-100 bg-white p-2 whitespace-nowrap shadow-xs"
			>
				{#each categories as category (category.id)}
					<button
						onclick={() => selectCategory(category.id)}
						class="flex min-h-[44px] shrink-0 snap-start items-center gap-3 rounded-xl px-4 py-3 transition-all
						{activeCategory === category.id
							? 'bg-blue-600 text-white shadow-md'
							: 'bg-white text-slate-700 hover:bg-slate-50'}"
					>
						<div
							class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
							{activeCategory === category.id ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'}"
						>
							<category.icon class="h-4 w-4" />
						</div>
						<div class="text-left">
							<div class="text-xs leading-tight font-bold whitespace-nowrap">{category.label}</div>
							<div
								class="text-[10px] font-medium whitespace-nowrap
								{activeCategory === category.id ? 'text-blue-100' : 'text-slate-400'}"
							>
								{category.desc}
							</div>
						</div>
					</button>
				{/each}
			</div>
		</section>

		<!-- Produk Katalog Section -->
		<section class="mb-12">
			<div class="mb-6 flex flex-wrap items-center justify-between gap-4">
				<div>
					<h2 class="text-xl font-bold text-slate-900">Katalog Produk</h2>
					<p class="text-xs text-slate-500">
						Menampilkan {displayedProducts.length} dari {filteredProducts.length} produk
					</p>
				</div>

				<div class="flex items-center gap-3">
					<label for="sort-select" class="text-xs font-semibold text-slate-500">Urutkan:</label>
					<select
						id="sort-select"
						bind:value={sortBy}
						class="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-xs focus:border-blue-500 focus:outline-none"
					>
						<option value="latest">Terbaru</option>
						<option value="popular">Paling Populer</option>
						<option value="price-asc">Harga: Terendah ke Tinggi</option>
						<option value="price-desc">Harga: Tertinggi ke Rendah</option>
					</select>
				</div>
			</div>

			<div class="relative">
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{#each displayedProducts as product (product.id)}
						<ProductCard
							image={product.images[0]}
							title={product.name}
							description={product.shortDescription}
							price={formatPrice(product.price, product.currency)}
							rating={5}
							reviews={product.stock}
							href={resolve(`/store/${product.id}`)}
						/>
					{:else}
						<div class="col-span-full py-12 text-center text-slate-500">
							Produk tidak ditemukan.
						</div>
					{/each}
				</div>

				<!-- Carousel Dots -->
				<div class="mt-6 flex items-center justify-center gap-1.5">
					<span class="h-2 w-5 rounded-full bg-blue-600"></span>
					<span class="h-2 w-2 rounded-full bg-slate-300"></span>
					<span class="h-2 w-2 rounded-full bg-slate-300"></span>
					<span class="h-2 w-2 rounded-full bg-slate-300"></span>
				</div>
			</div>
		</section>

		<!-- Produk Populer Section -->
		<section class="mb-12">
			<div class="mb-6 flex items-center justify-between">
				<h2 class="text-xl font-bold text-slate-900">Produk Populer</h2>
				<a
					href={resolve('/store')}
					class="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
				>
					Lihat Semua Produk <ArrowRight class="h-4 w-4" />
				</a>
			</div>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each data.products.slice(0, 4) as product (product.id)}
					<a
						href={resolve(`/store/${product.id}`)}
						class="group flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-xs transition-all hover:border-blue-100 hover:shadow-md"
					>
						<div class="flex w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100">
							<img
								src={product.images[0]}
								alt={product.name}
								class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						</div>
						<div class="flex flex-1 flex-col justify-between">
							<div>
								<h3
									class="mb-1 line-clamp-2 text-xs leading-snug font-bold text-slate-900 transition-colors group-hover:text-blue-600"
								>
									{product.name}
								</h3>
								<p class="line-clamp-2 text-[11px] leading-relaxed text-slate-500">
									{product.shortDescription}
								</p>
							</div>
							<div class="pt-2">
								<div class="text-sm font-extrabold text-blue-600">
									{formatPrice(product.price, product.currency)}
								</div>
								<div class="flex items-center gap-1 text-[10px] text-amber-400">
									{#each [0, 1, 2, 3, 4] as i (i)}<Star class="h-3 w-3 fill-current" />{/each}
									<span class="ml-0.5 text-slate-400">({product.stock})</span>
								</div>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</section>

		<!-- Features Row Bar -->
		<section class="mb-12 rounded-2xl border border-gray-100 bg-white p-6 shadow-xs">
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				<div class="flex items-center gap-4">
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
					>
						<ShieldCheck class="h-6 w-6" />
					</div>
					<div>
						<h4 class="text-sm font-bold text-slate-900">Aman & Terpercaya</h4>
						<p class="text-xs text-slate-500">Pembayaran aman melalui sistem terpercaya.</p>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
					>
						<DownloadCloud class="h-6 w-6" />
					</div>
					<div>
						<h4 class="text-sm font-bold text-slate-900">Akses Instan</h4>
						<p class="text-xs text-slate-500">Langsung akses & download setelah pembayaran.</p>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
					>
						<Headphones class="h-6 w-6" />
					</div>
					<div>
						<h4 class="text-sm font-bold text-slate-900">Dukungan 24/7</h4>
						<p class="text-xs text-slate-500">Tim kami siap membantu kapan saja.</p>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
					>
						<Award class="h-6 w-6" />
					</div>
					<div>
						<h4 class="text-sm font-bold text-slate-900">Kualitas Terjamin</h4>
						<p class="text-xs text-slate-500">
							Materi berkualitas dibuat oleh praktisi & akademisi.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Testimonials Section -->
		<section class="mb-12">
			<h2 class="mb-6 text-xl font-bold text-slate-900">Apa Kata Mereka?</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				<div
					class="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs"
				>
					<div>
						<div class="mb-4 flex text-amber-400">
							{#each [0, 1, 2, 3, 4] as i (i)}<Star class="h-4 w-4 fill-current" />{/each}
						</div>
						<p class="mb-6 text-xs leading-relaxed text-slate-600">
							"Materi sangat lengkap dan mudah dipahami. Sangat membantu dalam penelitian saya."
						</p>
					</div>
					<div>
						<div class="text-sm font-bold text-slate-900">Dewi Lestari, M.Pd.</div>
						<div class="text-xs text-slate-400">Dosen</div>
					</div>
				</div>

				<div
					class="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs"
				>
					<div>
						<div class="mb-4 flex text-amber-400">
							{#each [0, 1, 2, 3, 4] as i (i)}<Star class="h-4 w-4 fill-current" />{/each}
						</div>
						<p class="mb-6 text-xs leading-relaxed text-slate-600">
							"Template artikelnya luar biasa! Membantu saya publikasi di jurnal Scopus Q2."
						</p>
					</div>
					<div>
						<div class="text-sm font-bold text-slate-900">Rizky Pratama, S.Pd., Gr.</div>
						<div class="text-xs text-slate-400">Guru</div>
					</div>
				</div>

				<div
					class="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs"
				>
					<div>
						<div class="mb-4 flex text-amber-400">
							{#each [0, 1, 2, 3, 4] as i (i)}<Star class="h-4 w-4 fill-current" />{/each}
						</div>
						<p class="mb-6 text-xs leading-relaxed text-slate-600">
							"Video course VR Learning sangat aplikatif dan bisa langsung diimplementasikan."
						</p>
					</div>
					<div>
						<div class="text-sm font-bold text-slate-900">I Made Budiarta, M.Pd.</div>
						<div class="text-xs text-slate-400">Dosen</div>
					</div>
				</div>
			</div>
		</section>

		<!-- CTA Banner Section -->
		<section>
			<div
				class="flex flex-col items-center justify-between gap-6 rounded-2xl bg-blue-600 p-6 text-white shadow-md sm:flex-row sm:p-8"
			>
				<div class="flex items-center gap-4">
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white"
					>
						<ShoppingBag class="h-6 w-6" />
					</div>
					<div>
						<h3 class="text-lg font-bold text-white sm:text-xl">Belum menemukan yang Anda cari?</h3>
						<p class="text-xs text-blue-100 sm:text-sm">
							Hubungi kami untuk rekomendasi produk terbaik sesuai kebutuhan Anda.
						</p>
					</div>
				</div>

				<a
					href={resolve('/contact')}
					class="flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-600 shadow-xs transition-colors hover:bg-blue-50"
				>
					Hubungi Kami <MessageCircle class="h-4 w-4" />
				</a>
			</div>
		</section>
	</div>
</div>
