<script lang="ts">
	import type { Component } from 'svelte';

	let {
		icon: IconComponent,
		value,
		label,
		class: className = ''
	}: {
		icon: Component;
		value: string;
		label: string;
		class?: string;
	} = $props();
</script>

<div class="flex items-center gap-4 p-4 {className}">
	<div
		class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600"
	>
		<IconComponent class="h-6 w-6" />
	</div>
	<div>
		<div class="text-2xl font-bold text-slate-900">{value}</div>
		<div class="text-sm text-slate-500">{label}</div>
	</div>
</div>
