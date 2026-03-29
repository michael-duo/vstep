# VSTEP B1 Content Reorganization — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reorganize all VSTEP B1 study content by priority (★★★/★★/★), restructure sidebar, edit existing pages, write new Listening & Reading content, and update CLAUDE.md with content philosophy.

**Architecture:** Content-first reorganization of an Astro + Starlight docs site. Sidebar in `astro.config.mjs` drives navigation order. MDX pages in `src/content/docs/` contain all educational content. React components (`TierContent`, `TemplateBox`, `SampleAnswer`) are reused — no component changes needed. Data files in `src/data/` store vocabulary JSON and study tracks.

**Tech Stack:** Astro 6, Starlight 0.38, React 19, TailwindCSS 4, MDX

**Working directory:** `/Users/michael/Desktop/vstep/vstep-web/`

**Important notes:**
- All Vietnamese text must use proper diacritics (có dấu). Some existing pages (e.g., `sentence-patterns.mdx`) are missing diacritics — fix when editing.
- Content targets weak B1 students (4.0–5.5/10). Keep language simple.
- The ★★★/★★/★ priority system applies at 3 levels: sidebar order, page order within sections, item order within pages.
- Source data: 20 real VSTEP exams (2019–2021) in `md/tuyen-tap-de-2020-2021.md` as baseline. Supplement with web research when writing new content (Listening/Reading strategies).

---

## File Change Map

### Files to CREATE
| File | Purpose |
|------|---------|
| `src/content/docs/getting-started/exam-structure.mdx` | Cấu trúc đề thi chi tiết — toàn cảnh 4 kỹ năng |
| `src/content/docs/speaking/universal-ideas.mdx` | 10 ý vạn năng — extracted from part-1.mdx |
| `src/content/docs/writing/essay-discuss-both-views.mdx` | ★★★ Essay dạng phổ biến nhất — split from essay.mdx |
| `src/content/docs/writing/essay-other-types.mdx` | ★★ 3 dạng essay còn lại — split from essay.mdx |
| `src/content/docs/reference/scoring-criteria.mdx` | Tiêu chí chấm — moved from getting-started/ |
| `src/content/docs/reference/exam-analysis.mdx` | Phân tích đề thi thật — moved from exam-analysis/ |

### Files to DELETE (after content is moved)
| File | Reason |
|------|--------|
| `src/content/docs/getting-started/scoring-criteria.mdx` | Moved to reference/ |
| `src/content/docs/speaking/overview.mdx` | Content merged into universal-ideas + exam-structure |
| `src/content/docs/writing/overview.mdx` | Content merged into checklist |
| `src/content/docs/writing/essay.mdx` | Split into essay-discuss-both-views + essay-other-types |
| `src/content/docs/listening/format.mdx` | Merged into exam-structure |
| `src/content/docs/reading/format.mdx` | Merged into exam-structure |
| `src/content/docs/exam-analysis/index.mdx` | Moved to reference/ |
| `src/content/docs/foundation/topic-phrases.mdx` | Merged into vocabulary.mdx |

### Files to MODIFY
| File | Changes |
|------|---------|
| `astro.config.mjs` | Complete sidebar restructure |
| `CLAUDE.md` | Add Content Priority Philosophy section |
| `src/content/docs/foundation/sentence-patterns.mdx` | Reorder by versatility + add diacritics |
| `src/content/docs/foundation/linking-words.mdx` | Reorder by frequency |
| `src/content/docs/foundation/vocabulary.mdx` | Reorder topics + merge topic-phrases content |
| `src/content/docs/foundation/sentence-upgrade.mdx` | Remove conditional type 3 from basic |
| `src/content/docs/speaking/part-1.mdx` | Remove universal ideas section (moved to own page), simplify |
| `src/content/docs/speaking/part-2.mdx` | Rewrite with merged template content |
| `src/content/docs/speaking/part-3.mdx` | Verify basic template, add example |
| `src/content/docs/writing/checklist.mdx` | Merge overview content, move to top of section |
| `src/content/docs/writing/informal-letter.mdx` | Trim heavily |
| `src/content/docs/writing/formal-letter.mdx` | Reorder by frequency |
| `src/content/docs/listening/strategies.mdx` | Rewrite with detailed Part 1 vs Part 2-3 strategies |
| `src/content/docs/listening/vocabulary.mdx` | Rewrite with comprehensive vocabulary |
| `src/content/docs/reading/strategies.mdx` | Rewrite with detailed strategies |
| `src/content/docs/reading/vocabulary.mdx` | Rewrite with reading vocabulary |
| `src/content/docs/checklist/index.mdx` | Update links |
| `src/content/docs/practice-tests/index.mdx` | Add cross-reference links |
| `src/data/study-tracks.json` | Update to match new page slugs and priority order |

---

## Phase 1: Infrastructure (Tasks 1–3)

### Task 1: Update CLAUDE.md with Content Priority Philosophy

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Read current CLAUDE.md**

Run: Read tool on `/Users/michael/Desktop/vstep/vstep-web/CLAUDE.md`

- [ ] **Step 2: Add Content Priority Philosophy section**

Add this section after the existing "Content Conventions" section:

```markdown
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
```

