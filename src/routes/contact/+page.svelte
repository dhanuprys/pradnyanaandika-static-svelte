<script lang="ts">
	import {
		Mail,
		Phone,
		MapPin,
		Send,
		CheckCircle2,
		HelpCircle,
		ChevronDown,
		ArrowRight
	} from '@lucide/svelte';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { SITE_CONFIG } from '$cms/site';
	import { resolve } from '$app/paths';
	import { contactConfig } from '$cms/pages';
	import { faqConfig } from '$cms/pages';

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

	const faqs = faqConfig.faqs;
</script>

<SEO
	title="Hubungi I Ketut Andika Pradnyana | Andika Academy"
	description="Layanan konsultasi & kontak resmi I Ketut Andika Pradnyana, S.Pd., M.Pd. Bimbingan riset, konsultasi instansi, pelatihan AI Education, & pengajuan kerjasama."
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
				{contactConfig.hero.title}
			</h1>
			<p class="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
				{contactConfig.hero.description}
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
					<span class="text-xs font-bold tracking-wider text-slate-400 uppercase"
						>{contactConfig.cards.email.label}</span
					>
					<h3 class="text-sm font-bold text-slate-900">{contactConfig.cards.email.value}</h3>
					<p class="text-[11px] text-slate-500">{contactConfig.cards.email.note}</p>
				</div>
			</div>

			<!-- WhatsApp Card -->
			<a
				href={contactConfig.cards.whatsapp.url}
				target="_blank"
				rel="noopener noreferrer external"
				class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl transition-all hover:border-blue-200 hover:shadow-2xl"
			>
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"
				>
					<Phone class="h-6 w-6" />
				</div>
				<div>
					<span class="text-xs font-bold tracking-wider text-slate-400 uppercase"
						>{contactConfig.cards.whatsapp.label}</span
					>
					<h3 class="text-sm font-bold text-slate-900">{contactConfig.cards.whatsapp.value}</h3>
					<p class="text-[11px] text-slate-500">{contactConfig.cards.whatsapp.note}</p>
				</div>
			</a>

			<!-- Location Card -->
			<div
				class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl transition-shadow hover:shadow-2xl"
			>
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"
				>
					<MapPin class="h-6 w-6" />
				</div>
				<div>
					<span class="text-xs font-bold tracking-wider text-slate-400 uppercase"
						>{contactConfig.cards.location.label}</span
					>
					<h3 class="text-sm font-bold text-slate-900">{contactConfig.cards.location.value}</h3>
					<p class="text-[11px] text-slate-500">{contactConfig.cards.location.note}</p>
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
						<h2 class="text-2xl font-extrabold text-slate-900 sm:text-3xl">
							{contactConfig.form.title}
						</h2>
						<p class="mt-1 text-xs text-slate-500 sm:text-sm">
							{contactConfig.form.description}
						</p>
					</div>

					{#if formSubmitted}
						<div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
							<CheckCircle2 class="mx-auto mb-3 h-12 w-12 text-emerald-600" />
							<h3 class="text-lg font-bold text-emerald-900">{contactConfig.form.successTitle}</h3>
							<p class="mt-1 text-xs text-emerald-700 sm:text-sm">
								{contactConfig.form.successMessage}
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
										{#each contactConfig.form.subjects as subject (subject.value)}
											<option value={subject.value}>{subject.label}</option>
										{/each}
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
					<h3 class="mb-2 text-xl font-bold text-white">{contactConfig.support.title}</h3>
					<p class="mb-6 text-xs leading-relaxed text-emerald-100">
						{contactConfig.support.description}
					</p>
					<a
						href={contactConfig.cards.whatsapp.url}
						target="_blank"
						rel="noopener noreferrer external"
						class="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-emerald-800 shadow-md transition-colors hover:bg-emerald-50"
					>
						{contactConfig.support.buttonText}
						<ArrowRight class="h-4 w-4" />
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
