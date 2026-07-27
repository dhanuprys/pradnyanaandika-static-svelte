<script lang="ts">
	import {
		Mail,
		Phone,
		MapPin,
		Send,
		MessageSquare,
		Clock,
		CheckCircle2,
		Sparkles,
		HelpCircle,
		ChevronDown,
		ArrowRight
	} from '@lucide/svelte';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { SITE_CONFIG } from '$lib/config/site';
	import { resolve } from '$app/paths';

	let formSubmitted = $state(false);
	let isSubmitting = $state(false);

	let formData = $state({
		name: '',
		email: '',
		phone: '',
		subject: '',
		institution: '',
		category: 'Konsultasi Penelitian',
		message: ''
	});

	let openFaq = $state<number | null>(0);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		isSubmitting = true;
		setTimeout(() => {
			isSubmitting = false;
			formSubmitted = true;
		}, 1200);
	}

	const faqs = [
		{
			question: 'Apakah konsultasi penelitian bisa dilakukan secara daring?',
			answer:
				'Ya, seluruh sesi bimbingan dan konsultasi dapat dijadwalkan secara daring melalui Zoom atau Google Meet.'
		},
		{
			question: 'Bagaimana cara mengundang Dr. Andika sebagai narasumber/speker webinar?',
			answer:
				'Anda dapat mengisi formulir kontak di samping dengan memilih kategori "Undangan Narasumber / Speaker" dan mencantumkan detail acara.'
		},
		{
			question: 'Apakah modul dan e-book yang dibeli di store bisa langsung diakses?',
			answer:
				'Ya, seluruh modul, e-book, dan template digital di Academy Store dapat diunduh secara langsung setelah transaksi berhasil.'
		},
		{
			question: 'Berapa lama waktu respon untuk balasan email atau pesan?',
			answer:
				'Tim kami berusaha membalas seluruh pesan masuk dalam waktu 1x24 jam kerja (Senin - Jumat).'
		}
	];
</script>

<SEO
	title="Hubungi Dr. I Ketut Andika Pradnyana | Andika Academy"
	description="Layanan konsultasi & kontak resmi Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd. Bimbingan riset, konsultasi instansi, pelatihan AI Education, & pengajuan kerjasama."
	canonical="{SITE_CONFIG.url}/contact"
/>

