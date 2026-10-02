<script lang="ts">
	import type { Component } from 'svelte';
	import { ArrowLeft, ExternalLink, Cpu, Check, Sparkles } from '@lucide/svelte';
	import { resolve } from '$app/paths';

	import SEO from '$lib/components/seo/SEO.svelte';
	import { SITE_CONFIG } from '$cms/site';
	import { getInovasiSchema } from '$cms';

	let { data } = $props();

	const { inovasi } = data;
	const Content: Component = $derived(inovasi.content);
	const inovasiSchema = $derived(getInovasiSchema(inovasi));
</script>

<SEO
	title="{inovasi.title} | I Ketut Andika Pradnyana"
	description={inovasi.description}
	canonical="{SITE_CONFIG.url}/portofolio/inovasi/{inovasi.id}"
	type="article"
	image={inovasi.image || SITE_CONFIG.defaultOgImage}
	jsonLd={inovasiSchema}
/>

<div class="bg-slate-50/50 pb-16 text-slate-800">
	<!-- Top Hero Header -->
	<section class="relative overflow-hidden bg-primary-950 pt-24 pb-20 text-white lg:pt-32 lg:pb-24">
		<div
			class="absolute inset-0 z-0 opacity-15"
			style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 36px 36px;"
		></div>

		<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<!-- Integrated Breadcrumb & Back Navigation -->
			<div class="mb-6 flex items-center justify-between gap-4">
				<nav class="flex items-center gap-2 text-xs text-slate-300">
					<a
						href={resolve('/portofolio')}
						class="inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-xs transition-colors hover:bg-white/20"
					>
						<ArrowLeft class="h-4 w-4 text-blue-400" /> Kembali ke Portofolio
					</a>
					<span class="text-slate-500">/</span>
					<span class="hidden max-w-[320px] truncate font-medium text-slate-400 sm:inline"
						>{inovasi.title}</span
					>
				</nav>

				<a
					href={resolve('/')}
					class="text-xs font-semibold text-slate-400 transition-colors hover:text-white"
				>
					Beranda
				</a>
			</div>

			<!-- Status Badge -->
			<span
				class="mb-4 inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-xs"
			>
				<Sparkles class="h-3.5 w-3.5" />
				{inovasi.status}
			</span>

			<!-- Title -->
			<h1
				class="mb-6 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
			>
				{inovasi.title}
			</h1>

			<!-- Tech Stack -->
			<div class="flex flex-wrap items-center gap-3">
				{#each inovasi.techStack as tech (tech)}
					<span
						class="inline-flex items-center gap-1 rounded-md bg-white/10 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-md"
					>
						<Cpu class="h-3.5 w-3.5 text-blue-400" />
						{tech}
					</span>
				{/each}
			</div>
		</div>
	</section>

	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<!-- Cover Image -->
		{#if inovasi.image}
			<div class="relative -mt-12 mb-12 sm:-mt-16">
				<div class="overflow-hidden rounded-3xl border-4 border-white bg-white shadow-2xl">
					<img
						src={inovasi.image}
						alt={inovasi.title}
						class="aspect-video w-full object-cover transition-transform duration-700 hover:scale-105"
					/>
				</div>
			</div>
		{:else}
			<div class="mt-8"></div>
		{/if}

		<!-- Main Content -->
		<div class="mb-12 rounded-3xl border border-gray-100 bg-white p-8 shadow-xl sm:p-12">
			<!-- Description -->
			<h2 class="mb-4 text-2xl font-bold text-slate-900">Tentang Inovasi</h2>
			<div class="prose mb-10 text-base leading-relaxed text-slate-600 prose-slate">
				<Content />
			</div>

			<!-- Features -->
			<h2 class="mb-4 text-2xl font-bold text-slate-900">Fitur Utama</h2>
			<ul class="mb-10 space-y-4">
				{#each inovasi.features as feature (feature)}
					<li class="flex items-start gap-3">
						<div
							class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100"
						>
							<Check class="h-4 w-4 stroke-[3] text-blue-600" />
						</div>
						<span class="text-base text-slate-700">{feature}</span>
					</li>
				{/each}
			</ul>

			<!-- Demo Action -->
			{#if inovasi.demoUrl}
				<div class="mt-12 flex justify-center rounded-2xl border border-slate-100 bg-slate-50 p-6">
					<a
						href={inovasi.demoUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl active:scale-95"
					>
						Coba Demo / Informasi Lebih Lanjut <ExternalLink class="h-5 w-5" />
					</a>
				</div>
			{/if}
		</div>
	</div>
</div>
