<script lang="ts">
	import { resolve } from '$app/paths';
import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} | Pradnya</title>
</svelte:head>

<main class="grid min-h-full place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 h-screen">
	<div class="text-center">
		<p class="text-base font-semibold text-primary-500">{$page.status}</p>
		<h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
			{#if $page.status === 404}
				Page not found
			{:else}
				Something went wrong
			{/if}
		</h1>
		<p class="mt-6 text-base leading-7 text-gray-400">
			{$page.error?.message || 'Sorry, we couldn\'t find the page you\'re looking for.'}
		</p>
		<div class="mt-10 flex items-center justify-center gap-x-6">
			<a
				href={resolve('/')}
				class="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
			>
				Go back home
			</a>
			<a href={resolve('/store')} class="text-sm font-semibold text-white transition-colors hover:text-gray-300">
				Browse store <span aria-hidden="true">&rarr;</span>
			</a>
		</div>
	</div>
</main>