<div class="bg-slate-50/50 pb-16 text-slate-800">
	<!-- Hero Header -->
	<section class="relative overflow-hidden bg-primary-950 pt-24 pb-20 text-white lg:pt-32 lg:pb-24">
		<div
			class="absolute inset-0 z-0 opacity-15"
			style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 36px 36px;"
		></div>

		<div class="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<!-- Breadcrumb -->
			<nav
				class="mb-4 flex items-center justify-center gap-2 text-xs font-medium text-slate-400 sm:text-sm"
			>
				<a href={resolve('/')} class="transition-colors hover:text-white">Home</a>
				<span>/</span>
				<span class="font-bold text-slate-300">Kontak</span>
			</nav>

			<h1 class="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
				Hubungi Kami
			</h1>
			<p class="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
				Punya pertanyaan, ide kolaborasi penelitian, atau butuh dukungan produk? Kami siap
				mendengarkan dan berdiskusi dengan Anda.
			</p>
		</div>
	</section>

	<!-- Contact Highlights Bar Overlay -->
	<section class="relative z-20 mx-auto -mt-12 mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
			<!-- Email Card -->
			<div
				class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl transition-shadow hover:shadow-2xl"
			>
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"
				>
					<Mail class="h-6 w-6" />
				</div>
				<div>
					<span class="text-xs font-bold tracking-wider text-slate-400 uppercase">Email</span>
					<h3 class="text-sm font-bold text-slate-900">info@andikaacademy.id</h3>
					<p class="text-[11px] text-slate-500">Respon dalam 1x24 Jam</p>
				</div>
			</div>

			<!-- WhatsApp Card -->
			<a
				href="https://wa.me/6281338005074"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl transition-all hover:shadow-2xl hover:border-emerald-200"
			>
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600"
				>
					<Phone class="h-6 w-6" />
				</div>
				<div>
					<span class="text-xs font-bold tracking-wider text-slate-400 uppercase"
						>WhatsApp / Telp</span
					>
					<h3 class="text-sm font-bold text-slate-900">+62 813-3800-5074</h3>
					<p class="text-[11px] text-slate-500">Senin &ndash; Jumat (08:00 - 17:00)</p>
				</div>
			</a>

			<!-- Location Card -->
			<div
				class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl transition-shadow hover:shadow-2xl"
			>
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600"
				>
					<MapPin class="h-6 w-6" />
				</div>
				<div>
					<span class="text-xs font-bold tracking-wider text-slate-400 uppercase"
						>Lokasi Akademik</span
					>
					<h3 class="text-sm font-bold text-slate-900">Singaraja & Denpasar, Bali</h3>
					<p class="text-[11px] text-slate-500">Universitas Pendidikan Ganesha</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Main Contact Section (Form + FAQ) -->
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-12">
			<!-- Form Column (7 cols) -->
			<div class="lg:col-span-7">
				<div class="rounded-3xl border border-gray-100 bg-white p-6 shadow-xs sm:p-10">
					<div class="mb-6">
						<h2 class="text-2xl font-extrabold text-slate-900 sm:text-3xl">Kirim Pesan</h2>
						<p class="mt-1 text-xs text-slate-500 sm:text-sm">
							Silakan isi formulir di bawah ini. Kami akan membalas ke email Anda secepat mungkin.
						</p>
					</div>

					{#if formSubmitted}
						<div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
							<CheckCircle2 class="mx-auto mb-3 h-12 w-12 text-emerald-600" />
							<h3 class="text-lg font-bold text-emerald-900">Pesan Berhasil Terkirim!</h3>
							<p class="mt-1 text-xs text-emerald-700 sm:text-sm">
								Terima kasih telah menghubungi kami. Tim kami akan segera meninjau dan membalas
								pesan Anda.
							</p>
							<button
								onclick={() => (formSubmitted = false)}
								class="mt-4 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-colors hover:bg-emerald-700"
							>
								Kirim Pesan Lain
							</button>
						</div>
					{:else}
						<form onsubmit={handleSubmit} class="space-y-5">
							<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
								<div>
									<label for="name" class="mb-1.5 block text-xs font-bold text-slate-700"
										>Nama Lengkap *</label
									>
									<input
										type="text"
										id="name"
										required
										bind:value={formData.name}
										placeholder="Masukkan nama Anda"
										class="w-full rounded-xl border border-gray-200 bg-slate-50/50 p-3.5 text-base text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none sm:text-sm"
									/>
								</div>
								<div>
									<label for="email" class="mb-1.5 block text-xs font-bold text-slate-700"
										>Alamat Email *</label
									>
									<input
										type="email"
										id="email"
										required
										bind:value={formData.email}
										placeholder="nama@email.com"
										class="w-full rounded-xl border border-gray-200 bg-slate-50/50 p-3.5 text-base text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none sm:text-sm"
									/>
								</div>
							</div>

							<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
								<div>
									<label for="phone" class="mb-1.5 block text-xs font-bold text-slate-700"
										>Nomor Telepon / WA</label
									>
									<input
										type="tel"
										id="phone"
										bind:value={formData.phone}
										placeholder="+62 8..."
										class="w-full rounded-xl border border-gray-200 bg-slate-50/50 p-3.5 text-base text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none sm:text-sm"
									/>
								</div>
								<div>
									<label for="subject" class="mb-1.5 block text-xs font-bold text-slate-700"
										>Subjek Perihal *</label
									>
									<select
										id="subject"
										required
										bind:value={formData.subject}
										class="w-full rounded-xl border border-gray-200 bg-slate-50/50 p-3.5 text-base text-slate-800 focus:border-blue-500 focus:bg-white focus:outline-none sm:text-sm"
									>
										<option value="">Pilih topik permasalahan</option>
										<option value="kolaborasi">Kerja Sama / Kolaborasi Penelitian</option>
										<option value="narasumber">Permohonan Narasumber / Pelatihan</option>
										<option value="store">Dukungan Produk Store</option>
										<option value="pertanyaan">Pertanyaan Umum</option>
									</select>
								</div>
							</div>

							<div>
								<label for="message" class="mb-1.5 block text-xs font-bold text-slate-700"
									>Pesan *</label
								>
								<textarea
									id="message"
									required
									rows="5"
									bind:value={formData.message}
									placeholder="Tuliskan pesan atau detail permohonan Anda..."
									class="w-full resize-none rounded-xl border border-gray-200 bg-slate-50/50 p-3.5 text-base text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none sm:text-sm"
								></textarea>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								class="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-blue-700 disabled:opacity-50"
							>
								{#if isSubmitting}
									<span
										class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
									></span>
									Mengirim...
								{:else}
									Kirim Pesan <Send class="h-4 w-4" />
								{/if}
							</button>
						</form>
					{/if}
				</div>
			</div>

			<!-- FAQ & Direct Contact Sidebar (5 cols) -->
			<div class="space-y-8 lg:col-span-5">
				<!-- Direct WhatsApp CTA Box -->
				<div
					class="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-white shadow-md sm:p-8"
				>
					<div
						class="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-xs"
					>
						<MessageSquare class="h-3.5 w-3.5" /> DUKUNGAN CEPAT
					</div>
					<h3 class="mb-2 text-xl font-bold text-white">Butuh Respon Instan?</h3>
					<p class="mb-6 text-xs leading-relaxed text-emerald-100">
						Hubungi tim kami secara langsung via WhatsApp untuk pertanyaan seputar modul
						pembelajaran, konsultasi, atau informasi penelitian.
					</p>
					<a
						href="https://wa.me/6281338005074"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-emerald-800 shadow-md transition-colors hover:bg-emerald-50"
					>
						Chat WhatsApp Sekarang <ArrowRight class="h-4 w-4" />
					</a>
				</div>

				<!-- FAQ Accordion Widget -->
				<div class="rounded-3xl border border-gray-100 bg-white p-6 shadow-xs sm:p-8">
					<div class="mb-6 flex items-center gap-2">
						<HelpCircle class="h-5 w-5 text-blue-600" />
						<h3 class="text-lg font-bold text-slate-900">Pertanyaan Sering Diajukan</h3>
					</div>

					<div class="space-y-3">
						{#each faqs as faq, idx (idx)}
							<div class="overflow-hidden rounded-2xl border border-gray-100 bg-slate-50/60">
								<button
									onclick={() => toggleFaq(idx)}
									class="flex w-full items-center justify-between p-4 text-left text-xs font-bold text-slate-800 transition-colors hover:text-blue-600"
								>
									<span>{faq.question}</span>
									<ChevronDown
										class="h-4 w-4 shrink-0 transition-transform {openFaq === idx
											? 'rotate-180 text-blue-600'
											: 'text-slate-400'}"
									/>
								</button>
								{#if openFaq === idx}
									<div
										class="border-t border-gray-100 bg-white px-4 pt-3 pb-4 text-xs leading-relaxed text-slate-600"
									>
										{faq.answer}
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
