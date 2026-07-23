<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';

	let {
		image,
		category,
		title,
		date,
		href = '/',
		class: className = ''
	}: {
		image: string;
		category: string;
		title: string;
		date: string;
		href?: string;
		class?: string;
	} = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	{href}
	class="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white transition-all hover:shadow-lg {className}"
>
	<div class="aspect-video w-full overflow-hidden">
		<img
			src={image}
			alt={title}
			class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
		/>
	</div>
	<div class="flex flex-1 flex-col p-5">
		<div class="mb-3 flex items-center justify-between text-xs">
			<span class="font-semibold text-primary-600">{category}</span>
			<span class="text-slate-500">{date}</span>
		</div>
		<h3
			class="mb-4 line-clamp-2 text-lg leading-tight font-bold text-slate-900 transition-colors group-hover:text-primary-700"
		>
			{title}
		</h3>
		<div class="mt-auto flex items-center text-sm font-semibold text-primary-600">
			Baca Artikel <ArrowRight
				class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
			/>
		</div>
	</div>
</a>
