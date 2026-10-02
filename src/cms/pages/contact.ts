import { SITE_CONFIG } from '$cms/site';

export const contactConfig = {
	hero: {
		title: 'Hubungi Kami',
		description:
			'Punya pertanyaan, ide kolaborasi penelitian, atau butuh dukungan produk? Kami siap mendengarkan dan berdiskusi dengan Anda.'
	},
	cards: {
		email: {
			label: 'Email',
			value: SITE_CONFIG.contact.email,
			note: 'Respon dalam 1x24 Jam'
		},
		whatsapp: {
			label: 'WhatsApp / Telp',
			value: SITE_CONFIG.contact.phone,
			url: SITE_CONFIG.contact.whatsappUrl,
			note: 'Senin - Jumat (08:00 - 17:00)'
		},
		location: {
			label: 'Lokasi Akademik',
			value: 'Singaraja & Denpasar, Bali',
			note: 'Universitas Pendidikan Ganesha'
		}
	},
	form: {
		title: 'Kirim Pesan',
		description:
			'Silakan isi formulir di bawah ini. Kami akan membalas ke email Anda secepat mungkin.',
		successTitle: 'Pesan Berhasil Terkirim!',
		successMessage:
			'Terima kasih telah menghubungi kami. Tim kami akan segera meninjau dan membalas pesan Anda.',
		subjects: [
			{ value: 'kolaborasi', label: 'Kerja Sama / Kolaborasi Penelitian' },
			{ value: 'narasumber', label: 'Permohonan Narasumber / Pelatihan' },
			{ value: 'store', label: 'Dukungan Produk Store' },
			{ value: 'pertanyaan', label: 'Pertanyaan Umum' }
		]
	},
	support: {
		title: 'Butuh Respon Instan?',
		description:
			'Hubungi tim kami secara langsung via WhatsApp untuk pertanyaan seputar modul pembelajaran, konsultasi, atau informasi penelitian.',
		buttonText: 'Chat WhatsApp Sekarang'
	}
};
