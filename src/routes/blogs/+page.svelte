<script lang="ts">
	import BlogCard from '$lib/components/blog/BlogCard.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog | Pradnya</title>
	<meta name="description" content="Blog posts from Pradnya" />
</svelte:head>

<main class="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
	<h1 class="text-3xl font-bold tracking-tight text-gray-900">Blog</h1>

	{#if data.posts.length === 0}
		<p class="mt-6 text-gray-500">No posts yet.</p>
	{:else}
		<div class="mt-6 flex flex-col gap-4">
			{#each data.posts as post (post.slug)}
				<BlogCard {post} />
			{/each}
		</div>
	{/if}
</main>
