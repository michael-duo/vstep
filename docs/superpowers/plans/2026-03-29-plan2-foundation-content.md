# Plan 2: Foundation Content — Nền tảng

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Populate all 5 Foundation section pages with real content: vocabulary (20 topics), linking words, sentence patterns, sentence upgrade, and common mistakes — all in Vietnamese UI with English examples.

**Architecture:** Each page is an MDX file in `vstep-web/src/content/docs/foundation/`. Vocabulary data lives in JSON files at `vstep-web/src/data/vocabulary/`. Pages import React components (VocabularyTable, TierContent) and JSON data directly in MDX. All explanations/headings in Vietnamese; examples/words in English.

**Tech Stack:** Astro + Starlight MDX, React components (VocabularyTable, TierContent already built), JSON data files

**Spec:** `docs/superpowers/specs/2026-03-29-vstep-b1-website-design.md` (section 3: Nền tảng)

---

## File Structure

```
vstep-web/
├── src/
│   ├── data/
│   │   └── vocabulary/
│   │       ├── hobbies.json          (overwrite existing placeholder)
│   │       ├── food.json
│   │       ├── travel.json
│   │       ├── hometown.json
│   │       ├── daily-routine.json
│   │       ├── holidays-festivals.json
│   │       ├── education.json
│   │       ├── health.json
│   │       ├── family.json
│   │       ├── shopping.json
│   │       ├── music-entertainment.json
│   │       ├── technology.json
│   │       ├── sports.json
│   │       ├── work-career.json
│   │       ├── environment.json
│   │       ├── transportation.json
│   │       ├── weather.json
│   │       ├── social-media.json
│   │       ├── clothing.json
│   │       └── housing.json
│   └── content/
│       └── docs/
│           └── foundation/
│               ├── vocabulary.mdx        (replace placeholder)
│               ├── linking-words.mdx     (replace placeholder)
│               ├── sentence-patterns.mdx (replace placeholder)
│               ├── sentence-upgrade.mdx  (replace placeholder)
│               └── common-mistakes.mdx   (replace placeholder)
```

---

## Important Notes for All Tasks

- **Working directory**: All commands from `vstep-web/` subdirectory
- **Build command**: `npm run build` (must pass after each task)
- **All headings/explanations in Vietnamese** — only English in examples, word lists, templates
- **Two-tier system**: Use `<TierContent client:load>` (amber/yellow box, collapsed by default) for Nâng cao sections
- **VocabularyTable usage in MDX**:
  ```mdx
  import VocabularyTable from '@components/VocabularyTable';
  import hobbiesData from '@data/vocabulary/hobbies.json';

  <VocabularyTable client:load topic="Sở thích (Hobbies)" data={hobbiesData} />
  ```
- **TierContent usage in MDX**:
  ```mdx
  import TierContent from '@components/TierContent';

  <TierContent client:load title="🔼 Nâng cao">
    Content here
  </TierContent>
  ```
- JSON must use double quotes. Each entry: `{ "word": "...", "vietnamese": "...", "example": "..." }`
- The `@components` and `@data` path aliases are configured in `tsconfig.json` and `astro.config.mjs`

---

## Task 1: Vocabulary JSON data files (20 topics)

**Files:**
- Create/overwrite: `src/data/vocabulary/hobbies.json`
- Create: `src/data/vocabulary/food.json`
- Create: `src/data/vocabulary/travel.json`
- Create: `src/data/vocabulary/hometown.json`
- Create: `src/data/vocabulary/daily-routine.json`
- Create: `src/data/vocabulary/holidays-festivals.json`
- Create: `src/data/vocabulary/education.json`
- Create: `src/data/vocabulary/health.json`
- Create: `src/data/vocabulary/family.json`
- Create: `src/data/vocabulary/shopping.json`
- Create: `src/data/vocabulary/music-entertainment.json`
- Create: `src/data/vocabulary/technology.json`
- Create: `src/data/vocabulary/sports.json`
- Create: `src/data/vocabulary/work-career.json`
- Create: `src/data/vocabulary/environment.json`
- Create: `src/data/vocabulary/transportation.json`
- Create: `src/data/vocabulary/weather.json`
- Create: `src/data/vocabulary/social-media.json`
- Create: `src/data/vocabulary/clothing.json`
- Create: `src/data/vocabulary/housing.json`

Write exactly the JSON content below for each file. Each file is an array of 15–18 objects with fields `word`, `vietnamese`, `example`.

- [ ] **Step 1: Write hobbies.json** (overwrite existing)

```json
[
  { "word": "hobby / hobbies", "vietnamese": "sở thích", "example": "My hobby is reading books." },
  { "word": "relax", "vietnamese": "thư giãn", "example": "Listening to music helps me relax." },
  { "word": "enjoy", "vietnamese": "thích, tận hưởng", "example": "I enjoy playing football with my friends." },
  { "word": "spend time", "vietnamese": "dành thời gian", "example": "I spend time reading every evening." },
  { "word": "free time", "vietnamese": "thời gian rảnh", "example": "In my free time, I like watching movies." },
  { "word": "outdoor activity", "vietnamese": "hoạt động ngoài trời", "example": "Hiking is a popular outdoor activity." },
  { "word": "indoor activity", "vietnamese": "hoạt động trong nhà", "example": "Chess is a great indoor activity." },
  { "word": "collect / collection", "vietnamese": "sưu tập", "example": "He has a large collection of stamps." },
  { "word": "drawing / painting", "vietnamese": "vẽ tranh", "example": "She enjoys drawing in her free time." },
  { "word": "cooking", "vietnamese": "nấu ăn", "example": "Cooking is my favourite hobby." },
  { "word": "gardening", "vietnamese": "làm vườn", "example": "Gardening is both relaxing and useful." },
  { "word": "photography", "vietnamese": "chụp ảnh", "example": "Photography is her new hobby." },
  { "word": "dancing", "vietnamese": "nhảy / khiêu vũ", "example": "Dancing makes me feel happy and energetic." },
  { "word": "singing", "vietnamese": "hát", "example": "Singing is a great way to express feelings." },
  { "word": "go hiking", "vietnamese": "đi leo núi / đi bộ dài", "example": "We go hiking every weekend." },
  { "word": "take part in", "vietnamese": "tham gia", "example": "I take part in a reading club." },
  { "word": "pastime", "vietnamese": "trò tiêu khiển", "example": "Reading is my favourite pastime." }
]
```

- [ ] **Step 2: Write food.json**

```json
[
  { "word": "delicious", "vietnamese": "ngon, thơm ngon", "example": "This soup is absolutely delicious." },
  { "word": "tasty", "vietnamese": "ngon miệng", "example": "The noodles are very tasty." },
  { "word": "sweet", "vietnamese": "ngọt", "example": "I like sweet desserts after dinner." },
  { "word": "salty", "vietnamese": "mặn", "example": "This dish is a bit too salty for me." },
  { "word": "spicy", "vietnamese": "cay", "example": "I cannot eat very spicy food." },
  { "word": "sour", "vietnamese": "chua", "example": "Lemons have a very sour taste." },
  { "word": "healthy / unhealthy", "vietnamese": "lành mạnh / không lành mạnh", "example": "Vegetables and fruit are healthy foods." },
  { "word": "recipe", "vietnamese": "công thức nấu ăn", "example": "I followed my mother's recipe to make this." },
  { "word": "ingredient", "vietnamese": "nguyên liệu", "example": "The main ingredient of this dish is rice." },
  { "word": "meal", "vietnamese": "bữa ăn", "example": "We have three meals a day." },
  { "word": "snack", "vietnamese": "đồ ăn nhẹ", "example": "I eat a small snack in the afternoon." },
  { "word": "diet", "vietnamese": "chế độ ăn", "example": "A balanced diet is important for good health." },
  { "word": "vegetarian", "vietnamese": "ăn chay / người ăn chay", "example": "She is vegetarian and does not eat meat." },
  { "word": "fast food", "vietnamese": "đồ ăn nhanh", "example": "Eating too much fast food is bad for your health." },
  { "word": "traditional food", "vietnamese": "món ăn truyền thống", "example": "Pho is a traditional Vietnamese food." },
  { "word": "cuisine", "vietnamese": "ẩm thực", "example": "Vietnamese cuisine is famous around the world." }
]
```

- [ ] **Step 3: Write travel.json**

