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
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Andika Academy - Home</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-primary-950 pt-16 pb-32 lg:pt-24 lg:pb-48">
	<!-- Background graphic -->
	<div
		class="absolute inset-0 z-0 opacity-20"
		style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"
	></div>
	<div class="absolute top-0 right-0 translate-x-1/3 -translate-y-12 opacity-30">
		<div class="h-96 w-96 rounded-full bg-primary-500 blur-3xl"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<h1 class="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
					Dr. I Ketut Andika Pradnyana, <br />S.Pd., M.Pd.
				</h1>
				<p class="mb-6 text-lg font-medium text-primary-200">
					Educational Technology Researcher | AI & VR Learning Innovator
				</p>
				<p class="mb-8 max-w-xl text-base text-gray-300">
					Dosen, peneliti, dan inovator di bidang teknologi pendidikan yang berfokus pada
					pengembangan Artificial Intelligence, Virtual Reality, dan media pembelajaran inovatif
					untuk transformasi pendidikan.
				</p>
				<div class="mb-10 flex flex-wrap gap-4">
					<Button variant="primary" size="lg" href={resolve('/portofolio')}>
						Lihat Portofolio <ArrowRight class="ml-2 h-5 w-5" />
					</Button>
					<Button
						variant="secondary"
						size="lg"
						href={resolve('/store')}
						class="hover:bg-accent-600! bg-accent-500! text-white!"
					>
						Academy Store <ShoppingCart class="ml-2 h-5 w-5" />
					</Button>
				</div>
				<!-- External Links (Mocked) -->
				<div class="flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-400">
					<div class="flex items-center gap-2">
						<GraduationCap class="h-5 w-5" /> Google Scholar
					</div>
					<div class="flex items-center gap-2">
						<span class="rounded bg-gray-600 px-1 text-xs font-bold text-white">SINTA</span>
					</div>
					<div class="flex items-center gap-2">
						<span class="rounded bg-white px-1 text-xs font-bold text-green-500">ID</span> ORCID
					</div>
					<div class="flex items-center gap-2">
						<span class="rounded bg-teal-500 px-1 text-xs font-bold text-white">R&supE;</span> ResearchGate
					</div>
				</div>
			</div>
			<!-- Right Image Container Placeholder -->
			<div class="relative hidden h-full min-h-100 lg:block">
				<!-- Placeholder for persona image. We will leave space or put a placeholder -->
				<img
					src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
					alt="Dr. I Ketut Andika"
					class="absolute right-0 bottom-0 h-auto w-[90%] max-w-lg rounded-t-full object-contain object-bottom drop-shadow-2xl"
				/>
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
<section class="bg-slate-50 py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionTitle title="Bidang Keahlian" />
		<div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			<!-- Expertise Item -->
			<div
				class="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
			>
				<div
					class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600"
				>
					<Bot class="h-8 w-8" />
				</div>
				<h3 class="mb-3 text-xl font-bold text-slate-900">AI Education</h3>
				<p class="text-sm text-slate-600">
					Pemanfaatan Artificial Intelligence dalam pembelajaran adaptif.
				</p>
			</div>

			<div
				class="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
			>
				<div
					class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600"
				>
					<MonitorPlay class="h-8 w-8" />
				</div>
				<h3 class="mb-3 text-xl font-bold text-slate-900">Virtual Reality Learning</h3>
				<p class="text-sm text-slate-600">Pengembangan VR untuk pembelajaran imersif.</p>
			</div>

			<div
				class="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
			>
				<div
					class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-600"
				>
					<Lightbulb class="h-8 w-8" />
				</div>
				<h3 class="mb-3 text-xl font-bold text-slate-900">Educational Technology</h3>
				<p class="text-sm text-slate-600">Integrasi teknologi digital dalam proses belajar.</p>
			</div>

			<div
				class="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
			>
				<div
					class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600"
				>
					<BookOpen class="h-8 w-8" />
				</div>
				<h3 class="mb-3 text-xl font-bold text-slate-900">Learning Media Development</h3>
				<p class="text-sm text-slate-600">Desain dan pengembangan media pembelajaran inovatif.</p>
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
			<PortfolioCard
				image="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
				category="AI Companion Pembelajaran Adaptif"
				title="KodiBot AI"
				description="Chatbot AI untuk mendukung literasi digital dan pembelajaran berbasis percakapan interaktif."
			/>
			<PortfolioCard
				image="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
				category="Virtual Reality untuk Pembelajaran Biologi"
				title="VR Biology Learning"
				description="Media pembelajaran VR imersif untuk meningkatkan pemahaman konsep biologi secara visual dan interaktif."
			/>
			<PortfolioCard
				image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
				category="Lingkungan Belajar Imersif"
				title="Immersive Learning Environment"
				description="Pengembangan lingkungan belajar berbasis VR/AR yang mendorong keterlibatan aktif siswa."
			/>
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
