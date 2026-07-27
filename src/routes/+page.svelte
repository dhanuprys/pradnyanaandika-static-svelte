<script lang="ts">
	import {
		ArrowRight,
		GraduationCap,
		FlaskConical,
		ShieldCheck,
		Quote,
		Bot,
		MonitorPlay,
		Lightbulb,
		BookOpen,
		ShoppingCart
	} from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/ui/Button.svelte';
	import StatBadge from '$lib/components/ui/StatBadge.svelte';
	import SectionTitle from '$lib/components/ui/SectionTitle.svelte';
	import PortfolioCard from '$lib/components/ui/PortfolioCard.svelte';
	import ProductCard from '$lib/components/ui/ProductCard.svelte';
	import ArticleCard from '$lib/components/ui/ArticleCard.svelte';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { SITE_CONFIG } from '$lib/config/site';
	import { getFeaturedResearch } from '$lib/data/research';

	let { data }: { data: PageData } = $props();
	const featuredResearch = getFeaturedResearch();
</script>

<SEO
	title="Dr. I Ketut Andika Pradnyana | Andika Academy - AI Education, VR & Scopus"
	description="Situs resmi Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd. & Andika Academy. Center of Excellence dalam AI Education, VR Learning, Publikasi Jurnal Scopus, & Metodologi Penelitian."
	canonical="{SITE_CONFIG.url}/"
/>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-primary-950 pt-16 pb-16 lg:pt-24 lg:pb-0">
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
					src={resolve('/images/andika.png')}
					alt="Dr. I Ketut Andika"
					class="h-auto max-h-[340px] w-auto object-contain object-bottom drop-shadow-2xl sm:max-h-[440px] lg:max-h-[600px]"
				/>
			</div>

			<!-- Text Content (Right side) -->
			<div class="w-full flex-1 text-center lg:pb-24 lg:text-left">
				<h1
					class="mb-3 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
				>
					Dr. I Ketut Andika Pradnyana, <br class="hidden sm:inline" />S.Pd., M.Pd.
				</h1>
				<p class="mb-4 text-base font-semibold text-blue-300 sm:text-lg">
					Educational Technology Researcher | AI & VR Learning Innovator
				</p>
				<p
					class="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base lg:mx-0"
				>
					Dosen, peneliti, dan inovator di bidang teknologi pendidikan yang berfokus pada
					pengembangan Artificial Intelligence, Virtual Reality, dan media pembelajaran inovatif
					untuk transformasi pendidikan.
				</p>
				<div
					class="mb-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 lg:justify-start"
				>
					<Button
						variant="primary"
						size="lg"
						href={resolve('/portofolio')}
						class="w-full justify-center sm:w-auto"
					>
						Lihat Portofolio <ArrowRight class="ml-2 h-5 w-5" />
					</Button>
					<Button
						variant="secondary"
						size="lg"
						href={resolve('/store')}
						class="hover:bg-accent-600! w-full justify-center bg-accent-500! text-white! sm:w-auto"
					>
						Academy Store <ShoppingCart class="ml-2 h-5 w-5" />
					</Button>
				</div>
				<!-- External Links -->
				<div
					class="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300 sm:gap-6 sm:text-sm lg:justify-start"
				>
					<div
						class="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-1.5"
					>
						<GraduationCap class="h-4 w-4 text-blue-400" /> Google Scholar
					</div>
					<div
						class="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-1.5"
					>
						<span class="rounded bg-blue-600 px-1.5 py-0.5 text-xs font-extrabold text-white"
							>SINTA</span
						>
					</div>
					<div
						class="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-1.5"
					>
						<span class="rounded bg-emerald-500 px-1.5 py-0.5 text-xs font-extrabold text-white"
							>ID</span
						> ORCID
					</div>
					<div
						class="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-1.5"
					>
						<span class="rounded bg-teal-500 px-1.5 py-0.5 text-xs font-extrabold text-white"
							>R&supE;</span
						> ResearchGate
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Stats Bar -->
<section class="relative z-20 mx-auto -mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
	<div
		class="grid grid-cols-2 divide-y divide-gray-100 rounded-2xl bg-white p-4 shadow-xl md:grid-cols-4 md:divide-x md:divide-y-0"
	>
		<StatBadge icon={GraduationCap} value="35+" label="Publikasi" class="justify-center" />
		<StatBadge icon={FlaskConical} value="20+" label="Penelitian" class="justify-center" />
		<StatBadge icon={ShieldCheck} value="15+" label="HKI & Paten" class="justify-center" />
		<StatBadge icon={Quote} value="500+" label="Sitasi" class="justify-center" />
	</div>
</section>