```json
[
  { "word": "trip / journey", "vietnamese": "chuyến đi", "example": "We went on a trip to Da Nang last summer." },
  { "word": "destination", "vietnamese": "điểm đến", "example": "My dream destination is Japan." },
  { "word": "explore", "vietnamese": "khám phá", "example": "I love to explore new places." },
  { "word": "sightseeing", "vietnamese": "tham quan", "example": "We spent the day sightseeing in the old town." },
  { "word": "accommodation", "vietnamese": "chỗ ở, nơi lưu trú", "example": "We booked accommodation near the beach." },
  { "word": "book / reserve", "vietnamese": "đặt trước", "example": "I booked a hotel room online." },
  { "word": "luggage / baggage", "vietnamese": "hành lý", "example": "Please carry your own luggage." },
  { "word": "tourist", "vietnamese": "khách du lịch", "example": "Hoi An attracts many tourists every year." },
  { "word": "scenery", "vietnamese": "phong cảnh", "example": "The scenery in Ha Long Bay is breathtaking." },
  { "word": "local culture", "vietnamese": "văn hóa địa phương", "example": "I always try to experience local culture when I travel." },
  { "word": "souvenir", "vietnamese": "quà lưu niệm", "example": "I bought some souvenirs for my family." },
  { "word": "adventure", "vietnamese": "cuộc phiêu lưu", "example": "Travelling is always a great adventure." },
  { "word": "budget", "vietnamese": "ngân sách", "example": "We planned our trip on a tight budget." },
  { "word": "memorable", "vietnamese": "đáng nhớ", "example": "That trip was a very memorable experience." },
  { "word": "exchange rate", "vietnamese": "tỷ giá hối đoái", "example": "Check the exchange rate before travelling abroad." },
  { "word": "visa", "vietnamese": "thị thực", "example": "You need a visa to enter some countries." }
]
```

- [ ] **Step 4: Write hometown.json**

```json
[
  { "word": "hometown", "vietnamese": "quê hương, thành phố quê", "example": "My hometown is a small city in central Vietnam." },
  { "word": "located in", "vietnamese": "nằm ở, tọa lạc tại", "example": "My city is located in the south of Vietnam." },
  { "word": "population", "vietnamese": "dân số", "example": "The population of my city is about one million." },
  { "word": "landmark", "vietnamese": "địa danh nổi tiếng", "example": "The old bridge is the most famous landmark here." },
  { "word": "peaceful / quiet", "vietnamese": "yên tĩnh, bình yên", "example": "I love how peaceful my hometown is." },
  { "word": "crowded", "vietnamese": "đông đúc, chen chúc", "example": "The city centre is very crowded on weekends." },
  { "word": "develop / development", "vietnamese": "phát triển / sự phát triển", "example": "My city has developed a lot in recent years." },
  { "word": "local", "vietnamese": "địa phương, người địa phương", "example": "Local people are very friendly and welcoming." },
  { "word": "community", "vietnamese": "cộng đồng", "example": "We have a strong sense of community here." },
  { "word": "atmosphere", "vietnamese": "không khí, bầu không khí", "example": "I love the relaxed atmosphere of my hometown." },
  { "word": "convenient / convenience", "vietnamese": "tiện lợi / sự tiện lợi", "example": "Living here is very convenient for students." },
  { "word": "traffic", "vietnamese": "giao thông", "example": "Traffic can be heavy during rush hour." },
  { "word": "climate", "vietnamese": "khí hậu", "example": "My hometown has a tropical climate." },
  { "word": "proud of", "vietnamese": "tự hào về", "example": "I am proud of my hometown and its culture." },
  { "word": "traditional", "vietnamese": "truyền thống", "example": "There are many traditional festivals here." }
]
```

- [ ] **Step 5: Write daily-routine.json**

```json
[
  { "word": "wake up / get up", "vietnamese": "thức dậy", "example": "I usually wake up at six o'clock." },
  { "word": "get dressed", "vietnamese": "mặc quần áo", "example": "It takes me five minutes to get dressed." },
  { "word": "commute", "vietnamese": "đi lại (đến trường/cơ quan)", "example": "I commute to university by motorbike." },
  { "word": "routine", "vietnamese": "thói quen hàng ngày", "example": "Exercise is part of my daily routine." },
  { "word": "schedule", "vietnamese": "lịch trình, thời gian biểu", "example": "I follow a strict schedule every day." },
  { "word": "productive", "vietnamese": "năng suất, hiệu quả", "example": "I feel most productive in the morning." },
  { "word": "manage time", "vietnamese": "quản lý thời gian", "example": "Good students know how to manage their time well." },
  { "word": "take a break", "vietnamese": "nghỉ ngơi", "example": "I take a short break after every two hours of study." },
  { "word": "leisure time", "vietnamese": "thời gian giải trí", "example": "I spend my leisure time reading or watching films." },
  { "word": "deadline", "vietnamese": "hạn chót", "example": "I always try to meet my deadlines." },
  { "word": "prepare", "vietnamese": "chuẩn bị", "example": "I prepare my bag the night before." },
  { "word": "punctual", "vietnamese": "đúng giờ", "example": "Being punctual shows respect for others." },
  { "word": "habit", "vietnamese": "thói quen", "example": "Reading before bed is a good habit." },
  { "word": "chore", "vietnamese": "việc nhà", "example": "I help with household chores every day." },
  { "word": "go to bed", "vietnamese": "đi ngủ", "example": "I usually go to bed at eleven o'clock." }
]
```

- [ ] **Step 6: Write holidays-festivals.json**

```json
[
  { "word": "celebrate / celebration", "vietnamese": "kỷ niệm / lễ kỷ niệm", "example": "We celebrate Tet with the whole family." },
  { "word": "tradition / traditional", "vietnamese": "truyền thống", "example": "Giving lucky money is a Vietnamese tradition." },
  { "word": "festival", "vietnamese": "lễ hội", "example": "The Mid-Autumn Festival is very popular in Vietnam." },
  { "word": "ceremony", "vietnamese": "lễ, buổi lễ", "example": "There is a special ceremony at the beginning of the festival." },
  { "word": "family reunion", "vietnamese": "đoàn tụ gia đình", "example": "Tet is a time for family reunions." },
  { "word": "decorate / decoration", "vietnamese": "trang trí", "example": "We decorate our house with flowers for Tet." },
  { "word": "fireworks", "vietnamese": "pháo hoa", "example": "There are fireworks at midnight on New Year's Eve." },
  { "word": "holiday", "vietnamese": "ngày lễ, kỳ nghỉ", "example": "The summer holiday lasts two months." },
  { "word": "national holiday", "vietnamese": "ngày lễ quốc gia", "example": "April 30th is a national holiday in Vietnam." },
  { "word": "custom", "vietnamese": "phong tục, tập tục", "example": "It is a custom to visit grandparents during Tet." },
  { "word": "gather", "vietnamese": "tụ tập, sum họp", "example": "Family members gather to share a big meal." },
  { "word": "special occasion", "vietnamese": "dịp đặc biệt", "example": "Birthdays and weddings are special occasions." },
  { "word": "annual", "vietnamese": "hàng năm", "example": "The annual flower festival attracts many visitors." },
  { "word": "gift / present", "vietnamese": "quà tặng", "example": "Children receive gifts from their relatives." },
  { "word": "lucky money (lì xì)", "vietnamese": "tiền lì xì / lì xì", "example": "Adults give lucky money to children at Tet." }
]
```

- [ ] **Step 7: Write education.json**

```json
[
  { "word": "study / learn", "vietnamese": "học / học hỏi", "example": "I study English for two hours every day." },
  { "word": "exam / test", "vietnamese": "bài kiểm tra / kỳ thi", "example": "I have an important exam next week." },
  { "word": "graduate / graduation", "vietnamese": "tốt nghiệp", "example": "She will graduate from university this year." },
  { "word": "scholarship", "vietnamese": "học bổng", "example": "He received a scholarship to study abroad." },
  { "word": "subject", "vietnamese": "môn học", "example": "English is my favourite subject." },
  { "word": "major", "vietnamese": "chuyên ngành", "example": "Her major is Computer Science." },
  { "word": "degree", "vietnamese": "bằng cấp", "example": "He has a degree in Business Administration." },
  { "word": "knowledge", "vietnamese": "kiến thức", "example": "Reading books helps us gain knowledge." },
  { "word": "skill", "vietnamese": "kỹ năng", "example": "Communication skills are very important." },
  { "word": "teacher / lecturer", "vietnamese": "giáo viên / giảng viên", "example": "My lecturer is very helpful and knowledgeable." },
  { "word": "campus", "vietnamese": "khuôn viên trường", "example": "Our campus has a large library." },
  { "word": "assignment", "vietnamese": "bài tập được giao", "example": "I need to finish my assignment by Friday." },
  { "word": "grade / mark", "vietnamese": "điểm số", "example": "She got good grades in all her subjects." },
  { "word": "tuition fee", "vietnamese": "học phí", "example": "Tuition fees are increasing every year." },
  { "word": "discipline", "vietnamese": "kỷ luật / ngành học", "example": "Discipline is important to succeed in school." }
]
```

