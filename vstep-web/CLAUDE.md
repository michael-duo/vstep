# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Production build → ./dist/ (also runs Pagefind search indexing)
npm run preview   # Preview production build
```

Package manager: pnpm (pnpm-lock.yaml), but npm scripts work fine.

## Architecture

**Astro 6 + Starlight 0.38** static docs site for VSTEP B1 exam prep. Monolingual Vietnamese.

### Content layer
- MDX pages in `src/content/docs/` — Starlight renders these as doc pages
- Each MDX file has `title` + `description` frontmatter
- Sidebar is **manually configured** in `astro.config.mjs` (not auto-generated from file structure)
- Adding a new page requires both creating the MDX file AND adding it to the sidebar config

### Interactive components (React 19)
- `src/components/` — React `.tsx` components used inside MDX with `client:load` directive
- **TierContent** — collapsible amber box for advanced/nâng cao content. Most pages use this to separate basic vs advanced.
- **VocabularyTable** — searchable table, takes `topic` string + `data` array of `{word, vietnamese, example}`
- **TemplateBox** — blue styled box for templates (Speaking/Writing)
- **SampleAnswer** — collapsible green box with optional score badge
- **StudyTrack** — tabbed roadmap component consuming `src/data/study-tracks.json`

### Data
- `src/data/vocabulary/*.json` — 20 topic files, each an array of `{word, vietnamese, example}`
- `src/data/study-tracks.json` — 3 study plans (4/8/12 weeks)
- Data is imported directly in MDX: `import data from '@data/vocabulary/hobbies.json'`

### Path aliases (tsconfig.json + astro.config.mjs)
- `@components/*` → `src/components/*`
- `@data/*` → `src/data/*`

### Styling
- Tailwind CSS v4 via `@tailwindcss/vite` plugin
- Global CSS: `src/styles/global.css` — defines Tailwind layers + color-coded annotation classes (`.linking` blue, `.structure` green, `.vocab` orange)
- Dark mode handled by Starlight automatically

## Content Conventions

- All UI text in **Vietnamese**. English only in examples, templates, vocabulary entries.
- Target audience: weak Vietnamese university students (B1 level = 4.0-5.5/10)
- Content uses two tiers: basic (visible by default) + nâng cao (collapsed in TierContent)
- Frequency labels: ★★★ most common, ★★ common, ★ supplementary
- Bold keywords and key phrases throughout for easy scanning
- Source materials in `/Users/michael/Desktop/vstep/md/` — original teacher documents used to build content

## Content Priority Philosophy

Every piece of content is classified into 3 priority levels:
- ★★★ (learn first): Most common in real exams + easiest to apply (template-based)
- ★★ (learn next): Important but needs more time to master
- ★ (supplementary): When there's extra time

Classification formula: **exam frequency × ease of application = priority level**

Sorting rule applies at ALL 3 levels:
- Sidebar: ★★★ sections first, ★ sections last
- Pages within section: ★★★ pages listed first
- Content within page: Items usable in the most situations listed first; niche items listed last

When adding new content:
1. Classify it ★★★/★★/★ based on the formula above
2. Place it in the correct priority position (not just appended at the end)
3. Within a page, sort items by versatility (many situations → first)
4. Keep language simple — short sentences, tables over paragraphs, one concept per section
5. Template-first: give students a formula to plug into, never require creativity
6. Vietnamese diacritics required in all explanatory text. English only in examples/templates/vocabulary.
7. Source data: 20 real VSTEP exams (2019-2021) as baseline, supplement with web research for frequency validation

## Key Patterns

React components in MDX require `client:load`:
```mdx
import TierContent from '@components/TierContent';
<TierContent client:load title="🔼 Nâng cao — Title">content here</TierContent>
```

Vocabulary tables:
```mdx
import VocabularyTable from '@components/VocabularyTable';
import data from '@data/vocabulary/hobbies.json';
<VocabularyTable client:load topic="Hobbies" data={data} />
```
