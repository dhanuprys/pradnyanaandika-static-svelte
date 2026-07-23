<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Product } from '$lib/data/products/types';

	const { product }: { product: Product } = $props();

	// Format price properly based on currency
	const formattedPrice = $derived(
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: product.currency
		}).format(product.price)
	);
</script>

<a
	href={resolve(`/store/${product.id}`)}
	class="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-xl hover:shadow-primary-500/10"
>
	<div class="aspect-square w-full overflow-hidden bg-white/5">
		<img
			src={product.images[0]}
			alt={product.name}
			loading="lazy"
			decoding="async"
			class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
		/>
	</div>

	<div class="flex flex-1 flex-col p-5">
		<div class="mb-2 flex items-start justify-between gap-4">
			<h3 class="text-xl font-semibold text-white">{product.name}</h3>
			<span class="font-medium text-primary-300">{formattedPrice}</span>
		</div>
		
		<p class="mb-4 line-clamp-2 flex-1 text-sm text-gray-400">{product.shortDescription}</p>

		<div class="mt-auto flex items-center justify-between">
			<div class="flex gap-2">
				{#if product.stock > 0}
					<span class="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400">
						In Stock
					</span>
				{:else}
					<span class="inline-flex items-center rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-medium text-red-400">
						Out of Stock
					</span>
				{/if}
			</div>
			
			<span class="text-sm font-medium text-white/50 transition-colors group-hover:text-white">
				View Details &rarr;
			</span>
		</div>
	</div>
</a>
