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
		ExternalLink
	} from '@lucide/svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import PortfolioCard from '$lib/components/ui/PortfolioCard.svelte';
	import CtaBanner from '$lib/components/ui/CtaBanner.svelte';

	const categories = [
		{ id: 'all', label: 'Semua', icon: null },
		{ id: 'penelitian', label: 'Penelitian', icon: FlaskConical },
		{ id: 'publikasi', label: 'Publikasi', icon: BookOpen },
		{ id: 'hki', label: 'HKI', icon: ShieldCheck },
		{ id: 'buku', label: 'Buku', icon: Library },
		{ id: 'pengabdian', label: 'Pengabdian', icon: Users },
		{ id: 'inovasi', label: 'Inovasi', icon: Lightbulb }
	];

	let activeCategory = $state('all');
</script>

<svelte:head>
	<title>Portofolio - Andika Academy</title>
</svelte:head>

<!-- Portfolio Hero -->
<section class="relative overflow-hidden bg-primary-950 pt-16 pb-32 text-white lg:pt-24 lg:pb-48">
	<div
		class="absolute inset-0 z-0 opacity-20"
		style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center justify-between gap-12 lg:flex-row">
			<div class="lg:w-3/5">
				<h1 class="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
					PORTOFOLIO
				</h1>
				<p class="mb-8 max-w-2xl text-lg leading-relaxed text-primary-200">
					Kumpulan karya akademik, penelitian, inovasi, dan pengabdian yang telah saya lakukan untuk
					mendorong kemajuan pendidikan melalui teknologi.
				</p>
				<Button variant="primary" size="lg" href="#">
					Ringkasan Portofolio <Download class="ml-2 h-5 w-5" />
				</Button>
			</div>
			<!-- Right Image Container Placeholder -->
			<div class="relative hidden h-75 lg:block lg:w-2/5">
				<!-- Placeholder for persona image. We will leave space or put a placeholder -->
				<img
					src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
					alt="Dr. I Ketut Andika"
					class="absolute right-0 -bottom-48 h-125 w-auto rounded-t-full object-contain object-bottom drop-shadow-2xl"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Stats Bar -->
<section class="relative z-20 mx-auto -mt-12 mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
	<div
		class="no-scrollbar flex gap-2 overflow-x-auto rounded-xl border border-gray-100 bg-white p-2 shadow-lg"
	>
		{#each categories as category (category)}
			<button
				onclick={() => (activeCategory = category.id)}
				class="flex items-center gap-2 rounded-lg px-4 py-3 font-semibold whitespace-nowrap transition-colors
				{activeCategory === category.id
					? 'bg-primary-50 text-primary-700'
					: 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}"
			>
				{#if category.icon}
					<category.icon class="h-4 w-4" />
				{/if}
				{category.label}
			</button>
		{/each}
	</div>
</section>

<section class="mx-auto mb-16 max-w-7xl px-4 sm:px-6 lg:px-8">
	<div
		class="grid grid-cols-2 gap-y-6 divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-6 md:divide-x md:divide-y-0"
	>
		<div class="flex flex-col items-center justify-center p-4">
			<div class="mb-1 flex items-center gap-2 text-primary-600">
				<FlaskConical class="h-6 w-6" /> <span class="text-3xl font-bold text-slate-900">28+</span>
			</div>
			<div class="text-sm font-medium text-slate-500">Penelitian</div>
		</div>
		<div class="flex flex-col items-center justify-center p-4">
			<div class="mb-1 flex items-center gap-2 text-blue-500">
				<BookOpen class="h-6 w-6" /> <span class="text-3xl font-bold text-slate-900">35+</span>
			</div>
			<div class="text-sm font-medium text-slate-500">Publikasi</div>
		</div>
		<div class="flex flex-col items-center justify-center p-4">
			<div class="mb-1 flex items-center gap-2 text-indigo-500">
				<ShieldCheck class="h-6 w-6" /> <span class="text-3xl font-bold text-slate-900">15+</span>
			</div>
			<div class="text-sm font-medium text-slate-500">HKI & Paten</div>
		</div>
		<div class="flex flex-col items-center justify-center p-4">
			<div class="mb-1 flex items-center gap-2 text-teal-500">
				<Library class="h-6 w-6" /> <span class="text-3xl font-bold text-slate-900">6</span>
			</div>
			<div class="text-sm font-medium text-slate-500">Buku</div>
		</div>
		<div class="flex flex-col items-center justify-center p-4">
			<div class="mb-1 flex items-center gap-2 text-purple-500">
				<Users class="h-6 w-6" /> <span class="text-3xl font-bold text-slate-900">20+</span>
			</div>
			<div class="text-sm font-medium text-slate-500">Pengabdian</div>
		</div>
		<div class="flex flex-col items-center justify-center p-4">
			<div class="mb-1 flex items-center gap-2 text-orange-500">
				<Lightbulb class="h-6 w-6" /> <span class="text-3xl font-bold text-slate-900">12+</span>
			</div>
			<div class="text-sm font-medium text-slate-500">Inovasi</div>
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
