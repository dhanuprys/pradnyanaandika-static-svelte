<script lang="ts">
	import { ExternalLink, Cpu, Check, Sparkles } from '@lucide/svelte';
	import type { EdtechInnovation } from '$lib/data/inovasi/types';

	let { innovation }: { innovation: EdtechInnovation } = $props();
</script>

<div
	class="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300"
>
	<!-- Cover Image with Sleek Status Pill -->
	<div class="relative aspect-video w-full overflow-hidden bg-slate-900">
		<img
			src={innovation.image}
			alt={innovation.title}
			class="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20"></div>

		<span
			class="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-lg bg-blue-600/90 px-2.5 py-1 text-[11px] font-extrabold text-white backdrop-blur-md shadow-xs"
		>
			<Sparkles class="h-3 w-3" /> {innovation.status} Engine
		</span>
	</div>

	<div class="flex flex-1 flex-col p-5 sm:p-6">
		<!-- Title -->
		<h3 class="mb-2 text-base font-extrabold leading-snug text-slate-900 group-hover:text-blue-600 sm:text-lg transition-colors">
			{innovation.title}
		</h3>

		<!-- Description -->
		<p class="mb-4 text-xs leading-relaxed text-slate-600 line-clamp-3">
			{innovation.description}
		</p>

		<!-- Tech Stack Pills -->
		<div class="mb-4 flex flex-wrap gap-1.5">
			{#each innovation.techStack as tech (tech)}
				<span class="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
					<Cpu class="h-2.5 w-2.5 text-blue-600" /> {tech}
				</span>
			{/each}
		</div>

		<!-- Key Features Box -->
		<div class="mt-auto rounded-xl border border-slate-100 bg-slate-50 p-3.5">
			<h4 class="mb-2 text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
				Fitur Utama:
			</h4>
			<ul class="space-y-1.5 mb-3.5">
				{#each innovation.features as feature (feature)}
					<li class="flex items-start gap-2 text-xs font-medium text-slate-700">
						<Check class="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600 stroke-[2.5]" />
						<span>{feature}</span>
					</li>
				{/each}
			</ul>

			{#if innovation.demoUrl}
				<a
					href={innovation.demoUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex min-h-[40px] w-full items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 active:scale-95"
				>
					Coba Demo / Informasi <ExternalLink class="h-3.5 w-3.5" />
				</a>
			{/if}
		</div>
	</div>
</div>
