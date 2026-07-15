import { useEffect, useRef, useState } from 'react'

/**
 * Adds an `is-visible` class once the element scrolls into view.
 * Pairs with the `.reveal` CSS class defined in index.css.
 */
export function useReveal(threshold = 0.05) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Do not leave the content at opacity: 0 on older browsers.
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin: '0px 0px -5% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
