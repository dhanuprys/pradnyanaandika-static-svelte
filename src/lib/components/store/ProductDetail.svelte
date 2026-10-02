<script lang="ts">
	import type { Product } from '$cms';
	import { ArrowLeft, Star, ChevronRight, X, ArrowRight, Minus, Plus } from '@lucide/svelte';
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

	let activeImageIndex = $state(0);
	let isLightboxOpen = $state(false);
	let quantity = $state(1);

	const formattedPrice = $derived(
		new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: product.currency,
			maximumFractionDigits: 0
		}).format(product.price * quantity)
	);

	const unitPrice = $derived(
		new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: product.currency,
			maximumFractionDigits: 0
		}).format(product.price)
	);

	const whatsappUrl = $derived.by(() => {
		const text = encodeURIComponent(
			`Halo Andika, saya berminat untuk membeli produk "${product.name}" (${formattedPrice}). Mohon info prosedur pembayarannya.`
		);
		return `https://wa.me/6281338005074?text=${text}`;
	});

	function addToCart() {
		cart.add({
			id: product.id,
			name: product.name,
			price: product.price,
			image: product.images[0]
		});
		toast.success('Berhasil ditambahkan', {
			description: `${quantity} ${product.name} telah ditambahkan ke keranjang.`
		});
	}
</script>