- [ ] **Step 3: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: add Content Priority Philosophy to CLAUDE.md"
```

---

### Task 2: Restructure sidebar in astro.config.mjs

**Files:**
- Modify: `astro.config.mjs`

- [ ] **Step 1: Replace the entire `sidebar` array**

Replace the `sidebar: [...]` block (lines 21–104 of `astro.config.mjs`) with:

```javascript
sidebar: [
  {
    label: "📍 Bắt đầu từ đây ★★★",
    items: [
      { slug: "getting-started/what-is-vstep", label: "VSTEP B1 là gì?" },
      { slug: "getting-started/exam-structure", label: "Cấu trúc đề thi chi tiết" },
      { slug: "getting-started/study-roadmap", label: "Lộ trình ôn thi" },
    ],
  },
  {
    label: "🧱 Nền tảng ★★★",
    items: [
      { slug: "foundation/sentence-patterns", label: "★★★ Cấu trúc câu vạn năng" },
      { slug: "foundation/linking-words", label: "★★★ Từ nối" },
      { slug: "foundation/vocabulary", label: "★★ Từ vựng & cụm từ theo chủ đề" },
      { slug: "foundation/sentence-upgrade", label: "★★ Nâng cấp câu" },
      { slug: "foundation/common-mistakes", label: "★ Lỗi thường gặp" },
    ],
  },
  {
    label: "🗣️ Speaking ★★★",
    items: [
      { slug: "speaking/universal-ideas", label: "★★★ 10 ý vạn năng" },
      { slug: "speaking/part-1", label: "★★★ Part 1: Hỏi đáp xã hội" },
      { slug: "speaking/part-2", label: "★★★ Part 2: Thảo luận tình huống" },
      { slug: "speaking/part-3", label: "★★★ Part 3: Trình bày quan điểm" },
      { slug: "speaking/sample-answers", label: "★ Bài mẫu có phân tích" },
    ],
  },
  {
    label: "✍️ Writing ★★★",
    items: [
      { slug: "writing/checklist", label: "★★★ Checklist tối thiểu B1" },
      { slug: "writing/informal-letter", label: "★★★ Thư không trang trọng" },
      { slug: "writing/formal-letter", label: "★★ Thư trang trọng" },
      { slug: "writing/essay-discuss-both-views", label: "★★★ Luận: Discuss Both Views" },
      { slug: "writing/essay-other-types", label: "★★ Luận: 3 dạng còn lại" },
      { slug: "writing/sample-answers", label: "★ Bài mẫu có phân tích" },
    ],
  },
  {
    label: "🎧 Listening ★★",
    items: [
      { slug: "listening/strategies", label: "Chiến lược làm bài" },
      { slug: "listening/vocabulary", label: "Từ vựng & mẹo nghe" },
    ],
  },
  {
    label: "📖 Reading ★★",
    items: [
      { slug: "reading/strategies", label: "Chiến lược đọc" },
      { slug: "reading/vocabulary", label: "Từ vựng đọc hiểu" },
    ],
  },
  {
    label: "📝 Luyện đề ★★",
    items: [
      { slug: "practice-tests/how-to-practice", label: "Hướng dẫn luyện đề" },
      { slug: "practice-tests", label: "Danh sách đề" },
    ],
  },
  {
    label: "📚 Tham khảo thêm ★",
    items: [
      { slug: "reference/scoring-criteria", label: "Tiêu chí chấm" },
      { slug: "reference/exam-analysis", label: "Phân tích đề thi thật" },
      { slug: "checklist", label: "Checklist trước ngày thi" },
    ],
  },
],
```

- [ ] **Step 2: Verify config syntax**

Run: `cd /Users/michael/Desktop/vstep/vstep-web && npx astro check 2>&1 | head -20`

If syntax errors, fix the config.

---

### Task 3: Create new files and move content

**Files:**
- Create: `src/content/docs/getting-started/exam-structure.mdx`
- Create: `src/content/docs/speaking/universal-ideas.mdx`
- Create: `src/content/docs/writing/essay-discuss-both-views.mdx`
- Create: `src/content/docs/writing/essay-other-types.mdx`
- Create: `src/content/docs/reference/` directory
- Create: `src/content/docs/reference/scoring-criteria.mdx`
- Create: `src/content/docs/reference/exam-analysis.mdx`
- Delete: old files that were moved

- [ ] **Step 1: Create reference directory**

Run: `mkdir -p /Users/michael/Desktop/vstep/vstep-web/src/content/docs/reference`

- [ ] **Step 2: Move scoring-criteria to reference**

Run: `cp /Users/michael/Desktop/vstep/vstep-web/src/content/docs/getting-started/scoring-criteria.mdx /Users/michael/Desktop/vstep/vstep-web/src/content/docs/reference/scoring-criteria.mdx`

Then update the title in the new file to: `title: Tiêu chí chấm Speaking & Writing`

- [ ] **Step 3: Move exam-analysis to reference**

Run: `cp /Users/michael/Desktop/vstep/vstep-web/src/content/docs/exam-analysis/index.mdx /Users/michael/Desktop/vstep/vstep-web/src/content/docs/reference/exam-analysis.mdx`

Then update the title in the new file to: `title: Phân tích đề thi thật — 20 đề 2019–2021`

- [ ] **Step 4: Create stub for exam-structure.mdx**

Write to `src/content/docs/getting-started/exam-structure.mdx`:

```mdx
---
title: Cấu trúc đề thi chi tiết
description: Toàn cảnh 4 kỹ năng VSTEP — từng phần, số câu, thời gian, ví dụ mẫu
---

(Nội dung sẽ được viết đầy đủ trong Task 5)
```

- [ ] **Step 5: Create stub for universal-ideas.mdx**

Write to `src/content/docs/speaking/universal-ideas.mdx`:

```mdx
---
title: 10 ý vạn năng
description: 10 ý tưởng dùng được cho mọi câu hỏi Speaking — học 1 lần dùng mãi
---

(Nội dung sẽ được viết đầy đủ trong Task 9)
```

- [ ] **Step 6: Create stub for essay-discuss-both-views.mdx**

Write to `src/content/docs/writing/essay-discuss-both-views.mdx`:

```mdx
---
title: "Luận: Discuss Both Views — Dạng phổ biến nhất"
description: Template và cách viết essay dạng Discuss Both Views cho VSTEP B1
---

(Nội dung sẽ được viết đầy đủ trong Task 14)
```

- [ ] **Step 7: Create stub for essay-other-types.mdx**

Write to `src/content/docs/writing/essay-other-types.mdx`:

```mdx
---
title: "Luận: 3 dạng còn lại"
description: Template cho 3 dạng essay ít gặp hơn — Advantages/Disadvantages, Agree/Disagree, Causes/Solutions
---

(Nội dung sẽ được viết đầy đủ trong Task 14)
```

- [ ] **Step 8: Delete old files**

Run:
```bash
cd /Users/michael/Desktop/vstep/vstep-web
rm src/content/docs/getting-started/scoring-criteria.mdx
rm src/content/docs/exam-analysis/index.mdx
rm src/content/docs/speaking/overview.mdx
rm src/content/docs/writing/overview.mdx
rm src/content/docs/listening/format.mdx
rm src/content/docs/reading/format.mdx
rm src/content/docs/foundation/topic-phrases.mdx
```

- [ ] **Step 9: Build to verify no broken references**

Run: `cd /Users/michael/Desktop/vstep/vstep-web && npm run build 2>&1 | tail -30`

Fix any errors. Note: some internal links may break — track them and fix in later tasks.

- [ ] **Step 10: Commit Phase 1**

```bash
cd /Users/michael/Desktop/vstep/vstep-web
git add -A
git commit -m "refactor: restructure sidebar by priority, move/create files

- Sidebar reordered: ★★★ sections first, ★ last
- Created reference/ section for scoring-criteria and exam-analysis
- Created stubs for new pages (exam-structure, universal-ideas, essay split)
- Removed old overview/format pages (content to be merged in later tasks)
- Updated CLAUDE.md with Content Priority Philosophy"
```

---

## Phase 2: Getting Started & Foundation (Tasks 4–8)

### Task 4: Write "Cấu trúc đề thi chi tiết" page

**Files:**
- Modify: `src/content/docs/getting-started/exam-structure.mdx` (replace stub)

**Source data:** Merge content from deleted `listening/format.mdx`, `reading/format.mdx`, `speaking/overview.mdx`, and `writing/overview.mdx` into one comprehensive page.

- [ ] **Step 1: Write the full page content**

Replace the stub in `src/content/docs/getting-started/exam-structure.mdx` with:

```mdx
---
title: Cấu trúc đề thi chi tiết
description: Toàn cảnh 4 kỹ năng VSTEP — từng phần, số câu, thời gian, ví dụ mẫu
---

import TierContent from '@components/TierContent';

Đọc xong trang này, bạn sẽ biết **đề thi trông như thế nào** — không bị bất ngờ khi vào phòng thi.

:::caution[Nhớ kỹ]
Đề thi VSTEP dùng **chung cho B1, B2, C1**. Điểm số sau khi thi mới xác định bậc. Bạn không cần trả lời đúng hết — chỉ cần **đủ điểm B1 (4.0)**.
:::

---

## Tổng quan 4 kỹ năng

| Kỹ năng | Thời gian | Số câu / Bài | Hình thức |
|---------|-----------|-------------|-----------|
| **Listening** | 40 phút | 35 câu trắc nghiệm | Nghe qua loa, mỗi đoạn **1 lần duy nhất** |
| **Reading** | 60 phút | 40 câu trắc nghiệm | 4 bài đọc, độ khó tăng dần |
| **Writing** | 60 phút | 2 bài viết | Task 1: thư (120+ từ), Task 2: luận (250+ từ) |
| **Speaking** | 12 phút | 3 phần | Nói trực tiếp với giám khảo, được ghi âm |

**Cần đúng bao nhiêu để đạt B1?**

| Kỹ năng | Mức tối thiểu |
|---------|--------------|
| Listening | ~14/35 câu đúng (40%) |
| Reading | ~16/40 câu đúng (40%) |
| Writing | Viết đủ ý + đủ từ + chia đoạn rõ |
| Speaking | Nói đủ câu + có cấu trúc + không im lặng quá lâu |

