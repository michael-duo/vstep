# VSTEP B1 — Tài liệu ôn thi trực tuyến

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Website tài liệu ôn thi VSTEP B1 dành cho sinh viên đại học Việt Nam. Tổng hợp chiến lược, từ vựng, mẫu câu và đề thi thực hành từ 20 đề thi VSTEP thực tế (2019–2021).

---

## Tính năng

- **4 kỹ năng đầy đủ** — Nghe, Đọc, Nói, Viết với chiến lược và mẫu câu cụ thể
- **20 đề luyện tập** — Đề thi thực hành có hướng dẫn chi tiết
- **Từ vựng theo chủ đề** — 25 chủ đề với bảng tra cứu có thể tìm kiếm
- **Lộ trình học** — Kế hoạch 4, 8 và 12 tuần
- **Hai cấp độ nội dung** — Cơ bản và Nâng cao (collapsible)
- **Tìm kiếm toàn văn** — Powered by Pagefind
- **Giao diện tiếng Việt** — Toàn bộ UI bằng tiếng Việt

---

## Tech Stack

| Công nghệ | Phiên bản | Mục đích |
| :--- | :--- | :--- |
| [Astro](https://astro.build) | 6.x | Static site framework |
| [Starlight](https://starlight.astro.build) | 0.38.x | Docs theme |
| [React](https://react.dev) | 19.x | Interactive components |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Styling |
| [Pagefind](https://pagefind.app) | — | Full-text search |
| Cloudflare Pages | — | Hosting & deployment |

---

## Cài đặt & Chạy local

**Yêu cầu:** Node.js 18+ và pnpm

```bash
# Clone repo
git clone <repo-url>
cd vstep-web

# Cài đặt dependencies
pnpm install

# Chạy dev server tại localhost:4321
pnpm dev
```

---

## Lệnh thường dùng

| Lệnh | Mô tả |
| :--- | :--- |
| `pnpm dev` | Khởi động dev server tại `localhost:4321` |
| `pnpm build` | Build production → `./dist/` (bao gồm Pagefind indexing) |
| `pnpm preview` | Xem trước bản build production |
| `pnpm astro check` | Kiểm tra TypeScript và lỗi Astro |

---

## Cấu trúc dự án

```
vstep-web/
├── public/                  # Static assets (favicon, ...)
├── src/
│   ├── assets/              # Hình ảnh được xử lý bởi Astro
│   ├── components/          # React components (VocabularyTable, SampleAnswer, ...)
│   ├── content/
│   │   └── docs/            # Nội dung MDX — mỗi file là một trang
│   │       ├── getting-started/
│   │       ├── foundation/
│   │       ├── listening/
│   │       ├── reading/
│   │       ├── speaking/
│   │       ├── writing/
│   │       ├── practice-tests/
│   │       └── reference/
│   ├── data/
│   │   ├── vocabulary/      # 25 file JSON từ vựng theo chủ đề
│   │   └── study-tracks.json
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs         # Config Astro + sidebar navigation
├── wrangler.toml            # Cloudflare Pages config
└── package.json
```

---

## Thêm nội dung mới

### Thêm trang mới

1. Tạo file `.mdx` trong thư mục tương ứng trong `src/content/docs/`
2. Thêm `title` và `description` vào frontmatter
3. **Bắt buộc:** Thêm trang vào sidebar trong `astro.config.mjs`

### Components hay dùng

```mdx
import TierContent from '@components/TierContent';
import SampleAnswer from '@components/SampleAnswer';
import VocabularyTable from '@components/VocabularyTable';
import TemplateBox from '@components/TemplateBox';

// Nội dung nâng cao (collapsible)
<TierContent client:load title="Nâng cao — Tiêu đề">
  Nội dung nâng cao ở đây
</TierContent>

// Bảng từ vựng có thể tìm kiếm
import data from '@data/vocabulary/hobbies.json';
<VocabularyTable client:load topic="Hobbies" data={data} />
```

---

## Deploy

Dự án deploy tự động lên **Cloudflare Pages** khi merge vào nhánh `main`.

Build command: `pnpm build`  
Output directory: `dist`

---

## Đối tượng người dùng

Sinh viên đại học Việt Nam đang ôn thi VSTEP B1 (tương đương 4.0–5.5/10). Nội dung được thiết kế đơn giản, có cấu trúc rõ ràng, ưu tiên mẫu câu và công thức để học viên có thể áp dụng ngay.
