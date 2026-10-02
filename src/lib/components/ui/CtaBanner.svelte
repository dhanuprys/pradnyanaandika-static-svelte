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
	class="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-primary-950 via-primary-900 to-slate-900 p-6 text-white shadow-2xl sm:p-10 lg:p-12 {className}"
>
	<!-- Background pattern graphic -->
	<div
		class="pointer-events-none absolute inset-0 opacity-15"
		style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 28px 28px;"
	></div>
	<div
		class="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
	></div>

	<div
		class="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left"
	>
		<div class="flex flex-col items-center gap-4 sm:flex-row sm:items-center md:gap-5">
			<div
				class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-blue-400 shadow-inner backdrop-blur-md"
			>
				<Briefcase class="h-7 w-7" />
			</div>
			<div>
				<h2 class="mb-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
					{title}
				</h2>
				<p class="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
					{description}
				</p>
			</div>
		</div>

		<div class="mt-2 w-full shrink-0 sm:w-auto md:mt-0">
			<a
				href={resolve(buttonHref as '/')}
				class="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-extrabold text-slate-900 shadow-xl transition-all hover:scale-105 hover:bg-blue-50 focus:ring-4 focus:ring-white/30 focus:outline-none active:scale-95 sm:w-auto"
			>
				{buttonText}
				<ArrowRight class="h-4 w-4 text-blue-600" />
			</a>
		</div>
	</div>
</div>
