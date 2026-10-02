<script lang="ts">
	import {
		GraduationCap,
		Award,
		User,
		Briefcase,
		Trophy,
		FileText,
		ArrowRight,
		Send,
		Download
	} from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { aboutConfig } from '$cms/pages';

	import SEO from '$lib/components/seo/SEO.svelte';
	import { SITE_CONFIG, getPersonSchema } from '$cms/site';

	const tabs = [
		{ id: 'profil', label: 'Profil', icon: User },
		{ id: 'pendidikan', label: 'Pendidikan', icon: GraduationCap },
		{ id: 'pengalaman', label: 'Pengalaman', icon: Briefcase },
		{ id: 'sertifikasi', label: 'Sertifikasi', icon: Award },
		{ id: 'prestasi', label: 'Prestasi', icon: Trophy },
		{ id: 'cv', label: 'CV', icon: FileText }
	];

	let activeTab = $state('profil');
	let highlightedSection = $state<string | null>(null);

	function scrollToSection(id: string) {
		activeTab = id;
		const el = document.getElementById(`section-${id}`);
		if (el) {
			const yOffset = -120; // Offset for header/tabs
			const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
			window.scrollTo({ top: y, behavior: 'smooth' });

			highlightedSection = id;
			setTimeout(() => {
				highlightedSection = null;
			}, 1500);
		}
	}

	const profileSchema = {
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		'@id': `${SITE_CONFIG.url}/about`,
		name: 'Profil & Biografi I Ketut Andika Pradnyana, S.Pd., M.Pd.',
		url: `${SITE_CONFIG.url}/about`,
		mainEntity: getPersonSchema()
	};
</script>

<SEO
	title="Profil I Ketut Andika Pradnyana, S.Pd., M.Pd. | Andika Academy"
	description="Biografi lengkap, riwayat pendidikan, publikasi ilmiah Scopus, sertifikasi, & prestasi I Ketut Andika Pradnyana, S.Pd., M.Pd. Pakar Teknopedagogi & AI Education."
	canonical="{SITE_CONFIG.url}/about"
	type="profile"
	jsonLd={profileSchema}
/>