---

## 🎧 Listening — 35 câu, 40 phút

:::danger[Quan trọng nhất]
Mỗi đoạn âm thanh chỉ phát **1 lần duy nhất**. Bỏ lỡ = mất điểm.
:::

| Phần | Số câu | Dạng bài | Độ dài | Độ khó |
|------|--------|---------|--------|--------|
| **Part 1** | 8 câu | Thông báo ngắn (sân bay, thời tiết, lịch trình) | 15–20 giây/đoạn | ★ Dễ nhất |
| **Part 2** | 12 câu (3 đoạn × 4) | Hội thoại 2–3 người (bạn bè bàn kế hoạch, đồng nghiệp thảo luận) | 1–3 phút/đoạn | ★★ Trung bình |
| **Part 3** | 15 câu (3 bài × 5) | Bài giảng / thuyết trình học thuật | ~3 phút/bài | ★★★ Khó nhất |

**Ví dụ đề mẫu:**
- Part 1: *"Nghe thông báo tại sân bay về chuyến bay bị hoãn. Hỏi: Chuyến bay khởi hành lúc mấy giờ?"*
- Part 2: *"Nghe 2 bạn bàn về kỳ nghỉ hè. Hỏi: Cuối cùng họ quyết định đi đâu?"*
- Part 3: *"Nghe bài giảng về ô nhiễm môi trường. Hỏi: Nguyên nhân chính theo người nói là gì?"*

---

## 📖 Reading — 40 câu, 60 phút

| Bài | Số câu | Dạng câu hỏi phổ biến | Độ khó |
|-----|--------|----------------------|--------|
| **Bài 1** | 10 câu | Thông tin cụ thể, từ vựng | ★ Dễ nhất |
| **Bài 2** | 10 câu | Thông tin cụ thể, từ vựng | ★★ Trung bình |
| **Bài 3** | 10 câu | Ý chính, từ vựng | ★★ Khó hơn |
| **Bài 4** | 10 câu | Suy luận, ý chính | ★★★ Khó nhất |

**4 dạng câu hỏi:**

| Dạng | Nhận diện | Mức phổ biến |
|------|----------|-------------|
| Thông tin cụ thể | "According to the passage..." | ★★★ Nhiều nhất |
| Từ vựng | "The word X most closely means..." | ★★★ Rất nhiều |
| Ý chính | "What is the text mainly about?" | ★★ |
| Suy luận | "It can be inferred that..." | ★ Ít nhất, khó nhất |

**Ví dụ:** Bài đọc về du lịch Việt Nam (~500 từ) → Hỏi: *"Theo bài, thành phố nào thu hút nhiều du khách nhất?"* (dạng thông tin cụ thể)

---

## 🗣️ Speaking — 3 phần, 12 phút

Thi trực tiếp với giám khảo. Toàn bộ được ghi âm.

| Phần | Thời gian | Nội dung | Cách thi |
|------|-----------|---------|----------|
| **Part 1** | ~3 phút | Trả lời câu hỏi về 2 chủ đề quen thuộc | Giám khảo hỏi, bạn trả lời ngay |
| **Part 2** | 1' chuẩn bị + 2' nói | Cho 1 tình huống + 3 lựa chọn → chọn 1, giải thích | Đọc đề → ghi chú 1 phút → nói |
| **Part 3** | 1' chuẩn bị + 2–3' nói | Trình bày quan điểm về 1 chủ đề (có 3 gợi ý) | Đọc đề → ghi chú 1 phút → nói → trả lời câu hỏi thêm |

**Ví dụ đề mẫu:**
- Part 1: *"Do you like cooking? / What do you usually cook? / Who taught you how to cook?"*
- Part 2: *"Bạn muốn tổ chức tiệc chia tay cho giáo viên. Chọn: nhà hàng / phòng học / nhà giáo viên. Giải thích."*
- Part 3: *"Nói về lợi ích của việc học tiếng Anh. Gợi ý: giao tiếp, cơ hội việc làm, tiếp cận thông tin."*

---

## ✍️ Writing — 2 bài, 60 phút

| Task | Dạng bài | Thời gian | Số từ | Trọng số |
|------|---------|-----------|-------|----------|
| **Task 1** | Viết thư (informal ~70% / formal ~30%) | **20 phút** | ≥ 120 từ | **1/3** điểm |
| **Task 2** | Viết luận (essay) | **40 phút** | ≥ 250 từ | **2/3** điểm |

:::caution[Task 2 quan trọng gấp đôi Task 1]
Task 2 chiếm **2/3 điểm Writing**. Dành **40 phút** cho Task 2, **20 phút** cho Task 1.
:::

**Ví dụ đề mẫu:**
- Task 1 (Informal): *"Viết thư cho bạn kể về chuyến du lịch gần đây. Nói về: nơi bạn đến, bạn đã làm gì, cảm nhận của bạn."*
- Task 1 (Formal): *"Viết thư khiếu nại với khách sạn về dịch vụ kém. Nêu: vấn đề gặp phải, yêu cầu giải quyết."*
- Task 2: *"Some people think that university education is essential for a good career. Others believe that work experience is more important. Discuss both views and give your opinion."*

**Mẹo quan trọng:** Phần **"Suggested"** trong đề Task 2 = **xương sống outline**. Mỗi gợi ý = 1 luận điểm. **Đừng bỏ qua!**

<TierContent client:load title="🔼 Nâng cao — Tiêu chí chấm chi tiết">

### Speaking (5 tiêu chí × 20%)
Vocabulary, Grammar, Pronunciation, Fluency & Development, Coherence & Content

### Writing (4 tiêu chí × 25%)
Task Fulfillment, Organization, Vocabulary, Grammar

Chi tiết: xem trang [Tiêu chí chấm](/reference/scoring-criteria/).

</TierContent>
```

- [ ] **Step 2: Build and verify**

Run: `cd /Users/michael/Desktop/vstep/vstep-web && npm run dev &` — open http://localhost:4321/getting-started/exam-structure/ and verify rendering.

- [ ] **Step 3: Commit**

```bash
git add src/content/docs/getting-started/exam-structure.mdx
git commit -m "feat: add exam structure overview page

