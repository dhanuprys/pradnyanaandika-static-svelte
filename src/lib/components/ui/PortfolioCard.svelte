<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import Button from './Button.svelte';

	let {
		image,
		category,
		title,
		description,
		href = '#',
		class: className = ''
	}: {
		image: string;
		category: string;
		title: string;
		description: string;
		href?: string;
		class?: string;
	} = $props();
</script>

<div
	class="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md {className}"
>
	<div class="aspect-video w-full overflow-hidden">
		<img
			src={image}
			alt={title}
			class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
		/>
	</div>
	<div class="flex flex-1 flex-col p-6">
		<div class="mb-3">
			<span
				class="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-semibold text-primary-700"
			>
				{category}
			</span>
		</div>
		<h3 class="mb-2 text-xl font-bold text-slate-900">{title}</h3>
		<p class="mb-6 line-clamp-3 flex-1 text-sm text-slate-600">{description}</p>
		<div class="mt-auto">
			<Button variant="outline" size="sm" {href} class="w-full sm:w-auto">
				Selengkapnya <ArrowRight class="ml-2 h-4 w-4" />
			</Button>
		</div>
	</div>
</div>