<div class="bg-white py-8 text-slate-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Top Breadcrumb -->
		<nav class="mb-8 flex items-center gap-2 text-xs text-slate-500">
			<a href={resolve('/store')} class="inline-flex items-center gap-1 hover:text-blue-600"
				><ArrowLeft class="h-3 w-3" /> Back</a
			>
			<span class="mx-2 h-3 border-l border-gray-300"></span>
			<a href={resolve('/')} class="hover:text-blue-600">Home</a>
			<span>/</span>
			<a href={resolve('/store')} class="hover:text-blue-600">Store</a>
			<span>/</span>
			<span class="max-w-[200px] truncate font-medium text-slate-900 sm:max-w-xs"
				>{product.name}</span
			>
		</nav>

		<!-- Main Product Hero Section -->
		<div class="mb-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
			<!-- Left: Images Gallery (Vertical Thumbnails + Main Image) -->
			<div class="flex h-auto flex-col gap-4 sm:h-[500px] sm:flex-row lg:col-span-7">
				<!-- Vertical Thumbnails -->
				{#if product.images.length > 1}
					<div
						class="no-scrollbar order-2 flex w-full shrink-0 gap-3 overflow-y-auto sm:order-1 sm:w-20 sm:flex-col"
					>
						{#each product.images as image, i (i)}
							<button
								onclick={() => (activeImageIndex = i)}
								class="relative aspect-square w-16 shrink-0 overflow-hidden rounded-xl border-2 transition-all sm:w-full
                                {activeImageIndex === i
									? 'border-blue-600 ring-2 ring-blue-500/20'
									: 'border-transparent opacity-70 hover:border-gray-200 hover:opacity-100'}"
							>
								<img src={image} alt="" class="h-full w-full object-cover" />
							</button>
						{/each}
					</div>
				{/if}

				<!-- Main Image -->
				<div
					class="relative order-1 h-full w-full overflow-hidden rounded-[2rem] border border-gray-100 bg-gray-50 sm:order-2"
				>
					<button
						onclick={() => (isLightboxOpen = true)}
						class="h-full w-full cursor-zoom-in focus:outline-none"
					>
						<img
							src={product.images[activeImageIndex]}
							alt={product.name}
							class="h-full w-full object-cover sm:object-contain"
						/>
					</button>
					<!-- Badges -->
					{#if product.images.length > 1}
						<span
							class="absolute right-4 bottom-4 z-10 rounded-full bg-slate-900/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md"
						>
							{activeImageIndex + 1}/{product.images.length}
						</span>
					{/if}
				</div>
			</div>

			<!-- Right: Product Info -->
			<div class="flex flex-col py-2 lg:col-span-5">
				<!-- Title -->
				<h1 class="mb-2 text-3xl font-bold text-slate-900">
					{product.name}
				</h1>

				<!-- Ratings -->
				<div class="mb-5 flex items-center gap-2 text-sm">
					<div class="flex items-center gap-0.5 text-slate-900">
						{#each [0, 1, 2, 3, 4] as i (i)}
							<Star
								class="h-3.5 w-3.5 {i < Math.floor(product.rating ?? 5)
									? 'fill-current'
									: 'text-gray-300'}"
							/>
						{/each}
					</div>
					<span class="font-bold text-slate-900">{(product.rating ?? 5.0).toFixed(2)}</span>
					<span class="text-slate-500">({product.reviewsCount ?? 24})</span>
					<span class="mx-1 text-slate-300">•</span>
					<span class="text-slate-500">Digital Product</span>
				</div>

				<!-- Pricing -->
				<div class="mb-8 flex flex-col gap-1">
					<div class="flex items-center gap-3">
						<span class="text-4xl font-extrabold text-slate-900">{unitPrice}</span>
						{#if product.originalPrice}
							<span class="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-700">
								-{Math.round((1 - product.price / product.originalPrice) * 100)}%
							</span>
							<span class="text-sm text-slate-400 line-through">
								{new Intl.NumberFormat('id-ID', {
									style: 'currency',
									currency: product.currency,
									maximumFractionDigits: 0
								}).format(product.originalPrice)}
							</span>
						{/if}
					</div>
				</div>

				<!-- Format / Category -->
				<div class="mb-6">
					<div class="mb-2 text-sm text-slate-500">
						Kategori: <span class="font-semibold text-slate-900 uppercase">{product.category}</span>
					</div>
				</div>

				<!-- Quantity -->
				<div class="mb-8">
					<div class="mb-2 text-sm text-slate-500">
						Quantity: <span class="font-semibold text-slate-900">{quantity}</span>
					</div>
					<div class="flex w-[120px] items-center rounded-full border border-gray-200 p-1">
						<button
							onclick={() => (quantity = Math.max(1, quantity - 1))}
							class="flex h-8 w-8 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100"
						>
							<Minus class="h-4 w-4" />
						</button>
						<div class="flex-1 text-center text-sm font-semibold text-slate-900">
							{quantity < 10 ? `0${quantity}` : quantity}
						</div>
						<button
							onclick={() => quantity++}
							class="flex h-8 w-8 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100"
						>
							<Plus class="h-4 w-4" />
						</button>
					</div>
				</div>

				<!-- Delivery Info -->
				<div class="mb-8 border-t border-gray-100 pt-6">
					<div
						class="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3"
					>
						<span class="text-sm text-slate-500">
							Pengiriman via <span class="font-bold text-slate-900">Instant Download</span>
						</span>
						<ChevronRight class="h-4 w-4 text-slate-400" />
					</div>
				</div>
			</div>
		</div>

		<!-- Action Bar -->
		<div
			class="mb-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:p-6"
		>
			<div class="flex items-center gap-6">
				<div class="text-sm font-medium text-slate-500">
					Total Price: <span class="ml-2 text-lg font-bold text-slate-900">{formattedPrice}</span>
				</div>
			</div>

			<div class="flex flex-wrap items-center justify-center gap-3">
				<span
					class="rounded-full border border-gray-200 px-4 py-1.5 text-xs font-semibold text-slate-600"
					>{product.category.toUpperCase()}</span
				>
				<span
					class="rounded-full border border-gray-200 px-4 py-1.5 text-xs font-semibold text-slate-600"
					>Qty: {quantity}</span
				>

				<div class="ml-2 flex items-center gap-3">
					<button
						onclick={addToCart}
						class="rounded-xl border border-slate-900 bg-white px-6 py-2.5 text-sm font-bold text-slate-900 transition-all hover:bg-slate-50"
					>
						Add to cart
					</button>
					<a
						href={whatsappUrl}
						target="_blank"
						rel="noopener noreferrer external"
						class="rounded-xl bg-blue-600 px-8 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
					>
						Buy Now
					</a>
				</div>
			</div>
		</div>

		<!-- Two columns bottom area: Item Details + Seller Info -->
		<div class="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
			<!-- Item Details -->
			<div class="flex flex-col gap-6 lg:col-span-8">
				<div
					class="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] sm:p-8"
				>
					<h2 class="mb-6 text-xl font-bold text-slate-900">Item Details</h2>

					<div class="grid grid-cols-1 gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
						<div class="flex items-start">
							<span class="w-28 text-slate-500">Category:</span>
							<span class="font-medium text-slate-900 capitalize">{product.category}</span>
						</div>
						<div class="flex items-start">
							<span class="w-28 text-slate-500">Stock:</span>
							<span class="font-medium text-slate-900">{product.stock} items</span>
						</div>

						{#if product.specifications}
							{#if product.specifications.fileFormat}
								<div class="flex items-start">
									<span class="w-28 text-slate-500">Format:</span>
									<span class="font-medium text-slate-900"
										>{product.specifications.fileFormat.join(', ')}</span
									>
								</div>
							{/if}
							{#if product.specifications.fileSize}
								<div class="flex items-start">
									<span class="w-28 text-slate-500">Size:</span>
									<span class="font-medium text-slate-900">{product.specifications.fileSize}</span>
								</div>
							{/if}
							{#if product.specifications.pageCount}
								<div class="flex items-start">
									<span class="w-28 text-slate-500">Pages:</span>
									<span class="font-medium text-slate-900"
										>{product.specifications.pageCount} Pages</span
									>
								</div>
							{/if}
							{#if product.specifications.duration}
								<div class="flex items-start">
									<span class="w-28 text-slate-500">Duration:</span>
									<span class="font-medium text-slate-900">{product.specifications.duration}</span>
								</div>
							{/if}
							{#if product.specifications.language}
								<div class="flex items-start">
									<span class="w-28 text-slate-500">Language:</span>
									<span class="font-medium text-slate-900">{product.specifications.language}</span>
								</div>
							{/if}
						{/if}
					</div>

					<div class="mt-8 border-t border-gray-100 pt-6">
						<div class="prose max-w-none text-sm text-slate-600 prose-slate">
							{product.description}
						</div>
					</div>
				</div>
			</div>

			<!-- Seller Info -->
			<div class="flex flex-col gap-6 lg:col-span-4">
				<!-- Social proof -->
				<div
					class="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
				>
					<div class="mb-4 flex items-center gap-[-8px]">
						<!-- Dummy avatars -->
						<div
							class="relative z-30 h-8 w-8 rounded-full border-2 border-white bg-slate-200"
						></div>
						<div
							class="relative z-20 -ml-3 h-8 w-8 rounded-full border-2 border-white bg-slate-300"
						></div>
						<div
							class="relative z-10 -ml-3 h-8 w-8 rounded-full border-2 border-white bg-slate-400"
						></div>
					</div>
					<p class="text-xs leading-relaxed text-slate-600">
						Saved to wishlist by <span class="font-bold text-slate-900"
							>katrine, jhon, markskot</span
						>
						and <span class="font-bold text-slate-900">212 others</span>
					</p>
					<button
						class="mt-3 text-xs font-bold text-slate-900 underline decoration-slate-300 underline-offset-4"
					>
						See all interested
					</button>
				</div>

				<!-- Meet Seller -->
				<div
					class="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
				>
					<div class="mb-4 flex items-center justify-between">
						<h3 class="font-bold text-slate-900">Meet your author</h3>
						<div class="text-slate-400">...</div>
					</div>

					<div class="flex items-center gap-3">
						<div class="h-12 w-12 overflow-hidden rounded-full bg-slate-100">
							<img
								src="/images/andika.png"
								alt="Author"
								class="h-full w-full object-cover object-top"
							/>
						</div>
						<div>
							<div class="text-sm font-bold text-slate-900">I Ketut Andika Pradnyana</div>
							<div class="text-xs text-slate-500">Academic & Researcher</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Related Products Section -->
		{#if relatedProducts.length > 0}
			<section class="mb-12">
				<div class="mb-6 flex items-center justify-between">
					<h2 class="text-2xl font-bold text-slate-900">Produk Serupa</h2>
					<a
						href={resolve('/store')}
						class="flex items-center gap-1 text-sm font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-700"
					>
						Lihat Semua <ArrowRight class="h-4 w-4" />
					</a>
				</div>

				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{#each relatedProducts.slice(0, 4) as item (item.id)}
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
