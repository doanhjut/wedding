# Invitation Opening and Typography Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Kéo dài phần mở thiệp để người xem kịp đọc, giữ các tiêu đề quan trọng trên một dòng, và sửa đúng thông tin lễ vu quy cùng kiểu chữ số giờ.

**Architecture:** Giữ nguyên reducer ba trạng thái hiện tại và điều chỉnh choreography bằng CSS, đồng thời đồng bộ fallback JavaScript với thời lượng mới. Dữ liệu lễ vu quy được truy xuất theo `id` thay vì chỉ số mảng để không phụ thuộc thứ tự.

**Tech Stack:** React 18, CSS animations, Vitest, Vite 4.

## Global Constraints

- Tổng nhịp mở thiệp khoảng 4 giây, trong đó thiệp được giữ rõ khoảng 1,5 giây.
- “Minh Trang” và “Thông tin đám cưới” phải nằm trên một dòng ở desktop và mobile.
- Dòng sự kiện đầu là “Lễ vu quy · 25/10/2026”.
- Không thay đổi dữ liệu, hình ảnh, màu sắc hoặc bố cục ngoài phạm vi.
- Không có bước commit vì thư mục dự án hiện không phải Git repository.

---

### Task 1: Choreography mở thiệp và tên một dòng

**Files:**
- Modify: `src/sections/EnvelopeHero.test.jsx`
- Modify: `src/sections/EnvelopeHero.jsx`
- Modify: `src/envelopeState.test.js`
- Modify: `src/WeddingExperience.jsx`
- Modify: `src/scroll-wedding.css`

**Interfaces:**
- Produces: `OPENING_FALLBACK_MS` bằng `4300`.
- Produces: `isHeroRevealAnimation(event)` chỉ trả về `true` cho animation `reveal-hero` trên chính phần tử hero.

- [ ] **Step 1: Viết kiểm thử thất bại**

Thêm kỳ vọng tên có class `hero-name-line`, kiểm tra helper từ chối animation con, và kiểm tra `OPENING_FALLBACK_MS === 4300`.

- [ ] **Step 2: Chạy kiểm thử để xác nhận RED**

Run: `npm test -- src/sections/EnvelopeHero.test.jsx src/envelopeState.test.js`

Expected: FAIL vì class, helper và hằng số chưa tồn tại.

- [ ] **Step 3: Viết implementation tối thiểu**

Xuất `OPENING_FALLBACK_MS = 4300`, dùng hằng số trong fallback, lọc `onAnimationEnd`, thêm class vào tên “Minh Trang”, và đổi các mốc animation để tấm thiệp trượt lên, giữ rồi mới mờ.

- [ ] **Step 4: Chạy kiểm thử để xác nhận GREEN**

Run: `npm test -- src/sections/EnvelopeHero.test.jsx src/envelopeState.test.js`

Expected: 2 test files pass.

### Task 2: Nội dung lễ vu quy và typography

**Files:**
- Modify: `src/sections/Sections.test.jsx`
- Modify: `src/sections/InvitationSection.jsx`
- Modify: `src/scroll-wedding.css`

**Interfaces:**
- Consumes: `events` từ `src/data.js`.
- Produces: biến cục bộ `vuQuyEvent` và `thanhHonEvent` được tìm theo `id`.

- [ ] **Step 1: Viết kiểm thử thất bại**

Yêu cầu markup chứa chính xác `Lễ vu quy · 25/10/2026`, không còn `Tiệc nhà gái · 24/10/2026`, và có class `invite-time`.

- [ ] **Step 2: Chạy kiểm thử để xác nhận RED**

Run: `npm test -- src/sections/Sections.test.jsx`

Expected: FAIL vì thiệp vẫn dùng `events[0]` và chưa có class giờ.

- [ ] **Step 3: Viết implementation tối thiểu**

Tìm sự kiện theo `id`, render `kind` và `date`, gắn `invite-time`; thêm CSS cho tiêu đề không xuống dòng và giờ dùng `"Be Vietnam Pro", sans-serif` với `font-variant-numeric: tabular-nums`.

- [ ] **Step 4: Chạy kiểm thử để xác nhận GREEN**

Run: `npm test -- src/sections/Sections.test.jsx`

Expected: test file pass.

### Task 3: Xác minh toàn bộ và responsive

**Files:**
- Verify: toàn bộ `src`

- [ ] **Step 1: Chạy toàn bộ test**

Run: `npm test`

Expected: tất cả test pass, không có failure.

- [ ] **Step 2: Build production**

Run: `npm run build`

Expected: Vite build exit code 0.

- [ ] **Step 3: Kiểm tra trình duyệt**

Mở trang ở desktop và viewport 390×844; xác nhận animation kéo dài khoảng 4 giây, hai chuỗi yêu cầu không xuống dòng, nội dung lễ vu quy đúng và `scrollWidth === clientWidth`.
