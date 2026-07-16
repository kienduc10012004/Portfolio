// ─────────────────────────────────────────────────────────────
// Sửa các thông tin bên dưới thành thông tin thật của bạn.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Lê Đức Kiên',
  roles: ['Front-end Developer', 'React Developer'],
  status: 'Ứng tuyển vị trí Intern Front End',
  location: 'TP. Hồ Chí Minh, Việt Nam',
  email: 'kienduc10012004@gmail.com',
  phone: '0358 974 178',
  github: 'https://github.com/kienduc10012004',
  linkedin: '',
  avatar: 'images/avatar.png',
  cvFile: 'CV-Intern Front End Dev-Le Duc Kien.pdf',
  bio: `Mình là sinh viên năm cuối ngành Công nghệ Thông tin tại Trường Đại học Công nghiệp TP. Hồ Chí Minh, định hướng phát triển chuyên sâu về Front-end.
Mình yêu thích việc xây dựng những giao diện responsive, dễ sử dụng và có hiệu năng tốt với ReactJS, NextJS, TypeScript, JavaScript và Tailwind CSS.
Qua các dự án học tập, mình cũng có cơ hội làm việc với Node.js, ExpressJS, MongoDB và các công cụ phát triển hiện đại.
Mình đang tìm kiếm vị trí Intern Front End để học hỏi trong môi trường chuyên nghiệp, đóng góp vào sản phẩm thực tế và tiếp tục hoàn thiện kỹ năng.`,
}

export const projectsData = [
  {
    title: 'SHOES STORE',
    url: 'https://shoes-store-react-js.vercel.app/',
    tech: ['ReactJS', 'TailwindCSS'],
    desc: 'Shop bán giày, responsive, lọc, sắp xếp sản phẩm.',
    role: 'Thực hiện phần user.',
    cover: 'images/img-projects/img-shoes-store/avt-shoes-store.png',
    images: [
      'images/img-projects/img-shoes-store/Screenshot 2026-07-15 173457.png',
      'images/img-projects/img-shoes-store/Screenshot 2026-07-15 173530.png',
      'images/img-projects/img-shoes-store/Screenshot 2026-07-15 173559.png',
    ],
  },
  {
    title: 'PHONE STORE',
    url: 'https://phone-store-js-html-tailwindcss.vercel.app/',
    tech: ['HTML', 'Tailwind', 'JavaScript', 'MockAPI'],
    desc: 'Shop điện thoại có trang quản trị, responsive, lọc, sắp xếp.',
    role: 'Thực hiện phần admin.',
    cover: 'images/img-projects/img-phone-store/avt-phone-store.png',
    images: [
      'images/img-projects/img-phone-store/image.png',
      'images/img-projects/img-phone-store/Screenshot 2026-07-15 173207.png',
      'images/img-projects/img-phone-store/Screenshot 2026-07-15 173253.png',
    ],
  },
  {
    title: 'MOVIE BOOKING',
    url: 'https://capstone-movie-ten.vercel.app/',
    tech: ['ReactJS', 'TailwindCSS'],
    desc: 'Trang web đặt vé xem phim.',
    role: 'Thực hiện phần admin.',
    cover: 'images/img-projects/img-movie-booking/avt-movie-booking.png',
    images: [
      'images/img-projects/img-movie-booking/image.png',
      'images/img-projects/img-movie-booking/Screenshot 2026-07-15 174003.png',
      'images/img-projects/img-movie-booking/Screenshot 2026-07-15 174330.png',
    ],
  },
  {
    title: 'SOLID',
    url: 'https://solid-html-js-tailwindcss-hbgx.vercel.app/',
    tech: ['HTML', 'TailwindCSS', 'Slick', 'Back-to-top'],
    desc: "Xây dựng giao diện responsive, tập trung vào phần 'integrations' và các trang con.",
    role: "Thực hiện phần 'integrations' đến hết, các trang Blog, Docs, Support.",
    cover: 'images/img-projects/img-solid/avt-solid.png',
    images: [
      'images/img-projects/img-solid/Screenshot 2026-07-15 172822.png',
      'images/img-projects/img-solid/Screenshot 2026-07-15 172913.png',
      'images/img-projects/img-solid/Screenshot 2026-07-15 173018.png',
    ],
  },
  {
    title: 'SAMAR',
    url: 'https://samar-html-css.vercel.app/',
    tech: ['HTML', 'CSS', 'Slick', 'CountUp'],
    desc: 'Xây dựng giao diện responsive, sử dụng thư viện hỗ trợ.',
    role: 'Thực hiện cá nhân.',
    cover: 'images/img-projects/img-samar/avt-samar.png',
    images: [
      'images/img-projects/img-samar/Screenshot 2026-07-15 172533.png',
      'images/img-projects/img-samar/Screenshot 2026-07-15 172631.png',
      'images/img-projects/img-samar/Screenshot 2026-07-15 172705.png',
    ],
  },
]

export const skillsData = {
  hard: [
    { name: 'Front End', level: 'sử dụng thành thạo', techs: ['HTML', 'CSS3', 'JavaScript (ES6)', 'ReactJS', 'TailwindCSS'] },
    { name: 'Back End', level: 'có tiếp xúc và sử dụng được', techs: ['NodeJS', 'ExpressJS', 'MongoDB', 'Java'] },
    { name: 'Công cụ', level: 'thành thạo thao tác', techs: ['GitHub', 'VS Code', 'Eclipse', 'Figma'] },
  ],
  soft: ['Giao tiếp', 'Làm việc nhóm', 'Đọc tài liệu tiếng Anh', 'Đọc hiểu code'],
}

// thứ tự các tab điều hướng, dùng bởi Navbar và IntersectionObserver trong App.jsx
export const sections = [
  { id: 'hero', label: 'Trang chủ', color: 'keyword' },
  { id: 'about', label: 'Giới thiệu', color: 'func' },
  { id: 'skills', label: 'Kỹ năng', color: 'string' },
  { id: 'projects', label: 'Dự án', color: 'accent' },
  { id: 'contact', label: 'Liên hệ', color: 'comment' },
]
