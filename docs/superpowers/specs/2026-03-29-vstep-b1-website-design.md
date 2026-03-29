# VSTEP B1 Study Website — Design Spec

## Overview

A static website that serves as a comprehensive self-study resource for university students preparing for the VSTEP B1 exam. The site organizes study materials in a logical learning sequence — from exam orientation through foundational skills to skill-specific strategies and practice tests.

## Target Audience

University students in Vietnam who need a VSTEP B1 certificate to graduate. Many are starting from a low English level (weak students) and need structured guidance on what to study and in what order.

## Content Principles

1. **B1-scoped (4.0–5.5)**: All content targets the B1 pass threshold. The goal is "enough to pass", not "get high scores". Advanced techniques (B2+) that could confuse weak students are excluded or clearly separated.
2. **Two-tier content**: Every page splits into:
   - **Cơ bản (Basic)** — displayed by default. Must-know content to pass B1.
   - **Nâng cao (Advanced)** — collapsible, hidden by default. For students who want higher scores. Clearly labeled so weak students can skip without anxiety.
3. **Toàn bộ tiếng Việt**: Giao diện, navigation, headings, giải thích — tất cả bằng tiếng Việt. Chỉ có ví dụ mẫu câu, templates, từ vựng là tiếng Anh (vì đó là nội dung học).
4. **Data-driven**: Content priorities based on analysis of 20 real VSTEP exams (2019–2021). Focus on what actually appears in the exam, not theoretical completeness.
5. **Minimal cognitive load**: Short sentences, lots of tables, visual diagrams. Avoid walls of text. One concept per section.

## Tech Stack

- **Framework**: Astro + Starlight (docs framework)
- **Styling**: TailwindCSS (Starlight built-in + customization)
- **Diagrams**: Mermaid (Starlight plugin)
- **Content format**: Markdown / MDX
- **Custom components**: React (for vocabulary cards, interactive tables, etc.)
- **Hosting**: GitHub Pages or Netlify (static deploy)

## Content Structure

### 1. Trang chu (Landing Page)

Custom landing page (not default Starlight docs page):
- Brief intro: what this site is, who it's for
- 4 large cards for 4 skills (Listening, Reading, Speaking, Writing)
- 2 secondary cards (Vocabulary, Practice Tests)
- Call-to-action: "Start here" button linking to orientation section

### 2. Bat dau tu day (Getting Started)

#### 2.1. VSTEP B1 la gi?
- Exam format overview: 4 skills, time allocation, number of questions per section
- Scoring: scale 1-10, B1 threshold (4.0-5.5)
- What each score level means
- Comparison with other exams (IELTS, TOEIC) for context

#### 2.2. Tieu chi cham tung ky nang
- Writing criteria (4): Task Fulfilment, Organization, Vocabulary, Grammar
- Speaking criteria (5): Vocabulary, Grammar, Pronunciation, Fluency & Development, Coherence & Cohesion
- Listening/Reading: objective scoring explanation
- What examiners look for at B1 level specifically

#### 2.3. Lo trinh on thi
Three study tracks presented as tabs:
- **4 weeks (intensive)**: For students with decent English foundation, need exam strategy
- **8 weeks (standard)**: Most common path, builds skills + strategy
- **12 weeks (thorough)**: For weak foundation, builds from basics

Each track: weekly table with columns [Week | Focus | Pages to study | Practice tasks]
All links point to pages within the site. Study-tracks.json must be validated against the file structure before build — all href values must match existing page slugs.

### 3. Nen tang (Foundation)

#### 3.1. Tu vung theo chu de
15-20 VSTEP common topics, each with:
- 15-20 key words/phrases with Vietnamese translation (B1 level, not obscure words)
- 1 simple example sentence per word showing usage

