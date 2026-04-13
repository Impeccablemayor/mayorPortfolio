import { useCallback, useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)
  const alreadyVisible = useRef(false)

  const revealAll = useCallback(() => {
    if (!alreadyVisible.current || !ref.current) return
    ref.current.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('visible')
    })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            alreadyVisible.current = true
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible')
            })
          }
        })
      },
      {
        threshold: 0.05, // Lower threshold to 5%
        rootMargin: '50px' // Trigger 50px before entering viewport
      }
    )

    if (ref.current) observer.observe(ref.current)

    // Fallback: show elements after 2 seconds if not already visible
    const fallbackTimer = setTimeout(() => {
      if (ref.current && !alreadyVisible.current) {
        ref.current.querySelectorAll('.reveal').forEach((el) => {
          el.classList.add('visible')
        })
      }
    }, 2000)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [])

  return [ref, revealAll]
}
