import type { ReactNode } from 'react'
import useInView from '../hooks/useInView'

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default Reveal