Topics prioritized by frequency in real exams (from 20 real tests analysis):
- **High frequency**: Hobbies, Food, Travel, Hometown, Daily Routine, Holiday & Festivals, Education, Health, Family
- **Medium frequency**: Shopping, Music & Entertainment, Technology, Sports, Work & Career, Environment
- **Lower frequency**: Transportation, Weather, Social Media, Clothing, Housing

Format: Table per topic. Each table has a client-side text filter input above it (React component with local state) for quick lookup.

#### 3.2. Tu noi (Linking Words)
Organized by function, split into two tiers:

**Cơ bản (must-know for B1):**
- Adding ideas: and, also, besides
- Contrasting: but, however, although
- Cause/reason: because, so
- Example: for example, such as
- Sequence: first, then, after that, finally
- Conclusion: in conclusion, overall

**Nâng cao (collapsible):**
- Adding: moreover, furthermore, in addition
- Contrasting: on the other hand, despite, nevertheless
- Cause: since, due to, as a result of
- Result: therefore, consequently, thus
- Example: for instance, to illustrate

Each with 1-2 simple example sentences relevant to VSTEP topics.

#### 3.3. Cau truc cau thong dung
Universal sentence patterns for B1 Speaking and Writing.

**Cơ bản (6 patterns — must-know):**
- It makes me / helps me + V
- It is a good way to V
- I find it + adj + to V
- It is + adj + for sb + to V
- Thanks to A, I can...
- The thing I like most about... is...

**Nâng cao (collapsible):**
- S + allows me + to V
- It takes + time/effort + to V
- S + encourage/enable + sb + to do sth
- Provide sb with sth
- Prevent sb/sth from Ving
- Play an important role in + N/Ving

Each with 2 simple example sentences.

#### 3.4. Nang cap cau (don → ghep / phuc)

**Cơ bản (đủ B1):**
- Nối bằng and, but, so, or
- Dùng câu điều kiện loại 1 (If + hiện tại, will + V)
- Dùng mệnh đề thời gian (when, after, before)
- Before/after examples for each technique

**Nâng cao (collapsible):**
- Dùng đại từ quan hệ (who, which, that)
- Câu điều kiện loại 2 (If + V2, would + V)
- Câu điều kiện loại 3 (If + had V3, would have V3)

#### 3.5. Loi thuong gap cua nguoi Viet & cach tranh
Common mistakes Vietnamese students make:
- Articles (a/an/the) — Vietnamese has no articles
- Subject-verb agreement (-s for 3rd person)
- Tense confusion (Vietnamese has no verb conjugation)
- Preposition errors (direct translation from Vietnamese)
- Word order issues
- Run-on sentences
- Literal translation patterns

Each with: wrong example → correct example → explanation.

### 4. Listening

#### 4.1. Format & cac dang cau hoi
- 3 parts breakdown: number of questions, audio plays, time
- Question types per part
- Difficulty progression

#### 4.2. Chien luoc lam bai tung part
- Part 1: Announcements & short instructions (~15-20s each, 8 questions) — đọc câu hỏi trước, gạch từ khóa
- Part 2: Conversations between 2-3 people (12 questions) — chú ý thay đổi ý kiến giữa người nói, ghi chú nhanh
- Part 3: Academic lectures/monologues (15 questions) — KHÓ NHẤT, ghi chú từ khóa trong lúc nghe
- General tips: đọc câu hỏi trước khi nghe, loại trừ đáp án sai, quản lý thời gian

Note: Mỗi đoạn chỉ nghe 1 LẦN DUY NHẤT — nhấn mạnh điều này cho học sinh.

#### 4.3. Tu vung & meo nghe
All content in this section is Cơ bản (essential for B1). Vietnamese explanations first.

- Common listening vocabulary by situation (directions, phone calls, announcements, etc.)
- Cách nghe số, ngày tháng, giờ giấc (thường ra trong Part 1)
- Mẹo đoán đáp án khi không nghe rõ
- Nhận biết âm cơ bản: phụ âm cuối /t/ /d/ /s/ /z/, nguyên âm dài/ngắn (giúp phân biệt từ khi nghe)

