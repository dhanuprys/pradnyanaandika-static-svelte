<script lang="ts">
	import type { Product } from '$lib/data/products/types';
	import {
		ArrowLeft,
		Check,
		ShieldCheck,
		Zap,
		MessageCircle,
		ShoppingCart,
		ShoppingBag,
		Star,
		Share2,
		Sparkles,
		FileText,
		DownloadCloud,
		Headphones,
		ChevronLeft,
		ChevronRight,
		Maximize2,
		X,
		ArrowRight
	} from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import ProductCard from '$lib/components/ui/ProductCard.svelte';
	import { cart } from '$lib/stores/cart.svelte';
	import { toast } from 'svelte-sonner';

	let {
		product,
		relatedProducts = []
	}: {
		product: Product;
		relatedProducts?: Product[];
	} = $props();

	// Active image gallery slideshow state
	let activeImageIndex = $state(0);
	let copied = $state(false);
	let isLightboxOpen = $state(false);

	const formattedPrice = $derived(
		new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: product.currency,
			maximumFractionDigits: 0
		}).format(product.price)
	);

	function nextImage() {
		activeImageIndex = (activeImageIndex + 1) % product.images.length;
	}

	function prevImage() {
		activeImageIndex = (activeImageIndex - 1 + product.images.length) % product.images.length;
	}

	// WhatsApp direct buy link
	const whatsappUrl = $derived.by(() => {
		const text = encodeURIComponent(
			`Halo Dr. Andika, saya berminat untuk membeli produk "${product.name}" (${formattedPrice}). Mohon info prosedur pembayarannya.`
		);
		return `https://wa.me/6281338005074?text=${text}`;
	});

	function copyLink() {
		if (typeof window !== 'undefined') {
			navigator.clipboard.writeText(window.location.href);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		}
	}

	function addToCart() {
		cart.add({
			id: product.id,
			name: product.name,
			price: product.price,
			image: product.images[0]
		});
		toast.success('Berhasil ditambahkan', {
			description: `${product.name} telah ditambahkan ke keranjang.`
		});
	}
</script>

