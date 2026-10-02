# In-Code CMS Architecture

Welcome to the internal content management system. This directory (`src/lib/cms`) contains all content entries, page configurations, and helper functions to retrieve them.

The CMS is split into two main areas:

1. **Data Layer** (collections like `blogs`, `research`, `products`)
2. **Page Config Layer** (`pageconfig` folder, for page-specific static strings)

## 📁 Directory Structure

```text
src/lib/cms/
├── index.ts                 # 👈 Central barrel export for all data
├── _utils.ts                # 👈 Shared helpers (slugs, reading time, schema)
│
├── blogs/                   # Markdown blogs (mdsvex)
├── inovasi/                 # Markdown products/apps (mdsvex)
├── products/                # Typescript objects for store
│
├── research/                # Simple hardcoded array collections
├── publications/
├── hki/
├── pengabdian/
│
└── pageconfig/              # Page specific static configurations
    └── index.ts             # 👈 Central barrel export for all page configs
```

---

## 🛠️ How to Add New Content

### Pattern A: Simple Array Collections (Research, Publications, HKI, Pengabdian)

These collections are simple TS arrays defined in their respective `index.ts` file.

1. Open `src/lib/cms/research/index.ts` (or the respective collection)
2. Add a new object to the `RESEARCH_PROJECTS` array at the top of the file
3. Follow the fields defined in `types.ts`
4. Use absolute paths or external URLs for images

### Pattern B: Markdown Collections (Blogs, Inovasi)

These collections use `mdsvex` to render markdown and parse YAML frontmatter.

1. Create a new folder for your entry (e.g., `src/lib/cms/blogs/2026/10-01/my-new-post/`)
2. Create a `page.svx` file inside that folder
3. Define the YAML frontmatter at the top (title, date, description, etc.)
4. Write your content in Markdown below the frontmatter
5. Add a `cover.png` image inside the same folder (it will be automatically imported)

### Pattern C: Module Collections (Products)

Products are complex TS objects grouped in folders (for colocation of assets).

1. Create a new folder in `src/lib/cms/products/` (the folder name becomes the `slug`/`id`)
2. Add an `index.ts` file inside the new folder exporting a `product` object
3. Add any assets (like `cover.png`) in the same folder and import them into `index.ts`

---

## 🔗 Using the CMS in Svelte Components

Always import data and types from the central barrel export:

```svelte
<script lang="ts">
	// ✅ GOOD: Import from central barrel
	import { getAllResearch, getResearchSchema } from '$cms';
	import type { ResearchProject } from '$cms';

	// ❌ BAD: Don't import from deep paths
	import { getAllResearch } from '$cms/research/index';
</script>
```

Same applies to page configs:

```svelte
<script lang="ts">
	import { aboutConfig } from '$cms/pages';
</script>
```