### 5. Reading

#### 5.1. Format & cac dang cau hoi
- 4 parts breakdown: passage types, question count, time allocation
- Question types: multiple choice, gap fill, matching, true/false/not given

#### 5.2. Chien luoc lam bai tung part
All content Vietnamese-first. Strategies are all Cơ bản level.

- **Cho học sinh đọc chậm**: KHÔNG dịch từng từ sang tiếng Việt — tập đọc cụm từ, đoán nghĩa từ ngữ cảnh
- Skimming (đọc lướt nắm ý chính) vs Scanning (tìm thông tin cụ thể)
- Đọc câu hỏi trước → gạch từ khóa → tìm trong bài
- Time management: không quá 15 phút/bài, bài sau khó hơn cần nhiều thời gian hơn
- Loại trừ đáp án sai khi không chắc

#### 5.3. Tu vung doc hieu thuong gap
All Cơ bản. Vietnamese explanations.
- Common vocabulary in VSTEP reading passages (B1 level)
- Từ chỉ dẫn trong câu hỏi (according to, imply, suggest, refer to...)

### 6. Speaking

#### 6.1. Tong quan
- Format: 3 parts, ~12 minutes total
- Scoring criteria for speaking
- General tips: fluency > accuracy at B1, filler phrases, self-correction

#### 6.2. Part 1: Social Interaction (~3 min)
- What to expect: 2 topics, 3-4 questions each
- Core principle: KHÔNG trả lời Yes/No rồi dừng. Tối thiểu 3 câu mỗi câu trả lời.

**Cơ bản — 2 cách trả lời (đủ đạt B1):**
- 5W expansion: Ý chính → Với ai → Ở đâu → Khi nào → Vì sao
- Template đơn giản: Idea + Reason + Example

**Nâng cao (collapsible) — thêm templates:**
- Idea + Feeling + Future intention
- Now vs Past + Reason
- Idea + Frequency + Result
- Contrast using while/although

**Chủ đề hay gặp nhất (từ 20 đề thật):**
- Cuộc sống: Daily routine, Hobbies, Feelings, Birthday
- Xã hội: Festivals, Shopping, Music, Celebrities, Marriage
- Thực tế: Travelling, Food, Cooking, Reading, Hometown
- Gia đình: Parental roles, Pets

**Universal ideas** (10 ý dùng cho mọi chủ đề): relaxation, health, save time/money, connect with people, broaden knowledge, improve skills, suit personality, keep memories, job opportunities, feel happy

#### 6.3. Part 2: Solution Discussion (1' prep + 2' speak)
- What to expect: 1 tình huống → 3 lựa chọn → Chọn 1 và giải thích
- Không có đáp án đúng/sai — lập luận tốt là đủ
- Structure: "I would choose [A] because... Firstly... Moreover... As for [B] and [C], I don't think they're suitable because..."
- Phải giải thích tại sao KHÔNG chọn 2 cái còn lại (lỗi thường gặp: chỉ nói cái mình chọn)

**Tình huống hay gặp (từ 20 đề thật):**
- Tiệc farewell cho giáo viên (trường / nhà GV / nhà hàng)
- Nơi ôn thi (nhà / thư viện / quán cà phê)
- Quà tặng mẹ (hoa / thiệp handmade / sổ tay)
- Cách học tiếng Anh (online / lớp học / câu lạc bộ)
- Cuối tuần (xem phim / mua sắm / karaoke)

#### 6.4. Part 3: Topic Development (1' prep + 2-3' speak + follow-up questions)
- What to expect: 1 chủ đề + 3 gợi ý → Trình bày quan điểm

