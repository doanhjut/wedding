import { useEffect, useRef, useState } from 'react'

const SPECIES = [
  { src: '/artwork/butterflies/coral.webp', face: -1 },
  { src: '/artwork/butterflies/orange.webp', face: 1 },
  { src: '/artwork/butterflies/monarch.webp', face: -1 },
  { src: '/artwork/butterflies/morpho.webp', face: 1 },
  { src: '/artwork/butterflies/blue.webp', face: 1 },
  { src: '/artwork/butterflies/violet.webp', face: 1 },
  { src: '/artwork/butterflies/pink.webp', face: 1 },
  { src: '/artwork/butterflies/gold.webp', face: 1 },
]

export const CROSSING_COUNT = 1080
export const PASS_MS = 6400

export function completeButterflyPass(event, onFinish) {
  if (
    event.target === event.currentTarget &&
    event.animationName === 'butterfly-pass'
  ) {
    onFinish()
  }
}

function loadImages() {
  return Promise.all(
    SPECIES.map(
      (species) =>
        new Promise((resolve) => {
          const image = new Image()
          image.onload = () => resolve(image)
          image.onerror = () => resolve(null)
          image.src = species.src
        }),
    ),
  )
}

let preparedImages = null

function prepareImages() {
  if (preparedImages) return preparedImages
  if (typeof window === 'undefined') {
    preparedImages = Promise.resolve(null)
    return preparedImages
  }

  preparedImages = loadImages().then((images) => (images.some(Boolean) ? images : null))
  return preparedImages
}

if (typeof window !== 'undefined') prepareImages()

function createStream(width, height) {
  const butterflies = []

  for (let index = 0; index < CROSSING_COUNT; index += 1) {
    const foreground = Math.random() > 0.94
    const size = foreground ? 26 + Math.random() * 16 : 8 + Math.random() * 14
    butterflies.push({
      species: Math.floor(Math.random() * SPECIES.length),
      x: -width * (0.08 + Math.random() * 1.55),
      y: height * (0.02 + Math.pow(Math.random(), 0.58) * 0.96),
      size,
      speed: width * (0.45 + Math.random() * 0.14),
      phase: Math.random() * Math.PI * 2,
      flutter: 1.15 + Math.random() * 1.05,
      wander: 0.35 + Math.random() * 0.45,
      lift: 10 + Math.random() * 12,
      sway: 8 + Math.random() * 10,
      flap: 4.2 + Math.random() * 2.4,
    })
  }

  butterflies.sort((a, b) => a.size - b.size)
  return butterflies
}

function streamPose(butterfly, elapsed) {
  const wing = elapsed * butterfly.flutter + butterfly.phase
  const wander = elapsed * butterfly.wander + butterfly.phase * 0.7
  const x = butterfly.x + butterfly.speed * elapsed + Math.sin(wander) * butterfly.sway
  const y =
    butterfly.y +
    Math.sin(wing) * butterfly.lift +
    Math.sin(wander) * butterfly.lift * 0.28
  const tilt = Math.atan2(
    Math.cos(wing) * butterfly.flutter * butterfly.lift * 2.2,
    butterfly.speed,
  )
  const flap = 0.82 + 0.18 * Math.abs(Math.sin(elapsed * butterfly.flap + butterfly.phase))
  return { x, y, tilt, flap }
}

export default function ButterflySwarm({ onFinish }) {
  const canvasRef = useRef(null)
  const [passing, setPassing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d', { alpha: true })
    const width = canvas.parentElement.clientWidth || window.innerWidth
    const height = canvas.parentElement.clientHeight || window.innerHeight
    canvas.width = width
    canvas.height = height

    let frame = 0
    let stopped = false

    prepareImages().then((images) => {
      if (stopped || !images) return
      const butterflies = createStream(width, height)
      const started = performance.now()

      function draw(now) {
        const elapsed = (now - started) / 1000
        context.clearRect(0, 0, width, height)

        for (let index = 0; index < butterflies.length; index += 1) {
          const butterfly = butterflies[index]
          const { x, y, tilt, flap } = streamPose(butterfly, elapsed)
          if (x < -48 || x > width + 48 || y < -48 || y > height + 48) continue
          const image = images[butterfly.species]
          if (!image) continue
          const face = SPECIES[butterfly.species].face
          const cos = Math.cos(tilt)
          const sin = Math.sin(tilt)
          context.setTransform(cos * face * flap, sin * face * flap, -sin, cos, x, y)
          context.drawImage(
            image,
            -butterfly.size / 2,
            -butterfly.size / 2,
            butterfly.size,
            butterfly.size,
          )
        }

        context.setTransform(1, 0, 0, 1, 0, 0)
        if (elapsed < PASS_MS / 1000 - 0.15) frame = window.requestAnimationFrame(draw)
      }

      frame = window.requestAnimationFrame(draw)
      setPassing(true)
    })

    return () => {
      stopped = true
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      className={passing ? 'butterfly-swarm is-passing' : 'butterfly-swarm'}
      aria-hidden="true"
      onAnimationEnd={(event) => completeButterflyPass(event, onFinish)}
    >
      <canvas
        ref={canvasRef}
        className="butterfly-canvas"
        data-count={CROSSING_COUNT}
      />
    </div>
  )
}
