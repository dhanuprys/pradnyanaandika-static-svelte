<script lang="ts">
	import { Briefcase } from '@lucide/svelte';
	import Button from './Button.svelte';

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
	class="relative overflow-hidden rounded-2xl bg-primary-800 p-8 text-white shadow-xl sm:p-12 {className}"
>
	<!-- Background pattern -->
	<div
		class="absolute inset-0 opacity-10"
		style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 24px 24px;"
	></div>

	<div
		class="relative z-10 flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left"
	>
		<div class="flex items-start gap-4 md:items-center">
			<div
				class="hidden h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm md:flex"
			>
				<Briefcase class="h-8 w-8" />
			</div>
			<div>
				<h2 class="mb-2 text-2xl font-bold sm:text-3xl">{title}</h2>
				<p class="max-w-xl text-primary-100">{description}</p>
			</div>
		</div>

		<div class="shrink-0">
			<Button
				variant="secondary"
				size="lg"
				href={buttonHref}
				class="w-full bg-white font-bold whitespace-nowrap text-primary-900 hover:bg-gray-100 focus:ring-white sm:w-auto"
			>
				{buttonText}
			</Button>
		</div>
	</div>
</div>
