<script lang="ts">
	import CartDrawer from '$lib/components/store/CartDrawer.svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/stores';
	import { ShoppingCart, Search, Menu, X } from '@lucide/svelte';
	import { slide } from 'svelte/transition';
	import { cart } from '$lib/stores/cart.svelte';

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Tentang', href: '/about' },
		{ name: 'Portofolio', href: '/portofolio' },
		{ name: 'Store', href: '/store' },
		{ name: 'Blog', href: '/blogs' },
		{ name: 'Kontak', href: '/contact' }
	] as const;

	let isMenuOpen = $state(false);
	let isCartOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function isActive(href: string, pathname: string) {
		if (href === '/') {
			return pathname === '/';
		}
		return pathname === href || pathname.startsWith(href + '/');
	}

	let isDarkTheme = $derived(
		$page.url.pathname === '/about' ||
			$page.url.pathname === '/' ||
			$page.url.pathname.startsWith('/blogs') ||
			$page.url.pathname === '/contact'
	);
</script>

<header
	class="inset-x-0 top-0 z-50 transition-all duration-300
	{isDarkTheme ? 'absolute bg-transparent text-white' : 'sticky bg-white text-slate-800 shadow-sm'}"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<!-- Logo -->
			<div class="flex shrink-0 items-center">
				<a href={resolve('/')} class="flex items-center gap-2">
					<svg
						class="h-8 w-8 {isDarkTheme ? 'text-blue-400' : 'text-primary-800'}"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
						<path
							d="M12 9l-4 8h8l-4-8z"
							class={isDarkTheme ? 'text-blue-300' : 'text-primary-500'}
						/>
					</svg>
					<span
						class="text-xl font-bold tracking-tight {isDarkTheme
							? 'text-white'
							: 'text-primary-900'}"
					>
						ANDIKA <span
							class={isDarkTheme ? 'font-normal text-blue-300' : 'font-normal text-slate-600'}
							>ACADEMY</span
						>
					</span>
				</a>
			</div>

			<!-- Desktop Nav -->
			<nav class="hidden space-x-8 md:flex">
				{#each navLinks as link (link.href)}
					<a
						href={resolve(link.href)}
						class="inline-flex items-center border-b-4 px-1 pt-1 pb-2 text-sm font-medium transition-colors
						{isActive(link.href, $page.url.pathname)
							? isDarkTheme
								? 'border-blue-400 font-bold text-blue-400'
								: 'border-primary-600 font-bold text-primary-700'
							: isDarkTheme
								? 'border-transparent text-slate-300 hover:border-slate-400 hover:text-white'
								: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}"
					>
						{link.name}
					</a>
				{/each}
			</nav>

			<!-- Right Icons (Desktop & Mobile) -->
			<div class="flex items-center gap-4">
				<button
					onclick={() => (isCartOpen = true)}
					aria-label="Keranjang Belanja"
					class="relative p-2 transition-all rounded-xl hover:bg-white/10 active:scale-95 {isDarkTheme
						? 'text-slate-300 hover:text-white'
						: 'text-gray-600 hover:text-blue-600'}"
				>
					<ShoppingCart class="h-5 w-5" />
					{#if cart.totalItems > 0}
						<span
							class="absolute top-0 right-0 inline-flex translate-x-1/4 -translate-y-1/4 transform items-center justify-center rounded-full bg-blue-600 px-1.5 py-0.5 text-xs leading-none font-bold text-white shadow-xs"
							>{cart.totalItems}</span
						>
					{/if}
				</button>
				<button
					class="hidden p-2 transition-colors sm:block {isDarkTheme
						? 'text-slate-300 hover:text-white'
						: 'text-gray-500 hover:text-primary-600'}"
				>
					<Search class="h-5 w-5" />
				</button>

				<!-- Mobile menu button -->
				<button
					type="button"
					class="rounded-xl p-2.5 transition-colors md:hidden {isDarkTheme
						? 'text-slate-300 hover:bg-white/10 hover:text-white'
						: 'text-slate-600 hover:bg-slate-100 hover:text-primary-600'}"
					onclick={toggleMenu}
					aria-expanded={isMenuOpen}
				>
					<span class="sr-only">Open main menu</span>
					{#if isMenuOpen}
						<X class="h-6 w-6" />
					{:else}
						<Menu class="h-6 w-6" />
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Nav Drawer -->
	{#if isMenuOpen}
		<div
			class="border-t backdrop-blur-xl md:hidden shadow-2xl border-b rounded-b-3xl overflow-hidden transition-all duration-300
			{isDarkTheme ? 'border-white/10 bg-slate-950/95 text-white' : 'border-slate-200/80 bg-white/95 text-slate-800'}"
			transition:slide={{ duration: 250 }}
		>
			<div class="space-y-1.5 px-4 pt-3 pb-4">
				{#each navLinks as link (link.href)}
					<a
						href={resolve(link.href)}
						onclick={() => (isMenuOpen = false)}
						class="flex min-h-[44px] items-center rounded-xl border-l-4 py-2.5 pr-4 pl-4 text-base font-semibold transition-all
						{isActive(link.href, $page.url.pathname)
							? isDarkTheme
								? 'border-blue-400 bg-blue-500/15 font-bold text-blue-300'
								: 'border-primary-600 bg-primary-50 font-bold text-primary-700'
							: isDarkTheme
								? 'border-transparent text-slate-300 hover:bg-white/10 hover:text-white'
								: 'border-transparent text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900'}"
					>
						{link.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</header>

<!-- Interactive Cart Drawer -->
<CartDrawer isOpen={isCartOpen} onClose={() => (isCartOpen = false)} />