**Cơ bản — template tối thiểu (2 ý, đủ đạt B1):**
- Mở: "Today I'd like to talk about [topic]."
- Ý 1: Gợi ý 1 + "because..." + ví dụ ngắn (~40 giây)
- Ý 2: Gợi ý 2 + "because..." + ví dụ ngắn (~40 giây)
- Kết: "In conclusion, I believe that [topic] is important."
- Nếu hết ý: "In addition, I'd also like to mention..."

**Nâng cao (collapsible) — 3 ý đầy đủ:**
- Triển khai cả 3 gợi ý, mỗi ý ~40 giây
- Dùng từ nối đa dạng giữa các ý
- Kết bài có quan điểm rõ ràng: "In conclusion, I strongly believe that..."

- Lỗi thường gặp: hết ý sớm, im lặng → luôn chuẩn bị câu mở rộng

**Chủ đề hay gặp (từ 20 đề thật):**
- Lợi ích Internet / học tiếng Anh / du học
- Gap year / sống xa nhà / online shopping
- Cấm thuốc lá nơi công cộng / nuôi thú cưng
- ĐH không phải con đường duy nhất

#### 6.5. Bai mau co phan tich
3-5 complete sample answers per part:
- Full answer text
- Annotations highlighting: template used, linking words, structures, topic vocabulary
- Scoring commentary: what makes this a B1-level answer

### 7. Writing

#### 7.1. Tong quan
- Format: Task 1 (letter, 20 min, 120+ words) + Task 2 (essay, 40 min, 250+ words)
- Scoring: Task 1 = 1/3, Task 2 = 2/3 of writing score
- Criteria: Task Fulfilment, Organization, Vocabulary, Grammar

#### 7.2. Task 1: Letter Writing

**Quan trọng**: Đề LUÔN cho sẵn 2-3 ý cần đề cập → PHẢI viết đủ tất cả ý yêu cầu. Bỏ sót 1 ý = mất điểm Task Fulfillment.

**Informal Letter** (phổ biến hơn trong đề thật):
- Scenarios hay gặp (từ 20 đề thật): kể chuyện cá nhân (sinh nhật, du lịch), cho lời khuyên, chia sẻ thông tin, chúc mừng/xin lỗi
- Template structure + useful phrases
- Tone thân mật: Dear [name], Hi [name]

**Formal Letter** — 3 loại thường gặp nhất (Cơ bản):
1. Letter of Request (xin thông tin, đặt hàng)
2. Letter of Complaint (khiếu nại sản phẩm/dịch vụ)
3. Letter of Giving Information (cung cấp thông tin)

**3 loại ít gặp hơn (Nâng cao — collapsible):**
4. Letter of Giving Opinion
5. Letter of Apology
6. Letter of Application

Each type includes:
- Structure/template with sections
- Useful phrases per section (opening, body, closing) — Vietnamese translation
- Tần suất xuất hiện trong đề thật

#### 7.3. Task 2: Essay Writing

**Mẹo quan trọng**: Phần "Suggested" trong đề = XƯƠNG SỐNG OUTLINE → Tận dụng tối đa! Đọc kỹ suggested → mỗi gợi ý = 1 luận điểm trong body.

4 dạng essay (xếp theo tần suất trong đề thật):
1. **Discuss Both Views** + give opinion (phổ biến nhất)
2. **Opinion / Agree or Disagree**
3. **Causes & Effects / Problems & Solutions**
4. **Advantages & Disadvantages**

Tất cả dùng chung 1 cấu trúc: Introduction → Body 1 → Body 2 → Conclusion.
Mỗi dạng có: cách nhận diện đề, template intro/body/conclusion, ví dụ đề thật.

#### 7.4. Checklist toi thieu de dat B1
**Cơ bản (phải đạt):**
- Viết đủ số từ (Task 1 ≥ 120, Task 2 ≥ 250)
- Đủ tất cả ý yêu cầu trong đề (Task Fulfillment)
- Chia đoạn rõ ràng: Intro / Body / Conclusion
- Dùng ít nhất 3-4 từ nối cơ bản
- Đọc lại sửa lỗi ngữ pháp trước khi nộp (dành 3-5 phút)
- Tận dụng phần "Suggested" làm outline

