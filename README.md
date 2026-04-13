# VSTEP B1 — Tài liệu ôn thi trực tuyến

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Website tài liệu ôn thi VSTEP B1 dành cho sinh viên đại học Việt Nam. Tổng hợp chiến lược, từ vựng, mẫu câu và đề thi thực hành từ 20 đề thi VSTEP thực tế (2019–2021).

---

## Cấu trúc repo

```
vstep/
├── vstep-web/   # Astro + Starlight site — toàn bộ source code
└── docs/        # Tài liệu PDF tham khảo (đề thi gốc)
```

Xem chi tiết kỹ thuật tại [`vstep-web/README.md`](vstep-web/README.md).

---

## Bắt đầu nhanh

```bash
cd vstep-web
pnpm install
pnpm dev        # localhost:4321
```

---

## Deploy

Cloudflare Pages — tự động deploy khi push lên nhánh `main`.
