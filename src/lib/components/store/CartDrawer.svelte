<script lang="ts">
	import { X, Trash2, ShoppingBag, ArrowRight } from '@lucide/svelte';
	import { slide, fade } from 'svelte/transition';
	import { resolve } from '$app/paths';
	import { cart } from '$lib/stores/cart.svelte';
	import { toast } from 'svelte-sonner';

	interface Props {
		isOpen: boolean;
		onClose: () => void;
	}

	let { isOpen, onClose }: Props = $props();

	function removeItem(id: string, name: string) {
		cart.remove(id);
		toast.info('Item dihapus', {
			description: `${name} telah dihapus dari keranjang.`
		});
	}

	function updateQuantity(id: string, delta: number) {
		cart.updateQuantity(id, delta);
	}

	let formattedTotal = $derived(
		new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			maximumFractionDigits: 0
		}).format(cart.totalPrice)
	);

	function checkoutViaWhatsApp() {
		if (cart.items.length === 0) return;
		const summary = cart.items
			.map((item) => `- ${item.name} (${item.quantity}x)`)
			.join('%0A');
		const message = `Halo Dr. Andika, saya berminat untuk membeli produk berikut:%0A%0A${summary}%0A%0ATotal: ${formattedTotal}%0A%0AMohon instruksi pembayarannya.`;
		const waUrl = `https://wa.me/6281338005074?text=${message}`;
		if (typeof window !== 'undefined') {
			window.open(waUrl, '_blank');
		}
	}
</script>

{#if isOpen}
	<!-- Backdrop -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		transition:fade={{ duration: 200 }}
		onclick={onClose}
		class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs"
	></div>

	<!-- Slide Panel -->
	<div
		transition:slide={{ duration: 300, axis: 'x' }}
		class="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-2xl"
	>
		<!-- Header -->
		<div class="flex items-center justify-between border-b border-gray-100 p-5">
			<div class="flex items-center gap-2">
				<ShoppingBag class="h-5 w-5 text-blue-600" />
				<h2 class="text-lg font-bold text-slate-900">Keranjang Belanja</h2>
				<span class="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-700">
					{cart.totalItems}
				</span>
			</div>
			<button
				onclick={onClose}
				class="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
			>
				<X class="h-5 w-5" />
			</button>
		</div>

		<!-- Body Items List -->
		<div class="flex-1 overflow-y-auto p-5 space-y-4">
			{#if cart.items.length === 0}
				<div class="flex flex-col items-center justify-center h-64 text-center">
					<ShoppingBag class="h-16 w-16 text-slate-300 mb-3" />
					<p class="text-sm font-bold text-slate-700">Keranjang Anda Kosong</p>
					<p class="text-xs text-slate-500 mt-1 mb-4">
						Jelajahi Academy Store untuk menemukan modul & produk pilihan.
					</p>
					<a
						href={resolve('/store')}
						onclick={onClose}
						class="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition-colors"
					>
						Lihat Produk Store
					</a>
				</div>
			{:else}
				{#each cart.items as item (item.id)}
					<div class="flex gap-4 rounded-2xl border border-gray-100 bg-slate-50/50 p-3.5 shadow-xs">
						<img
							src={item.image}
							alt={item.name}
							class="h-20 w-20 shrink-0 rounded-xl object-cover border border-gray-100"
						/>
						<div class="flex flex-1 flex-col justify-between">
							<div class="flex items-start justify-between gap-2">
								<h3 class="text-xs font-bold text-slate-900 line-clamp-2 leading-tight">
									{item.name}
								</h3>
								<button
									onclick={() => removeItem(item.id, item.name)}
									class="text-slate-400 hover:text-rose-600 transition-colors"
								>
									<Trash2 class="h-4 w-4" />
								</button>
							</div>

							<div class="flex items-center justify-between mt-2">
								<span class="text-xs font-bold text-blue-600">
									{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(item.price)}
								</span>

								<div class="flex items-center rounded-lg border border-gray-200 bg-white">
									<button
										onclick={() => updateQuantity(item.id, -1)}
										class="px-2 py-0.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-l-lg"
									>
										-
									</button>
									<span class="px-2 text-xs font-bold text-slate-800">{item.quantity}</span>
									<button
										onclick={() => updateQuantity(item.id, 1)}
										class="px-2 py-0.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-r-lg"
									>
										+
									</button>
								</div>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>

		<!-- Footer Total & Checkout Button -->
		{#if cart.items.length > 0}
			<div class="border-t border-gray-100 p-5 bg-slate-50/50 space-y-4">
				<div class="flex items-center justify-between">
					<span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Pembayaran</span>
					<span class="text-lg font-extrabold text-slate-900">{formattedTotal}</span>
				</div>

				<button
					onclick={checkoutViaWhatsApp}
					class="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-colors"
				>
					Checkout via WhatsApp <ArrowRight class="h-4 w-4" />
				</button>
			</div>
		{/if}
	</div>
{/if}
