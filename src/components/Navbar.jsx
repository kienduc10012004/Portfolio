import { sections } from '../data'

const colorMap = {
  keyword: 'text-keyword border-keyword',
  func: 'text-func border-func',
  string: 'text-string border-string',
  accent: 'text-accent border-accent',
  comment: 'text-comment border-comment',
}

export default function Navbar({ active }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur border-b border-line">
      {/* fake window chrome */}
      <div className="flex items-center gap-2 px-4 pt-2.5 pb-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-xs text-muted font-mono hidden sm:inline">Lê Đức Kiên — Front-end Portfolio</span>
      </div>

      {/* tabs = navigation */}
      <nav className="flex overflow-x-auto no-scrollbar border-t border-line">
        {sections.map((s) => {
          const isActive = active === s.id
          const colorClasses = colorMap[s.color]
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`group relative flex items-center gap-2 whitespace-nowrap px-4 py-2.5 font-mono text-xs sm:text-sm border-r border-line transition-colors
                ${isActive ? `bg-bg ${colorClasses.split(' ')[0]}` : 'text-muted hover:text-ink bg-surface2/40'}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-current' : 'bg-line group-hover:bg-muted'}`} />
              {s.label}
              {isActive && (
                <span className={`absolute left-0 right-0 -bottom-px h-0.5 ${colorClasses.split(' ')[1]} bg-current`} />
              )}
            </button>
          )
        })}
      </nav>
    </header>
  )
}
