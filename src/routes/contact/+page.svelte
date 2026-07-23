<script lang="ts">
	import { Mail, Phone, MapPin, Send } from '@lucide/svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<svelte:head>
	<title>Kontak - Andika Academy</title>
</svelte:head>

<section class="relative overflow-hidden bg-primary-950 pt-16 pb-24 text-white">
	<div
		class="absolute inset-0 z-0 opacity-10"
		style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px;"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h1 class="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">Hubungi Kami</h1>
		<p class="mx-auto max-w-2xl text-lg text-primary-200">
			Punya pertanyaan, ide kolaborasi, atau butuh bantuan? Jangan ragu untuk menghubungi kami
			melalui form atau kontak di bawah ini.
		</p>
	</div>
</section>

<section class="relative z-20 -mt-10 bg-slate-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-8 lg:grid-cols-3">
			<!-- Contact Info -->
			<div class="space-y-6 lg:col-span-1">
				<div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-md">
					<h2 class="mb-6 text-xl font-bold text-slate-900">Informasi Kontak</h2>

					<div class="space-y-6">
						<div class="flex items-start gap-4">
							<div
								class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600"
							>
								<Mail class="h-5 w-5" />
							</div>
							<div>
								<h3 class="mb-1 text-sm font-bold text-slate-900">Email</h3>
								<a
									href="mailto:info@andikaacademy.id"
									class="text-sm text-primary-600 hover:underline">info@andikaacademy.id</a
								>
							</div>
						</div>

						<div class="flex items-start gap-4">
							<div
								class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600"
							>
								<Phone class="h-5 w-5" />
							</div>
							<div>
								<h3 class="mb-1 text-sm font-bold text-slate-900">Telepon/WhatsApp</h3>
								<a href="tel:+6281234567890" class="text-sm text-slate-600 hover:text-primary-600"
									>+62 812-3456-7890</a
								>
							</div>
						</div>

						<div class="flex items-start gap-4">
							<div
								class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600"
							>
								<MapPin class="h-5 w-5" />
							</div>
							<div>
								<h3 class="mb-1 text-sm font-bold text-slate-900">Alamat</h3>
								<p class="text-sm leading-relaxed text-slate-600">
									Jl. Pendidikan No. 123<br />
									Denpasar, Bali<br />
									Indonesia 80111
								</p>
							</div>
						</div>
					</div>

					<hr class="my-8 border-gray-100" />

					<h2 class="mb-6 text-xl font-bold text-slate-900">Jam Operasional</h2>
					<ul class="space-y-3 text-sm text-slate-600">
						<li class="flex justify-between">
							<span>Senin - Jumat:</span>
							<span class="font-semibold text-slate-900">09:00 - 17:00</span>
						</li>
						<li class="flex justify-between">
							<span>Sabtu:</span> <span class="font-semibold text-slate-900">09:00 - 13:00</span>
						</li>
						<li class="flex justify-between">
							<span>Minggu:</span> <span class="font-semibold text-red-500">Tutup</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="lg:col-span-2">
				<div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-md md:p-10">
					<h2 class="mb-2 text-2xl font-bold text-slate-900">Kirim Pesan</h2>
					<p class="mb-8 text-slate-500">Kami akan membalas pesan Anda sesegera mungkin.</p>

					<form class="space-y-6">
						<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
							<div>
								<label for="name" class="mb-2 block text-sm font-medium text-slate-700"
									>Nama Lengkap</label
								>
								<input
									type="text"
									id="name"
									name="name"
									class="w-full rounded-lg border-gray-300 bg-slate-50 shadow-sm focus:border-primary-500 focus:bg-white focus:ring-primary-500"
									placeholder="Masukkan nama Anda"
								/>
							</div>
							<div>
								<label for="email" class="mb-2 block text-sm font-medium text-slate-700"
									>Email</label
								>
								<input
									type="email"
									id="email"
									name="email"
									class="w-full rounded-lg border-gray-300 bg-slate-50 shadow-sm focus:border-primary-500 focus:bg-white focus:ring-primary-500"
									placeholder="nama@email.com"
								/>
							</div>
						</div>

						<div>
							<label for="subject" class="mb-2 block text-sm font-medium text-slate-700"
								>Subjek</label
							>
							<select
								id="subject"
								name="subject"
								class="w-full rounded-lg border-gray-300 bg-slate-50 shadow-sm focus:border-primary-500 focus:bg-white focus:ring-primary-500"
							>
								<option value="">Pilih topik permasalahan</option>
								<option value="pertanyaan">Pertanyaan Umum</option>
								<option value="kolaborasi">Kerja Sama / Kolaborasi</option>
								<option value="support">Dukungan Produk (Store)</option>
								<option value="lainnya">Lainnya</option>
							</select>
						</div>

						<div>
							<label for="message" class="mb-2 block text-sm font-medium text-slate-700"
								>Pesan</label
							>
							<textarea
								id="message"
								name="message"
								rows="5"
								class="w-full resize-none rounded-lg border-gray-300 bg-slate-50 shadow-sm focus:border-primary-500 focus:bg-white focus:ring-primary-500"
								placeholder="Tuliskan pesan Anda secara detail..."></textarea>
						</div>

						<Button variant="primary" size="lg" type="submit" class="w-full sm:w-auto">
							Kirim Pesan <Send class="ml-2 h-4 w-4" />
						</Button>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
