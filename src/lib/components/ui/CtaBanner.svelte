<script lang="ts">
	import { Briefcase, ArrowRight } from '@lucide/svelte';
	import { resolve } from '$app/paths';

	let {
		title,
		description,
		buttonText,
		buttonHref = '#',
		class: className = ''
	}: {
		title: string;
		description: string;
		buttonText: string;
		buttonHref?: string;
		class?: string;
	} = $props();
</script>

<div
	class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-950 via-primary-900 to-slate-900 p-6 sm:p-10 lg:p-12 text-white shadow-2xl border border-white/10 {className}"
>
	<!-- Background pattern graphic -->
	<div
		class="absolute inset-0 opacity-15 pointer-events-none"
		style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 28px 28px;"
	></div>
	<div class="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none"></div>

	<div
		class="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left"
	>
		<div class="flex flex-col items-center gap-4 sm:flex-row sm:items-center md:gap-5">
			<div
				class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-400 backdrop-blur-md border border-white/15 shadow-inner"
			>
				<Briefcase class="h-7 w-7" />
			</div>
			<div>
				<h2 class="mb-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
					{title}
				</h2>
				<p class="max-w-xl text-sm sm:text-base leading-relaxed text-slate-300">
					{description}
				</p>
			</div>
		</div>

		<div class="w-full shrink-0 sm:w-auto mt-2 md:mt-0">
			<a
				href={resolve(buttonHref)}
				class="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-extrabold text-slate-900 shadow-xl transition-all hover:bg-blue-50 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/30"
			>
				{buttonText} <ArrowRight class="h-4 w-4 text-blue-600" />
			</a>
		</div>
	</div>
</div>