- [ ] **Step 8: Write health.json**

```json
[
  { "word": "exercise / work out", "vietnamese": "tập thể dục", "example": "I exercise for thirty minutes every morning." },
  { "word": "healthy lifestyle", "vietnamese": "lối sống lành mạnh", "example": "Eating well and exercising leads to a healthy lifestyle." },
  { "word": "nutrition", "vietnamese": "dinh dưỡng", "example": "Good nutrition is important for children's growth." },
  { "word": "diet", "vietnamese": "chế độ ăn", "example": "A balanced diet includes vegetables, fruit, and protein." },
  { "word": "mental health", "vietnamese": "sức khỏe tâm thần", "example": "Taking breaks helps improve mental health." },
  { "word": "stress", "vietnamese": "căng thẳng", "example": "Too much homework can cause stress for students." },
  { "word": "doctor / physician", "vietnamese": "bác sĩ", "example": "You should see a doctor if you feel unwell." },
  { "word": "medicine / medication", "vietnamese": "thuốc", "example": "The doctor prescribed some medicine for me." },
  { "word": "symptom", "vietnamese": "triệu chứng", "example": "Common cold symptoms include a sore throat and runny nose." },
  { "word": "recover / recovery", "vietnamese": "hồi phục", "example": "She recovered quickly after her illness." },
  { "word": "disease / illness", "vietnamese": "bệnh tật", "example": "Heart disease is a leading cause of death worldwide." },
  { "word": "immune system", "vietnamese": "hệ miễn dịch", "example": "Eating well helps strengthen your immune system." },
  { "word": "physical fitness", "vietnamese": "thể lực, sức khỏe thể chất", "example": "Regular sports improve physical fitness." },
  { "word": "check-up", "vietnamese": "khám sức khỏe định kỳ", "example": "It is important to have a regular health check-up." },
  { "word": "well-being", "vietnamese": "sức khỏe và hạnh phúc", "example": "Sleep is essential for our overall well-being." }
]
```

- [ ] **Step 9: Write family.json**

```json
[
  { "word": "parent", "vietnamese": "bố/mẹ, cha mẹ", "example": "My parents are both teachers." },
  { "word": "sibling", "vietnamese": "anh/chị/em ruột", "example": "I have two siblings — one brother and one sister." },
  { "word": "relative", "vietnamese": "họ hàng", "example": "We visit our relatives during Tet." },
  { "word": "close-knit", "vietnamese": "gắn bó, đoàn kết", "example": "We are a very close-knit family." },
  { "word": "support", "vietnamese": "ủng hộ, hỗ trợ", "example": "My family always supports my decisions." },
  { "word": "raise / upbringing", "vietnamese": "nuôi dưỡng / cách nuôi dạy", "example": "My parents raised me to be responsible." },
  { "word": "generation", "vietnamese": "thế hệ", "example": "My grandparents belong to an older generation." },
  { "word": "responsibility", "vietnamese": "trách nhiệm", "example": "Taking care of younger siblings is a big responsibility." },
  { "word": "relationship", "vietnamese": "mối quan hệ", "example": "A good relationship with family is very important." },
  { "word": "bond", "vietnamese": "sợi dây gắn kết", "example": "There is a strong bond between me and my mother." },
  { "word": "household", "vietnamese": "hộ gia đình", "example": "Our household has five members." },
  { "word": "nuclear family", "vietnamese": "gia đình hạt nhân (bố, mẹ, con)", "example": "Most families in the city are nuclear families." },
  { "word": "extended family", "vietnamese": "gia đình mở rộng (có cả ông bà, họ hàng)", "example": "In Vietnam, many people live with their extended family." },
  { "word": "care for", "vietnamese": "chăm sóc", "example": "She cares for her elderly grandmother." },
  { "word": "value", "vietnamese": "giá trị, quan điểm", "example": "Family values are taught from a young age." }
]
```

- [ ] **Step 10: Write shopping.json**

```json
[
  { "word": "sale / discount", "vietnamese": "giảm giá", "example": "There is a big sale at the shopping mall today." },
  { "word": "price", "vietnamese": "giá cả", "example": "The price of this jacket is very reasonable." },
  { "word": "afford", "vietnamese": "đủ khả năng mua", "example": "I cannot afford to buy a new phone right now." },
  { "word": "brand", "vietnamese": "thương hiệu", "example": "She prefers buying well-known brands." },
  { "word": "quality", "vietnamese": "chất lượng", "example": "Good quality products last longer." },
  { "word": "compare", "vietnamese": "so sánh", "example": "I always compare prices before buying anything." },
  { "word": "shop online", "vietnamese": "mua sắm trực tuyến", "example": "Shopping online is very convenient." },
  { "word": "delivery", "vietnamese": "giao hàng", "example": "Free delivery is available for orders over 200,000 VND." },
  { "word": "return / refund", "vietnamese": "trả hàng / hoàn tiền", "example": "I returned the shoes because they were too small." },
  { "word": "receipt", "vietnamese": "hóa đơn", "example": "Keep your receipt in case you need to return the item." },
  { "word": "budget", "vietnamese": "ngân sách", "example": "I try to stick to my monthly budget." },
  { "word": "bargain", "vietnamese": "mặc cả / món hời", "example": "I found a great bargain at the market." },
  { "word": "purchase", "vietnamese": "mua, giao dịch mua", "example": "I made several purchases at the market." },
  { "word": "customer", "vietnamese": "khách hàng", "example": "The shop provides good service to customers." },
  { "word": "checkout", "vietnamese": "thanh toán (tại quầy)", "example": "There was a long queue at the checkout." }
]
```

- [ ] **Step 11: Write music-entertainment.json**

```json
[
  { "word": "genre", "vietnamese": "thể loại (nhạc, phim)", "example": "My favourite music genre is pop." },
  { "word": "song / track", "vietnamese": "bài hát", "example": "This song has a very catchy melody." },
  { "word": "album", "vietnamese": "album", "example": "Her new album was released last month." },
  { "word": "concert", "vietnamese": "buổi hòa nhạc", "example": "I went to a live concert last weekend." },
  { "word": "perform / performance", "vietnamese": "biểu diễn", "example": "The band gave an amazing performance." },
  { "word": "musician / artist", "vietnamese": "nhạc sĩ / nghệ sĩ", "example": "She is a talented young musician." },
  { "word": "melody", "vietnamese": "giai điệu", "example": "The melody of this song is very relaxing." },
  { "word": "rhythm", "vietnamese": "nhịp điệu", "example": "I love music with a strong rhythm." },
  { "word": "lyrics", "vietnamese": "lời bài hát", "example": "The lyrics of this song are very meaningful." },
  { "word": "film / movie", "vietnamese": "phim", "example": "We watched a great action film last night." },
  { "word": "cinema", "vietnamese": "rạp chiếu phim", "example": "We go to the cinema every Friday." },
  { "word": "series / TV show", "vietnamese": "phim series / chương trình TV", "example": "I am watching a popular Korean series." },
  { "word": "streaming", "vietnamese": "xem/nghe trực tuyến", "example": "Streaming music is more convenient than buying CDs." },
  { "word": "entertain / entertainment", "vietnamese": "giải trí", "example": "Music is a great form of entertainment." },
  { "word": "fan", "vietnamese": "người hâm mộ", "example": "She is a big fan of that singer." }
]
```

- [ ] **Step 12: Write technology.json**

```json
[
  { "word": "device", "vietnamese": "thiết bị", "example": "A smartphone is the most commonly used device today." },
  { "word": "smartphone", "vietnamese": "điện thoại thông minh", "example": "I use my smartphone for everything." },
  { "word": "internet", "vietnamese": "internet", "example": "We need the internet to access information quickly." },
  { "word": "application / app", "vietnamese": "ứng dụng", "example": "There are apps for almost everything now." },
  { "word": "social network", "vietnamese": "mạng xã hội", "example": "Facebook and Instagram are popular social networks." },
  { "word": "download / upload", "vietnamese": "tải xuống / tải lên", "example": "I downloaded the new app on my phone." },
  { "word": "digital", "vietnamese": "kỹ thuật số", "example": "We live in a digital age." },
  { "word": "artificial intelligence (AI)", "vietnamese": "trí tuệ nhân tạo", "example": "AI is changing many industries." },
  { "word": "data", "vietnamese": "dữ liệu", "example": "Companies collect a lot of user data." },
  { "word": "screen time", "vietnamese": "thời gian nhìn màn hình", "example": "Too much screen time is bad for your eyes." },
  { "word": "online / offline", "vietnamese": "trực tuyến / ngoại tuyến", "example": "I study online during the pandemic." },
  { "word": "search engine", "vietnamese": "công cụ tìm kiếm", "example": "Google is the most popular search engine." },
  { "word": "password", "vietnamese": "mật khẩu", "example": "Always use a strong password for your accounts." },
  { "word": "wireless / Wi-Fi", "vietnamese": "không dây / Wi-Fi", "example": "Most cafes offer free Wi-Fi." },
  { "word": "update", "vietnamese": "cập nhật", "example": "Remember to update your software regularly." }
]
```

