export interface BlogCategory {
	id: string;
	label: string;
}

export const blogsConfig = {
	hero: {
		title: 'Blog & Artikel Edukasi',
		description:
			'Temukan artikel terbaru seputar inovasi pendidikan, teknologi pembelajaran, tips penelitian, dan tren terkini di dunia akademik.',
		searchPlaceholder: 'Cari topik atau judul artikel...'
	},
	categories: [
		{ id: 'all', label: 'Semua Artikel' },
		{ id: 'pendidikan', label: 'Pendidikan' },
		{ id: 'tips-trick', label: 'Tips & Trick' },
		{ id: 'karya-ilmiah', label: 'Karya Ilmiah' }
	] as BlogCategory[]
};