Consolidates exam format info from deleted format/overview pages into
one comprehensive page covering all 4 skills with examples."
```

---

### Task 5: Reorder and fix sentence-patterns.mdx

**Files:**
- Modify: `src/content/docs/foundation/sentence-patterns.mdx`

**Problem:** This file is missing Vietnamese diacritics throughout. Also needs reordering by versatility (per spec: "It helps me" first, "The thing I like most" last).

- [ ] **Step 1: Read current file**

Run: Read tool on `src/content/docs/foundation/sentence-patterns.mdx`

- [ ] **Step 2: Fix diacritics in frontmatter and intro**

Replace the frontmatter and intro:

Old:
```
title: Cau truc cau van nang
description: 14 cau truc cau ap dung duoc cho moi de Speaking va Writing VSTEP B1
```
New:
```
title: Cấu trúc câu vạn năng
description: 14 cấu trúc câu áp dụng được cho mọi đề Speaking và Writing VSTEP B1
```

Old:
```
Nhung cau truc nay **ap dung duoc cho moi chu de** — khong can sang tao, chi can lap tu vung phu hop vao la ra cau hoan chinh.
```
New:
```
Những cấu trúc này **áp dụng được cho mọi chủ đề** — không cần sáng tạo, chỉ cần lắp từ vựng phù hợp vào là ra câu hoàn chỉnh.
```

- [ ] **Step 3: Fix diacritics in tip box**

Old:
```
:::tip[Cach dung hieu qua]
Hoc thuoc 7 cau truc Co ban → luyen ghep voi tu vung theo [chu de](/foundation/topic-phrases/) → dung trong bai noi va bai viet.
:::
```
New:
```
:::tip[Cách dùng hiệu quả]
Học thuộc 6 cấu trúc Cơ bản → luyện ghép với [từ vựng theo chủ đề](/foundation/vocabulary/) → dùng trong bài nói và bài viết.
:::
```

Note: Changed "7" to "6" (the spec defines 6 basic patterns, not 7 — "allows me to" is ★★ not ★★★). Updated link from `/foundation/topic-phrases/` to `/foundation/vocabulary/` since topic-phrases was merged.

- [ ] **Step 4: Fix all remaining diacritics**

Find and replace all un-accented Vietnamese text throughout the file. Key replacements:
- `Co ban` → `Cơ bản`
- `Nghia:` → `Nghĩa:`
- `Nang cao` → `Nâng cao`
- All section headings and body text

- [ ] **Step 5: Reorder basic patterns**

Reorder the 7 basic patterns to match spec priority. Move pattern #7 ("allows me to") into the Nâng cao section since it's ★★ in the spec. New order for Cơ bản (6 patterns):

1. It makes me / helps me + V (★★★ — most versatile)
2. It is a good / effective way to + V (★★★)
3. I find it + adj + to V (★★★)
4. It is + adj + for sb + to V (★★★)
5. Thanks to A, I can... (★★★)
6. The thing I like most about... is... (★★★)

Move to Nâng cao:
7. S + allows me to V (★★)

Section heading change: `## Co ban — 7 cau truc phai biet` → `## Cơ bản — 6 cấu trúc phải biết`

- [ ] **Step 6: Commit**

```bash
git add src/content/docs/foundation/sentence-patterns.mdx
git commit -m "fix: add Vietnamese diacritics and reorder sentence patterns by versatility"
```

---

### Task 6: Reorder linking-words.mdx

**Files:**
- Modify: `src/content/docs/foundation/linking-words.mdx`

- [ ] **Step 1: Read current file**

Run: Read tool on the file.

- [ ] **Step 2: Reorder basic linking words by frequency of use**

The current file groups by function (Sequence, Adding, Contrasting, etc.). Keep the grouping but ensure within each group, the most-used words come first. Verify the order matches spec:

★★★ (Cơ bản):
- because, so (Cause — most needed)
- but, however (Contrast)
- for example (Example)
- first, then, finally (Sequence)
- in conclusion (Conclusion)
- and, also (Adding)

If the current order doesn't match, reorder the sections so the most commonly needed linking words appear first on the page.

- [ ] **Step 3: Update any links to deleted pages**

Search for `/foundation/topic-phrases` and replace with `/foundation/vocabulary`.

- [ ] **Step 4: Commit**

```bash
git add src/content/docs/foundation/linking-words.mdx
git commit -m "fix: reorder linking words by frequency, update internal links"
```

---

### Task 7: Merge topic-phrases into vocabulary.mdx and reorder topics

**Files:**
- Modify: `src/content/docs/foundation/vocabulary.mdx`
- Reference: `src/content/docs/foundation/topic-phrases.mdx` (already deleted in Task 3, but content was previously noted)

- [ ] **Step 1: Read current vocabulary.mdx**

Run: Read tool on the file.

- [ ] **Step 2: Reorder topic groups by exam frequency**

Change the topic grouping to match spec priority:

**Nhóm 1 ★★★ (hay gặp nhất):** Hobbies, Daily Routine, Travel, Food, Health, Education
**Nhóm 2 ★★ (hay gặp):** Hometown, Holidays & Festivals, Family, Shopping, Technology, Sports
**Nhóm 3 ★ (bổ sung):** Work & Career, Environment, Transportation, Weather, Social Media, Clothing, Housing, Music & Entertainment

Move the VocabularyTable imports to match the new order.

- [ ] **Step 3: Add a section for topic phrases (collocations)**

After the vocabulary tables, add a new section with the most useful collocations from the old `topic-phrases.mdx`. Only include phrases that work across multiple topics (versatile first). Structure as a simple table without the full topic-phrases content (which was too detailed for B1 students).

```mdx
---

## Cụm từ đa năng — dùng được cho nhiều chủ đề

Những cụm từ này ghép được với [cấu trúc câu vạn năng](/foundation/sentence-patterns/) để tạo câu hoàn chỉnh.

| Cụm từ | Nghĩa | Dùng cho chủ đề |
|--------|-------|-----------------|
| help me relax | giúp tôi thư giãn | Hobbies, Travel, Daily Routine, Music |
| broaden my knowledge | mở rộng kiến thức | Education, Travel, Technology, Reading |
| connect with other people | kết nối với mọi người | Technology, Hobbies, Sports, Festivals |
| save time and money | tiết kiệm thời gian và tiền | Shopping, Technology, Transportation |
| good for my health | tốt cho sức khỏe | Food, Sports, Health, Daily Routine |
| improve my skills | cải thiện kỹ năng | Education, Work, Hobbies, Technology |
| reduce stress | giảm căng thẳng | Hobbies, Sports, Travel, Music |
| suit my personality | phù hợp tính cách | Hobbies, Work, Housing |
```

- [ ] **Step 4: Commit**

```bash
git add src/content/docs/foundation/vocabulary.mdx
git commit -m "feat: reorder vocab topics by exam frequency, merge topic phrases"
```

---

### Task 8: Simplify sentence-upgrade.mdx

**Files:**
- Modify: `src/content/docs/foundation/sentence-upgrade.mdx`

- [ ] **Step 1: Read current file**

Run: Read tool on the file.

- [ ] **Step 2: Move conditional type 3 from basic to Nâng cao**

Per spec: only keep in Cơ bản section:
- Nối bằng and, but, so, or
- Mệnh đề thời gian (when, before, after)
- Câu điều kiện loại 1 (If + present → will)

Move to Nâng cao (TierContent):
- Đại từ quan hệ (who, which, that) — keep in Nâng cao (already there or move)
- Câu điều kiện loại 2 (If + V2 → would)
- Câu điều kiện loại 3 (If + had V3 → would have V3)

- [ ] **Step 3: Commit**

```bash
git add src/content/docs/foundation/sentence-upgrade.mdx
git commit -m "fix: simplify sentence-upgrade, move conditionals 2-3 to advanced"
```

---

## Phase 3: Speaking Section (Tasks 9–12)

### Task 9: Create "10 ý vạn năng" page

**Files:**
- Modify: `src/content/docs/speaking/universal-ideas.mdx` (replace stub)

**Source:** Extract section "3. Mười ý vạn năng" from `speaking/part-1.mdx` and expand it into a full standalone page. Reorder by versatility per spec.

- [ ] **Step 1: Write the full page content**

Replace the stub with:

