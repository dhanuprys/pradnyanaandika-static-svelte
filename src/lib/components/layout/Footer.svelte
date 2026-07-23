<script lang="ts">
	import { MapPin, Phone, Mail, MessageCircle, Camera, Video, Briefcase } from '@lucide/svelte';
	import { resolve } from '$app/paths';
</script>

<footer class="bg-primary-950 text-gray-300">
	<div class="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-5">
			<!-- Brand Info -->
			<div class="lg:col-span-1">
				<div class="mb-6 flex items-center gap-2">
					<svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
						<path d="M12 9l-4 8h8l-4-8z" class="text-primary-400" />
					</svg>
					<span class="text-xl font-bold tracking-tight text-white"
						>ANDIKA <span class="font-normal">ACADEMY</span></span
					>
				</div>
				<p class="mb-6 text-sm text-gray-400">
					Platform pengembangan kompetensi guru, dosen, dan peneliti melalui materi berkualitas dan
					inovasi pembelajaran.
				</p>
				<div class="flex gap-4">
					<a href={resolve('/')} class="text-gray-400 transition-colors hover:text-white">
						<span class="sr-only">Facebook</span>
						<MessageCircle class="h-5 w-5" />
					</a>
					<a href={resolve('/')} class="text-gray-400 transition-colors hover:text-white">
						<span class="sr-only">Instagram</span>
						<Camera class="h-5 w-5" />
					</a>
					<a href={resolve('/')} class="text-gray-400 transition-colors hover:text-white">
						<span class="sr-only">YouTube</span>
						<Video class="h-5 w-5" />
					</a>
					<a href={resolve('/')} class="text-gray-400 transition-colors hover:text-white">
						<span class="sr-only">LinkedIn</span>
						<Briefcase class="h-5 w-5" />
					</a>
				</div>
			</div>

			<!-- Links Grid -->
			<div class="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-4">
				<div>
					<h3 class="mb-4 font-semibold text-white">Navigasi</h3>
					<ul class="space-y-3 text-sm">
						<li><a href={resolve('/')} class="transition-colors hover:text-white">Home</a></li>
						<li>
							<a
								href={resolve('/about')}
								class="text-sm text-gray-400 transition-colors hover:text-white">Tentang Saya</a
							>
						</li>
						<li>
							<a
								href={resolve('/portofolio')}
								class="text-sm text-gray-400 transition-colors hover:text-white">Portofolio</a
							>
						</li>
						<li>
							<a
								href={resolve('/store')}
								class="text-sm text-gray-400 transition-colors hover:text-white">Academy Store</a
							>
						</li>
						<li>
							<a
								href={resolve('/blogs')}
								class="text-sm text-gray-400 transition-colors hover:text-white">Blog</a
							>
						</li>
						<li>
							<a
								href={resolve('/contact')}
								class="text-sm text-gray-400 transition-colors hover:text-white">Kontak</a
							>
						</li>
						<li>
							<a
								href={resolve('/about')}
								class="text-sm text-gray-400 transition-colors hover:text-white">Unduh CV</a
							>
						</li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 font-semibold text-white">Kategori</h3>
					<ul class="space-y-3 text-sm">
						<li>
							<a href={resolve('/')} class="transition-colors hover:text-white"
								>Modul Pembelajaran</a
							>
						</li>
						<li>
							<a href={resolve('/')} class="transition-colors hover:text-white">Video Course</a>
						</li>
						<li>
							<a href={resolve('/')} class="transition-colors hover:text-white"
								>Template Penelitian</a
							>
						</li>
						<li>
							<a href={resolve('/')} class="transition-colors hover:text-white"
								>Media Pembelajaran</a
							>
						</li>
						<li>
							<a href={resolve('/')} class="transition-colors hover:text-white">Webinar Rekaman</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 font-semibold text-white">Bantuan</h3>
					<ul class="space-y-3 text-sm">
						<li>
							<a href={resolve('/')} class="transition-colors hover:text-white">Cara Pembelian</a>
						</li>
						<li>
							<a href={resolve('/')} class="transition-colors hover:text-white">Metode Pembayaran</a
							>
						</li>
						<li>
							<a href={resolve('/')} class="transition-colors hover:text-white">Kebijakan Refund</a>
						</li>
						<li>
							<a href={resolve('/')} class="transition-colors hover:text-white"
								>Syarat & Ketentuan</a
							>
						</li>
						<li><a href={resolve('/')} class="transition-colors hover:text-white">FAQ</a></li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 font-semibold text-white">Kontak Kami</h3>
					<ul class="space-y-4 text-sm">
						<li class="flex items-start gap-3">
							<Mail class="h-5 w-5 shrink-0 text-primary-400" />
							<span>info@andikaacademy.id</span>
						</li>
						<li class="flex items-start gap-3">
							<Phone class="h-5 w-5 shrink-0 text-primary-400" />
							<span>+62 812-3456-7890</span>
						</li>
						<li class="flex items-start gap-3">
							<MapPin class="h-5 w-5 shrink-0 text-primary-400" />
							<span>Denpasar, Bali, Indonesia</span>
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
				&copy; {new Date().getFullYear()} Andika Academy. All rights reserved.
			</p>
			<div class="flex items-center gap-4">
				<span class="text-xs text-gray-400">Pembayaran Aman:</span>
				<div class="flex gap-2">
					<!-- Dummy payment badges -->
					<div
						class="flex h-6 w-10 items-center justify-center rounded bg-white/10 text-[10px] font-bold text-white"
					>
						VISA
					</div>
					<div
						class="flex h-6 w-10 items-center justify-center rounded bg-white/10 text-[10px] font-bold text-white"
					>
						MC
					</div>
					<div
						class="flex h-6 w-10 items-center justify-center rounded bg-white/10 text-[10px] font-bold text-white"
					>
						QRIS
					</div>
					<div
						class="flex h-6 w-10 items-center justify-center rounded bg-white/10 text-[10px] font-bold text-white"
					>
						OVO
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
