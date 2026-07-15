import { useEffect, useState } from 'react'
import { profile } from '../data'
import { GithubIcon, MailIcon, PhoneIcon } from './Icons'

const intro = 'Mình xây dựng các website responsive, thân thiện và có trải nghiệm mượt mà bằng ReactJS, JavaScript và Tailwind CSS.'

function useTypingText(text, speed = 32) {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(text)
      return
    }

    const timeout = window.setTimeout(
      () => setTyped(typed.length >= text.length ? '' : text.slice(0, typed.length + 1)),
      typed.length >= text.length ? 3000 : speed,
    )
    return () => window.clearTimeout(timeout)
  }, [text, typed, speed])

  return typed
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  // Version the public URL so browsers do not reuse a previously cached 404.
  const cvUrl = `${import.meta.env.BASE_URL}${profile.cvFile}?v=20260715-3`
  const avatarUrl = `${import.meta.env.BASE_URL}${profile.avatar}`
  const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent('Liên hệ từ Portfolio của Lê Đức Kiên')}`
  const typedIntro = useTypingText(intro)

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-bg px-6 pb-20 pt-36 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-keyword/15 blur-3xl animate-floatSlow" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-func/10 blur-3xl animate-floatSlower" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(#e6edf3 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="hero-copy">
          <div className="inline-flex items-center gap-2 rounded-full border border-comment/40 bg-comment/10 px-4 py-2 text-sm text-comment">
            <span className="h-2 w-2 rounded-full bg-comment shadow-[0_0_12px_currentColor]" />
            Sẵn sàng cho cơ hội Intern Front End
          </div>

          <p className="mt-8 text-lg font-medium text-func">Xin chào, mình là</p>
          <h1 className="mt-3 text-5xl font-extrabold leading-tight tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-keyword sm:text-3xl">Front-end Developer</h2>
          <p aria-label={intro} className="mt-6 min-h-[6rem] max-w-2xl text-base leading-8 text-muted sm:min-h-[4rem] sm:text-lg">
            <span aria-hidden="true">{typedIntro}</span>
            <span aria-hidden="true" className="typing-cursor ml-1 inline-block h-5 w-0.5 translate-y-1 bg-func" />
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo('projects')}
              className="rounded-lg bg-accent px-6 py-3 font-semibold text-bg transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Xem dự án
            </button>
            <a
              href={cvUrl}
              download="CV-Le-Duc-Kien.pdf"
              className="rounded-lg border border-func/60 bg-func/10 px-6 py-3 font-semibold text-func transition hover:-translate-y-0.5 hover:bg-func/20"
            >
              Tải CV
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="rounded-lg border border-line px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:border-keyword hover:text-keyword"
            >
              Liên hệ với mình
            </button>
          </div>
        </div>

        <aside className="hero-card rounded-2xl border border-line bg-surface/90 p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-8">
          <div className="avatar-frame mx-auto h-44 w-44 rounded-full bg-gradient-to-br from-keyword via-func to-accent p-1 shadow-xl shadow-keyword/20">
            <div className="h-full w-full overflow-hidden rounded-full bg-white">
              <img src={avatarUrl} alt={`Ảnh chân dung ${profile.name}`} className="h-full w-full object-cover object-top" />
            </div>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold text-ink">{profile.name}</h3>
            <p className="mt-1 text-sm text-accent">{profile.status}</p>
            <p className="mt-2 text-sm text-muted">{profile.location}</p>
          </div>

          <div className="mt-6 space-y-3 border-t border-line pt-6">
            <a href={emailUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted transition hover:text-string">
              <MailIcon className="h-5 w-5 shrink-0" />
              <span className="truncate">{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-muted transition hover:text-comment">
              <PhoneIcon className="h-5 w-5 shrink-0" />
              <span>{profile.phone}</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted transition hover:text-func">
              <GithubIcon className="h-5 w-5 shrink-0" />
              <span>@kienduc10012004</span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
