<script lang="ts">
	import {
		ArrowRight,
		Download,
		BookOpen,
		FlaskConical,
		ShieldCheck,
		Library,
		Users,
		Lightbulb,
		ExternalLink,
		LayoutGrid,
		FileText,
		GraduationCap,
		Cpu,
		BarChart3
	} from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/ui/Button.svelte';
	import PortfolioCard from '$lib/components/ui/PortfolioCard.svelte';
	import CtaBanner from '$lib/components/ui/CtaBanner.svelte';

	import SEO from '$lib/components/seo/SEO.svelte';
	import { SITE_CONFIG } from '$lib/config/site';

	const categories = [
		{ id: 'all', label: 'Semua', icon: LayoutGrid },
		{ id: 'penelitian', label: 'Penelitian', icon: FlaskConical },
		{ id: 'publikasi', label: 'Publikasi', icon: FileText },
		{ id: 'hki', label: 'HKI', icon: ShieldCheck },
		{ id: 'buku', label: 'Buku', icon: Library },
		{ id: 'pengabdian', label: 'Pengabdian', icon: Users },
		{ id: 'inovasi', label: 'Inovasi', icon: Lightbulb }
	];

	let activeCategory = $state('all');
</script>

<SEO
	title="Portofolio Penelitian & Publikasi | Dr. I Ketut Andika Pradnyana"
	description="Portofolio karya ilmiah, publikasi Scopus, Hak Kekayaan Intelektual (HKI), hibah penelitian, & karya inovasi Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd."
	canonical="{SITE_CONFIG.url}/portofolio"
/>

<!-- Portfolio Hero -->
<section class="relative overflow-hidden bg-gradient-to-r from-slate-50 via-slate-100 via-50% to-primary-950 pt-6 pb-12 lg:pt-8 lg:pb-0">
	<!-- Tech icons floating in deep blue background on the right -->
	<div class="pointer-events-none absolute right-0 top-0 bottom-0 hidden w-1/2 overflow-hidden lg:block">
		<div class="absolute right-[30%] top-8 opacity-15 text-blue-200">
			<GraduationCap class="h-16 w-16" />
		</div>
		<div class="absolute right-[10%] top-6 opacity-15 text-blue-200">
			<Cpu class="h-14 w-14" />
		</div>
		<div class="absolute right-[35%] bottom-16 opacity-15 text-blue-200">
			<BarChart3 class="h-14 w-14" />
		</div>
		<div class="absolute right-[8%] bottom-10 opacity-15 text-blue-200">
			<BookOpen class="h-16 w-16" />
		</div>
	</div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
			<!-- Text Content (Left Side) -->
			<div class="w-full pt-4 pb-16 lg:w-1/2 lg:pt-8 lg:pb-28">
				<!-- Breadcrumb -->
				<nav class="mb-3 flex items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm">
					<a href={resolve('/')} class="transition-colors hover:text-slate-900">Home</a>
					<span class="text-slate-400">&gt;</span>
					<span class="font-bold text-slate-900">Portofolio</span>
				</nav>

				<h1 class="mb-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
					PORTOFOLIO
				</h1>
				<p class="mb-6 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
					Kumpulan karya akademik, penelitian, inovasi, dan pengabdian yang telah saya lakukan untuk
					mendorong kemajuan pendidikan melalui teknologi.
				</p>
				<div>
					<Button variant="primary" size="md" href="#" class="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md font-semibold px-5 py-2.5">
						Ringkasan Portofolio <Download class="ml-2 h-4 w-4" />
					</Button>
				</div>
			</div>

			<!-- Persona Image (Right Side, fitted to bottom) -->
			<div class="flex w-full items-end justify-center lg:w-1/2 lg:justify-end">
				<img
					src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
					alt="Dr. I Ketut Andika"
					class="h-auto max-h-[300px] w-auto object-contain object-bottom drop-shadow-xl sm:max-h-[360px] lg:max-h-[420px]"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Stats Bar / Category Tabs Bar -->
