import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it, vi } from 'vitest'
import EnvelopeHero from './EnvelopeHero'
import ButterflySwarm, { CROSSING_COUNT, completeButterflyPass } from './ButterflySwarm'

describe('EnvelopeHero', () => {
  it('renders an accessible sealed envelope with the hero content prepared', () => {
    const html = renderToStaticMarkup(
      <EnvelopeHero phase="sealed" onOpen={() => {}} onFinish={() => {}} />,
    )

    expect(html).toContain('phase-sealed')
    expect(html).toContain('aria-label="Mở thiệp cưới"')
    expect(html).toContain('Thiệp mời')
    expect(html).toContain('Chạm vào thiệp để mở')
    expect(html).toContain('Bạn và gia đình')
    expect(html).toContain('/artwork/card/bg-web.webp')
    expect(html).toContain('/artwork/card/bg-mobile.webp')
    expect(html).toContain('/artwork/card/couple.webp')
    expect(html).toContain('Wedding')
    expect(html).toContain('<span class="hero-name-line">Minh Trang</span>')
    expect(html).toContain('fetchpriority="high"')
    expect(html).not.toContain('butterfly-swarm')
  })

  it('finishes only when the butterfly pass has crossed the screen', () => {
    const onFinish = vi.fn()
    const tree = EnvelopeHero({
      phase: 'opening',
      onOpen: () => {},
      onFinish,
    })
    const swarmElement = tree.props.children.find(
      (child) => child && child.type === ButterflySwarm,
    )
    expect(swarmElement).toBeTruthy()
    const child = {}
    const layer = {}

    completeButterflyPass(
      {
        animationName: 'butterfly-flight',
        target: child,
        currentTarget: layer,
      },
      onFinish,
    )
    expect(onFinish).not.toHaveBeenCalled()

    completeButterflyPass(
      {
        animationName: 'butterfly-pass',
        target: layer,
        currentTarget: layer,
      },
      onFinish,
    )
    expect(onFinish).toHaveBeenCalledTimes(1)
  })

  it('keeps the illustrated card in place while the envelope opens', () => {
    const html = renderToStaticMarkup(
      <EnvelopeHero phase="opening" onOpen={() => {}} onFinish={() => {}} />,
    )

    expect(html).toContain('class="card-scene"')
    expect(html).toContain('/artwork/card/envelope.webp')
    expect(html).toContain('disabled=""')
    expect(html).toContain('class="butterfly-swarm"')
    expect(html).toContain('class="butterfly-canvas"')
    expect(html).toContain(`data-count="${CROSSING_COUNT}"`)
    expect(CROSSING_COUNT).toBe(1080)
  })

  it('reveals the scroll cue after the envelope is opened', () => {
    const html = renderToStaticMarkup(
      <EnvelopeHero phase="opened" onOpen={() => {}} onFinish={() => {}} />,
    )

    expect(html).toContain('phase-opened')
    expect(html).toContain('Cuộn xuống để xem thiệp')
    expect(html).not.toContain('butterfly-swarm')
  })
})
