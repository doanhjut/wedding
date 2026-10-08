import { useEffect } from 'react'

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

export function getScrollProgress(scrollY, scrollHeight, viewportHeight) {
  const distance = Math.max(scrollHeight - viewportHeight, 1)
  return clamp(scrollY / distance, 0, 1)
}

export function calculateParallax(top, height, viewportHeight) {
  const elementCenter = top + height / 2
  const viewportCenter = viewportHeight / 2
  return clamp(((elementCenter - viewportCenter) / viewportHeight) * 18, -16, 16)
}

export function useScrollMotion(reduced, enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined

    const revealNodes = [...document.querySelectorAll('[data-reveal]')]
    if (reduced || !('IntersectionObserver' in window)) {
      revealNodes.forEach((node) => node.classList.add('is-visible'))
    }

    const observer =
      !reduced && 'IntersectionObserver' in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible')
                  observer.unobserve(entry.target)
                }
              })
            },
            { threshold: 0.14, rootMargin: '0px 0px -7% 0px' },
          )
        : null

    observer?.observe && revealNodes.forEach((node) => observer.observe(node))

    const parallaxNodes = reduced ? [] : [...document.querySelectorAll('[data-parallax]')]
    const schedule = document.querySelector('.timeline-wrap')
    let frame = 0

    function update() {
      frame = 0
      const root = document.documentElement
      root.style.setProperty(
        '--page-progress',
        getScrollProgress(window.scrollY, root.scrollHeight, window.innerHeight).toFixed(4),
      )

      parallaxNodes.forEach((node) => {
        const rect = node.getBoundingClientRect()
        const direction = node.dataset.parallax === 'reverse' ? -1 : 1
        node.style.setProperty(
          '--parallax-y',
          `${calculateParallax(rect.top, rect.height, window.innerHeight) * direction}px`,
        )
      })

      if (schedule) {
        const rect = schedule.getBoundingClientRect()
        const progress = clamp(
          (window.innerHeight * 0.78 - rect.top) / Math.max(rect.height, 1),
          0,
          1,
        )
        schedule.style.setProperty('--timeline-progress', progress.toFixed(4))
      }
    }

    function requestUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [enabled, reduced])
}