- [ ] **Step 13: Write sports.json**

```json
[
  { "word": "physical activity", "vietnamese": "hoạt động thể chất", "example": "Regular physical activity is good for your health." },
  { "word": "team", "vietnamese": "đội, nhóm", "example": "I play for the school football team." },
  { "word": "compete / competition", "vietnamese": "thi đấu / cuộc thi đấu", "example": "She won first place in the swimming competition." },
  { "word": "win / lose", "vietnamese": "thắng / thua", "example": "Our team won the match yesterday." },
  { "word": "training / practice", "vietnamese": "tập luyện", "example": "We have training sessions three times a week." },
  { "word": "coach", "vietnamese": "huấn luyện viên", "example": "Our coach is very strict but fair." },
  { "word": "athlete", "vietnamese": "vận động viên", "example": "She is a professional athlete." },
  { "word": "championship", "vietnamese": "giải vô địch", "example": "He won the national championship last year." },
  { "word": "fitness", "vietnamese": "thể lực, sức khỏe thể chất", "example": "Playing sport improves your fitness." },
  { "word": "injury", "vietnamese": "chấn thương", "example": "He had to stop playing because of an injury." },
  { "word": "stadium", "vietnamese": "sân vận động", "example": "The final match was held at the national stadium." },
  { "word": "score", "vietnamese": "tỉ số / ghi điểm", "example": "The final score was 2-1." },
  { "word": "match / game", "vietnamese": "trận đấu", "example": "Did you watch the football match last night?" },
  { "word": "sportsmanship", "vietnamese": "tinh thần thể thao", "example": "Good sportsmanship means respecting your opponents." },
  { "word": "league", "vietnamese": "giải đấu", "example": "He plays in a local football league." }
]
```

- [ ] **Step 14: Write work-career.json**

```json
[
  { "word": "job / career", "vietnamese": "công việc / sự nghiệp", "example": "She has a very successful career as an engineer." },
  { "word": "company / firm", "vietnamese": "công ty", "example": "He works for a large technology company." },
  { "word": "employee / employer", "vietnamese": "nhân viên / chủ lao động", "example": "All employees must wear a uniform." },
  { "word": "salary / wage", "vietnamese": "lương", "example": "The salary for this job is quite attractive." },
  { "word": "promotion", "vietnamese": "thăng chức", "example": "She got a promotion after working hard for two years." },
  { "word": "deadline", "vietnamese": "hạn chót", "example": "I need to finish this report before the deadline." },
  { "word": "teamwork", "vietnamese": "làm việc nhóm", "example": "Good teamwork is essential in any workplace." },
  { "word": "experience", "vietnamese": "kinh nghiệm", "example": "This job requires at least two years of experience." },
  { "word": "resume / CV", "vietnamese": "hồ sơ xin việc", "example": "I updated my CV before applying for the job." },
  { "word": "interview", "vietnamese": "phỏng vấn", "example": "I have a job interview tomorrow morning." },
  { "word": "working hours", "vietnamese": "giờ làm việc", "example": "Working hours are from 8 am to 5 pm." },
  { "word": "profession / occupation", "vietnamese": "nghề nghiệp", "example": "What is your profession?" },
  { "word": "colleague", "vietnamese": "đồng nghiệp", "example": "My colleagues are very friendly and helpful." },
  { "word": "qualification", "vietnamese": "bằng cấp, chứng chỉ", "example": "This position requires a bachelor's degree." },
  { "word": "apply for", "vietnamese": "nộp đơn xin", "example": "I applied for a job at a local hospital." }
]
```

- [ ] **Step 15: Write environment.json**

```json
[
  { "word": "pollution", "vietnamese": "ô nhiễm", "example": "Air pollution is a serious problem in big cities." },
  { "word": "recycle", "vietnamese": "tái chế", "example": "We should recycle paper, plastic, and glass." },
  { "word": "climate change", "vietnamese": "biến đổi khí hậu", "example": "Climate change is causing more extreme weather." },
  { "word": "protect / protection", "vietnamese": "bảo vệ", "example": "We need to protect our natural environment." },
  { "word": "natural resource", "vietnamese": "tài nguyên thiên nhiên", "example": "We must use natural resources wisely." },
  { "word": "global warming", "vietnamese": "nóng lên toàn cầu", "example": "Global warming is melting polar ice caps." },
  { "word": "waste", "vietnamese": "rác thải / lãng phí", "example": "We produce too much plastic waste every day." },
  { "word": "eco-friendly", "vietnamese": "thân thiện môi trường", "example": "I try to use eco-friendly products." },
  { "word": "renewable energy", "vietnamese": "năng lượng tái tạo", "example": "Solar energy is a type of renewable energy." },
  { "word": "plant trees", "vietnamese": "trồng cây", "example": "Planting trees helps reduce carbon dioxide." },
  { "word": "carbon footprint", "vietnamese": "dấu chân carbon", "example": "Driving less can reduce your carbon footprint." },
  { "word": "endangered species", "vietnamese": "loài có nguy cơ tuyệt chủng", "example": "Tigers are an endangered species." },
  { "word": "conservation", "vietnamese": "bảo tồn", "example": "Wildlife conservation is very important." },
  { "word": "sustainable", "vietnamese": "bền vững", "example": "We need to find sustainable ways to use energy." },
  { "word": "deforestation", "vietnamese": "phá rừng", "example": "Deforestation destroys the homes of many animals." }
]
```

- [ ] **Step 16: Write transportation.json**

```json
[
  { "word": "public transport", "vietnamese": "giao thông công cộng", "example": "Public transport is cheaper than using a taxi." },
  { "word": "bus / train", "vietnamese": "xe buýt / tàu hỏa", "example": "I take the bus to school every day." },
  { "word": "traffic jam", "vietnamese": "kẹt xe, tắc đường", "example": "There was a terrible traffic jam on the way to work." },
  { "word": "commute", "vietnamese": "đi lại hàng ngày", "example": "My daily commute takes about thirty minutes." },
  { "word": "vehicle", "vietnamese": "phương tiện giao thông", "example": "Motorbikes are the most common vehicle in Vietnam." },
  { "word": "bicycle / motorbike", "vietnamese": "xe đạp / xe máy", "example": "I ride my motorbike to work every day." },
  { "word": "petrol / fuel", "vietnamese": "xăng / nhiên liệu", "example": "The price of petrol has gone up recently." },
  { "word": "parking", "vietnamese": "đỗ xe / bãi đỗ xe", "example": "Finding parking in the city centre is difficult." },
  { "word": "convenient", "vietnamese": "tiện lợi", "example": "Living near a bus stop is very convenient." },
  { "word": "ticket / fare", "vietnamese": "vé / giá vé", "example": "A monthly bus ticket is quite affordable." },
  { "word": "rush hour", "vietnamese": "giờ cao điểm", "example": "Roads are very busy during rush hour." },
  { "word": "on foot", "vietnamese": "đi bộ", "example": "I prefer to travel on foot when the weather is nice." },
  { "word": "delay", "vietnamese": "trễ, chậm trễ", "example": "The train was delayed by twenty minutes." },
  { "word": "road / highway", "vietnamese": "đường / cao tốc", "example": "The new highway connects the two cities." },
  { "word": "safe / safety", "vietnamese": "an toàn", "example": "Always wear a helmet for your safety." }
]
```

- [ ] **Step 17: Write weather.json**