```mdx
---
title: 10 ý vạn năng
description: 10 ý tưởng dùng được cho mọi câu hỏi Speaking — học 1 lần dùng mãi
---

import TemplateBox from '@components/TemplateBox';
import TierContent from '@components/TierContent';

Đây là **vũ khí lợi hại nhất** cho Speaking Part 1. Học thuộc 10 ý này, bạn có thể trả lời **hầu hết mọi câu hỏi** mà không cần chuẩn bị từng chủ đề riêng.

:::tip[Cách dùng]
Giám khảo hỏi bất kỳ chủ đề gì → Chọn 2–3 ý từ danh sách dưới → Ghép với [cấu trúc câu vạn năng](/foundation/sentence-patterns/) → Trả lời hoàn chỉnh.
:::

---

## 10 ý — sắp theo độ đa năng

| # | Ý | Cụm từ tiếng Anh | Dùng được cho |
|---|---|-------------------|--------------|
| 1 | Giúp thư giãn, giảm stress | **help me relax / reduce stress** | Gần như MỌI chủ đề |
| 2 | Mở rộng kiến thức | **broaden my knowledge** | Rất nhiều chủ đề |
| 3 | Kết nối với mọi người | **connect with other people** | Rất nhiều chủ đề |
| 4 | Tiết kiệm thời gian / tiền | **save time / money / effort** | Nhiều chủ đề |
| 5 | Cải thiện kỹ năng | **improve my skills** | Nhiều chủ đề |
| 6 | Tốt cho sức khỏe | **good for my health** | Khá nhiều chủ đề |
| 7 | Cảm thấy vui, thoải mái | **make me feel happy / comfortable** | Khá nhiều chủ đề |
| 8 | Phù hợp tính cách | **suit my personality** | Một số chủ đề |
| 9 | Có thêm cơ hội việc làm | **get more job opportunities** | Một số chủ đề |
| 10 | Lưu giữ kỷ niệm | **keep wonderful memories** | Travel, Hobbies, Holidays |

---

## Cách ghép ý + cấu trúc = câu trả lời

<TemplateBox title="Công thức: Cấu trúc vạn năng + Ý vạn năng">

**It helps me** + [ý vạn năng] = câu trả lời

**It is a good way to** + [ý vạn năng] = câu trả lời

**I find it** + adj + **to** + [ý vạn năng] = câu trả lời

</TemplateBox>

---

## Ví dụ thực tế — 1 câu hỏi, 3 cách trả lời

> *Do you like reading books?*

**Dùng ý #1 (thư giãn):**
> "Yes, I love reading. **It helps me relax** after a long day at school."

**Dùng ý #2 (kiến thức):**
> "Yes, I read a lot. **Reading is a good way to broaden my knowledge** about the world."

**Dùng ý #3 (kết nối):**
> "Yes, reading is my favourite hobby. **Thanks to** books, **I can connect with** different cultures and ideas."

---

## Ví dụ ghép nhanh cho các chủ đề khác

| Câu hỏi | Ý dùng | Câu trả lời |
|---------|--------|-------------|
| Do you like cooking? | #1 thư giãn | Cooking **helps me relax** after a stressful day. |
| What's your favourite sport? | #6 sức khỏe | Playing football **is good for my health** and keeps me fit. |
| Do you use social media? | #3 kết nối | Social media **helps me connect with** my friends who live far away. |
| Why do you learn English? | #9 cơ hội | Learning English helps me **get more job opportunities** in the future. |
| Do you like travelling? | #10 kỷ niệm | Travelling helps me **keep wonderful memories** with my family. |

---

## Mẹo: Kết hợp 2 ý trong 1 câu trả lời

Trả lời tối thiểu 3 câu — dùng 2 ý khác nhau:

> *What's your favourite hobby?*
> Well, my favourite hobby is listening to music. First, **it helps me relax** after studying all day *(ý #1)*. Besides, I can **connect with my friends** through sharing songs we like *(ý #3)*.

<TierContent client:load title="🔼 Nâng cao — Dùng 10 ý cho Part 2 và Part 3">

10 ý vạn năng không chỉ dùng cho Part 1. Trong Part 2 (chọn giải pháp), bạn có thể dùng các ý này làm lý do chọn:

> "I would choose option A because **it helps save time and money** *(ý #4)*. Moreover, **it is a good way to connect with other people** *(ý #3)*."

Trong Part 3 (trình bày quan điểm), dùng làm luận điểm:

> "I believe learning English is very important. Firstly, **it helps people get more job opportunities** *(ý #9)*. Secondly, **it broadens our knowledge** about the world *(ý #2)*."

</TierContent>
```

- [ ] **Step 2: Commit**

```bash
git add src/content/docs/speaking/universal-ideas.mdx
git commit -m "feat: create universal ideas page for Speaking

Extracted and expanded 10 universal ideas into standalone page,
ordered by versatility with practical examples."
```

---

### Task 10: Simplify Speaking Part 1

**Files:**
- Modify: `src/content/docs/speaking/part-1.mdx`

- [ ] **Step 1: Read current file**

Run: Read tool on the file (already read — 349 lines).

- [ ] **Step 2: Remove section "3. Mười ý vạn năng"**

Delete lines 156–173 (the "Mười ý vạn năng" section). Replace with a short cross-reference:

```mdx
---

## Ý tưởng trả lời

Xem [10 ý vạn năng](/speaking/universal-ideas/) — 10 ý dùng được cho mọi câu hỏi Part 1.

---
```

- [ ] **Step 3: Update internal links**

Replace any links to `/speaking/overview` with appropriate alternatives (e.g., `/getting-started/exam-structure/` for format info).

- [ ] **Step 4: Simplify templates section**

Keep only templates T1, T2, T3 in the basic section. Move T4 and T5 into a TierContent block:

```mdx
<TierContent client:load title="🔼 Nâng cao — Template bổ sung">

(Move T4: Hiện tại vs Quá khứ and T5: Tần suất + Kết quả here)

</TierContent>
```

- [ ] **Step 5: Commit**

```bash
git add src/content/docs/speaking/part-1.mdx
git commit -m "refactor: simplify Part 1, extract universal ideas to own page"
```

---

### Task 11: Rewrite Speaking Part 2

**Files:**
- Modify: `src/content/docs/speaking/part-2.mdx`

**Sources:** Merge content from:
- Current `speaking/part-2.mdx` (website version ~800 words)
- `md/speaking-part2-template-2.md` (newly converted from images)

- [ ] **Step 1: Read current Part 2 page and the md source**

Run: Read both files.

- [ ] **Step 2: Rewrite the page**

Replace the entire content of `speaking/part-2.mdx` with a comprehensive but concise version that:
- Keeps the clearest template from both sources
- Includes "Tận dụng 1 phút chuẩn bị" strategy
- Includes the Template 2 table format
- Includes 5 common scenarios from real exams
- Includes B2 upgrade tips in TierContent
- Is significantly shorter than the old 88KB/322KB files

The page should follow this structure:
1. Format reminder (1 min prep + 2-3 min speak)
2. Template chính (simplest version)
3. Template 2 chi tiết (table format)
4. Cách tận dụng 1 phút chuẩn bị
5. 5 tình huống hay gặp nhất
6. Nâng cao: B2 upgrade tips

Include proper imports for TemplateBox, TierContent. All Vietnamese text with diacritics.

- [ ] **Step 3: Commit**

```bash
git add src/content/docs/speaking/part-2.mdx
git commit -m "feat: rewrite Speaking Part 2 with merged templates

Combines best content from website version and teacher's original
templates. Includes prep strategy and 5 common exam scenarios."
```

---

### Task 12: Update Speaking Part 3

**Files:**
- Modify: `src/content/docs/speaking/part-3.mdx`

- [ ] **Step 1: Read current file**

Run: Read tool on the file.

- [ ] **Step 2: Ensure basic template is prominent**

Verify the basic template (2 ý + kết luận) is the first and most visible item. If the current page leads with something else, restructure.

The basic template should be:
```
Mở: "Today I'd like to talk about [topic]."
Ý 1: Gợi ý 1 + "because..." + ví dụ ngắn (~40 giây)
Ý 2: Gợi ý 2 + "because..." + ví dụ ngắn (~40 giây)
Kết: "In conclusion, I believe that [topic] is important."
```

- [ ] **Step 3: Add a complete example answer**

If there isn't a full example answer, add one using a common exam topic.

- [ ] **Step 4: Update links**

Replace links to `/speaking/overview` with `/getting-started/exam-structure/`.

- [ ] **Step 5: Commit**

