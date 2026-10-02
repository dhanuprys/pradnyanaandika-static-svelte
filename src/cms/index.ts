// ==========================================
// CENTRAL CMS DATA EXPORTS
// ==========================================

// 1. Research
export {
	getAllResearch,
	getFeaturedResearch,
	getResearchByCategory,
	getResearchById,
	getResearchSchema,
	RESEARCH_CATEGORY_LABELS
} from './research';
export type { ResearchProject, ResearchCategory } from './research/types';

// 2. Publications
export {
	getAllPublications,
	getFeaturedPublications,
	getPublicationById,
	getPublicationSchema
} from './publications';
export type { AcademicPublication, PublicationIndexing } from './publications/types';

// 3. Intellectual Property (HKI)
export { getAllHki, getHkiById, getHkiSchema } from './hki';
export type { HkiRecord, HkiType } from './hki/types';

// 4. Community Service (Pengabdian)
export { getAllPengabdian, getPengabdianById, getPengabdianSchema } from './pengabdian';
export type { PengabdianProgram } from './pengabdian/types';

// 5. EdTech Innovations (Inovasi)
export { getAllInovasi, getInovasiById, getInovasiSchema } from './inovasi';
export type {
	EdtechInnovation,
	EdtechInnovationWithContent,
	InovasiFrontmatter,
	InovasiStatus
} from './inovasi/types';

// 6. Blog Posts
export { getAllPosts, getPostBySlug, getPostSlugs, getBlogSchema } from './blogs';
export type {
	BlogPost,
	BlogPostWithContent,
	BlogFrontmatter,
	BlogCategory,
	AuthorProfile
} from './blogs/types';

// 7. Store Products
export { getAllProducts, getProductById, getProductIds, getProductSchema } from './products';
export type { Product, ProductSpecification, ProductCategory } from './products/types';