```json
[
  { "word": "sunny", "vietnamese": "nắng", "example": "It is a warm and sunny day today." },
  { "word": "rainy / rainfall", "vietnamese": "mưa / lượng mưa", "example": "The rainy season in Vietnam is from May to October." },
  { "word": "cloudy / overcast", "vietnamese": "nhiều mây / u ám", "example": "The sky is cloudy, so it might rain later." },
  { "word": "windy", "vietnamese": "có gió", "example": "It is very windy today — hold your hat!" },
  { "word": "temperature", "vietnamese": "nhiệt độ", "example": "The temperature in Hanoi in winter can drop below 15°C." },
  { "word": "forecast", "vietnamese": "dự báo thời tiết", "example": "According to the forecast, it will rain tomorrow." },
  { "word": "climate", "vietnamese": "khí hậu", "example": "Vietnam has a tropical climate." },
  { "word": "season", "vietnamese": "mùa", "example": "Vietnam has two main seasons: wet and dry." },
  { "word": "flood", "vietnamese": "lũ lụt", "example": "Heavy rain caused serious flooding in the region." },
  { "word": "storm / typhoon", "vietnamese": "bão", "example": "A strong typhoon hit the coast last week." },
  { "word": "humid / humidity", "vietnamese": "ẩm ướt / độ ẩm", "example": "It is very hot and humid in summer." },
  { "word": "drought", "vietnamese": "hạn hán", "example": "The long drought destroyed many crops." },
  { "word": "cool / chilly", "vietnamese": "mát / se lạnh", "example": "The weather in Da Lat is cool all year round." },
  { "word": "comfortable weather", "vietnamese": "thời tiết dễ chịu", "example": "Spring has the most comfortable weather." },
  { "word": "umbrella / raincoat", "vietnamese": "ô / áo mưa", "example": "Don't forget your umbrella — it might rain!" }
]
```

- [ ] **Step 18: Write social-media.json**

```json
[
  { "word": "platform", "vietnamese": "nền tảng (mạng xã hội)", "example": "Facebook is a popular social media platform." },
  { "word": "post", "vietnamese": "đăng bài / bài đăng", "example": "She posts photos on Instagram every day." },
  { "word": "share", "vietnamese": "chia sẻ", "example": "I shared an interesting article with my friends." },
  { "word": "comment", "vietnamese": "bình luận", "example": "People often leave comments on news articles." },
  { "word": "like / react", "vietnamese": "thích / bày tỏ cảm xúc", "example": "My photo got over two hundred likes." },
  { "word": "follow", "vietnamese": "theo dõi", "example": "I follow several cooking accounts on social media." },
  { "word": "account", "vietnamese": "tài khoản", "example": "You need an account to use Facebook." },
  { "word": "influencer", "vietnamese": "người có tầm ảnh hưởng", "example": "Many young people want to become influencers." },
  { "word": "content", "vietnamese": "nội dung", "example": "She creates educational content for students." },
  { "word": "privacy", "vietnamese": "quyền riêng tư", "example": "It is important to protect your privacy online." },
  { "word": "trending", "vietnamese": "đang thịnh hành", "example": "That video is trending on social media this week." },
  { "word": "hashtag", "vietnamese": "thẻ bắt đầu (#)", "example": "Use hashtags to make your posts easier to find." },
  { "word": "viral", "vietnamese": "lan truyền nhanh, viral", "example": "The funny video went viral overnight." },
  { "word": "notification", "vietnamese": "thông báo", "example": "I turned off notifications to focus on studying." },
  { "word": "cyberbullying", "vietnamese": "bắt nạt trên mạng", "example": "Cyberbullying is a serious problem among teenagers." }
]
```

- [ ] **Step 19: Write clothing.json**

```json
[
  { "word": "outfit", "vietnamese": "trang phục, bộ quần áo", "example": "She chose a nice outfit for the party." },
  { "word": "wear / put on", "vietnamese": "mặc / đội / mang", "example": "I wear casual clothes on weekends." },
  { "word": "casual", "vietnamese": "bình thường, thoải mái", "example": "Jeans and a T-shirt are typical casual clothes." },
  { "word": "formal", "vietnamese": "trang trọng, lịch sự", "example": "You need to wear formal clothes to the interview." },
  { "word": "fashionable / trendy", "vietnamese": "thời trang, hợp mốt", "example": "She always wears fashionable clothes." },
  { "word": "style", "vietnamese": "phong cách", "example": "His style is simple but elegant." },
  { "word": "size", "vietnamese": "kích cỡ", "example": "What size shirt do you wear?" },
  { "word": "fit", "vietnamese": "vừa vặn", "example": "These jeans fit me perfectly." },
  { "word": "material / fabric", "vietnamese": "chất liệu vải", "example": "Cotton is a comfortable material for hot weather." },
  { "word": "comfortable", "vietnamese": "thoải mái, dễ chịu", "example": "I prefer comfortable shoes for long walks." },
  { "word": "accessory", "vietnamese": "phụ kiện", "example": "A scarf is a nice accessory in winter." },
  { "word": "uniform", "vietnamese": "đồng phục", "example": "Students must wear uniforms to school." },
  { "word": "second-hand / used", "vietnamese": "đồ cũ, đồ secondhand", "example": "Buying second-hand clothes is eco-friendly." },
  { "word": "trend / fashion", "vietnamese": "xu hướng / thời trang", "example": "Fashion trends change very quickly." },
  { "word": "wardrobe", "vietnamese": "tủ quần áo / bộ quần áo sở hữu", "example": "She has a large wardrobe full of colourful clothes." }
]
```

- [ ] **Step 20: Write housing.json**

```json
[
  { "word": "apartment / flat", "vietnamese": "căn hộ chung cư", "example": "We live in a small apartment near the city centre." },
  { "word": "house", "vietnamese": "nhà riêng", "example": "My dream is to own a house with a garden." },
  { "word": "rent / own", "vietnamese": "thuê / sở hữu", "example": "Many students rent apartments near the university." },
  { "word": "neighbourhood", "vietnamese": "khu dân cư, khu vực xung quanh", "example": "We live in a friendly and safe neighbourhood." },
  { "word": "landlord / tenant", "vietnamese": "chủ nhà / người thuê", "example": "The landlord increased the rent last year." },
  { "word": "furniture", "vietnamese": "đồ nội thất", "example": "The apartment came with all basic furniture." },
  { "word": "facilities", "vietnamese": "tiện nghi", "example": "Our building has great facilities — gym, pool, and parking." },
  { "word": "location", "vietnamese": "vị trí", "example": "The location is perfect — close to shops and transport." },
  { "word": "quiet / noisy", "vietnamese": "yên tĩnh / ồn ào", "example": "I prefer a quiet neighbourhood for studying." },
  { "word": "spacious", "vietnamese": "rộng rãi", "example": "The living room is very spacious." },
  { "word": "affordable", "vietnamese": "giá phải chăng", "example": "It is hard to find affordable housing in big cities." },
  { "word": "bedroom / bathroom", "vietnamese": "phòng ngủ / phòng tắm", "example": "Our apartment has two bedrooms and one bathroom." },
  { "word": "modern", "vietnamese": "hiện đại", "example": "They live in a modern apartment block." },
  { "word": "move in / move out", "vietnamese": "dọn vào / dọn ra", "example": "We moved into our new apartment last month." },
  { "word": "lease / contract", "vietnamese": "hợp đồng thuê", "example": "We signed a one-year lease for the apartment." }
]
```

- [ ] **Step 21: Verify all 20 JSON files exist in `src/data/vocabulary/`**

Run from `vstep-web/`:
```bash
ls src/data/vocabulary/
```
Expected: 20 `.json` files listed.

- [ ] **Step 22: Run build to verify JSON files parse correctly**

```bash
cd vstep-web && npm run build 2>&1 | tail -20
```
Expected: Build succeeds (no JSON parse errors).

- [ ] **Step 23: Commit**

```bash
cd vstep-web && git add src/data/vocabulary/ && git commit -m "feat: add vocabulary JSON data for 20 VSTEP topics"
```

---

## Task 2: Foundation page — Từ vựng theo chủ đề (vocabulary.mdx)

**Files:**
- Modify: `src/content/docs/foundation/vocabulary.mdx`

This page imports all 20 vocabulary JSON files and renders a VocabularyTable component for each. Topics are grouped into 3 frequency groups with Vietnamese headings. Uses a `<details>` HTML element for lower-frequency topics to keep the page manageable.

- [ ] **Step 1: Write vocabulary.mdx**

Replace the placeholder with the following complete content:

```mdx
---
title: Từ vựng theo chủ đề
description: Từ vựng 20 chủ đề thường gặp trong VSTEP B1
---

import VocabularyTable from '@components/VocabularyTable';

import hobbiesData from '@data/vocabulary/hobbies.json';
import foodData from '@data/vocabulary/food.json';
import travelData from '@data/vocabulary/travel.json';
import hometownData from '@data/vocabulary/hometown.json';
import dailyRoutineData from '@data/vocabulary/daily-routine.json';
import holidaysData from '@data/vocabulary/holidays-festivals.json';
import educationData from '@data/vocabulary/education.json';
import healthData from '@data/vocabulary/health.json';
import familyData from '@data/vocabulary/family.json';
import shoppingData from '@data/vocabulary/shopping.json';
import musicData from '@data/vocabulary/music-entertainment.json';
import technologyData from '@data/vocabulary/technology.json';
import sportsData from '@data/vocabulary/sports.json';
import workData from '@data/vocabulary/work-career.json';
import environmentData from '@data/vocabulary/environment.json';
import transportData from '@data/vocabulary/transportation.json';
import weatherData from '@data/vocabulary/weather.json';
import socialMediaData from '@data/vocabulary/social-media.json';
import clothingData from '@data/vocabulary/clothing.json';
import housingData from '@data/vocabulary/housing.json';

Mỗi bảng có ô tìm kiếm — gõ từ tiếng Anh hoặc tiếng Việt để lọc nhanh.

---

## Nhóm 1: Chủ đề xuất hiện nhiều nhất

Những chủ đề này xuất hiện trong hầu hết các đề thi VSTEP. **Ưu tiên học trước.**

<VocabularyTable client:load topic="Sở thích (Hobbies)" data={hobbiesData} />

<VocabularyTable client:load topic="Đồ ăn (Food)" data={foodData} />

<VocabularyTable client:load topic="Du lịch (Travel)" data={travelData} />

<VocabularyTable client:load topic="Quê hương (Hometown)" data={hometownData} />

<VocabularyTable client:load topic="Thói quen hàng ngày (Daily Routine)" data={dailyRoutineData} />

<VocabularyTable client:load topic="Lễ hội & Ngày lễ (Holidays & Festivals)" data={holidaysData} />

<VocabularyTable client:load topic="Giáo dục (Education)" data={educationData} />

<VocabularyTable client:load topic="Sức khỏe (Health)" data={healthData} />

<VocabularyTable client:load topic="Gia đình (Family)" data={familyData} />

---

## Nhóm 2: Chủ đề xuất hiện trung bình

<VocabularyTable client:load topic="Mua sắm (Shopping)" data={shoppingData} />

<VocabularyTable client:load topic="Âm nhạc & Giải trí (Music & Entertainment)" data={musicData} />

<VocabularyTable client:load topic="Công nghệ (Technology)" data={technologyData} />

<VocabularyTable client:load topic="Thể thao (Sports)" data={sportsData} />

<VocabularyTable client:load topic="Công việc & Nghề nghiệp (Work & Career)" data={workData} />

<VocabularyTable client:load topic="Môi trường (Environment)" data={environmentData} />

---

## Nhóm 3: Chủ đề xuất hiện ít hơn

<VocabularyTable client:load topic="Giao thông (Transportation)" data={transportData} />

<VocabularyTable client:load topic="Thời tiết (Weather)" data={weatherData} />

<VocabularyTable client:load topic="Mạng xã hội (Social Media)" data={socialMediaData} />

<VocabularyTable client:load topic="Thời trang & Trang phục (Clothing)" data={clothingData} />

<VocabularyTable client:load topic="Nhà ở (Housing)" data={housingData} />
```

- [ ] **Step 2: Run build**

```bash
cd vstep-web && npm run build 2>&1 | tail -20
```
Expected: Build succeeds, `vocabulary` page appears in output.

- [ ] **Step 3: Commit**

```bash
cd vstep-web && git add src/content/docs/foundation/vocabulary.mdx && git commit -m "feat: add foundation vocabulary page with 20 topic tables"
```

---

## Task 3: Foundation page — Từ nối (linking-words.mdx)

**Files:**
- Modify: `src/content/docs/foundation/linking-words.mdx`

Two-tier page: Cơ bản (table visible by default), Nâng cao (TierContent collapsible).

- [ ] **Step 1: Write linking-words.mdx**

Replace placeholder with:

```mdx
---
title: Từ nối
description: Từ nối theo chức năng cho Speaking và Writing VSTEP B1
---

import TierContent from '@components/TierContent';

Từ nối giúp câu văn liền mạch, tự nhiên hơn. Dùng đúng từ nối → tăng điểm **Coherence & Cohesion** (Speaking) và **Organisation** (Writing).

---

## Cơ bản — Phải biết để đạt B1

Học thuộc phần này trước. Đủ để đạt điểm B1.

### Thêm ý (Adding ideas)

| Từ nối | Nghĩa | Ví dụ |
|--------|-------|-------|
| and | và | I like reading **and** listening to music. |
| also | cũng, ngoài ra | I enjoy cooking. I **also** like gardening. |
| besides | ngoài ra, thêm vào đó | **Besides** studying, I work part-time. |

### Đối lập (Contrasting)

| Từ nối | Nghĩa | Ví dụ |
|--------|-------|-------|
| but | nhưng | I like the city, **but** I miss my hometown. |
| however | tuy nhiên | Fast food is cheap. **However**, it is not healthy. |
| although | mặc dù | **Although** the weather was bad, we went out. |

### Nguyên nhân & Kết quả (Cause & Effect)

| Từ nối | Nghĩa | Ví dụ |
|--------|-------|-------|
| because | vì, bởi vì | I exercise every day **because** it keeps me healthy. |
| so | vì vậy | It rained heavily, **so** we stayed at home. |

### Ví dụ (Example)

| Từ nối | Nghĩa | Ví dụ |
|--------|-------|-------|
| for example | ví dụ như | I like outdoor activities. **For example**, I go hiking. |
| such as | chẳng hạn như | I enjoy hobbies **such as** reading and cooking. |

### Trình tự (Sequence)

| Từ nối | Nghĩa | Ví dụ |
|--------|-------|-------|
| first / firstly | đầu tiên | **First**, I wake up at six o'clock. |
| then / next | sau đó | **Then**, I have breakfast. |
| after that | tiếp theo đó | **After that**, I go to university. |
| finally | cuối cùng | **Finally**, I review my notes before bed. |

### Kết luận (Conclusion)

| Từ nối | Nghĩa | Ví dụ |
|--------|-------|-------|
| in conclusion | kết luận lại | **In conclusion**, technology has many benefits. |
| overall | nhìn chung | **Overall**, I think living in a city is convenient. |
| in my opinion | theo ý kiến tôi | **In my opinion**, family is the most important thing. |

---

<TierContent client:load title="🔼 Nâng cao — Muốn điểm cao hơn thì học thêm">

### Thêm ý nâng cao

| Từ nối | Nghĩa | Ví dụ |
|--------|-------|-------|
| moreover | hơn nữa | The city is beautiful. **Moreover**, it is very safe. |
| furthermore | hơn nữa (văn viết) | Exercise is healthy. **Furthermore**, it reduces stress. |
| in addition | thêm vào đó | The hotel has a pool. **In addition**, breakfast is included. |

### Đối lập nâng cao

| Từ nối | Nghĩa | Ví dụ |
|--------|-------|-------|
| on the other hand | mặt khác | City life is convenient. **On the other hand**, it is noisy. |
| despite / in spite of | mặc dù (+ danh từ) | **Despite** the rain, we enjoyed the trip. |
| nevertheless | tuy nhiên (nhấn mạnh hơn) | The task was hard. **Nevertheless**, we completed it. |

### Nguyên nhân nâng cao

| Từ nối | Nghĩa | Ví dụ |
|--------|-------|-------|
| since | vì, do (= because) | **Since** I was tired, I went to bed early. |
| due to | do, vì (+ danh từ) | The match was cancelled **due to** bad weather. |
| as a result of | kết quả là (+ danh từ) | **As a result of** pollution, many species are at risk. |

### Kết quả nâng cao

| Từ nối | Nghĩa | Ví dụ |
|--------|-------|-------|
| therefore | do đó | The weather was terrible; **therefore**, we stayed home. |
| consequently | hậu quả là | He missed many classes; **consequently**, he failed. |
| as a result | kết quả là (+ mệnh đề) | I practised every day. **As a result**, I improved. |

### Ví dụ nâng cao

| Từ nối | Nghĩa | Ví dụ |
|--------|-------|-------|
| for instance | ví dụ như (= for example) | Many people exercise outdoors. **For instance**, they run in the park. |
| to illustrate | để minh họa | **To illustrate**, a student who studies daily gets better grades. |

</TierContent>
```

- [ ] **Step 2: Run build**

```bash
cd vstep-web && npm run build 2>&1 | tail -20
```

- [ ] **Step 3: Commit**

```bash
cd vstep-web && git add src/content/docs/foundation/linking-words.mdx && git commit -m "feat: add linking words page with basic and advanced tiers"
```

