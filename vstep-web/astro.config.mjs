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
            { slug: "getting-started/exam-structure", label: "Cấu trúc đề thi chi tiết" },
            { slug: "getting-started/study-roadmap", label: "Lộ trình ôn thi" },
          ],
        },
        {
          label: "🧱 Nền tảng",
          items: [
            { slug: "foundation/sentence-patterns", label: "Cấu trúc câu vạn năng" },
            { slug: "foundation/linking-words", label: "Từ nối" },
            {
              label: "Từ vựng & cụm từ theo chủ đề",
              items: [
                { slug: "foundation/vocabulary", label: "Tổng quan & Cách ghép" },
                { slug: "foundation/vocabulary/hobbies", label: "Hobbies / Interests" },
                { slug: "foundation/vocabulary/education", label: "Education / Study" },
                { slug: "foundation/vocabulary/jobs", label: "Jobs" },
                { slug: "foundation/vocabulary/health", label: "Health" },
                { slug: "foundation/vocabulary/transportation", label: "Transportation" },
                { slug: "foundation/vocabulary/places", label: "Places" },
                { slug: "foundation/vocabulary/technology", label: "Technology" },
                { slug: "foundation/vocabulary/travel", label: "Travel / Holiday" },
                { slug: "foundation/vocabulary/crime", label: "Crime" },
              ],
            },
            { slug: "foundation/sentence-upgrade", label: "Nâng cấp câu" },
            { slug: "foundation/common-mistakes", label: "Lỗi thường gặp" },
          ],
        },
        {
          label: "🗣️ Speaking",
          items: [
            { slug: "speaking/universal-ideas", label: "10 ý vạn năng" },
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
                { slug: "writing/task-1/informal-letter", label: "Thư không trang trọng" },
                { slug: "writing/task-1/formal-letter", label: "Thư trang trọng" },
              ],
            },
            {
              label: "Task 2: Viết luận",
              items: [
                { slug: "writing/task-2/discuss-both-views", label: "Discuss Both Views" },
                { slug: "writing/task-2/other-types", label: "3 dạng còn lại" },
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
            { slug: "practice-tests/how-to-practice", label: "Hướng dẫn luyện đề" },
            { slug: "practice-tests", label: "Danh sách đề" },
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