<div class="bg-slate-50/50 pb-8 text-slate-800">
	<!-- Hero Section -->
	<section class="relative overflow-hidden bg-primary-950 pt-24 pb-16 lg:pt-32 lg:pb-0">
		<!-- Background graphic -->
		<div
			class="absolute inset-0 z-0 opacity-20"
			style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"
		></div>
		<div class="absolute top-0 right-0 translate-x-1/3 -translate-y-12 opacity-30">
			<div class="h-96 w-96 rounded-full bg-primary-500 blur-3xl"></div>
		</div>

		<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div
				class="flex flex-col-reverse items-center gap-8 pt-6 sm:pt-10 lg:flex-row lg:items-end lg:gap-16 lg:pt-0"
			>
				<!-- Persona Image (Left side on desktop, bottom on mobile) -->
				<div class="flex w-full shrink-0 items-end justify-center lg:w-auto lg:justify-start">
					<img
						src={aboutConfig.hero.image}
						alt={aboutConfig.hero.name}
						class="h-auto max-h-[340px] w-auto object-contain object-bottom drop-shadow-2xl sm:max-h-[480px] lg:max-h-[620px]"
					/>
				</div>

				<!-- Right Info Content (Full width flex-1) -->
				<div class="w-full flex-1 text-center lg:pb-28 lg:text-left">
					<h1
						class="mb-1 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
					>
						{aboutConfig.hero.title}
					</h1>

					<!-- Breadcrumb -->
					<nav
						class="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-slate-400 sm:text-sm lg:justify-start"
					>
						<a href={resolve('/')} class="transition-colors hover:text-white">Home</a>
						<span>/</span>
						<span class="font-bold text-slate-300">Tentang Saya</span>
					</nav>

					<h2 class="mb-1 text-base font-bold text-blue-400 sm:text-xl">
						{aboutConfig.hero.name}
					</h2>
					<p class="mb-4 text-xs font-semibold tracking-wide text-slate-300 uppercase sm:text-sm">
						{aboutConfig.hero.role}
					</p>
					<p
						class="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base lg:mx-0"
					>
						{aboutConfig.hero.description}
					</p>

					<!-- External Badges Row -->
					<div
						class="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-300 lg:justify-start"
					>
						{#each aboutConfig.hero.badges as badge (badge.name)}
							<svelte:element
								this={badge.url && badge.url !== '#' ? 'a' : 'div'}
								href={badge.url !== '#' ? badge.url : undefined}
								target={badge.url !== '#' ? '_blank' : undefined}
								rel={badge.url !== '#' ? 'noopener noreferrer' : undefined}
								class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xs transition-colors hover:bg-white/10"
							>
								{#if badge.svg}
									<div class="h-4 w-4 text-blue-400 [&>svg]:h-full [&>svg]:w-full">
										<!-- eslint-disable-next-line svelte/no-at-html-tags -->
										{@html badge.svg}
									</div>
								{:else if badge.label}
									<span
										class="rounded {badge.labelBg} px-1 py-0.5 text-[10px] font-bold {badge.labelColor}"
										>{badge.label}</span
									>
								{:else if badge.icon}
									<badge.icon class="h-4 w-4 text-blue-400" />
								{/if}
								<span>{badge.name}</span>
							</svelte:element>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Stats Bar / Key Highlights Overlay -->
	<section class="relative z-20 mx-auto -mt-12 mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
		<div
			class="grid grid-cols-1 gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-gray-100"
		>
			{#each aboutConfig.highlights as highlight (highlight.title)}
				<div class="flex items-center gap-4 p-3 lg:px-6">
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"
					>
						<highlight.icon class="h-6 w-6" />
					</div>
					<div>
						<h3 class="text-sm font-bold text-slate-900">{highlight.title}</h3>
						<p class="text-xs text-slate-500">{highlight.subtitle1}</p>
						<p class="text-[11px] text-slate-400">{highlight.subtitle2}</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Tab Controls Bar -->
	<section class="mb-8">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div
				class="no-scrollbar flex snap-x items-center gap-2 overflow-x-auto rounded-2xl border border-gray-100 bg-white p-2 whitespace-nowrap shadow-xs"
			>
				{#each tabs as tab (tab.id)}
					<button
						onclick={() => scrollToSection(tab.id)}
						class="flex min-h-[44px] shrink-0 snap-start items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-all
						{activeTab === tab.id
							? 'bg-blue-600 text-white shadow-md'
							: 'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900'}"
					>
						<tab.icon class="h-4 w-4 shrink-0" />
						<span>{tab.label}</span>
					</button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Main Content Row 1: Profil Singkat & Pendidikan Timeline -->
	<section class="mb-8">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-6 lg:grid-cols-12">
				<!-- Profil Singkat (6/12) -->
				<div
					id="section-profil"
					class="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs transition-all duration-700 sm:p-8 lg:col-span-6
					{highlightedSection === 'profil' ? 'scale-[0.98] opacity-50 ring-2 ring-blue-400' : 'opacity-100'}"
				>
					<div>
						<h3 class="mb-4 text-base font-bold text-slate-900 sm:text-lg">Profil Singkat</h3>
						{#each aboutConfig.profile.paragraphs as paragraph, i (i)}
							<p class="mb-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
								{paragraph}
							</p>
						{/each}
					</div>
					<div class="mt-8 border-t border-gray-100 pt-4">
						<div class="font-serif text-2xl font-bold text-slate-800 italic">
							{aboutConfig.profile.signature.name}
						</div>
						<div class="mt-1 text-xs font-bold text-blue-600">
							{aboutConfig.profile.signature.fullName}
						</div>
						<div class="text-[11px] text-slate-400">{aboutConfig.profile.signature.role}</div>
					</div>
				</div>

				<!-- Pendidikan Timeline (6/12) -->
				<div
					id="section-pendidikan"
					class="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs transition-all duration-700 sm:p-8 lg:col-span-6
					{highlightedSection === 'pendidikan'
						? 'scale-[0.98] opacity-50 ring-2 ring-blue-400'
						: 'opacity-100'}"
				>
					<div>
						<h3 class="mb-6 text-base font-bold text-slate-900 sm:text-lg">Pendidikan</h3>
						<div class="relative space-y-6 border-l-2 border-blue-600 pl-6">
							{#each aboutConfig.education as edu (edu.title)}
								<div class="relative">
									<span
										class="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full border-2 border-white bg-blue-600"
									></span>
									<div class="flex items-start justify-between gap-4">
										<div>
											<div class="text-xs font-semibold text-slate-400">{edu.year}</div>
											<h4 class="text-sm font-bold text-slate-900 sm:text-base">
												{edu.title}
											</h4>
											<p class="text-xs text-slate-500">{edu.subtitle}</p>
										</div>
										{#if edu.abbreviation}
											<div
												class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700"
											>
												{edu.abbreviation}
											</div>
										{/if}
									</div>
								</div>
							{/each}
						</div>
					</div>

					<div class="mt-6 pt-2">
						<a
							href="#"
							class="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
						>
							Lihat Detail Pendidikan <ArrowRight class="h-3.5 w-3.5" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Main Content Row 2: 3 Columns Grid -->
	<section class="mb-8">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				<!-- Col 1: Pengalaman Mengajar -->
				<div
					id="section-pengalaman"
					class="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs transition-all duration-700
					{highlightedSection === 'pengalaman'
						? 'scale-[0.98] opacity-50 ring-2 ring-blue-400'
						: 'opacity-100'}"
				>
					<div>
						<h3 class="mb-6 text-base font-bold text-slate-900">Pengalaman Mengajar</h3>
						<div class="relative space-y-5 border-l-2 border-blue-600 pl-6">
							{#each aboutConfig.experience as exp (exp.title)}
								<div class="relative">
									<span
										class="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full border-2 border-white bg-blue-600"
									></span>
									<div class="text-xs text-slate-400">{exp.year}</div>
									<h4 class="text-xs font-bold text-slate-900">{exp.title}</h4>
									<p class="text-[11px] text-slate-500">{exp.subtitle}</p>
								</div>
							{/each}
						</div>
					</div>
					<div class="mt-6 pt-2">
						<a
							href="#"
							class="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
						>
							Lihat Semua Pengalaman <ArrowRight class="h-3.5 w-3.5" />
						</a>
					</div>
				</div>

				<!-- Col 2: Sertifikasi & Pelatihan -->
				<div
					id="section-sertifikasi"
					class="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs transition-all duration-700
					{highlightedSection === 'sertifikasi'
						? 'scale-[0.98] opacity-50 ring-2 ring-blue-400'
						: 'opacity-100'}"
				>
					<div>
						<h3 class="mb-6 text-base font-bold text-slate-900">Sertifikasi & Pelatihan</h3>
						<div class="space-y-4">
							{#each aboutConfig.certifications as cert (cert.title)}
								<div class="flex items-start gap-3">
									<div
										class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600"
									>
										<cert.icon class="h-4 w-4" />
									</div>
									<div>
										<h4 class="text-xs font-bold text-slate-900">{cert.title}</h4>
										<p class="text-[11px] text-slate-500">{cert.subtitle}</p>
									</div>
								</div>
							{/each}
						</div>
					</div>
					<div class="mt-6 pt-2">
						<a
							href="#"
							class="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
						>
							Lihat Semua Sertifikasi <ArrowRight class="h-3.5 w-3.5" />
						</a>
					</div>
				</div>

				<!-- Col 3: Prestasi -->
				<div
					id="section-prestasi"
					class="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs transition-all duration-700
					{highlightedSection === 'prestasi'
						? 'scale-[0.98] opacity-50 ring-2 ring-blue-400'
						: 'opacity-100'}"
				>
					<div>
						<h3 class="mb-6 text-base font-bold text-slate-900">Prestasi</h3>
						<div class="space-y-4">
							{#each aboutConfig.achievements as achievement (achievement.title)}
								<div class="flex items-start gap-3">
									<div
										class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-500"
									>
										<achievement.icon class="h-4 w-4" />
									</div>
									<div>
										<h4 class="text-xs font-bold text-slate-900">{achievement.title}</h4>
										<p class="text-[11px] text-slate-500">{achievement.subtitle}</p>
									</div>
								</div>
							{/each}
						</div>
					</div>
					<div class="mt-6 pt-2">
						<a
							href="#"
							class="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
						>
							Lihat Semua Prestasi <ArrowRight class="h-3.5 w-3.5" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Banner Section -->
	<section class="pb-8" id="section-cv">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div
				class="flex flex-col items-center justify-between gap-6 rounded-2xl bg-primary-950 p-6 text-white shadow-md transition-all duration-700 sm:flex-row sm:p-8
				{highlightedSection === 'cv' ? 'scale-[0.98] opacity-50 ring-2 ring-blue-400' : 'opacity-100'}"
			>
				<div>
					<h3 class="mb-1 text-lg font-bold text-white sm:text-xl">
						{aboutConfig.cta.title}
					</h3>
					<p class="text-xs text-slate-300 sm:text-sm">
						{aboutConfig.cta.description}
					</p>
				</div>

				<div class="flex flex-wrap items-center gap-3">
					<a
						href={resolve('/contact')}
						class="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-xs transition-colors hover:bg-blue-700 sm:text-sm"
					>
						Hubungi Saya <Send class="h-4 w-4" />
					</a>
					<a
						href={SITE_CONFIG.author.cvUrl}
						target="_blank"
						rel="external"
						class="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-slate-900 shadow-xs transition-colors hover:bg-slate-100 sm:text-sm"
					>
						Unduh CV <Download class="h-4 w-4" />
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