**Nâng cao (collapsible):**
- Dùng từ vựng đa dạng, tránh lặp
- Dùng câu bị động, câu phức
- Paraphrase câu hỏi trong mở bài (không chép lại đề)

#### 7.5. Bai mau co phan tich
2-3 complete sample letters + 2-3 sample essays:
- Full text
- Annotations: structure, linking words, vocabulary highlights
- Scoring commentary

### 8. Phan tich de that (Real Exam Analysis)

Trang tổng hợp phân tích từ 20 đề thi thật VSTEP 2019-2021, giúp học sinh biết đề hay ra gì:
- **Speaking Part 1**: Bảng chủ đề theo nhóm + tần suất xuất hiện
- **Speaking Part 2**: 10 tình huống mẫu với 3 lựa chọn cụ thể
- **Speaking Part 3**: 20 chủ đề hay gặp + gợi ý
- **Writing Task 1**: Phân loại informal vs formal, scenarios hay gặp
- **Writing Task 2**: 4 dạng đề + đề thật minh họa từng dạng

Source: VSTEP_Toan_Dien_Co_So_Do.md (dữ liệu đã có sẵn)

Frequency tables and common topics are Cơ bản. Deeper pattern analysis (e.g., topic combinations, yearly trends) is Nâng cao (TierContent).

### 9. Checklist truoc ngay thi

Checklist ngắn gọn cho từng kỹ năng, in ra mang theo ôn:
- Listening: đọc câu hỏi trước, gạch từ khóa, luyện nghe tốc độ
- Reading: skim → scan → đọc kỹ, không quá 15 phút/bài
- Speaking: luyện cấu trúc 3 câu, luyện nói 2-3 phút liên tục
- Writing: nhận diện dạng đề, dùng suggested, đếm từ, đọc lại sửa lỗi

### 10. De thi thu (Practice Tests)

#### 10.1. Huong dan cach luyen de hieu qua
- How to simulate test conditions
- Self-assessment after each test
- How to review and learn from mistakes
- Recommended schedule: when to start doing full tests

#### 10.2. Ngan hang de
Each test on its own page:
- Test number and source year
- Speaking section (Part 1 topics, Part 2 situation, Part 3 topic)
- Writing section (Task 1 prompt, Task 2 prompt)
- Cross-reference links: each prompt links to relevant template/strategy page
- Notes on suggested approach (collapsible/expandable)

Starting with 20 tests from 2020-2021 collection. Structure allows adding more tests later.

Note: Practice test pages cover Speaking and Writing prompts only. Listening and Reading practice is provided via strategies and vocabulary sections; full simulated tests for those skills are out of scope for v1.

## File Structure / URL Conventions

Content files follow this structure under `src/content/docs/`:

