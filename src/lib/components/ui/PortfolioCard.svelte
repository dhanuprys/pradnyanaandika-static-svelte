<script lang="ts">
	import { ExternalLink, FlaskConical } from '@lucide/svelte';

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
	class="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-200 {className}"
>
	<div class="relative aspect-video w-full overflow-hidden bg-slate-900">
		<img
			src={image}
			alt={title}
			class="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20"></div>

		<span
			class="absolute top-3 left-3 inline-flex items-center gap-1 rounded-lg bg-blue-600 px-2.5 py-1 text-[11px] font-extrabold text-white backdrop-blur-md shadow-md"
		>
			<FlaskConical class="h-3 w-3" /> {category}
		</span>
	</div>

	<div class="flex flex-1 flex-col p-5 sm:p-6">
		<h3 class="mb-2 text-base font-extrabold leading-snug text-slate-900 group-hover:text-blue-600 sm:text-lg transition-colors">
			{title}
		</h3>
		<p class="mb-5 flex-1 text-xs leading-relaxed text-slate-600 line-clamp-3 sm:text-sm">
			{description}
		</p>
		<div class="mt-auto border-t border-gray-100 pt-4">
			<a
				{href}
				target={href.startsWith('http') ? '_blank' : '_self'}
				rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
				class="inline-flex min-h-[42px] w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-800 transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 active:scale-95"
			>
				Detail Penelitian <ExternalLink class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</div>
