<script lang="ts">
	import ProductDetail from '$lib/components/store/ProductDetail.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
	const product = $derived(data.product);
</script>

<svelte:head>
	<title>{product.name} | Store | Pradnya</title>
	<meta name="description" content={product.shortDescription} />
	<meta property="og:title" content={product.name} />
	<meta property="og:description" content={product.shortDescription} />
	<meta property="og:image" content={product.images[0]} />
	<meta property="og:type" content="product" />
	<!-- Basic SEO for product price -->
	<meta property="product:price:amount" content={product.price.toString()} />
	<meta property="product:price:currency" content={product.currency} />
</svelte:head>

<ProductDetail {product} />
