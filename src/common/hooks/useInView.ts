import { useEffect, useRef, useState } from 'react'

function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, ...options },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return { ref, isInView }
}

export default useInView
