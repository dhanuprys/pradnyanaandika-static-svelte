<script lang="ts">
	import type { Product } from '$lib/data/products/types';

	const { product }: { product: Product } = $props();

	// Slideshow state
	let activeImageIndex = $state(0);

	const formattedPrice = $derived(
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: product.currency
		}).format(product.price)
	);
</script>

<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
		<!-- Image gallery -->
		<div class="flex flex-col-reverse">
			<!-- Image selector -->
			<div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
				<div class="grid grid-cols-4 gap-6">
					{#each product.images as image, i (i)}
						<button
							onclick={() => (activeImageIndex = i)}
							onkeydown={(e) => {
								if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
									e.preventDefault();
									activeImageIndex = (i + 1) % product.images.length;
								} else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
									e.preventDefault();
									activeImageIndex = (i - 1 + product.images.length) % product.images.length;
								}
							}}
							aria-current={activeImageIndex === i ? 'true' : undefined}
							class="focus:ring-opacity-50 relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white/5 text-sm font-medium text-gray-900 uppercase hover:bg-white/10 focus:ring focus:ring-offset-4 focus:outline-none"
							class:ring-2={activeImageIndex === i}
							class:ring-primary-500={activeImageIndex === i}
						>
							<span class="sr-only">View image {i + 1}</span>
							<span class="absolute inset-0 overflow-hidden rounded-md">
								<img
									src={image}
									alt=""
									loading="lazy"
									decoding="async"
									class="h-full w-full object-cover object-center"
								/>
							</span>
							<!-- Active overlay -->
							<span
								class="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2"
								class:ring-primary-500={activeImageIndex === i}
								aria-hidden="true"
							></span>
						</button>
					{/each}
				</div>
			</div>

			<!-- Main image -->
			<div
				class="aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl"
			>
				<img
					src={product.images[activeImageIndex]}
					alt={product.name}
					class="h-full w-full object-cover object-center transition-all duration-500 sm:rounded-lg"
				/>
			</div>
		</div>

		<!-- Product info -->
		<div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
			<h1 class="text-3xl font-bold tracking-tight text-white">{product.name}</h1>

			<div class="mt-3">
				<h2 class="sr-only">Product information</h2>
				<p class="text-3xl tracking-tight text-primary-300">{formattedPrice}</p>
			</div>

			<div class="mt-6">
				<h3 class="sr-only">Description</h3>
				<div class="space-y-6 text-base text-gray-300">
					<!-- Replace newlines with <br> for simple formatting if needed, or just render directly -->
					<p>{product.description}</p>
				</div>
			</div>

			{#if product.features && product.features.length > 0}
				<div class="mt-8">
					<h3 class="text-lg font-medium text-white">Highlights</h3>
					<div class="mt-4">
						<ul class="list-disc space-y-2 pl-4 text-sm text-gray-300 marker:text-primary-500">
							{#each product.features as feature (feature)}
								<li>{feature}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/if}

			{#if product.tags && product.tags.length > 0}
				<div class="mt-8">
					<h3 class="mb-3 text-sm font-medium text-white">Tags</h3>
					<div class="flex flex-wrap gap-2">
						{#each product.tags as tag (tag)}
							<span
								class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-gray-300"
							>
								{tag}
							</span>
						{/each}
					</div>
				</div>
			{/if}

			<div class="mt-10 flex">
				{#if product.stock > 0}
					<button
						type="button"
						class="flex max-w-xs flex-1 items-center justify-center rounded-xl bg-primary-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none sm:w-full"
					>
						Contact to Buy
					</button>
				{:else}
					<button
						type="button"
						disabled
						class="flex max-w-xs flex-1 cursor-not-allowed items-center justify-center rounded-xl bg-gray-700 px-8 py-3 text-base font-medium text-gray-400 sm:w-full"
					>
						Out of Stock
					</button>
				{/if}
			</div>
		</div>
	</div>
</div>
