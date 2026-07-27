import { getAllPosts } from '$lib/data/blogs/index';
import { SITE_CONFIG } from '$lib/config/site';

export const prerender = true;

const SITE_URL = SITE_CONFIG.url;

export async function GET() {
	const posts = await getAllPosts();

	const items = posts
		.map(
			(post) => `
		<item>
			<title><![CDATA[${post.metadata.title}]]></title>
			<description><![CDATA[${post.metadata.description}]]></description>
			<link>${SITE_URL}/blogs/${post.slug}</link>
			<guid isPermaLink="true">${SITE_URL}/blogs/${post.slug}</guid>
			<pubDate>${new Date(post.metadata.date).toUTCString()}</pubDate>
			<author>${SITE_CONFIG.author.name}</author>
			${post.metadata.tags.map((tag) => `<category>${tag}</category>`).join('\n\t\t\t')}
		</item>`
		)
		.join('');

	const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Blog & Artikel - Dr. I Ketut Andika Pradnyana</title>
		<description>Edukasi AI, VR Learning, Metodologi Penelitian, & Publikasi Scopus oleh Dr. I Ketut Andika Pradnyana</description>
		<link>${SITE_URL}/blogs</link>
		<atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
		<language>id</language>
		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
		${items}
	</channel>
</rss>`;

	return new Response(rss.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