<div class="bg-slate-50/50 py-8 text-slate-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Top Breadcrumb & Back Navigation -->
		<div
			class="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200/80 pb-4"
		>
			<a
				href={resolve('/store')}
				class="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-xs transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
			>
				<ArrowLeft class="h-4 w-4" /> Kembali ke Store
			</a>

			<nav class="flex items-center gap-2 text-xs text-slate-500">
				<a href={resolve('/')} class="hover:text-blue-600">Home</a>
				<span>/</span>
				<a href={resolve('/store')} class="hover:text-blue-600">Academy Store</a>
				<span>/</span>
				<span class="max-w-[200px] truncate font-medium text-slate-900 sm:max-w-xs"
					>{product.name}</span
				>
			</nav>
		</div>

		<!-- Main Product Hero Section -->
		<div class="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
			<!-- Left Column: Multi-Image E-Commerce Gallery -->
			<div class="lg:col-span-6">
				<div class="sticky top-24 space-y-4">
					<!-- Main Image Container -->
					<div
						class="group relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-2 shadow-sm"
					>
						<!-- Badge Overlay -->
						<span
							class="absolute top-4 left-4 z-10 inline-flex items-center gap-1 rounded-lg bg-blue-600/90 px-3 py-1 text-[11px] font-bold text-white shadow-xs backdrop-blur-xs"
						>
							<Sparkles class="h-3 w-3" /> Digital Asset
						</span>

						<!-- Photo Counter Badge -->
						{#if product.images.length > 1}
							<span
								class="absolute top-4 right-4 z-10 rounded-lg bg-slate-900/70 px-2.5 py-1 text-[11px] font-extrabold text-white backdrop-blur-xs"
							>
								{activeImageIndex + 1} / {product.images.length}
							</span>
						{/if}

						<!-- Main Image Preview -->
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
						<button
							onclick={() => (isLightboxOpen = true)}
							class="h-full w-full cursor-zoom-in overflow-hidden rounded-2xl focus:outline-none"
						>
							<img
								src={product.images[activeImageIndex]}
								alt={product.name}
								class="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 flex items-center justify-center bg-slate-900/20 opacity-0 transition-opacity group-hover:opacity-100"
							>
								<span
									class="inline-flex items-center gap-1.5 rounded-xl bg-white/90 px-3.5 py-2 text-xs font-bold text-slate-900 shadow-md backdrop-blur-xs"
								>
									<Maximize2 class="h-3.5 w-3.5" /> Perbesar Foto
								</span>
							</div>
						</button>

						<!-- Next / Prev Controls -->
						{#if product.images.length > 1}
							<button
								onclick={prevImage}
								class="absolute top-1/2 left-4 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200/80 bg-white/90 text-slate-800 shadow-md backdrop-blur-xs transition-transform hover:scale-110"
								aria-label="Foto sebelumnya"
							>
								<ChevronLeft class="h-5 w-5" />
							</button>
							<button
								onclick={nextImage}
								class="absolute top-1/2 right-4 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200/80 bg-white/90 text-slate-800 shadow-md backdrop-blur-xs transition-transform hover:scale-110"
								aria-label="Foto selanjutnya"
							>
								<ChevronRight class="h-5 w-5" />
							</button>
						{/if}

						<!-- Image Caption Label -->
						{#if product.imageCaptions && product.imageCaptions[activeImageIndex]}
							<div
								class="absolute right-4 bottom-4 left-4 z-10 rounded-xl bg-slate-900/80 px-3.5 py-2 text-center text-xs font-medium text-white backdrop-blur-xs"
							>
								{product.imageCaptions[activeImageIndex]}
							</div>
						{/if}
					</div>

					<!-- Thumbnail Selector Grid -->
					{#if product.images.length > 1}
						<div class="no-scrollbar flex overflow-x-auto gap-2 pb-1 sm:grid sm:grid-cols-4 sm:gap-3 snap-x">
							{#each product.images as image, i (i)}
								<button
									onclick={() => (activeImageIndex = i)}
									class="relative h-16 w-16 shrink-0 aspect-square overflow-hidden rounded-xl border-2 transition-all snap-start sm:h-auto sm:w-auto sm:shrink
									{activeImageIndex === i
										? 'border-blue-600 shadow-xs ring-2 ring-blue-500/20'
										: 'border-gray-200 opacity-70 hover:opacity-100'}"
								>
									<img src={image} alt="" class="h-full w-full object-cover" />
									{#if product.imageCaptions && product.imageCaptions[i]}
										<span class="sr-only">{product.imageCaptions[i]}</span>
									{/if}
								</button>
							{/each}
						</div>
					{/if}

					<!-- Fast Trust Cards -->
					<div class="grid grid-cols-3 gap-3 pt-2">
						<div
							class="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-3 text-center shadow-xs"
						>
							<DownloadCloud class="mb-1 h-5 w-5 text-blue-600" />
							<span class="text-[11px] font-bold text-slate-900">Akses Instan</span>
							<span class="text-[10px] text-slate-500">Langsung Download</span>
						</div>
						<div
							class="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-3 text-center shadow-xs"
						>
							<ShieldCheck class="mb-1 h-5 w-5 text-blue-600" />
							<span class="text-[11px] font-bold text-slate-900">Materi Teruji</span>
							<span class="text-[10px] text-slate-500">Standar Akademik</span>
						</div>
						<div
							class="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-3 text-center shadow-xs"
						>
							<Headphones class="mb-1 h-5 w-5 text-blue-600" />
							<span class="text-[11px] font-bold text-slate-900">Dukungan 24/7</span>
							<span class="text-[10px] text-slate-500">Panduan Penggunaan</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Right Column: Product Specs & Ordering -->
			<div class="flex flex-col lg:col-span-6">
				<!-- Category & Tags Header -->
				<div class="mb-3 flex items-center gap-2">
					<span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
						ACADEMY RESOURCE
					</span>
					{#if product.tags && product.tags[0]}
						<span
							class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-600 uppercase"
						>
							{product.tags[0]}
						</span>
					{/if}
				</div>

				<!-- Title -->
				<h1
					class="mb-3 text-2xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
				>
					{product.name}
				</h1>

				<!-- Ratings & Reviews -->
				<div class="mb-6 flex flex-wrap items-center gap-4 text-xs">
					<div class="flex items-center gap-1 text-amber-400">
						{#each [0, 1, 2, 3, 4] as i (i)}
							<Star
								class="h-4 w-4 {i < Math.floor(product.rating ?? 5)
									? 'fill-current'
									: 'text-gray-300'}"
							/>
						{/each}
						<span class="ml-1 font-bold text-slate-800">{(product.rating ?? 5.0).toFixed(1)}</span>
					</div>
					<span class="text-slate-300">|</span>
					<span class="font-medium text-slate-600">({product.reviewsCount ?? 50}+ Ulasan)</span>
					<span class="text-slate-300">|</span>
					<span class="inline-flex items-center gap-1 font-semibold text-emerald-600">
						<Zap class="h-3.5 w-3.5" /> Stok Tersedia
					</span>
				</div>

				<!-- Pricing Box -->
				<div
					class="mb-6 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/80 to-indigo-50/50 p-5"
				>
					<div class="text-xs font-semibold tracking-wider text-slate-500 uppercase">
						Harga Promo Akses Instan
					</div>
					<div class="mt-1 flex items-baseline gap-3">
						<span class="text-3xl font-black text-blue-600 sm:text-4xl">{formattedPrice}</span>
						{#if product.originalPrice}
							<span class="text-sm font-medium text-slate-400 line-through">
								{new Intl.NumberFormat('id-ID', {
									style: 'currency',
									currency: product.currency,
									maximumFractionDigits: 0
								}).format(product.originalPrice)}
							</span>
							<span class="rounded-md bg-rose-100 px-2 py-0.5 text-xs font-extrabold text-rose-600">
								Hemat {Math.round((1 - product.price / product.originalPrice) * 100)}%
							</span>
						{/if}
					</div>
				</div>

				<!-- Short Description -->
				<p class="mb-6 text-sm leading-relaxed text-slate-600">
					{product.shortDescription}
				</p>

				<!-- Specifications Pills -->
				{#if product.specifications}
					<div class="mb-6 rounded-2xl border border-gray-100 bg-slate-50/80 p-4">
						<h4 class="mb-2 text-xs font-extrabold tracking-wider text-slate-700 uppercase">
							Spesifikasi File:
						</h4>
						<div class="flex flex-wrap gap-2 text-xs">
							{#if product.specifications.fileFormat}
								<span
									class="rounded-lg border border-gray-200 bg-white px-2.5 py-1 font-semibold text-slate-700"
								>
									Format: {product.specifications.fileFormat.join(', ')}
								</span>
							{/if}
							{#if product.specifications.fileSize}
								<span
									class="rounded-lg border border-gray-200 bg-white px-2.5 py-1 font-semibold text-slate-700"
								>
									Ukuran: {product.specifications.fileSize}
								</span>
							{/if}
							{#if product.specifications.pageCount}
								<span
									class="rounded-lg border border-gray-200 bg-white px-2.5 py-1 font-semibold text-slate-700"
								>
									Halaman: {product.specifications.pageCount} Hlm
								</span>
							{/if}
							{#if product.specifications.duration}
								<span
									class="rounded-lg border border-gray-200 bg-white px-2.5 py-1 font-semibold text-slate-700"
								>
									Durasi: {product.specifications.duration}
								</span>
							{/if}
							{#if product.specifications.language}
								<span
									class="rounded-lg border border-gray-200 bg-white px-2.5 py-1 font-semibold text-slate-700"
								>
									Bahasa: {product.specifications.language}
								</span>
							{/if}
						</div>
					</div>
				{/if}

				<!-- Highlights list -->
				{#if product.features && product.features.length > 0}
					<div class="mb-8 rounded-2xl border border-gray-100 bg-white p-5 shadow-xs">
						<h3 class="mb-3 text-xs font-extrabold tracking-wider text-slate-900 uppercase">
							Apa yang akan Anda Dapatkan:
						</h3>
						<ul class="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
							{#each product.features as feature (feature)}
								<li class="flex items-start gap-2.5 text-xs text-slate-700">
									<div
										class="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white"
									>
										<Check class="h-3 w-3 stroke-[3]" />
									</div>
									<span>{feature}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				<!-- Action Buttons -->
				<div class="mt-auto space-y-3">
					<div class="flex gap-3">
						<button
							onclick={addToCart}
							class="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg focus:outline-none"
						>
							<ShoppingCart class="h-5 w-5" /> Tambahkan ke Keranjang
						</button>
						<a
							href={whatsappUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg focus:outline-none"
							aria-label="Beli via WhatsApp"
						>
							<MessageCircle class="h-5 w-5 fill-current" />
						</a>
					</div>

					<div class="flex gap-3">
						<a
							href={resolve('/contact')}
							class="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs font-bold text-slate-700 shadow-xs transition-colors hover:bg-slate-50"
						>
							<FileText class="h-4 w-4 text-blue-600" /> Tanyakan Detail
						</a>

						<button
							onclick={copyLink}
							class="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs font-bold text-slate-700 shadow-xs transition-colors hover:bg-slate-50"
						>
							{#if copied}
								<Check class="h-4 w-4 text-emerald-600" /> Tersalin
							{:else}
								<Share2 class="h-4 w-4 text-slate-500" /> Bagikan
							{/if}
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Detailed Description Section -->
		<div class="mb-16 rounded-3xl border border-gray-100 bg-white p-6 shadow-xs sm:p-8 lg:p-10">
			<h2 class="mb-4 border-b border-gray-100 pb-3 text-xl font-bold text-slate-900">
				Deskripsi Lengkap & Materi
			</h2>
			<div
				class="prose max-w-none text-sm leading-relaxed whitespace-pre-line text-slate-600 prose-slate"
			>
				{product.description}
			</div>
		</div>

		<!-- Related Products Section -->
		{#if relatedProducts.length > 0}
			<section class="mb-12">
				<div class="mb-6 flex items-center justify-between border-b border-gray-200 pb-3">
					<h2 class="text-xl font-bold text-slate-900">Produk Rekomendasi Lainnya</h2>
					<a
						href={resolve('/store')}
						class="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
					>
						Lihat Semua <ArrowRight class="h-4 w-4" />
					</a>
				</div>

				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each relatedProducts as item (item.id)}
						<ProductCard
							image={item.images[0]}
							title={item.name}
							description={item.shortDescription}
							price={new Intl.NumberFormat('id-ID', {
								style: 'currency',
								currency: item.currency,
								maximumFractionDigits: 0
							}).format(item.price)}
							rating={5}
							reviews={item.stock}
							href={resolve(`/store/${item.id}`)}
						/>
					{/each}
				</div>
			</section>
		{/if}

		<!-- Solid Blue CTA Banner -->
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
					<h3 class="text-lg font-bold text-white sm:text-xl">
						Butuh Pelatihan atau Konsultasi Khusus?
					</h3>
					<p class="text-xs text-blue-100 sm:text-sm">
						Diskusi langsung bersama Dr. I Ketut Andika untuk bimbingan instansi dan penelitian.
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
	</div>
</div>

<!-- Sticky Mobile Bottom Buy Bar -->
<div
	class="fixed bottom-0 inset-x-0 z-40 flex items-center justify-between gap-3 border-t border-slate-200/80 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur-lg sm:hidden pb-safe"
>
	<div>
		<div class="text-[10px] font-bold tracking-wider text-slate-400 uppercase">Harga Total</div>
		<div class="text-base font-black text-blue-600">{formattedPrice}</div>
	</div>
	<div class="flex gap-2">
		<button
			onclick={addToCart}
			class="flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all active:scale-95 hover:bg-blue-700"
		>
			<ShoppingCart class="h-4 w-4" />
		</button>
		<a
			href={whatsappUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all active:scale-95 hover:bg-emerald-700"
		>
			<MessageCircle class="h-4 w-4 fill-current" /> Beli via WA
		</a>
	</div>
</div>

<!-- Fullscreen Lightbox Zoom Modal -->
{#if isLightboxOpen}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
	>
		<button
			onclick={() => (isLightboxOpen = false)}
			class="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
			aria-label="Tutup Pratinjau"
		>
			<X class="h-6 w-6" />
		</button>

		<div class="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-3xl">
			<img
				src={product.images[activeImageIndex]}
				alt={product.name}
				class="max-h-[80vh] w-auto rounded-2xl object-contain"
			/>
			{#if product.imageCaptions && product.imageCaptions[activeImageIndex]}
				<div
					class="mt-3 rounded-xl bg-white/10 px-4 py-2 text-center text-xs text-slate-200 backdrop-blur-xs"
				>
					{product.imageCaptions[activeImageIndex]}
				</div>
			{/if}
		</div>
	</div>
{/if}
