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
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, revealAll]
}
