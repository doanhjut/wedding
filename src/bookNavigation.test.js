import { describe, expect, it } from 'vitest'
import { navigationReducer, resolveSwipe } from './bookNavigation'

describe('navigationReducer', () => {
  it('moves forward and stops at the final page', () => {
    expect(navigationReducer(5, { type: 'next', pageCount: 7 })).toBe(6)
    expect(navigationReducer(6, { type: 'next', pageCount: 7 })).toBe(6)
  })

  it('moves backward and stops at the cover', () => {
    expect(navigationReducer(1, { type: 'previous', pageCount: 7 })).toBe(0)
    expect(navigationReducer(0, { type: 'previous', pageCount: 7 })).toBe(0)
  })

  it('jumps only to a valid page', () => {
    expect(navigationReducer(2, { type: 'go', page: 5, pageCount: 7 })).toBe(5)
    expect(navigationReducer(2, { type: 'go', page: 10, pageCount: 7 })).toBe(6)
  })
})

describe('resolveSwipe', () => {
  it('turns to the next page after a deliberate left swipe', () => {
    expect(resolveSwipe({ deltaX: -120, deltaY: 12, velocity: 0.2, width: 390 })).toBe(1)
  })

  it('turns to the previous page after a deliberate right swipe', () => {
    expect(resolveSwipe({ deltaX: 115, deltaY: 8, velocity: 0.2, width: 390 })).toBe(-1)
  })

  it('ignores short taps and vertical scrolling', () => {
    expect(resolveSwipe({ deltaX: -20, deltaY: 4, velocity: 0.1, width: 390 })).toBe(0)
    expect(resolveSwipe({ deltaX: -90, deltaY: 130, velocity: 0.8, width: 390 })).toBe(0)
  })
})
