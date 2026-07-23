<script lang="ts">
	import type { BlogPost } from '$lib/data/blogs/types';

	let { post }: { post: BlogPost } = $props();

	const formattedDate = $derived(
		new Date(post.metadata.date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		})
	);
</script>

<a href="/blogs/{post.slug}" class="group block">
	<article class="rounded-lg border border-gray-200 p-5 transition-colors hover:border-gray-400">
		<h2 class="text-lg font-semibold text-gray-900 group-hover:underline">
			{post.metadata.title}
		</h2>

		<p class="mt-2 line-clamp-2 text-sm text-gray-600">
			{post.metadata.description}
		</p>

		<div class="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
			<time datetime={post.metadata.date}>{formattedDate}</time>
			<span>·</span>
			<span>{post.readingTime}</span>
		</div>

		{#if post.metadata.tags.length > 0}
			<div class="mt-2 flex flex-wrap gap-1.5">
				{#each post.metadata.tags as tag}
					<span
						class="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
					>
						{tag}
					</span>
				{/each}
			</div>
		{/if}
	</article>
</a>
