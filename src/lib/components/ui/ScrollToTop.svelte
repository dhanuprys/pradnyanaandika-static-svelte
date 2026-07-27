<script lang="ts">
	import { ArrowUp } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let isVisible = $state(false);

	function handleScroll() {
		if (typeof window !== 'undefined') {
			isVisible = window.scrollY > 300;
		}
	}

	function scrollToTop() {
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

{#if isVisible}
	<button
		onclick={scrollToTop}
		transition:fade={{ duration: 200 }}
		class="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300"
		aria-label="Kembali ke atas"
	>
		<ArrowUp class="h-6 w-6" />
	</button>
{/if}
