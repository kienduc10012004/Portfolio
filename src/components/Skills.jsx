import { skillsData } from '../data'
import Reveal from './Reveal'

const accents = ['keyword', 'func', 'string']
const accentClasses = {
  keyword: 'border-keyword/30 bg-keyword/10 text-keyword',
  func: 'border-func/30 bg-func/10 text-func',
  string: 'border-string/30 bg-string/10 text-string',
}

export default function Skills() {
  return (
    <section id="skills" className="bg-bg px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-string">Năng lực</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Kỹ năng và công nghệ</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">
            Những công nghệ mình đã sử dụng trong quá trình học tập và xây dựng dự án.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillsData.hard.map((group, index) => {
            const accent = accents[index % accents.length]
            return (
              <Reveal key={group.name} delay={index * 100} className="h-full rounded-2xl border border-line bg-surface p-6 sm:p-7">
                <div className={`inline-flex rounded-lg border px-3 py-1.5 text-sm font-semibold ${accentClasses[accent]}`}>
                  {group.name}
                </div>
                <p className="mt-4 text-sm leading-6 text-muted">{group.level}</p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.techs.map((tech) => (
                    <span key={tech} className="rounded-lg border border-line bg-surface2 px-3 py-2 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={250} className="mt-8 rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="sm:w-52">
              <h3 className="text-xl font-bold text-ink">Kỹ năng mềm</h3>
              <p className="mt-2 text-sm text-muted">Nền tảng để phối hợp hiệu quả trong đội nhóm.</p>
            </div>
            <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {skillsData.soft.map((skill) => (
                <div key={skill} className="flex items-center gap-3 rounded-lg bg-surface2 px-4 py-3 text-sm text-ink">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-comment" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
