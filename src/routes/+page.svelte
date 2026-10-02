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
		Download
	} from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { profileConfig } from '$cms/pages';
	import Button from '$lib/components/ui/Button.svelte';
	import StatBadge from '$lib/components/ui/StatBadge.svelte';
	import SectionTitle from '$lib/components/ui/SectionTitle.svelte';
	import PortfolioCard from '$lib/components/ui/PortfolioCard.svelte';
	import ProductCard from '$lib/components/ui/ProductCard.svelte';
	import ArticleCard from '$lib/components/ui/ArticleCard.svelte';
	import SEO from '$lib/components/seo/SEO.svelte';
	import { SITE_CONFIG } from '$cms/site';
	import { getFeaturedResearch, RESEARCH_CATEGORY_LABELS } from '$cms';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const featuredResearch = getFeaturedResearch();
</script>

<SEO
	title="I Ketut Andika Pradnyana | Andika Academy - AI Education, VR & Scopus"
	description="Situs resmi I Ketut Andika Pradnyana, S.Pd., M.Pd. & Andika Academy. Center of Excellence dalam AI Education, VR Learning, Publikasi Jurnal Scopus, & Metodologi Penelitian."
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
					src="/images/andika.png"
					alt="I Ketut Andika"
					class="h-auto max-h-[340px] w-auto object-contain object-bottom drop-shadow-2xl sm:max-h-[440px] lg:max-h-[600px]"
				/>
			</div>

			<!-- Text Content (Right side) -->
			<div class="w-full flex-1 text-center lg:pb-24 lg:text-left">
				<h1
					class="mb-3 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
				>
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html profileConfig.name.replace(
						'Pradnyana,',
						'Pradnyana, <br class="hidden sm:inline" />'
					)}
				</h1>
				<p class="mb-4 text-base font-semibold text-blue-300 sm:text-lg">
					{profileConfig.role}
				</p>
				<p
					class="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base lg:mx-0"
				>
					{profileConfig.description}
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
						href={SITE_CONFIG.author.cvUrl}
						target="_blank"
						class="hover:bg-accent-600! w-full justify-center bg-accent-500! text-white! sm:w-auto"
					>
						Unduh CV <Download class="ml-2 h-5 w-5" />
					</Button>
				</div>
				<!-- External Links -->
				<div
					class="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300 sm:gap-6 sm:text-sm lg:justify-start"
				>
					{#each profileConfig.badges as badge (badge.name)}
						<svelte:element
							this={badge.url && badge.url !== '#' ? 'a' : 'div'}
							href={badge.url !== '#' ? badge.url : undefined}
							target={badge.url !== '#' ? '_blank' : undefined}
							rel={badge.url !== '#' ? 'noopener noreferrer' : undefined}
							class="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 transition-colors hover:bg-white/20"
						>
							{#if badge.svg}
								<div class="h-4 w-4 text-blue-400 [&>svg]:h-full [&>svg]:w-full">
									<!-- eslint-disable-next-line svelte/no-at-html-tags -->
									{@html badge.svg}
								</div>
							{:else if badge.label}
								<span
									class="rounded {badge.labelBg} px-1.5 py-0.5 text-xs font-extrabold {badge.labelColor}"
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

<!-- Stats Bar -->
<section class="relative z-20 mx-auto -mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
	<div
		class="grid grid-cols-2 divide-y divide-gray-100 rounded-2xl bg-white p-4 shadow-xl md:grid-cols-4 md:divide-x md:divide-y-0"
	>
		<StatBadge icon={GraduationCap} value="35+" label="Publikasi" class="justify-center" />
		<StatBadge icon={FlaskConical} value="20+" label="Penelitian" class="justify-center" />
		<StatBadge icon={ShieldCheck} value="15+" label="HKI & Paten" class="justify-center" />
		<StatBadge icon={Quote} value="500+" label="Sinta Score" class="justify-center" />
	</div>
</section>

<!-- Expertise Section -->
<section class="bg-slate-50 py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionTitle title="Bidang Keahlian" />
		<div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
			<div
				class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md sm:p-7"
			>
				<div
					class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
				>
					<Bot class="h-5 w-5" />
				</div>
				<h3 class="mb-1.5 text-sm font-bold text-slate-900 sm:text-base">AI Education</h3>
				<p class="text-xs leading-relaxed text-slate-500 sm:text-sm">
					Pemanfaatan Artificial Intelligence dalam pembelajaran adaptif dan personalisasi
					pengalaman belajar.
				</p>
			</div>

			<div
				class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md sm:p-7"
			>
				<div
					class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
				>
					<MonitorPlay class="h-5 w-5" />
				</div>
				<h3 class="mb-1.5 text-sm font-bold text-slate-900 sm:text-base">
					Virtual Reality Learning
				</h3>
				<p class="text-xs leading-relaxed text-slate-500 sm:text-sm">
					Pengembangan VR untuk pembelajaran imersif dan simulasi lingkungan belajar interaktif.
				</p>
			</div>

			<div
				class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md sm:p-7"
			>
				<div
					class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
				>
					<Lightbulb class="h-5 w-5" />
				</div>
				<h3 class="mb-1.5 text-sm font-bold text-slate-900 sm:text-base">Educational Technology</h3>
				<p class="text-xs leading-relaxed text-slate-500 sm:text-sm">
					Integrasi teknologi digital dalam proses belajar untuk transformasi pendidikan modern.
				</p>
			</div>

			<div
				class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md sm:p-7"
			>
				<div
					class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
				>
					<BookOpen class="h-5 w-5" />
				</div>
				<h3 class="mb-1.5 text-sm font-bold text-slate-900 sm:text-base">
					Learning Media Development
				</h3>
				<p class="text-xs leading-relaxed text-slate-500 sm:text-sm">
					Desain dan pengembangan media pembelajaran inovatif berbasis riset.
				</p>
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
					category={RESEARCH_CATEGORY_LABELS[item.category]}
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
			<SectionTitle title="Produk Digital" align="left" class="mb-0" />
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
