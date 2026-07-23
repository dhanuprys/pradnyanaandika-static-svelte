import { getAllPosts } from '$lib/data/blogs/index';

export const prerender = true;

const SITE_URL = 'https://pradnya.com'; // TODO: Update with your actual domain

/** Known static routes to include in the sitemap */
const STATIC_ROUTES = ['/', '/about', '/blogs', '/contact', '/portofolio', '/store'];

export async function GET() {
	const posts = await getAllPosts();

	const staticUrls = STATIC_ROUTES.map(
		(route) => `
	<url>
		<loc>${SITE_URL}${route}</loc>
		<changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
		<priority>${route === '/' ? '1.0' : '0.7'}</priority>
	</url>`
	).join('');

	const postUrls = posts
		.map(
			(post) => `
	<url>
		<loc>${SITE_URL}/blogs/${post.slug}</loc>
		<lastmod>${post.metadata.updated ?? post.metadata.date}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.8</priority>
	</url>`
		)
		.join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
		http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>
	${staticUrls}
	${postUrls}
</urlset>`;

	return new Response(sitemap.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
