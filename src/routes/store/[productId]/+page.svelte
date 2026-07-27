<script lang="ts">
	import ProductDetail from '$lib/components/store/ProductDetail.svelte';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { SITE_CONFIG } from '$lib/config/site';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
	const product = $derived(data.product);
	const relatedProducts = $derived(data.relatedProducts);

	const productSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: product.name,
		description: product.description || product.shortDescription,
		image: product.images,
		offers: {
			'@type': 'Offer',
			priceCurrency: product.currency,
			price: product.price,
			availability: 'https://schema.org/InStock'
		},
		brand: {
			'@type': 'Brand',
			name: SITE_CONFIG.name
		}
	});
</script>

<SEO
	title="{product.name} | Dr. I Ketut Andika Pradnyana"
	description={product.shortDescription || product.description}
	canonical="{SITE_CONFIG.url}/store/{product.id}"
	type="product"
	image={product.images[0]}
	jsonLd={productSchema}
/>

<ProductDetail {product} {relatedProducts} />
