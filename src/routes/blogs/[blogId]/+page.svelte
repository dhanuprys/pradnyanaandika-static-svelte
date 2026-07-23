<script lang="ts">
	import type { Component } from 'svelte';

	let { data } = $props();

	const Content: Component = $derived(data.content);
</script>

<Content />
