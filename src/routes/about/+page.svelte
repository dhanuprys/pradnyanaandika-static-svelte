<script lang="ts">
	import {
		GraduationCap,
		UserCheck,
		Award,
		Target,
		User,
		Briefcase,
		Trophy,
		Users,
		FileText,
		ArrowRight,
		Send,
		Download,
		ShieldCheck,
		Cpu,
		BookOpen
	} from '@lucide/svelte';
	import { resolve } from '$app/paths';

	import SEO from '$lib/components/seo/SEO.svelte';
	import { SITE_CONFIG, getPersonSchema } from '$lib/config/site';

	const tabs = [
		{ id: 'profil', label: 'Profil', icon: User },
		{ id: 'pendidikan', label: 'Pendidikan', icon: GraduationCap },
		{ id: 'pengalaman', label: 'Pengalaman', icon: Briefcase },
		{ id: 'sertifikasi', label: 'Sertifikasi', icon: Award },
		{ id: 'prestasi', label: 'Prestasi', icon: Trophy },
		{ id: 'organisasi', label: 'Organisasi', icon: Users },
		{ id: 'cv', label: 'CV', icon: FileText }
	];

	let activeTab = $state('profil');

	const profileSchema = {
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		'@id': `${SITE_CONFIG.url}/about`,
		name: 'Profil & Biografi Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.',
		url: `${SITE_CONFIG.url}/about`,
		mainEntity: getPersonSchema()
	};
</script>

