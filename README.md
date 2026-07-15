# Portfolio — Front-end Developer

Portfolio cá nhân xây dựng bằng **ReactJS + Vite + TailwindCSS**, theo chủ đề "code editor" (giao diện lấy cảm hứng từ trình soạn thảo mã như VS Code) — phù hợp cho hồ sơ ứng tuyển Front-end Developer.

## Cách chạy dự án

```bash
npm install
npm run dev
```

Mở trình duyệt tại địa chỉ được in ra (mặc định `http://localhost:5173`).

Build bản production:

```bash
npm run build
npm run preview
```

## Tùy chỉnh nội dung

Toàn bộ thông tin cá nhân, danh sách dự án và kỹ năng nằm ở **một chỗ duy nhất**:

```
src/data.js
```

Sửa các trường sau cho đúng thông tin của bạn:

- `profile` — tên, chức danh, trạng thái tìm việc, email, số điện thoại, GitHub, LinkedIn, link tải CV.
- `projectsData` — danh sách dự án (đã có sẵn dữ liệu mẫu từ 5 dự án bạn cung cấp).
- `skillsData` — kỹ năng cứng / kỹ năng mềm.

## Cấu trúc thư mục

```
src/
  components/
    Navbar.jsx     -> thanh tab điều hướng (giống tab trình soạn thảo code)
    Hero.jsx        -> phần giới thiệu đầu trang, hiệu ứng gõ chữ (typewriter)
    About.jsx       -> giới thiệu bản thân dạng comment code
    Skills.jsx      -> kỹ năng dạng skills.json
    Projects.jsx    -> danh sách dự án dạng file card
    Contact.jsx     -> thông tin liên hệ
    Footer.jsx
    Icons.jsx       -> icon SVG (Github, LinkedIn, Mail, Phone...)
    Reveal.jsx      -> wrapper tạo hiệu ứng xuất hiện khi cuộn trang
  hooks/
    useReveal.js    -> hook IntersectionObserver dùng cho hiệu ứng cuộn
  data.js           -> toàn bộ nội dung (sửa ở đây)
  App.jsx           -> ghép các section lại, theo dõi tab đang active
  index.css         -> Tailwind + style tùy chỉnh (scrollbar, selection...)
tailwind.config.js  -> bảng màu & font tùy chỉnh (theme "code editor")
```

## Điểm nhấn thiết kế

- **Chủ đề "code editor"**: toàn bộ trang được trình bày như một cửa sổ VS Code — thanh tab ở trên cùng chính là menu điều hướng, mỗi section được "đặt tên file" tương ứng (`hero.jsx`, `about.js`, `skills.json`, `projects.jsx`, `contact.js`).
- **Bảng màu lấy cảm hứng từ syntax highlighting**: tím cho keyword, xanh cyan cho function/link, vàng amber cho string, xanh lá cho comment, cam san hô cho nút hành động chính.
- **Font**: JetBrains Mono (tiêu đề, mã) + Inter (nội dung phụ).
- **Hiệu ứng**: gõ chữ ở phần vai trò, xuất hiện dần khi cuộn trang, khối gradient trôi nhẹ ở nền, tab điều hướng tự active theo vị trí cuộn.
- Tôn trọng `prefers-reduced-motion` cho người dùng tắt hiệu ứng chuyển động.
