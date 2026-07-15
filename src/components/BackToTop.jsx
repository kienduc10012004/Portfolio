import { useEffect, useState } from 'react'
import { ChevronDownIcon } from './Icons'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-surface/90 text-accent shadow-xl shadow-black/30 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-accent hover:text-bg sm:bottom-7 sm:right-7 ${
        visible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'
      }`}
      aria-label="Trở về đầu trang"
      title="Trở về đầu trang"
    >
      <ChevronDownIcon className="h-5 w-5 rotate-180" />
    </button>
  )
}