```
src/pages/
├── index.astro                        → /  (custom landing page, NOT Starlight docs)

src/content/docs/
├── getting-started/
│   ├── what-is-vstep.mdx              → /getting-started/what-is-vstep/
│   ├── scoring-criteria.mdx           → /getting-started/scoring-criteria/
│   └── study-roadmap.mdx              → /getting-started/study-roadmap/
├── foundation/
│   ├── vocabulary.mdx                 → /foundation/vocabulary/
│   ├── linking-words.mdx              → /foundation/linking-words/
│   ├── sentence-patterns.mdx          → /foundation/sentence-patterns/
│   ├── sentence-upgrade.mdx           → /foundation/sentence-upgrade/
│   └── common-mistakes.mdx            → /foundation/common-mistakes/
├── listening/
│   ├── format.mdx                     → /listening/format/
│   ├── strategies.mdx                 → /listening/strategies/
│   └── vocabulary.mdx                 → /listening/vocabulary/
├── reading/
│   ├── format.mdx                     → /reading/format/
│   ├── strategies.mdx                 → /reading/strategies/
│   └── vocabulary.mdx                 → /reading/vocabulary/
├── speaking/
│   ├── overview.mdx                   → /speaking/overview/
│   ├── part-1.mdx                     → /speaking/part-1/
│   ├── part-2.mdx                     → /speaking/part-2/
│   ├── part-3.mdx                     → /speaking/part-3/
│   └── sample-answers.mdx             → /speaking/sample-answers/
├── writing/
│   ├── overview.mdx                   → /writing/overview/
│   ├── formal-letter.mdx              → /writing/formal-letter/
│   ├── informal-letter.mdx            → /writing/informal-letter/
│   ├── essay.mdx                      → /writing/essay/
│   ├── checklist.mdx                  → /writing/checklist/
│   └── sample-answers.mdx             → /writing/sample-answers/
├── exam-analysis/
│   └── index.mdx                      → /exam-analysis/  (real exam topic analysis)
├── checklist/
│   └── index.mdx                      → /checklist/  (pre-exam checklist)
└── practice-tests/
    ├── index.mdx                      → /practice-tests/  (test index with TestCards)
    ├── how-to-practice.mdx            → /practice-tests/how-to-practice/
    ├── test-01.mdx                    → /practice-tests/test-01/
    ├── test-02.mdx                    → /practice-tests/test-02/
    └── ...
```

Internal links use these slugs. Study roadmap tables link to these paths.

## Custom Components (MDX)

### VocabularyTable
Renders a topic's word list as a styled table with columns: Word/Phrase | Vietnamese | Example Sentence. Has a client-side text filter input above the table for quick lookup.

**Props**: `topic` (string), `data` (array of {word, vietnamese, example})

**Usage** (in foundation/vocabulary.mdx):
```mdx
import VocabularyTable from '@components/VocabularyTable';
import hobbiesData from '@data/vocabulary/hobbies.json';

<VocabularyTable topic="Hobbies" data={hobbiesData} />
```

**Used in**: foundation/vocabulary.mdx, listening/vocabulary.mdx, reading/vocabulary.mdx

### TemplateBox
Highlighted box showing a template structure with placeholder slots. Visually distinct from regular text via colored background and border.

**Props**: `title` (string)
**Children**: MDX content (the template text with placeholders)

**Usage** (in speaking/part-1.mdx):
```mdx
import TemplateBox from '@components/TemplateBox';

<TemplateBox title="Template 1: Idea + Reason + Who/Where/When">
  Well, I'd say that **[idea]**. Mainly because **[reason]**. I usually do it with **[who]**, at **[where]**, and **[when]**.
</TemplateBox>
```

**Used in**: speaking/part-1.mdx, speaking/part-2.mdx, speaking/part-3.mdx, writing/formal-letter.mdx, writing/essay.mdx

### SampleAnswer
Expandable/collapsible component showing a full sample answer with color-coded annotations.

**Props**: `title` (string), `score` (string, optional), `defaultOpen` (boolean, default false)
**Children**: MDX content with annotation markup using CSS classes:

