<script lang="ts">
	import { ExternalLink, BookOpen, Quote, FileText } from '@lucide/svelte';
	import type { AcademicPublication } from '$lib/data/publications/types';

	let { publication }: { publication: AcademicPublication } = $props();
</script>

<div
	class="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300"
>
	<div>
		<!-- Top Metadata Header: Indexing Pill & Citation Count -->
		<div class="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3.5">
			<span
				class="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-blue-700 border border-blue-100"
			>
				<BookOpen class="h-3.5 w-3.5 text-blue-600" /> {publication.indexing}
			</span>

			<div class="flex items-center gap-2 text-xs font-semibold text-slate-500">
				{#if publication.citationCount}
					<span class="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-700">
						<Quote class="h-3 w-3 text-blue-600" /> {publication.citationCount} Sitasi
					</span>
				{/if}
				<span class="font-bold text-slate-700">{publication.year}</span>
			</div>
		</div>

		<!-- Title -->
		<h3 class="mb-2 text-base font-extrabold leading-snug text-slate-900 group-hover:text-blue-600 sm:text-lg transition-colors">
			{publication.title}
		</h3>

		<!-- Journal Name & Publisher -->
		<div class="mb-3 flex items-center gap-1.5 text-xs font-bold text-blue-600">
			<FileText class="h-3.5 w-3.5 shrink-0" />
			<span>{publication.journal} {publication.publisher ? `(${publication.publisher})` : ''}</span>
		</div>

		<!-- Authors List -->
		<p class="mb-4 text-xs font-medium text-slate-500 line-clamp-1">
			{publication.authors.join(', ')}
		</p>

		<!-- Abstract -->
		<p class="mb-5 line-clamp-3 text-xs leading-relaxed text-slate-600">
			{publication.abstract}
		</p>
	</div>

	<!-- Action Footer -->
	<div class="mt-auto border-t border-gray-100 pt-4">
		{#if publication.targetUrl || publication.doi}
			<a
				href={publication.targetUrl || `https://doi.org/${publication.doi}`}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex min-h-[40px] w-full items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-800 transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 active:scale-95"
			>
				Baca Journal / DOI <ExternalLink class="h-3.5 w-3.5" />
			</a>
		{:else}
			<span class="text-xs text-slate-400">Jurnal Tersedia di Database Scopus</span>
		{/if}
	</div>
</div>
