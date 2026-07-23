<script lang="ts">
	import {
		User,
		GraduationCap,
		Briefcase,
		Award,
		Trophy,
		Users,
		Download,
		ShieldCheck,
		MonitorPlay,
		BrainCircuit,
		Lightbulb
	} from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/ui/Button.svelte';

	const navItems = [
		{ id: 'profil', label: 'Profil', icon: User },
		{ id: 'pendidikan', label: 'Pendidikan', icon: GraduationCap },
		{ id: 'pengalaman', label: 'Pengalaman', icon: Briefcase },
		{ id: 'sertifikasi', label: 'Sertifikasi', icon: ShieldCheck },
		{ id: 'prestasi', label: 'Prestasi', icon: Trophy },
		{ id: 'organisasi', label: 'Organisasi', icon: Users },
		{ id: 'cv', label: 'CV', icon: Download }
	];
</script>

<svelte:head>
	<title>Tentang - Andika Academy</title>
</svelte:head>

<!-- About Hero -->
<section class="relative overflow-hidden bg-primary-950 pt-12 pb-32 text-white lg:pt-20 lg:pb-48">
	<div
		class="absolute inset-0 z-0 opacity-10"
		style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px;"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center justify-between gap-12 lg:flex-row">
			<!-- Persona placeholder on left in mockup, wait, actually right or left? In mockup 4, person is on the left. Let's put person left, text right -->
			<div class="relative hidden h-87.5 lg:block lg:w-2/5">
				<!-- Placeholder for persona image -->
				<img
					src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
					alt="Dr. I Ketut Andika"
					class="absolute -bottom-48 left-0 h-137.5 w-auto rounded-t-full object-contain object-bottom drop-shadow-2xl"
				/>
			</div>

			<div class="lg:w-3/5 lg:pl-12">
				<div class="mb-4 text-sm font-medium text-primary-200">Home / Tentang Saya</div>
				<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
					Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.
				</h1>
				<p class="mb-6 text-lg font-medium text-primary-300">
					Educational Technology Researcher & Lecturer
				</p>
				<p class="mb-8 max-w-2xl text-base leading-relaxed text-gray-300">
					Saya adalah dosen, peneliti, dan inovator di bidang teknologi pendidikan yang berfokus
					pada pengembangan Artificial Intelligence, Virtual Reality, dan media pembelajaran
					inovatif untuk transformasi pendidikan.
				</p>
				<!-- External Links (Mocked) -->
				<div class="flex flex-wrap items-center gap-4 text-sm font-semibold text-gray-400">
					<div
						class="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-700 px-3 py-2 transition-colors hover:bg-gray-800"
					>
						<GraduationCap class="h-4 w-4" /> Google Scholar
					</div>
					<div
						class="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-700 px-3 py-2 transition-colors hover:bg-gray-800"
					>
						<span class="rounded bg-gray-600 px-1 text-[10px] font-bold text-white">SINTA</span>
					</div>
					<div
						class="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-700 px-3 py-2 transition-colors hover:bg-gray-800"
					>
						<span class="rounded bg-white px-1 text-[10px] font-bold text-green-500">ID</span> ORCID
					</div>
					<div
						class="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-700 px-3 py-2 transition-colors hover:bg-gray-800"
					>
						<span class="rounded bg-teal-500 px-1 text-[10px] font-bold text-white">R&supE;</span> ResearchGate
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Stats / Highlights Bar -->
<section class="relative z-20 mx-auto -mt-12 mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
	<div
		class="grid grid-cols-2 gap-6 divide-x divide-gray-100 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg lg:grid-cols-4"
	>
		<div class="flex items-center gap-4 pl-4">
			<div
				class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600"
			>
				<GraduationCap class="h-6 w-6" />
			</div>
			<div>
				<div class="font-bold text-slate-900">Pendidikan</div>
				<div class="text-xs text-slate-500">
					S3 Teknologi Pendidikan<br />Universitas Negeri Jakarta
				</div>
			</div>
		</div>
		<div class="flex items-center gap-4 pl-6">
			<div
				class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600"
			>
				<User class="h-6 w-6" />
			</div>
			<div>
				<div class="font-bold text-slate-900">Pengalaman</div>
				<div class="text-xs text-slate-500">10+ Tahun sebagai Dosen<br />dan Peneliti</div>
			</div>
		</div>
		<div class="flex items-center gap-4 pl-6">
			<div
				class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600"
			>
				<Award class="h-6 w-6" />
			</div>
			<div>
				<div class="font-bold text-slate-900">Keahlian</div>
				<div class="text-xs text-slate-500">AI Education, VR Learning,<br />Digital Learning</div>
			</div>
		</div>
		<div class="flex items-center gap-4 pl-6">
			<div
				class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600"
			>
				<Lightbulb class="h-6 w-6" />
			</div>
			<div>
				<div class="font-bold text-slate-900">Visi</div>
				<div class="text-xs text-slate-500">
					Mengembangkan teknologi<br />pendidikan untuk Indonesia
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Sub Navigation -->
<section class="mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
	<div class="no-scrollbar flex gap-2 overflow-x-auto pb-2">
		{#each navItems as item (item.id)}
			<button
				class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors
				{item.id === 'profil'
					? 'bg-primary-600 text-white'
					: 'border border-gray-200 bg-white text-slate-600 hover:bg-slate-50'}"
			>
				<item.icon class="h-4 w-4" />
				{item.label}
			</button>
		{/each}
	</div>
</section>

<!-- Main Content Grid -->
<section class="mx-auto mb-16 max-w-7xl px-4 sm:px-6 lg:px-8">
	<div class="grid gap-8 lg:grid-cols-3">
		<!-- Profil Singkat -->
		<div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm lg:col-span-1">
			<h2 class="mb-6 border-b border-gray-100 pb-4 text-xl font-bold text-slate-900">
				Profil Singkat
			</h2>
			<div class="prose prose-sm mb-8 leading-relaxed text-slate-600">
				<p>
					Saya memiliki ketertarikan besar pada integrasi teknologi canggih dalam pendidikan,
					khususnya Artificial Intelligence, Virtual Reality, dan pembelajaran adaptif. Berbagai
					penelitian dan inovasi yang saya lakukan bertujuan untuk menciptakan pengalaman belajar
					yang lebih efektif, menarik, dan relevan dengan kebutuhan abad ke-21.
				</p>
				<p>
					Selain mengajar dan meneliti, saya aktif mengembangkan media pembelajaran digital, menulis
					artikel ilmiah, serta berbagi pengetahuan melalui pelatihan dan workshop bagi guru, dosen,
					dan praktisi pendidikan.
				</p>
			</div>

			<div class="border-t border-gray-100 pt-6">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/4/41/Signature_of_John_Hancock.svg"
					alt="Signature"
					class="mb-4 h-12 opacity-50"
				/>
				<div class="font-bold text-primary-700">Dr. I Ketut Andika Pradnyana, S.Pd., M.Pd.</div>
				<div class="text-xs text-slate-500">Educational Technology Researcher</div>
			</div>
		</div>

		<!-- Pendidikan -->
		<div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm lg:col-span-2">
			<h2 class="mb-6 border-b border-gray-100 pb-4 text-xl font-bold text-slate-900">
				Pendidikan
			</h2>

			<div class="relative ml-3 space-y-10 border-l-2 border-primary-200 py-2 pl-8">
				<div class="relative">
					<div
						class="absolute top-1 -left-10.75 h-5 w-5 rounded-full border-4 border-white bg-primary-600 shadow"
					></div>
					<div class="mb-1 text-sm font-semibold text-primary-600">2020 - 2024</div>
					<h3 class="text-lg font-bold text-slate-900">Doktor Teknologi Pendidikan</h3>
					<div class="flex items-center justify-between text-slate-600">
						Universitas Negeri Jakarta
						<!-- Placeholder icon/logo -->
						<div class="h-10 w-10 rounded-full bg-gray-100"></div>
					</div>
				</div>

				<div class="relative">
					<div
						class="absolute top-1 -left-10.75 h-5 w-5 rounded-full border-4 border-white bg-primary-600 shadow"
					></div>
					<div class="mb-1 text-sm font-semibold text-primary-600">2016 - 2018</div>
					<h3 class="text-lg font-bold text-slate-900">Magister Teknologi Pendidikan</h3>
					<div class="flex items-center justify-between text-slate-600">
						Universitas Negeri Jakarta
						<div class="h-10 w-10 rounded-full bg-gray-100"></div>
					</div>
				</div>

				<div class="relative">
					<div
						class="absolute top-1 -left-10.75 h-5 w-5 rounded-full border-4 border-white bg-primary-600 shadow"
					></div>
					<div class="mb-1 text-sm font-semibold text-primary-600">2010 - 2014</div>
					<h3 class="text-lg font-bold text-slate-900">Sarjana Pendidikan</h3>
					<div class="flex items-center justify-between text-slate-600">
						Universitas Pendidikan Ganesha
						<div class="h-10 w-10 rounded-full bg-gray-100"></div>
					</div>
				</div>
			</div>

			<div class="mt-8 pt-4">
				<a
					href="#"
					class="flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700"
				>
					Lihat Detail Pendidikan <svg
						class="ml-1 h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/></svg
					>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- More Details Grids -->
<section class="mx-auto mb-16 max-w-7xl px-4 sm:px-6 lg:px-8">
	<div class="grid gap-8 lg:grid-cols-3">
		<!-- Pengalaman Mengajar -->
		<div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
			<h2 class="mb-6 border-b border-gray-100 pb-4 text-xl font-bold text-slate-900">
				Pengalaman Mengajar
			</h2>
			<div class="space-y-6">
				<div>
					<div class="mb-1 flex items-center gap-2 text-xs font-semibold text-primary-600">
						<div class="h-2 w-2 rounded-full bg-primary-600"></div>
						2018 - Sekarang
					</div>
					<div class="font-bold text-slate-900">Dosen Tetap</div>
					<div class="text-sm text-slate-600">Universitas Pendidikan Ganesha</div>
				</div>
				<div>
					<div class="mb-1 flex items-center gap-2 text-xs font-semibold text-primary-600">
						<div class="h-2 w-2 rounded-full bg-primary-600"></div>
						2016 - 2018
					</div>
					<div class="font-bold text-slate-900">Dosen Luar Biasa</div>
					<div class="text-sm text-slate-600">Universitas Pendidikan Ganesha</div>
				</div>
				<div>
					<div class="mb-1 flex items-center gap-2 text-xs font-semibold text-primary-600">
						<div class="h-2 w-2 rounded-full bg-primary-600"></div>
						2015 - 2016
					</div>
					<div class="font-bold text-slate-900">Asisten Dosen</div>
					<div class="text-sm text-slate-600">Universitas Pendidikan Ganesha</div>
				</div>
			</div>
			<div class="mt-8">
				<a
					href={resolve('/about')}
					class="text-sm font-semibold text-primary-600 hover:text-primary-700"
					>Lihat Semua Pengalaman &rarr;</a
				>
			</div>
		</div>

		<!-- Sertifikasi & Pelatihan -->
		<div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
			<h2 class="mb-6 border-b border-gray-100 pb-4 text-xl font-bold text-slate-900">
				Sertifikasi & Pelatihan
			</h2>
			<div class="space-y-5">
				<div class="flex items-start gap-4">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600"
					>
						<ShieldCheck class="h-5 w-5" />
					</div>
					<div>
						<div class="text-sm font-bold text-slate-900">AI for Education</div>
						<div class="text-xs text-slate-500">IBM SkillsBuild (2024)</div>
					</div>
				</div>
				<div class="flex items-start gap-4">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600"
					>
						<ShieldCheck class="h-5 w-5" />
					</div>
					<div>
						<div class="text-sm font-bold text-slate-900">
							Google Certified Educator Level 1 & 2
						</div>
						<div class="text-xs text-slate-500">Google (2023)</div>
					</div>
				</div>
				<div class="flex items-start gap-4">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600"
					>
						<MonitorPlay class="h-5 w-5" />
					</div>
					<div>
						<div class="text-sm font-bold text-slate-900">Virtual Reality for Learning</div>
						<div class="text-xs text-slate-500">Meta Learning (2023)</div>
					</div>
				</div>
				<div class="flex items-start gap-4">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600"
					>
						<BrainCircuit class="h-5 w-5" />
					</div>
					<div>
						<div class="text-sm font-bold text-slate-900">Instructional Design</div>
						<div class="text-xs text-slate-500">ATD (2022)</div>
					</div>
				</div>
			</div>
			<div class="mt-8">
				<a
					href={resolve('/about')}
					class="text-sm font-semibold text-primary-600 hover:text-primary-700"
					>Lihat Semua Sertifikasi &rarr;</a
				>
			</div>
		</div>

		<!-- Prestasi -->
		<div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
			<h2 class="mb-6 border-b border-gray-100 pb-4 text-xl font-bold text-slate-900">Prestasi</h2>
			<div class="space-y-6">
				<div class="flex items-start gap-3">
					<Trophy class="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
					<div>
						<div class="text-sm font-bold text-slate-900">Peneliti Terproduktif</div>
						<div class="text-xs text-slate-500">Universitas Pendidikan Ganesha (2023)</div>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<Trophy class="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
					<div>
						<div class="text-sm font-bold text-slate-900">Penerima Hibah Penelitian Kompetitif</div>
						<div class="text-xs text-slate-500">Kemdikbudristek (2022)</div>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<Trophy class="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
					<div>
						<div class="text-sm font-bold text-slate-900">Inovator Pembelajaran Digital</div>
						<div class="text-xs text-slate-500">LLDIKTI Wilayah VIII (2021)</div>
					</div>
				</div>
			</div>
			<div class="mt-auto pt-8">
				<a
					href={resolve('/about')}
					class="text-sm font-semibold text-primary-600 hover:text-primary-700"
					>Lihat Semua Prestasi &rarr;</a
				>
			</div>
		</div>
	</div>
</section>

<!-- Keanggotaan Profesional -->
<section class="mx-auto mb-16 max-w-7xl px-4 sm:px-6 lg:px-8">
	<div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
		<h2 class="mb-6 border-b border-gray-100 pb-4 text-xl font-bold text-slate-900">
			Keanggotaan Profesional
		</h2>

		<div class="grid items-center gap-6 md:grid-cols-4">
			<div class="flex items-center gap-4">
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-blue-100 bg-blue-50"
				>
					<!-- Dummy Logo -->
					<div class="text-xl font-black text-blue-600">A</div>
				</div>
				<div class="text-xs font-bold text-slate-700">
					Asosiasi Teknologi Pendidikan Indonesia<br />(ATPI)
				</div>
			</div>
			<div class="flex items-center gap-4">
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-orange-100 bg-orange-50"
				>
					<div class="text-xl font-black text-orange-600">A</div>
				</div>
				<div class="text-xs font-bold text-slate-700">
					Asosiasi Profesi Pendidik Indonesia<br />(APPI)
				</div>
			</div>
			<div class="flex items-center gap-4">
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-yellow-100 bg-yellow-50"
				>
					<div class="text-xl font-black text-yellow-600">A</div>
				</div>
				<div class="text-xs font-bold text-slate-700">
					Asosiasi Peneliti Pendidikan Indonesia<br />(APPI)
				</div>
			</div>
			<div class="flex items-center gap-4">
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-red-100 bg-red-50"
				>
					<div class="text-xs font-black text-red-600">iafor</div>
				</div>
				<div class="text-xs font-bold text-slate-700">
					IAFOR<br />(International Academic Forum)
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div
			class="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl bg-primary-950 p-8 text-white shadow-xl sm:p-12 md:flex-row"
		>
			<!-- Background pattern -->
			<div
				class="absolute inset-0 opacity-10"
				style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 24px 24px;"
			></div>

			<div class="relative z-10 max-w-2xl">
				<h2 class="mb-2 text-2xl font-bold sm:text-3xl">
					Mari berkolaborasi untuk pendidikan yang lebih baik!
				</h2>
				<p class="text-primary-200">
					Saya terbuka untuk kerja sama penelitian, pengembangan, pelatihan, dan proyek inovasi
					pendidikan.
				</p>
			</div>

			<div class="relative z-10 flex shrink-0 flex-wrap justify-center gap-4">
				<Button variant="primary" size="lg" href="/contact">
					Hubungi Saya <User class="ml-2 h-5 w-5" />
				</Button>
				<Button
					variant="outline"
					size="lg"
					href={resolve('/about')}
					class="border-white! text-white! hover:bg-white/10!"
				>
					Unduh CV <Download class="ml-2 h-5 w-5" />
				</Button>
			</div>
		</div>
	</div>
</section>