| Class | Color | Purpose |
|-------|-------|---------|
| `.linking` | Blue (#3b82f6) | Linking words |
| `.structure` | Green (#22c55e) | Sentence patterns |
| `.vocab` | Orange (#f97316) | Topic vocabulary |

**Usage** (in speaking/sample-answers.mdx):
```mdx
import SampleAnswer from '@components/SampleAnswer';

<SampleAnswer title="Part 1: Hobbies" score="B1">
  Well, I'd say that my favorite hobby is <span class="vocab">reading</span>. <span class="linking">Mainly because</span> it helps me relax after a long day. <span class="structure">I find it</span> really enjoyable to read before bed.
</SampleAnswer>
```

**Used in**: speaking/sample-answers.mdx, writing/sample-answers.mdx

### StudyTrack
Tab-based component for the 3 study roadmaps (4/8/12 weeks). Each tab renders a weekly schedule table.

**Props**: `tracks` (array of {name, weeks: [{week, focus, pages, tasks}]})

**Usage** (in getting-started/study-roadmap.mdx):
```mdx
import StudyTrack from '@components/StudyTrack';
import trackData from '@data/study-tracks.json';

<StudyTrack tracks={trackData} />
```

**Used in**: getting-started/study-roadmap.mdx only

### TierContent
Collapsible section for "Nâng cao" (advanced) content. Hidden by default. Styled with a distinct border/background so students know it's optional.

**Props**: `title` (string, default "Nâng cao"), `defaultOpen` (boolean, default false)
**Children**: MDX content
**No-JS fallback**: Renders expanded (open) when JavaScript is disabled, so content is always accessible in static HTML.

**Usage**:
```mdx
import TierContent from '@components/TierContent';

<TierContent title="Nâng cao — muốn điểm cao hơn">
  - moreover, furthermore, in addition
  - nevertheless, despite, on the other hand
</TierContent>
```

**Used in**: foundation/*.mdx, speaking/part-1.mdx, speaking/part-2.mdx, speaking/part-3.mdx, writing/formal-letter.mdx, writing/essay.mdx, writing/checklist.mdx, exam-analysis/index.mdx. Checklist (checklist/index.mdx) is intentionally all-Cơ bản (print-ready summary, no TierContent).

### TestCard
Card component for practice tests showing test number, topics covered, and links to relevant strategy pages.

**Props**: `number` (number), `topics` (string[]), `links` (array of {label, href})

**Usage** (in practice-tests/index.mdx):
```mdx
import TestCard from '@components/TestCard';

<TestCard number={1} topics={["Favorite Subject", "Public Holidays"]} links={[{label: "Formal Letter", href: "/writing/formal-letter/"}]} />
```

**Used in**: practice-tests/index.mdx (test index page)

## Navigation

- **Sidebar (left)**: Full site tree, always visible. Grouped by sections with collapsible groups.
- **Table of contents (right)**: In-page headings for current page.
- **Search**: Starlight built-in full-text search.
- **Breadcrumbs**: Show current position in the hierarchy.
- **Previous/Next**: Sequential navigation at bottom of each page following the study order.

## Design Principles

1. **B1-scoped**: Everything targets pass threshold (4.0-5.5). No content that could confuse weak students.
2. **Two-tier**: "Cơ bản" (default) vs "Nâng cao" (collapsible). Weak students never feel overwhelmed.
3. **Study-order first**: Content arranged in the order a student should learn it, not alphabetically.
4. **Progressive complexity**: Foundation → Strategy → Practice → Full tests.
5. **Toàn bộ tiếng Việt**: UI, navigation, giải thích bằng tiếng Việt. Chỉ ví dụ/mẫu câu bằng tiếng Anh.
6. **Data-driven**: Topic priorities based on 20 real VSTEP exams analysis.
7. **Cross-referenced**: Every practice test links back to relevant templates and strategies.
8. **Mobile-friendly**: Students will study on phones. Starlight handles responsive layout.
9. **Scannable**: Use tables, boxes, highlights, and clear headings. Avoid walls of text.

## Content Sources

- **Existing materials (md/ folder)**: Reference for Speaking Part 1-2, Writing Task 1-2, Grammar, Scoring criteria, Practice tests. To be reorganized, cleaned up, and supplemented.
- **Research needed**: Listening (full section), Reading (full section), Speaking Part 3, Vocabulary by topic, Linking words, Common mistakes, Study roadmaps, Sample answers with analysis.

## Out of Scope

- User accounts / login
- Interactive quizzes / AI grading
- Audio playback for Listening practice
- Progress tracking / gamification
- Forum / comments
