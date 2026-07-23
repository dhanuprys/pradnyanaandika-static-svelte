<script lang="ts">
	let {
		title,
		align = 'center', // left, center, right
		class: className = ''
	}: {
		title: string;
		align?: 'left' | 'center' | 'right';
		class?: string;
	} = $props();
</script>

<div
	class="mb-10 {align === 'center'
		? 'text-center'
		: align === 'right'
			? 'text-right'
			: 'text-left'} {className}"
>
	<h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
		{title}
	</h2>
	<div
		class="mt-4 flex {align === 'center'
			? 'justify-center'
			: align === 'right'
				? 'justify-end'
				: 'justify-start'}"
	>
		<div class="h-1 w-20 rounded bg-primary-600"></div>
	</div>
</div>
