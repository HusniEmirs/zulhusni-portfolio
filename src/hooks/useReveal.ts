import { useLayoutEffect, useRef } from 'react'

function useReveal<T extends HTMLElement>() {
  const elementRef = useRef<T>(null)

  useLayoutEffect(() => {
    const element = elementRef.current

    if (
      !element ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    element.classList.add('is-reveal-ready')

    try {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            element.classList.add('is-visible')
            observer.disconnect()
          }
        },
        {
          rootMargin: '0px 0px -8% 0px',
          threshold: 0.12,
        },
      )

      observer.observe(element)

      return () => {
        observer.disconnect()
        element.classList.remove('is-reveal-ready', 'is-visible')
      }
    } catch {
      element.classList.remove('is-reveal-ready')
    }
  }, [])

  return elementRef
}

export default useReveal
