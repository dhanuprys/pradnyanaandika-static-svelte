<script lang="ts">
	import { Cpu, Check, Sparkles, ArrowRight } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import type { EdtechInnovation } from '$cms';

	let { innovation }: { innovation: EdtechInnovation } = $props();
</script>

<div
	class="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
>
	<!-- Cover Image with Sleek Status Pill -->
	<div class="relative aspect-video w-full overflow-hidden bg-slate-900">
		<img
			src={innovation.image}
			alt={innovation.title}
			class="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20"
		></div>

		<span
			class="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-lg bg-blue-600/90 px-2.5 py-1 text-[11px] font-extrabold text-white shadow-xs backdrop-blur-md"
		>
			<Sparkles class="h-3 w-3" />
			{innovation.status} Engine
		</span>
	</div>

	<div class="flex flex-1 flex-col p-5 sm:p-6">
		<!-- Title -->
		<h3
			class="mb-2 text-base leading-snug font-extrabold text-slate-900 transition-colors group-hover:text-blue-600 sm:text-lg"
		>
			{innovation.title}
		</h3>

		<!-- Description -->
		<p class="mb-4 line-clamp-3 text-xs leading-relaxed text-slate-600">
			{innovation.description}
		</p>

		<!-- Tech Stack Pills -->
		<div class="mb-4 flex flex-wrap gap-1.5">
			{#each innovation.techStack as tech (tech)}
				<span
					class="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700"
				>
					<Cpu class="h-2.5 w-2.5 text-blue-600" />
					{tech}
				</span>
			{/each}
		</div>

		<!-- Key Features Box -->
		<div class="mt-auto rounded-xl border border-slate-100 bg-slate-50 p-3.5">
			<h4 class="mb-2 text-[11px] font-extrabold tracking-wider text-slate-700 uppercase">
				Fitur Utama:
			</h4>
			<ul class="mb-3.5 space-y-1.5">
				{#each innovation.features as feature (feature)}
					<li class="flex items-start gap-2 text-xs font-medium text-slate-700">
						<Check class="mt-0.5 h-3.5 w-3.5 shrink-0 stroke-[2.5] text-blue-600" />
						<span>{feature}</span>
					</li>
				{/each}
			</ul>

			<a
				href={resolve(`/portofolio/inovasi/${innovation.id}`)}
				class="inline-flex min-h-[40px] w-full items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white active:scale-95"
			>
				Lihat Detail Inovasi <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</div>