---

## Task 4: Foundation page — Cấu trúc câu (sentence-patterns.mdx)

**Files:**
- Modify: `src/content/docs/foundation/sentence-patterns.mdx`

Source material: `cau-truc-van-nang.md` (14 patterns total). Split into 6 Cơ bản + 8 Nâng cao.

- [ ] **Step 1: Write sentence-patterns.mdx**

```mdx
---
title: Cấu trúc câu vạn năng
description: 14 cấu trúc câu áp dụng được cho mọi đề Speaking và Writing VSTEP B1
---

import TierContent from '@components/TierContent';

Những cấu trúc này **áp dụng được cho mọi chủ đề** — không cần sáng tạo, chỉ cần lắp từ vựng phù hợp vào là ra câu hoàn chỉnh.

:::tip[Cách dùng hiệu quả]
Học thuộc 6 cấu trúc Cơ bản → luyện ghép với từ vựng theo chủ đề → dùng trong bài nói và bài viết.
:::

---

## Cơ bản — 6 cấu trúc phải biết

### 1. It makes me / helps me + V

**Nghĩa:** Nó khiến tôi / giúp tôi làm gì

| Ví dụ |
|-------|
| Listening to music **makes me relax** after a long day. |
| Exercise **helps me stay** healthy and energetic. |
| Reading **helps me improve** my vocabulary. |

---

### 2. It is a good / effective way to + V

**Nghĩa:** Đây là một cách tốt để làm gì

| Ví dụ |
|-------|
| Reading books **is an effective way to** improve your English. |
| Exercising every day **is a good way to** keep fit. |
| Cooking at home **is a great way to** save money. |

---

### 3. I find it + adj + to + V

**Nghĩa:** Tôi thấy thật (như thế nào) để làm gì

| Ví dụ |
|-------|
| **I find it easy to** communicate with people online. |
| **I find it relaxing to** go for a walk in the evening. |
| **I find it difficult to** concentrate when it is noisy. |

---

### 4. It is + adj + for sb + to + V

**Nghĩa:** Thật (như thế nào) cho ai đó để làm gì

| Ví dụ |
|-------|
| **It is important for students to** manage their time well. |
| **It is convenient for me to** shop online. |
| **It is difficult for older people to** learn new technology. |

---

### 5. Thanks to A, I can...

**Nghĩa:** Nhờ có A, tôi có thể...

| Ví dụ |
|-------|
| **Thanks to** the internet, **I can** access information anytime. |
| **Thanks to** my parents' support, **I can** focus on my studies. |
| **Thanks to** public transport, **I can** commute without a car. |

---

### 6. The thing I like most about... is...

**Nghĩa:** Điều tôi thích nhất về ... là ...

| Ví dụ |
|-------|
| **The thing I like most about** my hometown **is** that it is very peaceful. |
| **The thing I like most about** travelling **is** discovering new cultures. |
| **The thing I like most about** my job **is** working with friendly colleagues. |

---

<TierContent client:load title="🔼 Nâng cao — 8 cấu trúc bổ sung">

### 7. S + allows me/sb + to + V

**Nghĩa:** Cho phép tôi/ai đó làm gì

| Ví dụ |
|-------|
| Working from home **allows me to** save time on commuting. |
| Technology **allows students to** learn at their own pace. |

---

### 8. It takes + time/effort/money + to + V

**Nghĩa:** Tốn thời gian / công sức / tiền để làm gì

| Ví dụ |
|-------|
| **It takes a lot of effort to** learn a new language. |
| **It takes time to** build good habits. |
| **It takes money to** travel abroad. |

---

### 9. S + encourage/enable + sb + to + V

**Nghĩa:** Khuyến khích / giúp cho ai đó làm gì

| Ví dụ |
|-------|
| My parents always **encourage me to** follow my dreams. |
| Technology **enables students to** study anywhere. |
| Good teachers **encourage students to** think creatively. |

---

### 10. Provide sb with sth / Provide sth for sb

**Nghĩa:** Cung cấp cho ai cái gì

| Ví dụ |
|-------|
| Universities **provide students with** many learning opportunities. |
| The government **provides** free education **for** children. |

---

### 11. Prevent sb/sth from + V-ing

**Nghĩa:** Ngăn ai/cái gì làm việc gì

| Ví dụ |
|-------|
| Heavy rain **prevented us from** going on the picnic. |
| A healthy diet can **prevent** people **from** getting sick. |

---

### 12. Play an important role in + N/V-ing

**Nghĩa:** Đóng vai trò quan trọng trong

| Ví dụ |
|-------|
| Education **plays an important role in** shaping a person's future. |
| Technology **plays a crucial role in** modern communication. |

---

### 13. S + equip sb with sth

**Nghĩa:** Trang bị cho ai kỹ năng/kiến thức gì

| Ví dụ |
|-------|
| University **equips students with** the skills they need for work. |
| This course **equips you with** knowledge about the exam format. |

---

### 14. The + adj + aspect of... is...

**Nghĩa:** Khía cạnh (như thế nào) của ... là ...

| Ví dụ |
|-------|
| **The most important aspect of** learning English **is** consistent practice. |
| **The negative aspect of** social media **is** wasting time. |

</TierContent>
```

- [ ] **Step 2: Run build**

```bash
cd vstep-web && npm run build 2>&1 | tail -20
```

- [ ] **Step 3: Commit**

```bash
cd vstep-web && git add src/content/docs/foundation/sentence-patterns.mdx && git commit -m "feat: add sentence patterns page with 6 basic + 8 advanced structures"
```

---

## Task 5: Foundation page — Nâng cấp câu (sentence-upgrade.mdx)

**Files:**
- Modify: `src/content/docs/foundation/sentence-upgrade.mdx`

Source material: `bien-cau-don-thanh-cau-ghep.md`. Technique: transform simple sentences → compound/complex. Two tiers.

- [ ] **Step 1: Write sentence-upgrade.mdx**

```mdx
---
title: Nâng cấp câu
description: Biến câu đơn thành câu ghép/phức để tăng điểm Grammar VSTEP B1
---

import TierContent from '@components/TierContent';

Câu đơn ngắn không bị trừ điểm, nhưng dùng câu ghép/phức đúng cách sẽ **tăng điểm Grammar** và **Coherence** đáng kể.

:::tip[Nguyên tắc đơn giản]
Không cần dùng cấu trúc phức tạp. Chỉ cần biến **1 câu đơn → 1 câu ghép/phức** đơn giản là đã tăng điểm rồi.
:::

---

## Cơ bản — Đủ để đạt B1

### 1. Dùng từ nối đơn giản: and, but, so, or

Ghép 2 câu đơn lại bằng từ nối.

| Câu đơn 1 | Từ nối | Câu đơn 2 | Kết quả |
|-----------|--------|-----------|---------|
| I like reading. | **and** | I like cooking. | I like reading **and** cooking. |
| I wanted to go out. | **but** | It rained heavily. | I wanted to go out, **but** it rained heavily. |
| I studied hard. | **so** | I passed the exam. | I studied hard, **so** I passed the exam. |
| You can call me. | **or** | You can send a message. | You can call me **or** send a message. |

---

### 2. Câu điều kiện Loại 1: If + hiện tại, will + V

Dùng khi nói về điều **có thể xảy ra** trong tương lai.

**Cấu trúc:** If + S + V (hiện tại đơn), S + will + V

| Câu đơn | → Câu điều kiện |
|---------|----------------|
| People shop online. They save money. | **If** people shop online, they **will** save money. |
| You exercise regularly. You stay healthy. | **If** you exercise regularly, you **will** stay healthy. |
| It rains. We stay at home. | **If** it rains, we **will** stay at home. |

---

### 3. Mệnh đề thời gian: when, before, after

Thêm mệnh đề thời gian vào đầu hoặc cuối câu.

| Câu đơn | → Câu phức |
|---------|-----------|
| I do my homework. Then I watch TV. | I do my homework **before** I watch TV. |
| I finished eating. Then I washed the dishes. | **After** I finished eating, I washed the dishes. |
| I get home. I always check my phone. | **When** I get home, I always check my phone. |

---

<TierContent client:load title="🔼 Nâng cao — Dùng thêm để điểm cao hơn">

### 4. Đại từ quan hệ: who, which, that

Dùng để ghép 2 câu, trong đó câu 2 **bổ nghĩa** cho một danh từ.

| Câu 1 | Câu 2 | Câu ghép |
|-------|-------|---------|
| I have a friend. She speaks 3 languages. | I have a friend **who** speaks 3 languages. |
| This is the book. I told you about it. | This is the book **that** I told you about. |
| My city has a bridge. It is 400 years old. | My city has a bridge **which** is 400 years old. |

**Quy tắc:**
- **who** → cho người
- **which** → cho vật / sự việc
- **that** → cho người hoặc vật (thông dụng hơn trong văn nói)

---

### 5. Câu điều kiện Loại 2: If + V2, would + V

Dùng khi nói về điều **không có thật** hoặc **khó xảy ra** ở hiện tại.

**Cấu trúc:** If + S + V2/ed, S + would + V

| Ví dụ |
|-------|
| **If** I **were** rich, I **would travel** around the world. |
| **If** I **had** more free time, I **would learn** the guitar. |
| **If** people **used** public transport more, there **would be** less pollution. |

:::caution[Lưu ý]
Dùng **were** (không phải "was") cho mọi chủ ngữ trong câu điều kiện loại 2 (đặc biệt là "If I were...").
:::

---

### 6. Câu điều kiện Loại 3: If + had V3, would have + V3

Dùng khi nói về điều **đã không xảy ra** trong quá khứ.

**Cấu trúc:** If + S + had + V3, S + would have + V3

| Ví dụ |
|-------|
| **If** I **had studied** harder, I **would have passed** the exam. |
| **If** she **had left** earlier, she **would not have missed** the bus. |

:::note[Ghi nhớ]
Câu điều kiện loại 3 thường dùng trong Writing Task 2. Không cần dùng trong Speaking vì phức tạp và dễ sai.
:::

</TierContent>
```

