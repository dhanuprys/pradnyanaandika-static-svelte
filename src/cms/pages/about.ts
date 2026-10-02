import { GraduationCap, Award, Target, ShieldCheck, Cpu, Trophy } from '@lucide/svelte';
import type { Icon } from '@lucide/svelte';

export interface HighlightConfig {
	title: string;
	subtitle1: string;
	subtitle2: string;
	icon: typeof Icon;
}

export interface TimelineItem {
	year: string;
	title: string;
	subtitle: string;
	abbreviation?: string; // e.g. "UNJ"
}

export interface ListItem {
	title: string;
	subtitle: string;
	icon: typeof Icon;
}

import { profileConfig } from './profile';

export const aboutConfig = {
	hero: {
		title: 'Tentang Saya',
		name: profileConfig.name,
		role: profileConfig.role,
		description: profileConfig.description,
		image: profileConfig.image,
		badges: profileConfig.badges
	},

	highlights: [
		{
			title: 'Pendidikan',
			subtitle1: 'S3 Teknologi Pendidikan',
			subtitle2: 'Universitas Negeri Jakarta',
			icon: GraduationCap
		},
		{
			title: 'Fokus Riset',
			subtitle1: 'AI & VR Learning',
			subtitle2: 'Teknopedagogi Inovatif',
			icon: Cpu
		},
		{
			title: 'Sertifikasi',
			subtitle1: 'Asesor & Educator',
			subtitle2: 'Lisensi Profesional',
			icon: Award
		},
		{
			title: 'Publikasi & HKI',
			subtitle1: 'Scopus & Hak Cipta',
			subtitle2: '10+ Karya Terdaftar',
			icon: ShieldCheck
		}
	] as HighlightConfig[],

	profile: {
		paragraphs: [
			'Saya memiliki ketertarikan besar pada integrasi teknologi canggih dalam pendidikan, khususnya Artificial Intelligence, Virtual Reality, dan pembelajaran adaptif. Berbagai penelitian dan inovasi yang saya lakukan bertujuan untuk menciptakan pengalaman belajar yang lebih efektif, menarik, dan relevan dengan kebutuhan abad ke-21.',
			'Selain mengajar dan meneliti, saya aktif mengembangkan media pembelajaran digital, menulis artikel ilmiah, serta berbagi pengetahuan melalui pelatihan dan workshop bagi guru, dosen, dan praktisi pendidikan.'
		],
		signature: {
			name: 'Andika',
			fullName: 'I Ketut Andika Pradnyana, S.Pd., M.Pd.',
			role: 'Educational Technology Researcher'
		}
	},

	education: [
		{
			year: '2020 – 2024',
			title: 'Doktor Teknologi Pendidikan',
			subtitle: 'Universitas Negeri Jakarta',
			abbreviation: 'UNJ'
		},
		{
			year: '2016 – 2018',
			title: 'Magister Teknologi Pendidikan',
			subtitle: 'Universitas Negeri Jakarta',
			abbreviation: 'UNJ'
		},
		{
			year: '2010 – 2014',
			title: 'Sarjana Pendidikan',
			subtitle: 'Universitas Pendidikan Ganesha',
			abbreviation: 'UNDIKSHA'
		}
	] as TimelineItem[],

	experience: [
		{
			year: '2018 – Sekarang',
			title: 'Dosen Tetap',
			subtitle: 'Universitas Pendidikan Ganesha'
		},
		{
			year: '2016 – 2018',
			title: 'Dosen Luar Biasa',
			subtitle: 'Universitas Pendidikan Ganesha'
		},
		{
			year: '2015 – 2016',
			title: 'Asisten Dosen',
			subtitle: 'Universitas Pendidikan Ganesha'
		}
	] as TimelineItem[],

	certifications: [
		{
			title: 'AI for Education',
			subtitle: 'IBM SkillsBuild (2024)',
			icon: ShieldCheck
		},
		{
			title: 'Google Certified Educator Level 1 & 2',
			subtitle: 'Google (2023)',
			icon: Award
		},
		{
			title: 'Virtual Reality for Learning',
			subtitle: 'Meta Learning (2023)',
			icon: Cpu
		},
		{
			title: 'Instructional Design',
			subtitle: 'ATD (2022)',
			icon: Target
		}
	] as ListItem[],

	achievements: [
		{
			title: 'Peneliti Terproduktif',
			subtitle: 'Universitas Pendidikan Ganesha (2023)',
			icon: Trophy
		},
		{
			title: 'Penerima Hibah Penelitian Kompetitif',
			subtitle: 'Kemdikbudristek (2022)',
			icon: Trophy
		},
		{
			title: 'Inovator Pembelajaran Digital',
			subtitle: 'LLDIKTI Wilayah VIII (2021)',
			icon: Trophy
		}
	] as ListItem[],

	membershipsImage:
		'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',

	cta: {
		title: 'Mari berkolaborasi untuk pendidikan yang lebih baik!',
		description:
			'Saya terbuka untuk kerja sama penelitian, pelatihan, dan proyek inovasi pendidikan.'
	}
};
