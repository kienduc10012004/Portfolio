import { profile } from '../data'
import Reveal from './Reveal'
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './Icons'

export default function Contact() {
  const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent('Liên hệ từ Portfolio của Lê Đức Kiên')}`
  const links = [
    { label: 'Email', value: profile.email, href: emailUrl, Icon: MailIcon, color: 'hover:border-string hover:text-string' },
    { label: 'Điện thoại - zalo', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, Icon: PhoneIcon, color: 'hover:border-comment hover:text-comment' },
    { label: 'GitHub', value: profile.github.replace('https://', ''), href: profile.github, Icon: GithubIcon, color: 'hover:border-func hover:text-func' },
    profile.linkedin
      ? { label: 'LinkedIn', value: profile.linkedin.replace('https://', ''), href: profile.linkedin, Icon: LinkedinIcon, color: 'hover:border-keyword hover:text-keyword' }
      : null,
  ].filter(Boolean)

  return (
    <section id="contact" className="bg-surface/40 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-comment">Kết nối</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Thông tin liên hệ</h2>
          <p className="mt-4 text-muted">
            Mình luôn sẵn sàng lắng nghe cơ hội mới. Nhắn cho mình qua một trong các kênh dưới đây nhé!
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 grid gap-4 md:grid-cols-3">
          {links.map(({ label, value, href, Icon, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className={`flex items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4 text-left transition ${color} hover:-translate-y-0.5`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface2">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] uppercase tracking-wider text-muted">{label}</span>
                <span className="block truncate text-sm text-ink">{value}</span>
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={220}>
          <a
            href={emailUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-bg transition hover:brightness-110 hover:-translate-y-0.5"
          >
            Gửi email
          </a>
        </Reveal>
      </div>
    </section>
  )
}
