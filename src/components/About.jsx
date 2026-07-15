import { profile } from '../data'
import Reveal from './Reveal'

const highlights = [
  { value: 'Sinh viên năm cuối', label: 'Công nghệ Thông tin' },
  { value: 'Front-end', label: 'Định hướng chuyên môn' },
  { value: 'Responsive UI', label: 'Trải nghiệm đa thiết bị' },
  { value: 'Intern', label: 'Cơ hội đang tìm kiếm' },
]

export default function About() {
  return (
    <section id="about" className="bg-surface/40 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-func">Giới thiệu</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Một chút về bản thân</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">
            Không chỉ viết code, mình chú trọng tạo ra sản phẩm dễ dùng và mang lại giá trị thực tế.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={100} className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
            <span className="inline-block rounded-full bg-keyword/10 px-3 py-1 text-sm font-medium text-keyword">
              {profile.status}
            </span>
            <h3 className="mt-5 text-2xl font-bold text-ink">Mục tiêu nghề nghiệp</h3>
            <p className="mt-4 leading-8 text-muted">
              Mình mong muốn được tham gia vào một đội ngũ chuyên nghiệp, vận dụng kiến thức Front-end vào
              sản phẩm thực tế và học hỏi quy trình phát triển phần mềm bài bản.
            </p>
            <p className="mt-4 leading-8 text-muted">
              Mục tiêu dài hạn của mình là trở thành một Full-stack Developer có khả năng xây dựng các ứng
              dụng web ổn định, dễ mở rộng và đem lại trải nghiệm tốt cho người dùng.
            </p>
          </Reveal>

          <Reveal delay={180} className="rounded-2xl border border-line bg-bg p-7 sm:p-9">
            <h3 className="text-2xl font-bold text-ink">Giới thiệu bản thân</h3>
            <div className="mt-5 space-y-4">
              {profile.bio.split('\n').map((paragraph) => (
                <p key={paragraph} className="leading-8 text-muted">{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal key={item.label} delay={220 + index * 60} className="rounded-xl border border-line bg-surface p-5 text-center">
              <p className="font-semibold text-string">{item.value}</p>
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