```bash
git add src/content/docs/speaking/part-3.mdx
git commit -m "fix: ensure basic template is prominent in Part 3, add example"
```

---

## Phase 4: Writing Section (Tasks 13–15)

### Task 13: Merge Writing overview into checklist and enhance

**Files:**
- Modify: `src/content/docs/writing/checklist.mdx`

**Source:** Merge useful content from deleted `writing/overview.mdx` (time allocation table, "Mẹo quan trọng: dùng Suggested") into the checklist page, which is now the first page in the Writing section.

- [ ] **Step 1: Read current checklist.mdx**

Already read (82 lines).

- [ ] **Step 2: Add overview info at the top**

Insert at the top of the page (after frontmatter), before the existing checklist content:

```mdx
---
title: Writing — Checklist tối thiểu B1
description: Chiến lược chung và danh sách kiểm tra tối thiểu để đạt B1 Writing
---

import TierContent from '@components/TierContent';

## Cấu trúc phần thi Writing

| Task | Dạng bài | Thời gian | Số từ | Trọng số |
|------|---------|-----------|-------|----------|
| **Task 1** | Viết thư | **20 phút** | ≥ 120 từ | **1/3** điểm |
| **Task 2** | Viết luận | **40 phút** | ≥ 250 từ | **2/3** điểm |

:::tip[Mẹo quan trọng nhất]
Phần **"Suggested"** trong đề Task 2 = **xương sống outline**. Mỗi gợi ý = 1 luận điểm. **Dùng ngay, đừng bỏ qua!**
:::

### Quy trình 60 phút

| Thời gian | Việc cần làm |
|-----------|-------------|
| 0–2 phút | Đọc đề Task 1, gạch ý yêu cầu |
| 2–4 phút | Viết outline Task 1 |
| 4–18 phút | Viết bài Task 1 |
| 18–20 phút | Đọc lại, đếm từ |
| 20–23 phút | Đọc đề Task 2, gạch ý |
| 23–25 phút | Viết outline Task 2 |
| 25–55 phút | Viết bài Task 2 |
| 55–60 phút | Đọc lại, sửa lỗi |

---

## Checklist — Kiểm tra trước khi nộp

Dùng checklist này để kiểm tra bài viết. **3–5 phút đọc lại có thể cứu nhiều điểm.**
```

Then keep the existing checklist content below.

- [ ] **Step 3: Commit**

```bash
git add src/content/docs/writing/checklist.mdx
git commit -m "feat: merge Writing overview into checklist page

Checklist is now the entry point for Writing section, includes
time allocation and exam strategy from the old overview page."
```

---

### Task 14: Split essay into two pages

**Files:**
- Modify: `src/content/docs/writing/essay-discuss-both-views.mdx` (replace stub)
- Modify: `src/content/docs/writing/essay-other-types.mdx` (replace stub)
- Delete: `src/content/docs/writing/essay.mdx`

**Source:** Current `writing/essay.mdx` (160 lines) — split Dạng 1 into its own page, Dạng 2-4 into another page.

- [ ] **Step 1: Read current essay.mdx**

Already read (160 lines).

- [ ] **Step 2: Write essay-discuss-both-views.mdx**

Extract the "Dạng 1: Discuss Both Views" section (lines 28–48), the general essay structure table (lines 17–25), the useful phrases section (lines 124–143), and the P-E-E advanced section. Add intro context.

```mdx
---
title: "Luận: Discuss Both Views — Dạng phổ biến nhất"
description: Template và cách viết essay dạng Discuss Both Views cho VSTEP B1
---

import TemplateBox from '@components/TemplateBox';
import TierContent from '@components/TierContent';

Dạng **Discuss Both Views** chiếm khoảng **40% đề thi thật** — phổ biến nhất trong 4 dạng essay.

**Nhận diện:** Đề hỏi hai quan điểm trái chiều: *"Some people think... while others believe..."*

---

## Cấu trúc chung

| Phần | Nội dung | Số từ |
|------|---------|-------|
| **Introduction** | Giới thiệu chủ đề + nêu vấn đề | 40–50 từ |
| **Body 1** | Quan điểm A + giải thích + ví dụ | 70–90 từ |
| **Body 2** | Quan điểm B + giải thích + ví dụ | 70–90 từ |
| **Conclusion** | Tóm tắt + **quan điểm cá nhân rõ ràng** | 30–40 từ |

---

## Template

<TemplateBox title="Template — Discuss Both Views">

**Introduction:**
*Nowadays, there is a growing debate about [topic]. Some people believe that [View A], while others argue that [View B]. This essay will discuss both perspectives before expressing my personal opinion.*

**Body 1 — View A:**
*On the one hand, there are some reasons why people [View A]. This is mainly because [lý do 1]. For example, [ví dụ]. Another point to consider is that [lý do 2].*

**Body 2 — View B:**
*On the other hand, others believe that [View B]. The first reason is that [lý do 1]. In addition, [lý do 2].*

**Conclusion:**
*In conclusion, both viewpoints have their own merits. However, I personally believe that [your opinion] because [lý do ngắn gọn].*

</TemplateBox>

**Từ nối cốt lõi:** On the one hand / On the other hand / However / In conclusion

---

## Cụm từ hữu ích

### Mở đoạn Body
- *On the one hand, / On the other hand,*
- *Firstly, / Secondly,*
- *One major reason is that...*

### Giải thích và ví dụ
- *This means that... / This is because...*
- *For example, / For instance,*
- *As a result, / Therefore,*

### Thêm ý
- *In addition, / Moreover,*

### Kết luận
- *In conclusion, / To sum up,*
- *I strongly believe that...*

<TierContent client:load title="🔼 Nâng cao — Viết Body chặt chẽ hơn (P-E-E)">

### Cấu trúc P-E-E (Point – Explanation – Example)

1. **Point** (ý chính): *One advantage of exercise is that it improves mental health.*
2. **Explanation** (giải thích): *This is because physical activity releases chemicals that reduce stress.*
3. **Example** (ví dụ): *For instance, studies show that people who exercise regularly have lower rates of depression.*

### Paraphrase mở bài
Không chép lại đề — diễn đạt lại:
- Đề: *"Some people think that technology is harmful."*
- Mở bài: *"In today's digital age, there is growing debate about whether modern technology has a negative impact on society."*

</TierContent>
```

- [ ] **Step 3: Write essay-other-types.mdx**

Extract Dạng 2, 3, 4 from current essay.mdx:

