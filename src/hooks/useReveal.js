import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Fires `visible` true the first time the returned ref scrolls into view,
 * then stops observing. Used sparingly — only where a scroll reveal
 * actually earns its place (see ServicesSection and ProcessSection).
 */
function useReveal(threshold = 0.2) {
  const ref = useRef(null)
  // Reduced-motion users see content already visible, computed up front
  // rather than flipped inside the effect below.
  const [visible, setVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

export default useReveal