<!-- Expertise Section -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionTitle title="Bidang Keahlian" />
		<div class="mt-8 lg:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
			<!-- Expertise Item -->
			<div
				class="rounded-2xl border border-gray-100 bg-white p-5 sm:p-8 text-center shadow-sm transition-shadow hover:shadow-md"
			>
				<div
					class="mx-auto mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600"
				>
					<Bot class="h-6 w-6 sm:h-8 sm:w-8" />
				</div>
				<h3 class="mb-2 sm:mb-3 text-base sm:text-xl font-bold text-slate-900">AI Education</h3>
				<p class="text-xs sm:text-sm text-slate-600">
					Pemanfaatan Artificial Intelligence dalam pembelajaran adaptif.
				</p>
			</div>

			<div
				class="rounded-2xl border border-gray-100 bg-white p-5 sm:p-8 text-center shadow-sm transition-shadow hover:shadow-md"
			>
				<div
					class="mx-auto mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600"
				>
					<MonitorPlay class="h-6 w-6 sm:h-8 sm:w-8" />
				</div>
				<h3 class="mb-2 sm:mb-3 text-base sm:text-xl font-bold text-slate-900">Virtual Reality Learning</h3>
				<p class="text-xs sm:text-sm text-slate-600">Pengembangan VR untuk pembelajaran imersif.</p>
			</div>

			<div
				class="rounded-2xl border border-gray-100 bg-white p-5 sm:p-8 text-center shadow-sm transition-shadow hover:shadow-md"
			>
				<div
					class="mx-auto mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-600"
				>
					<Lightbulb class="h-6 w-6 sm:h-8 sm:w-8" />
				</div>
				<h3 class="mb-2 sm:mb-3 text-base sm:text-xl font-bold text-slate-900">Educational Technology</h3>
				<p class="text-xs sm:text-sm text-slate-600">Integrasi teknologi digital dalam proses belajar.</p>
			</div>

			<div
				class="rounded-2xl border border-gray-100 bg-white p-5 sm:p-8 text-center shadow-sm transition-shadow hover:shadow-md"
			>
				<div
					class="mx-auto mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600"
				>
					<BookOpen class="h-6 w-6 sm:h-8 sm:w-8" />
				</div>
				<h3 class="mb-2 sm:mb-3 text-base sm:text-xl font-bold text-slate-900">Learning Media Development</h3>
				<p class="text-xs sm:text-sm text-slate-600">Desain dan pengembangan media pembelajaran inovatif.</p>
			</div>
		</div>
	</div>
</section>

<!-- Featured Portfolio -->
<section class="bg-white py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-10 flex items-end justify-between border-b border-gray-200 pb-4">
			<SectionTitle title="Portofolio Unggulan" align="left" class="mb-0" />
			<a
				href={resolve('/portofolio')}
				class="hidden items-center text-sm font-semibold text-primary-600 hover:text-primary-700 sm:flex"
			>
				Lihat Semua Portofolio <ArrowRight class="ml-1 h-4 w-4" />
			</a>
		</div>
		<div class="grid gap-8 md:grid-cols-3">
			{#each featuredResearch as item (item.id)}
				<PortfolioCard
					image={item.image}
					category={item.categoryLabel}
					title={item.title}
					description={item.shortDescription || item.description}
					href={item.targetUrl || resolve('/portofolio')}
				/>
			{/each}
		</div>
	</div>
</section>

<!-- Best Selling Products -->
<section class="bg-slate-50 py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-10 flex items-end justify-between border-b border-gray-200 pb-4">
			<SectionTitle title="Produk Digital Terlaris" align="left" class="mb-0" />
			<a
				href={resolve('/store')}
				class="hidden items-center text-sm font-semibold text-primary-600 hover:text-primary-700 sm:flex"
			>
				Lihat Semua Produk <ArrowRight class="ml-1 h-4 w-4" />
			</a>
		</div>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each data.products.slice(0, 4) as product (product.id)}
				<ProductCard
					image={product.images[0]}
					title={product.name}
					description={product.shortDescription}
					price={new Intl.NumberFormat('id-ID', {
						style: 'currency',
						currency: product.currency
					}).format(product.price)}
					rating={5}
					reviews={product.stock}
					href={resolve(`/store/${product.id}`)}
				/>
			{/each}
		</div>
	</div>
</section>

<!-- Latest Articles -->
<section class="bg-white py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-10 flex items-end justify-between border-b border-gray-200 pb-4">
			<SectionTitle title="Artikel Terbaru" align="left" class="mb-0" />
			<a
				href={resolve('/blogs')}
				class="hidden items-center text-sm font-semibold text-primary-600 hover:text-primary-700 sm:flex"
			>
				Lihat Semua Artikel <ArrowRight class="ml-1 h-4 w-4" />
			</a>
		</div>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each data.posts.slice(0, 4) as post (post.slug)}
				<ArticleCard
					image={post.image || ''}
					category={post.metadata.tags[0]}
					date={new Date(post.metadata.date).toLocaleDateString('id-ID', {
						day: 'numeric',
						month: 'long',
						year: 'numeric'
					})}
					title={post.metadata.title}
					href={resolve(`/blogs/${post.slug}`)}
				/>
			{/each}
		</div>
	</div>
</section>
