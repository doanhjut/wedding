import { describe, expect, it } from 'vitest'
import { calculateParallax, getScrollProgress } from './scrollMotion'

describe('getScrollProgress', () => {
  it('normalizes and clamps document scroll progress', () => {
    expect(getScrollProgress(500, 2000, 1000)).toBe(0.5)
    expect(getScrollProgress(-10, 2000, 1000)).toBe(0)
    expect(getScrollProgress(3000, 2000, 1000)).toBe(1)
  })
})

describe('calculateParallax', () => {
  it('moves gently around the viewport center and clamps to sixteen pixels', () => {
    expect(calculateParallax(400, 200, 1000)).toBe(0)
    expect(calculateParallax(-1000, 100, 800)).toBe(-16)
    expect(calculateParallax(2000, 100, 800)).toBe(16)
  })
})
