import { getAllPosts } from '$lib/data/blogs/index';

export const prerender = true;

const SITE_URL = 'https://pradnya.com'; // TODO: Update with your actual domain

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
			<author>${post.metadata.author}</author>
			${post.metadata.tags.map((tag) => `<category>${tag}</category>`).join('\n\t\t\t')}
		</item>`
		)
		.join('');

	const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Pradnya Blog</title>
		<description>Blog posts from Pradnya</description>
		<link>${SITE_URL}/blogs</link>
		<atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
		<language>en</language>
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
