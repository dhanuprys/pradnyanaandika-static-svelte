<script lang="ts">
	import { MapPin, Users, CheckCircle2, Building2, Calendar } from '@lucide/svelte';
	import type { PengabdianProgram } from '$lib/data/pengabdian/types';

	let { program }: { program: PengabdianProgram } = $props();
</script>

<div
	class="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300"
>
	<!-- Cover Image with Sleek Badges -->
	<div class="relative aspect-video w-full overflow-hidden bg-slate-900">
		<img
			src={program.image}
			alt={program.title}
			class="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20"></div>

		<!-- Location Pill -->
		<span
			class="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-lg bg-slate-900/80 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md border border-white/10 shadow-xs"
		>
			<MapPin class="h-3.5 w-3.5 text-blue-400" /> {program.location}
		</span>

		<!-- Beneficiary Impact Pill -->
		<span
			class="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-lg bg-blue-600/90 px-3 py-1 text-[11px] font-extrabold text-white backdrop-blur-md shadow-xs"
		>
			<Users class="h-3.5 w-3.5" /> Dampak: {program.beneficiaries}
		</span>
	</div>

	<div class="flex flex-1 flex-col p-5 sm:p-6">
		<!-- Partner Header -->
		<div class="mb-2.5 flex items-center justify-between text-xs font-semibold text-slate-600">
			<div class="flex items-center gap-1.5">
				<Building2 class="h-3.5 w-3.5 text-blue-600" />
				<span class="line-clamp-1">Mitra: {program.partner}</span>
			</div>
			<span class="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 shrink-0">
				<Calendar class="h-3 w-3" /> {program.year}
			</span>
		</div>

		<!-- Title -->
		<h3 class="mb-2 text-base font-extrabold leading-snug text-slate-900 group-hover:text-blue-600 sm:text-lg transition-colors">
			{program.title}
		</h3>

		<!-- Description -->
		<p class="mb-4 text-xs leading-relaxed text-slate-600 line-clamp-2">
			{program.description}
		</p>

		<!-- Outcomes Box -->
		<div class="mt-auto rounded-xl border border-slate-100 bg-slate-50 p-3.5">
			<h4 class="mb-2 text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
				Capaian & Hasil Program:
			</h4>
			<ul class="space-y-1.5">
				{#each program.outcomes as outcome (outcome)}
					<li class="flex items-start gap-2 text-xs font-medium text-slate-700">
						<CheckCircle2 class="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" />
						<span>{outcome}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
