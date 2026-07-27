<script lang="ts">
	import {
		ArrowRight,
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
		BarChart3,
		ShoppingBag,
		Sparkles
	} from '@lucide/svelte';
	import { resolve } from '$app/paths';

	import SEO from '$lib/components/seo/SEO.svelte';
	import { SITE_CONFIG } from '$lib/config/site';

	import { getAllResearch, getResearchSchema } from '$lib/data/research';
	import { getAllPublications, getPublicationSchema } from '$lib/data/publications';
	import { getAllHki, getHkiSchema } from '$lib/data/hki';
	import { getAllPengabdian, getPengabdianSchema } from '$lib/data/pengabdian';
	import { getAllInovasi, getInovasiSchema } from '$lib/data/inovasi';

	import PortfolioCard from '$lib/components/ui/PortfolioCard.svelte';
	import PublicationCard from '$lib/components/ui/PublicationCard.svelte';
	import HkiCard from '$lib/components/ui/HkiCard.svelte';
	import PengabdianCard from '$lib/components/ui/PengabdianCard.svelte';
	import InovasiCard from '$lib/components/ui/InovasiCard.svelte';
	import CtaBanner from '$lib/components/ui/CtaBanner.svelte';

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

	const researchList = getAllResearch();
	const publicationList = getAllPublications();
	const hkiList = getAllHki();
	const pengabdianList = getAllPengabdian();
	const inovasiList = getAllInovasi();

	let researchSchemas = $derived(researchList.map((item) => getResearchSchema(item)));
	let publicationSchemas = $derived(publicationList.map((pub) => getPublicationSchema(pub)));
	let hkiSchemas = $derived(hkiList.map((record) => getHkiSchema(record)));
	let pengabdianSchemas = $derived(pengabdianList.map((prog) => getPengabdianSchema(prog)));
	let inovasiSchemas = $derived(inovasiList.map((ino) => getInovasiSchema(ino)));

	let pageSchemas = $derived([
		...researchSchemas,
		...publicationSchemas,
		...hkiSchemas,
		...pengabdianSchemas,
		...inovasiSchemas
	]);
</script>

<SEO
	title="Portofolio Karya & Inovasi | Dr. I Ketut Andika Pradnyana"
	description="Portofolio lengkap karya penelitian, publikasi Scopus, HKI, pengabdian masyarakat, & inovasi AI/VR Dr. I Ketut Andika Pradnyana."
	canonical="{SITE_CONFIG.url}/portofolio"
	jsonLd={pageSchemas}
/>

<!-- Portfolio Hero -->
<section
	class="relative overflow-hidden bg-linear-to-r from-slate-100 via-slate-100 via-50% to-primary-950 pt-6 pb-12 lg:pt-8 lg:pb-0"
>
	<!-- Tech icons floating in deep blue background on the right -->
	<div
		class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 overflow-hidden lg:block"
	>
		<div class="absolute top-8 right-[30%] text-blue-200 opacity-15">
			<GraduationCap class="h-16 w-16" />
		</div>
		<div class="absolute top-6 right-[10%] text-blue-200 opacity-15">
			<Cpu class="h-14 w-14" />
		</div>
		<div class="absolute right-[35%] bottom-16 text-blue-200 opacity-15">
			<BarChart3 class="h-14 w-14" />
		</div>
		<div class="absolute right-[8%] bottom-10 text-blue-200 opacity-15">
			<BookOpen class="h-16 w-16" />
		</div>
	</div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div
			class="flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12"
		>
			<!-- Text Content (Left Side) -->
			<div class="w-full pt-4 pb-16 lg:w-1/2 lg:pt-8 lg:pb-28">
				<!-- Breadcrumb -->
				<nav
					class="mb-6 flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase"
				>
					<a href={resolve('/')} class="transition-colors hover:text-blue-600">Home</a>
					<span>/</span>
					<span class="text-blue-600">Portofolio Akademik</span>
				</nav>

				<h1
					class="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
				>
					Portofolio Penelitian, Publikasi & Karya Inovasi
				</h1>
				<p class="mb-8 text-sm leading-relaxed text-slate-600 sm:text-base">
					Rekam jejak kontribusi akademik, hibah penelitian terapan, hak kekayaan intelektual (HKI),
					dan produk inovasi teknopedagogi Dr. I Ketut Andika Pradnyana.
				</p>
			</div>

			<!-- Image Showcase (Right Side) -->
			<div class="relative flex w-full justify-center lg:w-1/2 lg:justify-end">
				<div
					class="relative h-[340px] w-full max-w-[340px] sm:h-[460px] sm:max-w-[440px] lg:h-[480px]"
				>
					<div
						class="absolute inset-0 rounded-t-3xl"
					></div>
					<img
						src={resolve('/images/andika.png')}
						alt="Dr. I Ketut Andika Pradnyana"
						class="absolute bottom-0 left-1/2 h-full max-h-[340px] w-auto -translate-x-1/2 object-contain drop-shadow-2xl sm:max-h-[460px] lg:max-h-[480px]"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Category Tabs Bar -->
