<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href = undefined,
		type = 'button',
		variant = 'primary', // primary, secondary, outline, ghost
		size = 'md', // sm, md, lg
		class: className = '',
		children,
		...rest
	}: {
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		class?: string;
		children: Snippet;
		[key: string]: unknown;
	} = $props();

	const baseClasses =
		'inline-flex items-center justify-center font-semibold rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

	const variantClasses = {
		primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-600',
		secondary: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500',
		outline:
			'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-600',
		ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-600'
	};

	const sizeClasses = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-sm',
		lg: 'px-6 py-3 text-base'
	};

	let classes = $derived(
		`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
	);
</script>

{#if href}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a {href} class={classes} {...rest}>
		{@render children()}
	</a>
{:else}
	<button {type} class={classes} {...rest}>
		{@render children()}
	</button>
{/if}
