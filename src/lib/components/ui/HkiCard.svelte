<script lang="ts">
	import { ShieldCheck, FileCheck, Calendar, UserCheck } from '@lucide/svelte';
	import type { HkiRecord } from '$lib/data/hki/types';

	let { record }: { record: HkiRecord } = $props();
</script>

<div
	class="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300"
>
	<div>
		<!-- HKI Header Pill & Reg Number -->
		<div class="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3.5">
			<span
				class="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700 border border-blue-100"
			>
				<ShieldCheck class="h-3.5 w-3.5" /> {record.hkiType}
			</span>

			<div class="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
				<FileCheck class="h-3.5 w-3.5 text-blue-600" />
				<span>No: {record.registrationNumber}</span>
			</div>
		</div>

		<!-- Title -->
		<h3 class="mb-3 text-base font-extrabold leading-snug text-slate-900 group-hover:text-blue-600 sm:text-lg transition-colors">
			{record.title}
		</h3>

		<!-- Creators List -->
		<div class="mb-3 flex items-start gap-2 text-xs font-medium text-slate-600">
			<UserCheck class="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" />
			<span>{record.creators.join(', ')}</span>
		</div>

		<!-- Description -->
		<p class="mb-4 text-xs leading-relaxed text-slate-600 line-clamp-3">
			{record.description}
		</p>
	</div>

	<!-- Footer with Registration Date -->
	<div class="mt-auto flex items-center justify-between border-t border-gray-100 pt-3.5 text-xs text-slate-500">
		<div class="flex items-center gap-1.5 font-medium text-slate-500">
			<Calendar class="h-3.5 w-3.5 text-slate-400" />
			<span>Terdaftar: {record.registrationDate}</span>
		</div>

		<span class="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-700">
			DJKI Kemenkumham
		</span>
	</div>
</div>
