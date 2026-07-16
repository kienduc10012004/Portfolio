import { useEffect, useRef, useState } from 'react'
import { projectsData } from '../data'
import Reveal from './Reveal'
import { ChevronDownIcon, ExternalLinkIcon } from './Icons'

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`
const CARD_GAP = 28
const DRAG_ACTIVATION_DISTANCE = 10

export default function Projects() {
  const [preview, setPreview] = useState(null)
  const [current, setCurrent] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)
  const [slideStep, setSlideStep] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const dragStartRef = useRef(null)
  const dragOffsetRef = useRef(0)
  const animationFrameRef = useRef(null)
  const didDragRef = useRef(false)
  const interactionRef = useRef(false)

  const maxIndex = Math.max(0, projectsData.length - cardsPerView)
  const cardWidth = `calc((100% - ${(cardsPerView - 1) * CARD_GAP}px) / ${cardsPerView})`

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const measure = () => {
      const width = viewport.clientWidth
      const count = width >= 1024 ? 3 : width >= 640 ? 2 : 1
      setCardsPerView(count)
      setSlideStep((width - CARD_GAP * (count - 1)) / count + CARD_GAP)
      setCurrent((index) => Math.min(index, Math.max(0, projectsData.length - count)))
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(viewport)
    return () => observer.disconnect()
  }, [])

  useEffect(() => () => {
    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  useEffect(() => {
    if (isDragging || isHovered || preview || maxIndex === 0) return
    const timer = window.setInterval(() => {
      if (interactionRef.current) return
      setCurrent((index) => (index >= maxIndex ? 0 : index + 1))
    }, 4000)
    return () => window.clearInterval(timer)
  }, [current, isDragging, isHovered, preview, maxIndex])

  useEffect(() => {
    if (!preview) return
    const closeOnEscape = (event) => event.key === 'Escape' && setPreview(null)
    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = ''
    }
  }, [preview])

  const goPrevious = () => setCurrent((index) => (index === 0 ? maxIndex : index - 1))
  const goNext = () => setCurrent((index) => (index >= maxIndex ? 0 : index + 1))

  const handlePointerDown = (event) => {
    if (event.button !== 0) return
    dragStartRef.current = { x: event.clientX, y: event.clientY }
    dragOffsetRef.current = 0
    didDragRef.current = false
    interactionRef.current = true
  }

  const handlePointerMove = (event) => {
    if (dragStartRef.current === null) return
    const distance = event.clientX - dragStartRef.current.x
    const verticalDistance = event.clientY - dragStartRef.current.y

    if (!didDragRef.current && Math.abs(verticalDistance) > Math.abs(distance)) return

    if (Math.abs(distance) >= DRAG_ACTIVATION_DISTANCE && !didDragRef.current) {
      didDragRef.current = true
      event.currentTarget.setPointerCapture(event.pointerId)
      if (trackRef.current) trackRef.current.style.transition = 'none'
      setIsDragging(true)
    }

    if (didDragRef.current) {
      dragOffsetRef.current = distance
      if (animationFrameRef.current !== null) return

      animationFrameRef.current = window.requestAnimationFrame(() => {
        animationFrameRef.current = null
        if (!trackRef.current) return
        trackRef.current.style.transform = `translate3d(${-current * slideStep + dragOffsetRef.current}px, 0, 0)`
      })
    }
  }

  const finishDrag = (event) => {
    if (dragStartRef.current === null) return
    const distance = event.clientX - dragStartRef.current.x
    const threshold = Math.min(70, slideStep * 0.18)
    let targetIndex = current

    if (didDragRef.current && distance < -threshold) {
      targetIndex = Math.min(maxIndex, current + 1)
    }
    if (didDragRef.current && distance > threshold) {
      targetIndex = Math.max(0, current - 1)
    }

    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
    if (trackRef.current) {
      trackRef.current.style.transition = 'transform 480ms cubic-bezier(0.22, 1, 0.36, 1)'
      trackRef.current.style.transform = `translate3d(${-targetIndex * slideStep}px, 0, 0)`
    }

    dragStartRef.current = null
    interactionRef.current = false
    dragOffsetRef.current = 0
    setCurrent(targetIndex)
    setIsDragging(false)
    window.setTimeout(() => { didDragRef.current = false }, 0)
  }

  const preventClickAfterDrag = (event) => {
    if (!didDragRef.current) return
    event.preventDefault()
    event.stopPropagation()
  }

  const cancelIdleDrag = () => {
    if (dragStartRef.current === null || didDragRef.current) return
    dragStartRef.current = null
    interactionRef.current = false
  }

  const cancelDrag = () => {
    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
    dragStartRef.current = null
    interactionRef.current = false
    didDragRef.current = false
    dragOffsetRef.current = 0
    if (trackRef.current) {
      trackRef.current.style.transition = 'transform 480ms cubic-bezier(0.22, 1, 0.36, 1)'
      trackRef.current.style.transform = `translate3d(${-current * slideStep}px, 0, 0)`
    }
    setIsDragging(false)
  }

  return (
    <section id="projects" className="bg-surface/40 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Sản phẩm đã thực hiện</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Dự án nổi bật</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">
            Các dự án giúp mình rèn luyện tư duy giao diện, xử lý dữ liệu và xây dựng trải nghiệm responsive.
          </p>
        </Reveal>

        <Reveal delay={100} className="relative mt-12">
          <button
            type="button"
            onClick={goPrevious}
            className="absolute -left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-xl transition hover:scale-110 hover:border-accent hover:text-accent lg:flex"
            aria-label="Dự án trước"
          >
            <ChevronDownIcon className="h-5 w-5 rotate-90" />
          </button>

          <div
            ref={viewportRef}
            className={`slider-viewport overflow-hidden ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishDrag}
            onPointerCancel={cancelDrag}
            onPointerLeave={cancelIdleDrag}
            onClickCapture={preventClickAfterDrag}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              ref={trackRef}
              className="flex"
              style={{
                gap: `${CARD_GAP}px`,
                transform: `translate3d(${-current * slideStep}px, 0, 0)`,
                transition: isDragging ? 'none' : 'transform 480ms cubic-bezier(0.22, 1, 0.36, 1)',
                willChange: isDragging ? 'transform' : 'auto',
              }}
            >
              {projectsData.map((project, index) => (
                <article
                  key={project.title}
                  className="project-card group flex shrink-0 flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-lg shadow-black/10"
                  style={{ flexBasis: cardWidth }}
                >
                  <a href={project.url} target="_blank" rel="noreferrer" draggable="false" className="relative block aspect-[16/10] overflow-hidden bg-surface2">
                    <img src={assetUrl(project.cover)} alt={`Ảnh đại diện dự án ${project.title}`} draggable="false" className="pointer-events-none h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-70" />
                    <span className="absolute bottom-4 left-5 text-2xl font-black tracking-tight text-white drop-shadow-lg">{project.title}</span>
                    <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-bg/60 text-white backdrop-blur transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <ExternalLinkIcon className="h-4 w-4" />
                    </span>
                  </a>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="leading-7 text-muted">{project.desc}</p>
                    <div className="mt-4 rounded-lg border-l-2 border-comment bg-surface2 px-4 py-3 text-sm leading-6 text-muted">
                      <span className="font-semibold text-ink">Vai trò: </span>{project.role}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-full border border-line px-2.5 py-1 text-xs font-medium text-comment">{tech}</span>
                      ))}
                    </div>

                    <div className="mt-6 border-t border-line pt-5">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold text-ink">Hình ảnh dự án</h3>
                        <span className="text-right text-xs text-muted">Nhấn để phóng to</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {project.images.map((image, imageIndex) => (
                          <button
                            key={image}
                            type="button"
                            onClick={() => setPreview({ src: assetUrl(image), alt: `${project.title} — ảnh ${imageIndex + 1}` })}
                            className="group/image relative aspect-video overflow-hidden rounded-lg border border-line bg-bg transition hover:-translate-y-1 hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                            aria-label={`Phóng to ảnh ${imageIndex + 1} của dự án ${project.title}`}
                          >
                            <img src={assetUrl(image)} alt="" loading="lazy" draggable="false" className="pointer-events-none h-full w-full object-cover transition duration-500 group-hover/image:scale-110" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <a href={project.url} target="_blank" rel="noreferrer" draggable="false" className="mt-6 inline-flex items-center gap-2 self-start font-semibold text-accent transition hover:gap-3">
                      Trải nghiệm dự án
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            className="absolute -right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-xl transition hover:scale-110 hover:border-accent hover:text-accent lg:flex"
            aria-label="Dự án tiếp theo"
          >
            <ChevronDownIcon className="h-5 w-5 -rotate-90" />
          </button>

          <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Chọn vị trí dự án">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${current === index ? 'w-8 bg-accent' : 'w-2.5 bg-line hover:bg-muted'}`}
                aria-label={`Đến dự án ${index + 1}`}
                aria-selected={current === index}
                role="tab"
              />
            ))}
          </div>
        </Reveal>
      </div>

      {preview && (
        <div className="lightbox fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8" role="dialog" aria-modal="true" aria-label="Xem ảnh dự án" onMouseDown={(event) => event.target === event.currentTarget && setPreview(null)}>
          <button type="button" onClick={() => setPreview(null)} className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-2xl text-white transition hover:rotate-90 hover:bg-accent" aria-label="Đóng ảnh">×</button>
          <img src={preview.src} alt={preview.alt} className="lightbox-image max-h-[88vh] max-w-[94vw] rounded-xl object-contain shadow-2xl" />
        </div>
      )}
    </section>
  )
}