```mdx
---
title: "Luận: 3 dạng còn lại"
description: Template cho Advantages/Disadvantages, Agree/Disagree, Causes/Solutions
---

import TemplateBox from '@components/TemplateBox';
import TierContent from '@components/TierContent';

3 dạng essay này ít gặp hơn [Discuss Both Views](/writing/essay-discuss-both-views/) nhưng vẫn có thể xuất hiện trong đề thi.

---

## ★★ Dạng 2: Advantages and Disadvantages

**Nhận diện:** Đề hỏi *"What are the advantages and disadvantages?"*

<TemplateBox title="Template — Advantages & Disadvantages">

**Introduction:**
*Nowadays, [topic] has become a common trend. While there are several benefits, there are also some drawbacks that should be considered.*

**Body 1 — Advantages:**
*On the one hand, there are several advantages. Firstly, [lợi ích 1]. This means that [giải thích]. For example, [ví dụ]. Secondly, [lợi ích 2].*

**Body 2 — Disadvantages:**
*On the other hand, there are some disadvantages. One major drawback is that [nhược điểm 1]. In addition, [nhược điểm 2].*

**Conclusion:**
*In conclusion, [topic] has both advantages and disadvantages. People should consider both sides carefully before making a decision.*

</TemplateBox>

**Từ nối cốt lõi:** Firstly / Secondly / One major drawback / In addition

---

## ★★ Dạng 3: Agree or Disagree

**Nhận diện:** Đề hỏi *"Do you agree or disagree?"*

<TemplateBox title="Template — Agree/Disagree">

**Introduction:**
*Nowadays, there is a growing debate about [topic]. Personally, I completely agree / disagree with this statement for the following reasons.*

**Body 1:**
*The first reason to support my opinion is that [lý do 1]. [Giải thích + ví dụ].*

**Body 2:**
*Another reason I would like to mention is that [lý do 2]. [Giải thích + ví dụ].*

**Conclusion:**
*In conclusion, I completely agree / disagree that [paraphrase đề]. This is mainly because [lý do 1] and [lý do 2].*

</TemplateBox>

**Từ nối cốt lõi:** Personally / The first reason / Another reason / This is mainly because

---

## ★★ Dạng 4: Causes and Solutions

**Nhận diện:** Đề hỏi *"What are the causes? What solutions can be suggested?"*

<TemplateBox title="Template — Causes & Solutions">

**Introduction:**
*Nowadays, [topic] has become a serious issue. This essay will examine the primary causes and propose some practical solutions.*

**Body 1 — Causes:**
*There are some reasons why [vấn đề]. One major cause is [nguyên nhân 1]. [Giải thích + ví dụ]. Another factor is that [nguyên nhân 2].*

**Body 2 — Solutions:**
*Nevertheless, several solutions can be adopted. One effective solution is [giải pháp 1]. [Giải thích + ví dụ]. Furthermore, [giải pháp 2].*

**Conclusion:**
*In conclusion, the problem of [topic] is mainly caused by [nguyên nhân]. However, this issue can be effectively addressed by [giải pháp].*

</TemplateBox>

**Từ nối cốt lõi:** One major cause / Another factor / One effective solution / Furthermore
```

- [ ] **Step 4: Delete old essay.mdx**

Run: `rm /Users/michael/Desktop/vstep/vstep-web/src/content/docs/writing/essay.mdx`

- [ ] **Step 5: Update any internal links to the old essay page**

Search for `/writing/essay` links across all MDX files and study-tracks.json. Replace with:
- `/writing/essay-discuss-both-views/` for general essay references
- Keep both links where both pages are relevant

Run: `grep -r "writing/essay" /Users/michael/Desktop/vstep/vstep-web/src/ --include="*.mdx" --include="*.json"`

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: split essay into Discuss Both Views + 3 other types

Discuss Both Views gets its own ★★★ page as the most common type.
Three remaining types grouped in one ★★ page."
```

---

### Task 15: Trim informal-letter.mdx

**Files:**
- Modify: `src/content/docs/writing/informal-letter.mdx`

- [ ] **Step 1: Read current file**

Run: Read tool on the file.

- [ ] **Step 2: Ensure concise structure**

The page should contain (in this order):
1. When it appears (★★★ ~70% of exams)
2. Template structure (1 simple template)
3. Useful phrases table (opening, body, closing)
4. 1–2 example answers with annotations
5. TierContent for advanced techniques

Remove any content that is overly long or duplicates what's in other pages. The original source file was 109KB — the web version should be much shorter.

- [ ] **Step 3: Update title**

Change title from "Thư thân mật (Informal)" to "Thư không trang trọng (Informal)" to match the spec terminology.

- [ ] **Step 4: Commit**

```bash
git add src/content/docs/writing/informal-letter.mdx
git commit -m "fix: trim informal letter page, rename to match spec terminology"
```

---

## Phase 5: Listening & Reading New Content (Tasks 16–19)

> **Note:** These tasks require writing substantial new educational content. The implementer should:
> 1. Read the existing page content first (strategies.mdx, vocabulary.mdx for both Listening and Reading)
> 2. Use the source material in `md/VSTEP_Toan_Dien_Co_So_Do.md` for Vietnamese-language strategy tips
> 3. Web search for VSTEP Listening/Reading strategies to supplement
> 4. Keep all Vietnamese text with proper diacritics

### Task 16: Rewrite Listening strategies page

**Files:**
- Modify: `src/content/docs/listening/strategies.mdx`

The current page has basic strategy content (~900 words). Enhance it with:
- Separate Part 1 vs Part 2-3 strategies (per spec)
- More specific, actionable tips for weak students
- Emphasis on Part 1 as the "easiest points"

- [ ] **Step 1: Read current strategies.mdx**

Run: Read tool on the file.

- [ ] **Step 2: Research VSTEP Listening strategies**

Web search for: "VSTEP Listening strategies tips B1" and "chiến lược nghe VSTEP B1"
Extract practical tips specific to VSTEP format.

- [ ] **Step 3: Rewrite the page**

Structure the rewritten page as:

```
Title: Chiến lược làm bài Listening
1. 5 nguyên tắc vàng (applies to all parts)
   - Đọc câu hỏi trước khi nghe
   - Gạch từ khóa trong câu hỏi
   - Nghe từ đầu đến cuối, không dừng giữa chừng
   - Loại trừ đáp án sai
   - Không để trống đáp án

2. ★★ Chiến lược Part 1 — Thông báo ngắn (Dễ ăn điểm nhất)
   - 30 giây đọc câu hỏi = vàng
   - Nghe số, ngày, giờ, địa điểm
   - Mẹo: thông tin thường được nhắc lại hoặc sửa lại

3. ★★ Chiến lược Part 2 — Hội thoại
   - Chú ý ai nói gì (phân biệt giọng)
   - Cẩn thận: người nói thường đổi ý
   - Đáp án = ý kiến CUỐI CÙNG

4. ★★ Chiến lược Part 3 — Bài giảng (Khó nhất)
   - Ghi chú nhanh từ khóa
   - Nghe signal words: However, The main point is...
   - Không hoảng nếu không hiểu hết — tập trung câu hỏi

5. Lỗi thường gặp (avoid these)
6. TierContent: Nâng cao tips
```

Include the full MDX content with proper Vietnamese diacritics, TemplateBox for strategies, and TierContent for advanced tips. Reference format info at `/getting-started/exam-structure/` instead of repeating it.

- [ ] **Step 4: Commit**

```bash
git add src/content/docs/listening/strategies.mdx
git commit -m "feat: rewrite Listening strategies with Part 1-2-3 breakdown"
```

---

### Task 17: Rewrite Listening vocabulary page

**Files:**
- Modify: `src/content/docs/listening/vocabulary.mdx`

- [ ] **Step 1: Read current file**

Run: Read tool on the file.

- [ ] **Step 2: Rewrite with comprehensive vocabulary**

Structure:
```
1. Từ vựng Part 1 — Thông báo & hướng dẫn
   (announce, cancelled, delayed, available, located, deadline,
    departure, arrival, platform, gate, extension, postpone)
    + Cách nghe số, ngày, giờ (tips cụ thể)

2. Từ vựng Part 2 — Hội thoại
   (suggest, agree, disagree, prefer, recommend, unfortunately,
    actually, definitely, perhaps, change mind)

3. Từ vựng Part 3 — Bài giảng học thuật
   (research, evidence, significant, however, tend to, factor,
    contribute to, according to, conclusion, therefore)

4. Signal words — Từ báo hiệu quan trọng
   (Table: signal word → ý nghĩa → khi nào xuất hiện)

5. Mẹo nghe phụ âm cuối (/t/, /d/, /s/, /z/)
   + Phân biệt nguyên âm dài/ngắn

