import { useState } from 'react'

const PAIR = [
  {
    src: '/artwork/butterflies/blue.webp',
    className: 'linger-follow',
    size: 54,
    ratio: '1.09',
  },
  {
    src: '/artwork/butterflies/pink.webp',
    className: 'linger-lead',
    size: 64,
    ratio: '1.22',
  },
]

function FlappingButterfly({ butterfly }) {
  return (
    <span
      className={`flap-bug ${butterfly.className}`}
      style={{
        '--size': `${butterfly.size}px`,
        '--ratio': butterfly.ratio,
      }}
    >
      <img className="wing wing-left" src={butterfly.src} alt="" draggable="false" />
      <img className="wing wing-right" src={butterfly.src} alt="" draggable="false" />
    </span>
  )
}

export default function LingeringButterflies() {
  const [gliding, setGliding] = useState(false)

  function settle(event) {
    if (
      event.target === event.currentTarget &&
      event.animationName === 'pair-enter'
    ) {
      setGliding(true)
    }
  }

  return (
    <div className="linger-butterflies" aria-hidden="true">
      <div
        className={`linger-pair ${gliding ? 'is-gliding' : 'is-entering'}`}
        onAnimationEnd={settle}
      >
        {PAIR.map((butterfly) => (
          <FlappingButterfly key={butterfly.className} butterfly={butterfly} />
        ))}
      </div>
    </div>
  )
}