- [ ] **Step 2: Run build**

```bash
cd vstep-web && npm run build 2>&1 | tail -20
```

- [ ] **Step 3: Commit**

```bash
cd vstep-web && git add src/content/docs/foundation/sentence-upgrade.mdx && git commit -m "feat: add sentence upgrade page with simple-to-complex techniques"
```

---

## Task 6: Foundation page — Lỗi thường gặp (common-mistakes.mdx)

**Files:**
- Modify: `src/content/docs/foundation/common-mistakes.mdx`

Common mistakes Vietnamese students make when writing/speaking English. Format: ❌ Sai → ✅ Đúng → Giải thích ngắn.

- [ ] **Step 1: Write common-mistakes.mdx**

```mdx
---
title: Lỗi thường gặp của người Việt
description: 7 lỗi ngữ pháp thường gặp nhất và cách tránh — dành cho thí sinh VSTEP B1
---

import TierContent from '@components/TierContent';

Đây là những lỗi **cực kỳ phổ biến** của học sinh Việt Nam khi viết và nói tiếng Anh. Tránh được những lỗi này → không bị trừ điểm Grammar.

---

## Lỗi 1: Quên mạo từ a / an / the

Tiếng Việt không có mạo từ → người Việt hay bỏ qua.

| ❌ Sai | ✅ Đúng | Ghi chú |
|--------|---------|---------|
| I have dog. | I have **a** dog. | Dùng **a/an** lần đầu nhắc đến |
| She is student. | She is **a** student. | Nghề nghiệp → dùng **a** |
| I went to market. | I went to **the** market. | Nơi cụ thể → dùng **the** |
| Sun is hot. | **The** sun is hot. | Thứ duy nhất trên đời → **the** |

**Quy tắc đơn giản:**
- Lần đầu nhắc → dùng **a/an**
- Lần tiếp theo hoặc đã biết rõ → dùng **the**
- Nói chung chung (số nhiều) → không cần mạo từ: *Dogs are loyal.*

---

## Lỗi 2: Quên thêm -s/-es cho động từ ngôi thứ 3 số ít

Tiếng Việt không chia động từ → người Việt hay quên.

| ❌ Sai | ✅ Đúng |
|--------|---------|
| She like music. | She **likes** music. |
| He go to school every day. | He **goes** to school every day. |
| My mother cook every evening. | My mother **cooks** every evening. |

**Quy tắc:** Chủ ngữ là **he / she / it** + động từ hiện tại đơn → thêm **-s** hoặc **-es**.

---

## Lỗi 3: Dùng sai thì (tense)

Tiếng Việt không chia thì → dễ dùng sai.

| ❌ Sai | ✅ Đúng | Tình huống |
|--------|---------|-----------|
| Yesterday I go to school. | Yesterday I **went** to school. | Quá khứ → V2 |
| I am study now. | I **am studying** now. | Đang xảy ra → am/is/are + V-ing |
| I have finish my homework. | I **have finished** my homework. | Vừa xong → have/has + V3 |

**Gợi nhớ:**
- Có từ **yesterday, last week, ago** → dùng **quá khứ đơn** (V2)
- Có từ **now, at the moment** → dùng **hiện tại tiếp diễn** (am/is/are + V-ing)
- Có từ **just, already, yet** → dùng **hiện tại hoàn thành** (have/has + V3)

---

## Lỗi 4: Sai giới từ (preposition)

Người Việt thường dịch thẳng từ tiếng Việt → sai giới từ.

| ❌ Sai | ✅ Đúng | Ghi chú |
|--------|---------|---------|
| I am good **in** English. | I am good **at** English. | good at sth |
| She is interested **with** reading. | She is interested **in** reading. | interested in sth |
| I arrived **to** school late. | I arrived **at** school late. | arrive at (nơi nhỏ) |
| I depend **from** my parents. | I depend **on** my parents. | depend on sb |
| Listen **me**. | Listen **to** me. | listen to sb |

---

## Lỗi 5: Chủ ngữ - Động từ không khớp số

| ❌ Sai | ✅ Đúng |
|--------|---------|
| There **is** many reasons. | There **are** many reasons. |
| The news **are** shocking. | The news **is** shocking. (news là số ít) |
| My family **are** happy. | My family **is** happy. (family là số ít trong tiếng Anh Mỹ) |
| Everyone **are** invited. | Everyone **is** invited. |

---

## Lỗi 6: Dịch từng từ từ tiếng Việt (literal translation)

Dịch theo nghĩa đen từ tiếng Việt → câu nghe rất lạ.

| ❌ Dịch thẳng | ✅ Tiếng Anh tự nhiên | Gốc tiếng Việt |
|--------------|----------------------|----------------|
| I very like it. | I like it **very much**. | "Tôi rất thích nó" |
| How about your age? | How old are you? | "Tuổi của bạn thế nào?" |
| I don't know how to say. | I don't know what to say. | "Tôi không biết nói gì" |
| Can you say again? | Can you **say that again** / **repeat that**? | "Bạn có thể nói lại không?" |

---

## Lỗi 7: Viết câu quá dài, không có dấu phẩy / dấu câu

Câu "chạy" dài (run-on sentence) → bị trừ điểm Organisation.

| ❌ Sai | ✅ Đúng |
|--------|---------|
| I like travelling because I can explore new places and learn about different cultures and meet new people and try local food. | I like travelling because I can explore new places. I also enjoy learning about different cultures, meeting new people, and trying local food. |

**Quy tắc:** Mỗi câu nên có **1-2 ý chính**. Dùng dấu phẩy và từ nối đúng chỗ.

---

<TierContent client:load title="🔼 Nâng cao — Thêm một số lỗi ít gặp hơn">

### Lỗi 8: Dùng sai so sánh

| ❌ Sai | ✅ Đúng |
|--------|---------|
| This is more better. | This is **better**. (không thêm "more" vào so sánh hơn 1 âm tiết) |
| She is the most tallest. | She is the **tallest**. |
| This car is more cheap. | This car is **cheaper**. |

### Lỗi 9: Quên thêm -ing sau giới từ

| ❌ Sai | ✅ Đúng |
|--------|---------|
| I am interested in learn English. | I am interested in **learning** English. |
| Before go to bed, I read. | Before **going** to bed, I read. |
| She is good at cook. | She is good at **cooking**. |

### Lỗi 10: Dùng "make" và "do" nhầm nhau

| make + | do + |
|--------|------|
| make a mistake | do homework |
| make a decision | do exercise |
| make a suggestion | do the dishes |
| make an effort | do research |
| make friends | do your best |

</TierContent>
```

- [ ] **Step 2: Run build**

```bash
cd vstep-web && npm run build 2>&1 | tail -20
```

- [ ] **Step 3: Commit**

```bash
cd vstep-web && git add src/content/docs/foundation/common-mistakes.mdx && git commit -m "feat: add common mistakes page with 7 Vietnamese learner errors"
```

---

## Final verification

- [ ] **Run full build one last time**

```bash
cd vstep-web && npm run build 2>&1 | tail -30
```

Expected: All 31+ pages build successfully. Foundation section has 5 real pages.