<section class="relative z-20 mx-auto -mt-12 mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
	<div
		class="no-scrollbar flex items-center justify-between gap-2 overflow-x-auto rounded-2xl border border-gray-100 bg-white p-2 shadow-md"
	>
		{#each categories as category (category.id)}
			<button
				onclick={() => (activeCategory = category.id)}
				class="relative flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold whitespace-nowrap transition-all
				{activeCategory === category.id
					? 'bg-slate-50 text-blue-600'
					: 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}"
			>
				<category.icon class="h-4 w-4 shrink-0 {activeCategory === category.id ? 'text-blue-600' : 'text-slate-500'}" />
				<span>{category.label}</span>
				{#if activeCategory === category.id}
					<span class="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-blue-600"></span>
				{/if}
			</button>
		{/each}
	</div>
</section>

<!-- Metrics Summary Cards Section -->
<section class="mb-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
			<!-- Penelitian -->
			<div class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 shadow-xs transition-shadow hover:shadow-md">
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm sm:h-14 sm:w-14">
					<FlaskConical class="h-6 w-6 sm:h-7 sm:w-7" />
				</div>
				<div class="flex flex-col">
					<span class="text-2xl font-extrabold text-slate-900 sm:text-3xl">28+</span>
					<span class="text-xs font-medium text-slate-500 sm:text-sm whitespace-nowrap">Penelitian</span>
				</div>
			</div>

			<!-- Publikasi -->
			<div class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 shadow-xs transition-shadow hover:shadow-md">
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm sm:h-14 sm:w-14">
					<FileText class="h-6 w-6 sm:h-7 sm:w-7" />
				</div>
				<div class="flex flex-col">
					<span class="text-2xl font-extrabold text-slate-900 sm:text-3xl">35+</span>
					<span class="text-xs font-medium text-slate-500 sm:text-sm whitespace-nowrap">Publikasi</span>
				</div>
			</div>

			<!-- HKI & Paten -->
			<div class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 shadow-xs transition-shadow hover:shadow-md">
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm sm:h-14 sm:w-14">
					<ShieldCheck class="h-6 w-6 sm:h-7 sm:w-7" />
				</div>
				<div class="flex flex-col">
					<span class="text-2xl font-extrabold text-slate-900 sm:text-3xl">15+</span>
					<span class="text-xs font-medium text-slate-500 sm:text-sm whitespace-nowrap">HKI & Paten</span>
				</div>
			</div>

			<!-- Buku -->
			<div class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 shadow-xs transition-shadow hover:shadow-md">
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm sm:h-14 sm:w-14">
					<Library class="h-6 w-6 sm:h-7 sm:w-7" />
				</div>
				<div class="flex flex-col">
					<span class="text-2xl font-extrabold text-slate-900 sm:text-3xl">6</span>
					<span class="text-xs font-medium text-slate-500 sm:text-sm whitespace-nowrap">Buku</span>
				</div>
			</div>

			<!-- Pengabdian -->
			<div class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 shadow-xs transition-shadow hover:shadow-md">
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm sm:h-14 sm:w-14">
					<Users class="h-6 w-6 sm:h-7 sm:w-7" />
				</div>
				<div class="flex flex-col">
					<span class="text-2xl font-extrabold text-slate-900 sm:text-3xl">20+</span>
					<span class="text-xs font-medium text-slate-500 sm:text-sm whitespace-nowrap">Pengabdian</span>
				</div>
			</div>

			<!-- Inovasi -->
			<div class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 shadow-xs transition-shadow hover:shadow-md">
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm sm:h-14 sm:w-14">
					<Lightbulb class="h-6 w-6 sm:h-7 sm:w-7" />
				</div>
				<div class="flex flex-col">
					<span class="text-2xl font-extrabold text-slate-900 sm:text-3xl">12+</span>
					<span class="text-xs font-medium text-slate-500 sm:text-sm whitespace-nowrap">Inovasi</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Penelitian Section -->
<section class="py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-8 flex items-end justify-between border-b border-gray-200 pb-4">
			<h2 class="text-2xl font-bold text-slate-900">Penelitian</h2>
			<a
				href="#"
				class="flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700"
			>
				Lihat Semua Penelitian <ArrowRight class="ml-1 h-4 w-4" />
			</a>
		</div>
		<div class="grid gap-8 md:grid-cols-3">
			<PortfolioCard
				image="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
				category="Penelitian Terapan"
				title="Pengembangan KodiBot AI sebagai Asisten Cerdas untuk Pembelajaran Adaptif"
				description="Pendanaan: Kemendikbudristek (2024)"
			/>
			<PortfolioCard
				image="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
				category="Penelitian Terapan"
				title="Pengembangan Media Pembelajaran Biologi Berbasis Virtual Reality"
				description="Pendanaan: DRTPM (2023)"
			/>
			<PortfolioCard
				image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
				category="Penelitian Dasar"
				title="Model Pembelajaran Adaptif Berbasis Learning Analytics untuk Meningkatkan Hasil Belajar"
				description="Pendanaan: Internal (2022)"
			/>
		</div>
	</div>
</section>

<!-- Publikasi Terbaru Section -->
<section class="bg-slate-50 py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-8 flex items-end justify-between border-b border-gray-200 pb-4">
			<h2 class="text-2xl font-bold text-slate-900">Publikasi Terbaru</h2>
			<a
				href="#"
				class="flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700"
			>
				Lihat Semua Publikasi <ArrowRight class="ml-1 h-4 w-4" />
			</a>
		</div>
		<div class="grid gap-6 md:grid-cols-3">
			<!-- Simulating simple publication cards since we don't have a specific component for it, we'll build it inline -->
			{#each [0, 1, 2] as idx (idx)}
				<div
					class="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
				>
					<div class="mb-4 flex items-start gap-4">
						<div class="h-24 w-16 shrink-0 rounded bg-primary-100"></div>
						<div>
							<h3 class="mb-2 line-clamp-3 text-sm font-bold text-slate-900">
								The Impact of AI-Based Learning Assistant on Students' Learning Outcomes: A
								Systematic Review
							</h3>
							<p class="text-xs text-slate-500">Computers & Education (Q1) • 2024 • Scopus</p>
						</div>
					</div>
					<div class="mt-auto border-t border-gray-100 pt-4">
						<Button variant="outline" size="sm" class="w-full">
							Detail <ExternalLink class="ml-2 h-4 w-4" />
						</Button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Call to Action Banner -->
<section class="py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<CtaBanner
			title="Ingin berkolaborasi atau berdiskusi?"
			description="Saya terbuka untuk kerja sama penelitian, pengembangan, pelatihan, dan proyek inovasi pendidikan."
			buttonText="Hubungi Saya"
			buttonHref="/contact"
		/>
	</div>
</section>