<section class="relative z-20 mx-auto -mt-12 mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
	<div
		class="no-scrollbar flex snap-x items-center gap-2 overflow-x-auto rounded-2xl border border-gray-100 bg-white p-2 whitespace-nowrap shadow-md"
	>
		{#each categories as category (category.id)}
			<button
				onclick={() => (activeCategory = category.id)}
				class="relative flex min-h-[44px] shrink-0 snap-start items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-semibold whitespace-nowrap transition-all sm:text-sm
				{activeCategory === category.id
					? 'bg-blue-50 font-bold text-blue-600'
					: 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}"
			>
				<category.icon
					class="h-4 w-4 shrink-0 {activeCategory === category.id
						? 'text-blue-600'
						: 'text-slate-500'}"
				/>
				<span>{category.label}</span>
				{#if activeCategory === category.id}
					<span class="absolute right-4 bottom-0 left-4 h-0.5 rounded-full bg-blue-600"></span>
				{/if}
			</button>
		{/each}
	</div>
</section>

<!-- Quick Stats Counter -->
<section class="py-4 mb-8">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
			<div
				class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-xs transition-shadow hover:shadow-md sm:p-5"
			>
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm sm:h-14 sm:w-14"
				>
					<FlaskConical class="h-6 w-6 sm:h-7 sm:w-7" />
				</div>
				<div class="flex flex-col">
					<span class="text-2xl font-extrabold text-slate-900 sm:text-3xl">{researchList.length}+</span>
					<span class="text-xs font-medium whitespace-nowrap text-slate-500 sm:text-sm">Penelitian</span>
				</div>
			</div>

			<div
				class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-xs transition-shadow hover:shadow-md sm:p-5"
			>
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm sm:h-14 sm:w-14"
				>
					<FileText class="h-6 w-6 sm:h-7 sm:w-7" />
				</div>
				<div class="flex flex-col">
					<span class="text-2xl font-extrabold text-slate-900 sm:text-3xl">{publicationList.length}+</span>
					<span class="text-xs font-medium whitespace-nowrap text-slate-500 sm:text-sm">Publikasi</span>
				</div>
			</div>

			<div
				class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-xs transition-shadow hover:shadow-md sm:p-5"
			>
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm sm:h-14 sm:w-14"
				>
					<ShieldCheck class="h-6 w-6 sm:h-7 sm:w-7" />
				</div>
				<div class="flex flex-col">
					<span class="text-2xl font-extrabold text-slate-900 sm:text-3xl">{hkiList.length}+</span>
					<span class="text-xs font-medium whitespace-nowrap text-slate-500 sm:text-sm">HKI & Paten</span>
				</div>
			</div>

			<div
				class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-xs transition-shadow hover:shadow-md sm:p-5"
			>
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm sm:h-14 sm:w-14"
				>
					<Library class="h-6 w-6 sm:h-7 sm:w-7" />
				</div>
				<div class="flex flex-col">
					<span class="text-2xl font-extrabold text-slate-900 sm:text-3xl">5+</span>
					<span class="text-xs font-medium whitespace-nowrap text-slate-500 sm:text-sm">Buku & Modul</span>
				</div>
			</div>

			<div
				class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-xs transition-shadow hover:shadow-md sm:p-5"
			>
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm sm:h-14 sm:w-14"
				>
					<Users class="h-6 w-6 sm:h-7 sm:w-7" />
				</div>
				<div class="flex flex-col">
					<span class="text-2xl font-extrabold text-slate-900 sm:text-3xl">{pengabdianList.length}+</span>
					<span class="text-xs font-medium whitespace-nowrap text-slate-500 sm:text-sm">Pengabdian</span>
				</div>
			</div>

			<div
				class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-xs transition-shadow hover:shadow-md sm:p-5"
			>
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm sm:h-14 sm:w-14"
				>
					<Lightbulb class="h-6 w-6 sm:h-7 sm:w-7" />
				</div>
				<div class="flex flex-col">
					<span class="text-2xl font-extrabold text-slate-900 sm:text-3xl">{inovasiList.length}+</span>
					<span class="text-xs font-medium whitespace-nowrap text-slate-500 sm:text-sm">Inovasi</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- 1. Penelitian Section -->
{#if activeCategory === 'all' || activeCategory === 'penelitian'}
	<section class="py-12">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-8 flex items-end justify-between border-b border-gray-200 pb-4">
				<div>
					<h2 class="text-2xl font-bold text-slate-900 sm:text-3xl">Penelitian & Proyek</h2>
					<p class="text-xs text-slate-500 sm:text-sm">
						Menampilkan {researchList.length} karya penelitian & hibah terapan
					</p>
				</div>
				<a
					href={resolve('/contact')}
					class="hidden items-center text-sm font-semibold text-blue-600 hover:text-blue-700 sm:flex"
				>
					Ajukan Kolaborasi <ArrowRight class="ml-1 h-4 w-4" />
				</a>
			</div>

			<div class="grid gap-6 md:grid-cols-3">
				{#each researchList as item (item.id)}
					<PortfolioCard
						image={item.image}
						category={item.categoryLabel}
						title={item.title}
						description={`${item.funding} — ${item.description}`}
						href={item.targetUrl || resolve('/contact')}
					/>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- 2. Publikasi Section -->
{#if activeCategory === 'all' || activeCategory === 'publikasi'}
	<section class="bg-slate-50 py-12">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-8 flex items-end justify-between border-b border-gray-200 pb-4">
				<div>
					<h2 class="text-2xl font-bold text-slate-900 sm:text-3xl">Publikasi Jurnal & Scopus</h2>
					<p class="text-xs text-slate-500 sm:text-sm">
						Menampilkan {publicationList.length} artikel terindeks Scopus & Sinta
					</p>
				</div>
				<a
					href="https://scholar.google.com"
					target="_blank"
					rel="noopener noreferrer"
					class="hidden items-center text-sm font-semibold text-blue-600 hover:text-blue-700 sm:flex"
				>
					Google Scholar <ArrowRight class="ml-1 h-4 w-4" />
				</a>
			</div>

			<div class="grid gap-6 md:grid-cols-3">
				{#each publicationList as publication (publication.id)}
					<PublicationCard {publication} />
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- 3. HKI Section -->
{#if activeCategory === 'all' || activeCategory === 'hki'}
	<section class="bg-white py-12">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-8 flex items-end justify-between border-b border-gray-200 pb-4">
				<div>
					<h2 class="text-2xl font-bold text-slate-900 sm:text-3xl">Hak Kekayaan Intelektual (HKI)</h2>
					<p class="text-xs text-slate-500 sm:text-sm">
						Menampilkan {hkiList.length} sertifikat hak cipta & paten resmi DJKI
					</p>
				</div>
				<a
					href="https://dgip.go.id"
					target="_blank"
					rel="noopener noreferrer"
					class="hidden items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 sm:flex"
				>
					Database DJKI <ExternalLink class="ml-1 h-4 w-4" />
				</a>
			</div>

			<div class="grid gap-6 md:grid-cols-3">
				{#each hkiList as record (record.id)}
					<HkiCard {record} />
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- 4. Buku Section -->
{#if activeCategory === 'all' || activeCategory === 'buku'}
	<section class="py-12 bg-slate-50 border-t border-gray-100">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-gray-200 pb-4">
				<div>
					<span class="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
						<Sparkles class="h-3.5 w-3.5" /> KARYA LITERASI & E-BOOK
					</span>
					<h2 class="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Buku & Modul Pembelajaran</h2>
					<p class="text-xs text-slate-500 sm:text-sm">
						Kumpulan buku referensi akademik, e-book praktis, dan modul metodologi penelitian.
					</p>
				</div>
				<a
					href={resolve('/store')}
					class="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-blue-700 hover:scale-105 active:scale-95"
				>
					Kunjungi Academy Store <ShoppingBag class="h-4 w-4" />
				</a>
			</div>

			<!-- Guiding Callout Box -->
			<div class="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-slate-900 via-primary-950 to-blue-950 p-6 text-white shadow-xl sm:p-10">
				<div class="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>

				<div class="relative z-10 flex flex-col items-center justify-between gap-6 lg:flex-row">
					<div class="flex items-start gap-4 sm:items-center">
						<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-blue-300 shadow-inner">
							<Library class="h-7 w-7" />
						</div>
						<div>
							<h3 class="text-lg font-bold text-white sm:text-xl">
								Akses Koleksi Lengkap Buku & Modul Digital
							</h3>
							<p class="mt-1 max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm">
								Seluruh publikasi buku referensi, e-book metode penelitian, template skripsi scopus, dan modul analisis data oleh Dr. I Ketut Andika Pradnyana kini dapat diakses dan diunduh secara langsung melalui <span class="font-bold text-blue-300">Academy Store</span>.
							</p>
						</div>
					</div>

					<a
						href={resolve('/store')}
						class="inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-xs sm:text-sm font-extrabold text-slate-900 shadow-xl transition-all hover:bg-blue-50 hover:scale-105 active:scale-95 sm:w-auto"
					>
						Lihat Koleksi Buku di Store <ArrowRight class="h-4 w-4 text-blue-600" />
					</a>
				</div>
			</div>
		</div>
	</section>
{/if}

<!-- 5. Pengabdian Section -->
{#if activeCategory === 'all' || activeCategory === 'pengabdian'}
	<section class="bg-white py-12">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-8 flex items-end justify-between border-b border-gray-200 pb-4">
				<div>
					<h2 class="text-2xl font-bold text-slate-900 sm:text-3xl">Pengabdian Kepada Masyarakat</h2>
					<p class="text-xs text-slate-500 sm:text-sm">
						Menampilkan {pengabdianList.length} program pengabdian & pelatihan pendidik
					</p>
				</div>
				<a
					href={resolve('/contact')}
					class="hidden items-center text-sm font-semibold text-purple-600 hover:text-purple-700 sm:flex"
				>
					Undang Pelatihan <ArrowRight class="ml-1 h-4 w-4" />
				</a>
			</div>

			<div class="grid gap-6 md:grid-cols-2">
				{#each pengabdianList as program (program.id)}
					<PengabdianCard {program} />
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- 6. Inovasi Section -->
{#if activeCategory === 'all' || activeCategory === 'inovasi'}
	<section class="bg-slate-50 py-12">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-8 flex items-end justify-between border-b border-gray-200 pb-4">
				<div>
					<h2 class="text-2xl font-bold text-slate-900 sm:text-3xl">Inovasi Teknopedagogi</h2>
					<p class="text-xs text-slate-500 sm:text-sm">
						Menampilkan {inovasiList.length} karya inovasi perangkat lunak & platform AI/VR
					</p>
				</div>
				<a
					href={resolve('/contact')}
					class="hidden items-center text-sm font-semibold text-blue-600 hover:text-blue-700 sm:flex"
				>
					Diskusi Inovasi <ArrowRight class="ml-1 h-4 w-4" />
				</a>
			</div>

			<div class="grid gap-6 md:grid-cols-3">
				{#each inovasiList as innovation (innovation.id)}
					<InovasiCard {innovation} />
				{/each}
			</div>
		</div>
	</section>
{/if}

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
