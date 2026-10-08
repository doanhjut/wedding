import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it, vi } from 'vitest'
import EnvelopeHero from './EnvelopeHero'

describe('EnvelopeHero', () => {
  it('renders an accessible sealed envelope with the hero content prepared', () => {
    const html = renderToStaticMarkup(
      <EnvelopeHero phase="sealed" onOpen={() => {}} onFinish={() => {}} />,
    )

    expect(html).toContain('phase-sealed')
    expect(html).toContain('aria-label="Mở thiệp cưới"')
    expect(html).toContain('Wedding')
    expect(html).toContain('<span class="hero-name-line">Minh Trang</span>')
    expect(html).toContain('fetchpriority="high"')
  })

  it('finishes only when the main hero reveal animation ends', () => {
    const onFinish = vi.fn()
    const tree = EnvelopeHero({
      phase: 'opening',
      onOpen: () => {},
      onFinish,
    })
    const heroReveal = tree.props.children[0]
    const child = {}
    const hero = {}

    heroReveal.props.onAnimationEnd({
      animationName: 'hero-copy-in',
      target: child,
      currentTarget: hero,
    })
    expect(onFinish).not.toHaveBeenCalled()

    heroReveal.props.onAnimationEnd({
      animationName: 'reveal-hero',
      target: hero,
      currentTarget: hero,
    })
    expect(onFinish).toHaveBeenCalledTimes(1)
  })

  it('keeps the rising letter tucked inside the envelope pocket', () => {
    const html = renderToStaticMarkup(
      <EnvelopeHero phase="opening" onOpen={() => {}} onFinish={() => {}} />,
    )

    expect(html).toContain('envelope-letter is-rising')
    expect(html).toContain('data-stack="inside"')
  })

  it('reveals the scroll cue after the envelope is opened', () => {
    const html = renderToStaticMarkup(
      <EnvelopeHero phase="opened" onOpen={() => {}} onFinish={() => {}} />,
    )

    expect(html).toContain('phase-opened')
    expect(html).toContain('Cuộn xuống để xem thiệp')
  })
})
