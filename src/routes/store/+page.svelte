<script lang="ts">
	import ProductCard from '$lib/components/store/ProductCard.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Store | Pradnya</title>
	<meta name="description" content="Browse our catalog of premium products." />
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="text-center">
		<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Store</h1>
		<p class="mx-auto mt-4 max-w-2xl text-xl text-gray-400">
			Discover our curated collection of premium goods.
		</p>
	</div>

	{#if data.products.length === 0}
		<div class="mt-16 text-center">
			<p class="text-gray-400">No products available at the moment. Check back soon!</p>
		</div>
	{:else}
		<div class="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
			{#each data.products as product (product.id)}
				<ProductCard {product} />
			{/each}
		</div>
	{/if}
</div>
