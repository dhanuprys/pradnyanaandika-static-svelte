<script lang="ts">
	import { MapPin, Phone, Mail } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { socialsConfig, siteConfig } from '$cms/site';
</script>

<footer class="bg-primary-950 text-gray-300">
	<div class="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-5">
			<!-- Brand Info -->
			<div class="lg:col-span-2">
				<div class="mb-6 flex items-center gap-2">
					<svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
						<path d="M12 9l-4 8h8l-4-8z" class="text-primary-400" />
					</svg>
					<span class="text-xl font-bold tracking-tight text-white"
						>{siteConfig.brand.name}
						<span class="font-normal">{siteConfig.brand.subName}</span></span
					>
				</div>
				<p class="mb-6 text-sm text-gray-400">
					{siteConfig.brand.description}
				</p>
				<div class="flex gap-4">
					{#each socialsConfig as social (social.id)}
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer external"
							class="text-gray-400 transition-colors hover:text-white"
							aria-label={social.name}
						>
							<div class="h-5 w-5 fill-current [&>svg]:h-full [&>svg]:w-full">
								<!-- eslint-disable-next-line svelte/no-at-html-tags -->
								{@html social.svg}
							</div>
						</a>
					{/each}
				</div>
			</div>

			<!-- Links Grid -->
			<div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
				<div>
					<h3 class="mb-4 font-semibold text-white">Navigasi</h3>
					<ul class="space-y-3 text-sm">
						{#each siteConfig.navigation as link (link.href)}
							<li>
								<a
									href={resolve(link.href as '/')}
									class="text-sm text-gray-400 transition-colors hover:text-white">{link.name}</a
								>
							</li>
						{/each}
					</ul>
				</div>

				<div>
					<h3 class="mb-4 font-semibold text-white">Kategori</h3>
					<ul class="space-y-3 text-sm">
						{#each siteConfig.services as service (service.name)}
							<li>
								<a
									href={resolve(service.href as '/')}
									class="flex items-center gap-2 transition-colors hover:text-white"
								>
									<service.icon class="h-4 w-4 shrink-0 text-primary-400" />
									{service.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<div>
					<h3 class="mb-4 font-semibold text-white">Kontak Kami</h3>
					<ul class="space-y-4 text-sm">
						<li class="flex items-start gap-3">
							<Mail class="h-5 w-5 shrink-0 text-primary-400" />
							<span>{siteConfig.contact.email}</span>
						</li>
						<li class="flex items-start gap-3">
							<Phone class="h-5 w-5 shrink-0 text-primary-400" />
							<span>{siteConfig.contact.phone}</span>
						</li>
						<li class="flex items-start gap-3">
							<MapPin class="h-5 w-5 shrink-0 text-primary-400" />
							<span>{siteConfig.contact.address}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Bottom Footer -->
		<div
			class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row"
		>
			<p class="text-xs text-gray-400">
				&copy; {new Date().getFullYear()}
				{siteConfig.brand.name}
				{siteConfig.brand.subName}. All rights reserved.
			</p>
		</div>
	</div>
</footer>
