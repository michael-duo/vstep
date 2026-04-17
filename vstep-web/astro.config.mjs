// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

import react from "@astrojs/react";
import rehypeMermaid from "rehype-mermaid";

export default defineConfig({
  integrations: [
    starlight({
      title: "VSTEP Ms.Hoa",
      locales: {
        root: {
          label: "Tiếng Việt",
          lang: "vi",
        },
      },
      customCss: ["./src/styles/global.css"],
      sidebar: [
        {
          label: "📍 Bắt đầu từ đây",
          items: [
            { slug: "getting-started/what-is-vstep", label: "VSTEP B1 là gì?" },
            {
              slug: "getting-started/exam-structure",
              label: "Cấu trúc đề thi chi tiết",
            },
            { slug: "getting-started/study-roadmap", label: "Lộ trình ôn thi" },
          ],
        },
        {
          label: "🧱 Nền tảng",
          items: [
            {
              slug: "foundation/basic-grammar",
              label: "Ngữ pháp căn bản",
            },
            {
              label: "Vạn năng — học kỹ trước",
              items: [
                {
                  slug: "foundation/universal-structures",
                  label: "Cấu trúc vạn năng",
                },
                {
                  slug: "foundation/universal-phrases",
                  label: "Cụm từ vạn năng",
                },
                {
                  slug: "foundation/universal-vocabulary",
                  label: "Từ vựng vạn năng",
                },
              ],
            },
            {
              label: "Từ vựng theo chủ đề",
              items: [
                {
                  slug: "foundation/vocabulary/hobbies",
                  label: "Hobbies / Interests",
                },
                {
                  slug: "foundation/vocabulary/education",
                  label: "Education / Study",
                },
                { slug: "foundation/vocabulary/jobs", label: "Jobs" },
                { slug: "foundation/vocabulary/health", label: "Health" },
                {
                  slug: "foundation/vocabulary/transportation",
                  label: "Transportation",
                },
                {
                  slug: "foundation/vocabulary/environment",
                  label: "Environment",
                },
                {
                  slug: "foundation/vocabulary/technology",
                  label: "Technology",
                },
                {
                  slug: "foundation/vocabulary/travel",
                  label: "Travel / Holiday",
                },
                {
                  slug: "foundation/vocabulary/places",
                  label: "Places (nâng cao)",
                },
                {
                  slug: "foundation/vocabulary/crime",
                  label: "Crime (nâng cao)",
                },
              ],
            },
          ],
        },
        {
          label: "🗣️ Speaking",
          items: [
            { slug: "speaking/part-1", label: "Part 1: Hỏi đáp xã hội" },
            { slug: "speaking/part-2", label: "Part 2: Thảo luận tình huống" },
            { slug: "speaking/part-3", label: "Part 3: Trình bày quan điểm" },
            { slug: "speaking/sample-answers", label: "Bài mẫu có phân tích" },
          ],
        },
        {
          label: "✍️ Writing",
          items: [
            { slug: "writing/checklist", label: "Checklist tối thiểu B1" },
            {
              label: "Task 1: Viết thư",
              items: [
                {
                  slug: "writing/task-1/informal-letter",
                  label: "Thư không trang trọng",
                },
                {
                  slug: "writing/task-1/formal-letter",
                  label: "Thư trang trọng",
                },
              ],
            },
            {
              label: "Task 2: Viết luận",
              items: [
                {
                  slug: "writing/task-2/3-khung",
                  label: "3 khung cho mọi dạng đề",
                },
                {
                  slug: "writing/task-2/discuss-both-views",
                  label: "Chi tiết: Discuss Both Views",
                },
                {
                  slug: "writing/task-2/causes-effects",
                  label: "Chi tiết: Causes – Effects",
                },
              ],
            },
            { slug: "writing/sample-answers", label: "Bài mẫu có phân tích" },
          ],
        },
        {
          label: "🎧 Listening",
          items: [
            { slug: "listening/strategies", label: "Chiến lược làm bài" },
            { slug: "listening/vocabulary", label: "Từ vựng & mẹo nghe" },
          ],
        },
        {
          label: "📖 Reading",
          items: [
            { slug: "reading/strategies", label: "Chiến lược đọc" },
            { slug: "reading/vocabulary", label: "Từ vựng đọc hiểu" },
          ],
        },
        {
          label: "📝 Luyện đề",
          items: [
            {
              slug: "practice-tests/how-to-practice",
              label: "Hướng dẫn luyện đề",
            },
            { slug: "practice-tests", label: "Tổng quan 20 đề" },
            { slug: "practice-tests/de-01", label: "Đề 1 — Subject + Holidays" },
            { slug: "practice-tests/de-02", label: "Đề 2 — Travelling + Music" },
            { slug: "practice-tests/de-03", label: "Đề 3 — Handicraft + Food" },
            { slug: "practice-tests/de-04", label: "Đề 4 — Celebrities + Ads" },
            { slug: "practice-tests/de-05", label: "Đề 5 — Summer + Cooking" },
            { slug: "practice-tests/de-06", label: "Đề 6 — Uniform + Parental" },
            { slug: "practice-tests/de-07", label: "Đề 7 — Hometown + Art" },
            { slug: "practice-tests/de-08", label: "Đề 8 — Festivals + Museum" },
            { slug: "practice-tests/de-09", label: "Đề 9 — Feelings + Colors" },
            { slug: "practice-tests/de-10", label: "Đề 10 — Walking + Shopping" },
            { slug: "practice-tests/de-11", label: "Đề 11 — Routine + English" },
            { slug: "practice-tests/de-12", label: "Đề 12 — Marriage + Phone" },
            { slug: "practice-tests/de-13", label: "Đề 13 — Pets + Vietnam" },
            { slug: "practice-tests/de-14", label: "Đề 14 — Flowers + Stress" },
            { slug: "practice-tests/de-15", label: "Đề 15 — Water + Clothes" },
            { slug: "practice-tests/de-16", label: "Đề 16 — Reading + Stress" },
            { slug: "practice-tests/de-17", label: "Đề 17 — Hobbies + Internet" },
            { slug: "practice-tests/de-18", label: "Đề 18 — Hometown + Campus" },
            { slug: "practice-tests/de-19", label: "Đề 19 — Birthday + Success" },
            { slug: "practice-tests/de-20", label: "Đề 20 — Films + English" },
          ],
        },
        {
          label: "⚡ Ôn tập nhanh",
          items: [
            { slug: "reference/quick-check", label: "Quick Check — Tất cả template" },
            { slug: "reference/smart-template", label: "Smart Template — Đơn giản, dễ nhớ" },
          ],
        },
        {
          label: "📚 Tham khảo thêm",
          items: [
            { slug: "reference/scoring-criteria", label: "Tiêu chí chấm" },
            { slug: "reference/exam-analysis", label: "Phân tích đề thi thật" },
            { slug: "checklist", label: "Checklist trước ngày thi" },
          ],
        },
      ],
    }),
    react(),
  ],
  markdown: {
    rehypePlugins: [[rehypeMermaid, { strategy: "img-svg" }]],
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
        "@data": path.resolve("./src/data"),
      },
    },
  },
});