<SEO
	title="Profil Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd. | Andika Academy"
	description="Biografi lengkap, riwayat pendidikan, publikasi ilmiah Scopus, sertifikasi, & prestasi Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd. Pakar Teknopedagogi & AI Education."
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
			<div class="flex flex-col items-center gap-4 lg:flex-row lg:items-end lg:gap-20">
				<!-- Persona Image (Left side, fitted to background bottom) -->
				<div class="flex w-full shrink-0 items-end justify-center lg:w-auto lg:justify-start">
					<img
						src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
						alt="Dr. I Ketut Andika"
						class="h-auto max-h-[480px] w-auto object-contain object-bottom drop-shadow-2xl lg:max-h-[620px]"
					/>
				</div>

				<!-- Right Info Content (Full width flex-1) -->
				<div class="w-full flex-1 lg:pb-28">
					<h1 class="mb-1 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
						Tentang Saya
					</h1>

					<!-- Breadcrumb -->
					<nav class="mb-6 flex items-center gap-2 text-xs font-medium text-slate-400 sm:text-sm">
						<a href={resolve('/')} class="transition-colors hover:text-white">Home</a>
						<span>/</span>
						<span class="font-bold text-slate-300">Tentang Saya</span>
					</nav>

					<h2 class="mb-1 text-lg font-bold text-blue-400 sm:text-xl">
						Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.
					</h2>
					<p class="mb-4 text-xs font-semibold tracking-wide text-slate-300 uppercase sm:text-sm">
						Educational Technology Researcher & Lecturer
					</p>
					<p class="mb-8 max-w-2xl text-base leading-relaxed text-gray-300">
						Saya adalah dosen, peneliti, dan inovator di bidang teknologi pendidikan yang berfokus pada
						pengembangan Artificial Intelligence, Virtual Reality, dan media pembelajaran inovatif untuk
						transformasi pendidikan.
					</p>

					<!-- External Badges Row -->
					<div class="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-300">
						<div class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xs">
							<GraduationCap class="h-4 w-4 text-blue-400" />
							<span>Google Scholar</span>
						</div>
						<div class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xs">
							<span class="rounded bg-gray-600 px-1 py-0.5 text-[10px] font-bold text-white">SINTA</span>
							<span>SINTA</span>
						</div>
						<div class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xs">
							<span class="rounded bg-white px-1 py-0.5 text-[10px] font-bold text-emerald-600">ID</span>
							<span>ORCID</span>
						</div>
						<div class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xs">
							<span class="rounded bg-teal-500 px-1 py-0.5 text-[10px] font-bold text-white">R&supE;</span>
							<span>ResearchGate</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Stats Bar / Key Highlights Overlay -->
	<section class="relative z-20 mx-auto -mt-12 mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-gray-100">
			<!-- Card 1: Pendidikan -->
			<div class="flex items-center gap-4 p-3 lg:px-6">
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
					<GraduationCap class="h-6 w-6" />
				</div>
				<div>
					<h3 class="text-sm font-bold text-slate-900">Pendidikan</h3>
					<p class="text-xs text-slate-500">S3 Teknologi Pendidikan</p>
					<p class="text-[11px] text-slate-400">Universitas Negeri Jakarta</p>
				</div>
			</div>

			<!-- Card 2: Pengalaman -->
			<div class="flex items-center gap-4 p-3 lg:px-6">
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
					<UserCheck class="h-6 w-6" />
				</div>
				<div>
					<h3 class="text-sm font-bold text-slate-900">Pengalaman</h3>
					<p class="text-xs text-slate-500">10+ Tahun sebagai Dosen</p>
					<p class="text-[11px] text-slate-400">dan Peneliti</p>
				</div>
			</div>

			<!-- Card 3: Keahlian -->
			<div class="flex items-center gap-4 p-3 lg:px-6">
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
					<Award class="h-6 w-6" />
				</div>
				<div>
					<h3 class="text-sm font-bold text-slate-900">Keahlian</h3>
					<p class="text-xs text-slate-500">AI Education, VR Learning,</p>
					<p class="text-[11px] text-slate-400">Digital Learning</p>
				</div>
			</div>

			<!-- Card 4: Visi -->
			<div class="flex items-center gap-4 p-3 lg:px-6">
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
					<Target class="h-6 w-6" />
				</div>
				<div>
					<h3 class="text-sm font-bold text-slate-900">Visi</h3>
					<p class="text-xs text-slate-500">Mengembangkan teknologi</p>
					<p class="text-[11px] text-slate-400">untuk pendidikan bermakna & inklusif</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Navigation Tab Bar -->
	<section class="mb-8">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="no-scrollbar flex items-center gap-2 overflow-x-auto rounded-2xl border border-gray-100 bg-white p-2 shadow-xs">
				{#each tabs as tab (tab.id)}
					<button
						onclick={() => (activeTab = tab.id)}
						class="flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-all
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
				<div class="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs lg:col-span-6 sm:p-8">
					<div>
						<h3 class="mb-4 text-base font-bold text-slate-900 sm:text-lg">Profil Singkat</h3>
						<p class="mb-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
							Saya memiliki ketertarikan besar pada integrasi teknologi canggih dalam pendidikan, khususnya
							Artificial Intelligence, Virtual Reality, dan pembelajaran adaptif. Berbagai penelitian dan
							inovasi yang saya lakukan bertujuan untuk menciptakan pengalaman belajar yang lebih efektif,
							menarik, dan relevan dengan kebutuhan abad ke-21.
						</p>
						<p class="text-xs leading-relaxed text-slate-600 sm:text-sm">
							Selain mengajar dan meneliti, saya aktif mengembangkan media pembelajaran digital, menulis
							artikel ilmiah, serta berbagi pengetahuan melalui pelatihan dan workshop bagi guru, dosen, dan
							praktisi pendidikan.
						</p>
					</div>
					<div class="mt-8 border-t border-gray-100 pt-4">
						<div class="font-serif italic text-2xl font-bold text-slate-800">Andika</div>
						<div class="mt-1 text-xs font-bold text-blue-600">Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.</div>
						<div class="text-[11px] text-slate-400">Educational Technology Researcher</div>
					</div>
				</div>

				<!-- Pendidikan Timeline (6/12) -->
				<div class="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs lg:col-span-6 sm:p-8">
					<div>
						<h3 class="mb-6 text-base font-bold text-slate-900 sm:text-lg">Pendidikan</h3>
						<div class="relative border-l-2 border-blue-600 pl-6 space-y-6">
							<!-- Item 1 -->
							<div class="relative">
								<span class="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-blue-600"></span>
								<div class="flex items-start justify-between gap-4">
									<div>
										<div class="text-xs font-semibold text-slate-400">2020 &ndash; 2024</div>
										<h4 class="text-sm font-bold text-slate-900 sm:text-base">Doktor Teknologi Pendidikan</h4>
										<p class="text-xs text-slate-500">Universitas Negeri Jakarta</p>
									</div>
									<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs">
										UNJ
									</div>
								</div>
							</div>

							<!-- Item 2 -->
							<div class="relative">
								<span class="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-blue-600"></span>
								<div class="flex items-start justify-between gap-4">
									<div>
										<div class="text-xs font-semibold text-slate-400">2016 &ndash; 2018</div>
										<h4 class="text-sm font-bold text-slate-900 sm:text-base">Magister Teknologi Pendidikan</h4>
										<p class="text-xs text-slate-500">Universitas Negeri Jakarta</p>
									</div>
									<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs">
										UNJ
									</div>
								</div>
							</div>

							<!-- Item 3 -->
							<div class="relative">
								<span class="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-blue-600"></span>
								<div class="flex items-start justify-between gap-4">
									<div>
										<div class="text-xs font-semibold text-slate-400">2010 &ndash; 2014</div>
										<h4 class="text-sm font-bold text-slate-900 sm:text-base">Sarjana Pendidikan</h4>
										<p class="text-xs text-slate-500">Universitas Pendidikan Ganesha</p>
									</div>
									<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-xs">
										UNDIKSHA
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="mt-6 pt-2">
						<a href="#" class="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700">
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
				<div class="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs">
					<div>
						<h3 class="mb-6 text-base font-bold text-slate-900">Pengalaman Mengajar</h3>
						<div class="relative border-l-2 border-blue-600 pl-6 space-y-5">
							<div class="relative">
								<span class="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-blue-600"></span>
								<div class="text-xs text-slate-400">2018 &ndash; Sekarang</div>
								<h4 class="text-xs font-bold text-slate-900">Dosen Tetap</h4>
								<p class="text-[11px] text-slate-500">Universitas Pendidikan Ganesha</p>
							</div>
							<div class="relative">
								<span class="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-blue-600"></span>
								<div class="text-xs text-slate-400">2016 &ndash; 2018</div>
								<h4 class="text-xs font-bold text-slate-900">Dosen Luar Biasa</h4>
								<p class="text-[11px] text-slate-500">Universitas Pendidikan Ganesha</p>
							</div>
							<div class="relative">
								<span class="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-blue-600"></span>
								<div class="text-xs text-slate-400">2015 &ndash; 2016</div>
								<h4 class="text-xs font-bold text-slate-900">Asisten Dosen</h4>
								<p class="text-[11px] text-slate-500">Universitas Pendidikan Ganesha</p>
							</div>
						</div>
					</div>
					<div class="mt-6 pt-2">
						<a href="#" class="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700">
							Lihat Semua Pengalaman <ArrowRight class="h-3.5 w-3.5" />
						</a>
					</div>
				</div>

				<!-- Col 2: Sertifikasi & Pelatihan -->
				<div class="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs">
					<div>
						<h3 class="mb-6 text-base font-bold text-slate-900">Sertifikasi & Pelatihan</h3>
						<div class="space-y-4">
							<div class="flex items-start gap-3">
								<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
									<ShieldCheck class="h-4 w-4" />
								</div>
								<div>
									<h4 class="text-xs font-bold text-slate-900">AI for Education</h4>
									<p class="text-[11px] text-slate-500">IBM SkillsBuild (2024)</p>
								</div>
							</div>
							<div class="flex items-start gap-3">
								<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
									<Award class="h-4 w-4" />
								</div>
								<div>
									<h4 class="text-xs font-bold text-slate-900">Google Certified Educator Level 1 & 2</h4>
									<p class="text-[11px] text-slate-500">Google (2023)</p>
								</div>
							</div>
							<div class="flex items-start gap-3">
								<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
									<Cpu class="h-4 w-4" />
								</div>
								<div>
									<h4 class="text-xs font-bold text-slate-900">Virtual Reality for Learning</h4>
									<p class="text-[11px] text-slate-500">Meta Learning (2023)</p>
								</div>
							</div>
							<div class="flex items-start gap-3">
								<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
									<Target class="h-4 w-4" />
								</div>
								<div>
									<h4 class="text-xs font-bold text-slate-900">Instructional Design</h4>
									<p class="text-[11px] text-slate-500">ATD (2022)</p>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-6 pt-2">
						<a href="#" class="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700">
							Lihat Semua Sertifikasi <ArrowRight class="h-3.5 w-3.5" />
						</a>
					</div>
				</div>

				<!-- Col 3: Prestasi -->
				<div class="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs">
					<div>
						<h3 class="mb-6 text-base font-bold text-slate-900">Prestasi</h3>
						<div class="space-y-4">
							<div class="flex items-start gap-3">
								<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
									<Trophy class="h-4 w-4" />
								</div>
								<div>
									<h4 class="text-xs font-bold text-slate-900">Peneliti Terproduktif</h4>
									<p class="text-[11px] text-slate-500">Universitas Pendidikan Ganesha (2023)</p>
								</div>
							</div>
							<div class="flex items-start gap-3">
								<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
									<Trophy class="h-4 w-4" />
								</div>
								<div>
									<h4 class="text-xs font-bold text-slate-900">Penerima Hibah Penelitian Kompetitif</h4>
									<p class="text-[11px] text-slate-500">Kemdikbudristek (2022)</p>
								</div>
							</div>
							<div class="flex items-start gap-3">
								<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
									<Trophy class="h-4 w-4" />
								</div>
								<div>
									<h4 class="text-xs font-bold text-slate-900">Inovator Pembelajaran Digital</h4>
									<p class="text-[11px] text-slate-500">LLDIKTI Wilayah VIII (2021)</p>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-6 pt-2">
						<a href="#" class="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700">
							Lihat Semua Prestasi <ArrowRight class="h-3.5 w-3.5" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Keanggotaan Profesional Section -->
	<section class="mb-8">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h3 class="mb-4 text-base font-bold text-slate-900 sm:text-lg">Keanggotaan Profesional</h3>
			<div class="grid grid-cols-1 items-center gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-xs lg:grid-cols-12">
				<!-- Associations list (8/12) -->
				<div class="grid grid-cols-2 gap-4 lg:col-span-8 sm:grid-cols-4">
					<div class="flex items-center gap-2 rounded-xl border border-gray-100 bg-slate-50 p-3">
						<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-xs">
							ATPI
						</div>
						<div class="text-[10px] font-semibold text-slate-700 leading-tight">Asosiasi Teknologi Pendidikan Indonesia</div>
					</div>

					<div class="flex items-center gap-2 rounded-xl border border-gray-100 bg-slate-50 p-3">
						<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-600 text-white font-bold text-xs">
							APPI
						</div>
						<div class="text-[10px] font-semibold text-slate-700 leading-tight">Asosiasi Profesi Pendidik Indonesia</div>
					</div>

					<div class="flex items-center gap-2 rounded-xl border border-gray-100 bg-slate-50 p-3">
						<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white font-bold text-xs">
							APPI
						</div>
						<div class="text-[10px] font-semibold text-slate-700 leading-tight">Asosiasi Peneliti Pendidikan Indonesia</div>
					</div>

					<div class="flex items-center gap-2 rounded-xl border border-gray-100 bg-slate-50 p-3">
						<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-600 text-white font-bold text-[9px]">
							IAFOR
						</div>
						<div class="text-[10px] font-semibold text-slate-700 leading-tight">IAFOR (International Academic Forum)</div>
					</div>
				</div>

				<!-- Speaker photo on right (4/12) -->
				<div class="lg:col-span-4">
					<img
						src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
						alt="Dr. Andika Presentation at Academic Conference"
						class="h-36 w-full rounded-xl object-cover shadow-sm"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Banner Section -->
	<section class="pb-8">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col items-center justify-between gap-6 rounded-2xl bg-primary-950 p-6 text-white shadow-md sm:flex-row sm:p-8">
				<div>
					<h3 class="text-lg font-bold text-white sm:text-xl mb-1">Mari berkolaborasi untuk pendidikan yang lebih baik!</h3>
					<p class="text-xs text-slate-300 sm:text-sm">Saya terbuka untuk kerja sama penelitian, pelatihan, dan proyek inovasi pendidikan.</p>
				</div>

				<div class="flex flex-wrap items-center gap-3">
					<a
						href={resolve('/contact')}
						class="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition-colors sm:text-sm"
					>
						Hubungi Saya <Send class="h-4 w-4" />
					</a>
					<a
						href="#"
						class="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-slate-900 shadow-xs hover:bg-slate-100 transition-colors sm:text-sm"
					>
						Unduh CV <Download class="h-4 w-4" />
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
