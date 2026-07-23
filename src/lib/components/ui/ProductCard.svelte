<script lang="ts">
	import { ShoppingCart, Star } from '@lucide/svelte';
	import Button from './Button.svelte';

	let {
		image,
		title,
		description,
		price,
		rating,
		reviews,
		href = '/',
		class: className = ''
	}: {
		image: string;
		title: string;
		description: string;
		price: string;
		rating: number;
		reviews: number;
		href?: string;
		class?: string;
	} = $props();
</script>

<div
	class="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md {className}"
>
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a {href} class="block aspect-4/3 w-full overflow-hidden">
		<img
			src={image}
			alt={title}
			class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
		/>
	</a>
	<div class="flex flex-1 flex-col p-5">
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a {href} class="mb-1 transition-colors hover:text-primary-600">
			<h3 class="line-clamp-2 font-bold text-slate-900">{title}</h3>
		</a>
		<p class="mb-4 line-clamp-2 flex-1 text-xs text-slate-500">{description}</p>

		<div class="mt-auto flex items-end justify-between">
			<div>
				<div class="text-lg font-bold text-primary-700">{price}</div>
				<div class="mt-1 flex items-center gap-1">
					<div class="flex text-accent-500">
						{#each [0, 1, 2, 3, 4] as i (i)}
							<Star class="h-3 w-3 {i < Math.floor(rating) ? 'fill-current' : 'text-gray-300'}" />
						{/each}
					</div>
					<span class="text-[10px] text-slate-500">({reviews})</span>
				</div>
			</div>
			<Button variant="primary" size="sm" class="rounded-lg px-3! py-2!">
				<ShoppingCart class="h-4 w-4" />
			</Button>
		</div>
	</div>
</div>