6. TierContent: Vocabulary nâng cao
```

- [ ] **Step 3: Commit**

```bash
git add src/content/docs/listening/vocabulary.mdx
git commit -m "feat: rewrite Listening vocabulary with situation-based grouping"
```

---

### Task 18: Rewrite Reading strategies page

**Files:**
- Modify: `src/content/docs/reading/strategies.mdx`

- [ ] **Step 1: Read current file**

Run: Read tool on the file.

- [ ] **Step 2: Research and rewrite**

Web search for VSTEP Reading strategies if needed. Rewrite with:
```
1. Quy trình đọc bài (Skim → Scan → Read carefully)
   - Skim: đọc câu đầu/cuối mỗi đoạn → nắm ý chính (1 phút)
   - Scan: tìm từ khóa từ câu hỏi trong bài (30 giây/câu)
   - Read: đọc kỹ đoạn chứa đáp án

2. Chiến lược theo dạng câu hỏi
   - Thông tin cụ thể: gạch từ khóa → scan → đọc kỹ 2-3 câu
   - Từ vựng: đọc ngữ cảnh → đoán nghĩa → thử thay đáp án
   - Ý chính: đọc câu đầu mỗi đoạn → chọn đáp án khái quát nhất
   - Suy luận: đọc kỹ → tìm ý ngụ ý (không viết trực tiếp)

3. Quản lý thời gian
   - Bài 1-2: 12–13 phút mỗi bài
   - Bài 3-4: 16–18 phút mỗi bài
   - Ưu tiên bài 1-3 nếu thiếu thời gian

4. Bẫy thường gặp
   - Word matching (từ giống nhau nhưng ngữ cảnh khác)
   - Đáp án đúng một nửa
   - Câu NOT/EXCEPT (đọc nhầm thành câu thường)

5. TierContent: Phân tích cấu trúc đoạn văn
```

- [ ] **Step 3: Commit**

```bash
git add src/content/docs/reading/strategies.mdx
git commit -m "feat: rewrite Reading strategies with question-type approach"
```

---

### Task 19: Rewrite Reading vocabulary page

**Files:**
- Modify: `src/content/docs/reading/vocabulary.mdx`

- [ ] **Step 1: Read current file**

Run: Read tool on the file.

- [ ] **Step 2: Write comprehensive reading vocabulary**

Structure:
```
1. Từ chỉ dẫn trong câu hỏi (phải biết!)
   according to, mention, state, imply, infer, suggest,
   refer to, mainly about, purpose, conclude

2. Từ vựng phổ biến trong bài đọc VSTEP B1
   Group by theme:
   - Khoa học & Công nghệ: research, develop, significant, evidence
   - Xã hội: community, population, contribute, influence
   - Môi trường: pollution, climate, protect, sustainable
   - Giáo dục: method, approach, effective, improve

3. Từ nối trong bài đọc (giúp hiểu cấu trúc đoạn)
   however, nevertheless, furthermore, in contrast,
   as a result, consequently, therefore

4. TierContent: Academic vocabulary B2
```

- [ ] **Step 3: Commit**

```bash
git add src/content/docs/reading/vocabulary.mdx
git commit -m "feat: rewrite Reading vocabulary with question keywords and B1 word groups"
```

---

## Phase 6: Cleanup (Tasks 20–22)

### Task 20: Update study-tracks.json

**Files:**
- Modify: `src/data/study-tracks.json`

- [ ] **Step 1: Read current file**

Already read (40 lines).

- [ ] **Step 2: Update all page slugs to match new structure**

Key slug changes:
- `speaking/overview` → remove (content merged)
- `writing/overview` → remove (content merged into checklist)
- `listening/format` → remove (merged into exam-structure)
- `reading/format` → remove (merged into exam-structure)
- `writing/essay` → `writing/essay-discuss-both-views`
- `exam-analysis` → `reference/exam-analysis`
- `foundation/topic-phrases` → `foundation/vocabulary`
- Add `speaking/universal-ideas` where appropriate
- Add `getting-started/exam-structure` in early weeks

Also reorder the 4-week track to prioritize ★★★ content:
- Week 1: Exam structure + Sentence patterns + Linking words + 10 universal ideas
- Week 2: Speaking Part 1-2-3 templates + Writing checklist
- Week 3: Informal letter + Discuss Both Views essay + Listening strategies
- Week 4: Practice tests + Reading strategies + Formal letter

- [ ] **Step 3: Write the updated JSON**

Write the complete updated `study-tracks.json` with all 3 tracks corrected.

- [ ] **Step 4: Commit**

```bash
git add src/data/study-tracks.json
git commit -m "fix: update study tracks with new page slugs and priority ordering"
```

---

### Task 21: Update cross-references and remaining pages

**Files:**
- Modify: Various MDX files with stale internal links
- Modify: `src/content/docs/checklist/index.mdx` (pre-exam checklist)
- Modify: `src/content/docs/practice-tests/index.mdx`
- Modify: `src/content/docs/practice-tests/how-to-practice.mdx`

- [ ] **Step 1: Find all stale internal links**

Run these searches:
```bash
cd /Users/michael/Desktop/vstep/vstep-web
grep -rn "speaking/overview" src/content/ --include="*.mdx"
grep -rn "writing/overview" src/content/ --include="*.mdx"
grep -rn "listening/format" src/content/ --include="*.mdx"
grep -rn "reading/format" src/content/ --include="*.mdx"
grep -rn "writing/essay\"" src/content/ --include="*.mdx"
grep -rn "writing/essay/" src/content/ --include="*.mdx"
grep -rn "exam-analysis" src/content/ --include="*.mdx"
grep -rn "foundation/topic-phrases" src/content/ --include="*.mdx"
grep -rn "getting-started/scoring-criteria" src/content/ --include="*.mdx"
```

- [ ] **Step 2: Fix each broken link**

Replace with the new paths:
- `/speaking/overview/` → `/getting-started/exam-structure/` or `/speaking/universal-ideas/`
- `/writing/overview/` → `/writing/checklist/`
- `/listening/format/` → `/getting-started/exam-structure/`
- `/reading/format/` → `/getting-started/exam-structure/`
- `/writing/essay/` → `/writing/essay-discuss-both-views/`
- `/exam-analysis/` → `/reference/exam-analysis/`
- `/foundation/topic-phrases/` → `/foundation/vocabulary/`
- `/getting-started/scoring-criteria/` → `/reference/scoring-criteria/`

- [ ] **Step 3: Add cross-reference links to practice tests**

In `practice-tests/index.mdx`, ensure each test card links to relevant strategy/template pages using the new URLs.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "fix: update all internal links to match new page structure"
```

---

### Task 22: Final build verification

- [ ] **Step 1: Run production build**

Run: `cd /Users/michael/Desktop/vstep/vstep-web && npm run build 2>&1`

This will:
- Compile all MDX pages
- Index content for Pagefind search
- Surface any broken imports or syntax errors

- [ ] **Step 2: Fix any build errors**

Common issues:
- Missing imports (deleted components/pages still referenced)
- Broken internal links
- MDX syntax errors in new content

- [ ] **Step 3: Run dev server and spot check key pages**

Run: `cd /Users/michael/Desktop/vstep/vstep-web && npm run dev &`

Check these pages in browser:
- http://localhost:4321/ (landing)
- http://localhost:4321/getting-started/exam-structure/ (new page)
- http://localhost:4321/speaking/universal-ideas/ (new page)
- http://localhost:4321/writing/essay-discuss-both-views/ (new page)
- http://localhost:4321/writing/essay-other-types/ (new page)
- http://localhost:4321/listening/strategies/ (rewritten)
- http://localhost:4321/reading/strategies/ (rewritten)

Verify: pages render, sidebar order matches spec, no 404s.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "fix: resolve build errors from content reorganization"
```

- [ ] **Step 5: Summary commit**

If all is clean:

```bash
git log --oneline -15
```

Verify all commits from this plan are present and the build passes.
