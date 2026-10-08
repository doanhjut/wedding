import { describe, expect, it } from 'vitest'
import * as envelopeState from './envelopeState'

const { envelopeReducer, initialEnvelopeState } = envelopeState

describe('envelopeReducer', () => {
  it('moves from sealed to opening to opened', () => {
    const opening = envelopeReducer(initialEnvelopeState, { type: 'open' })
    const opened = envelopeReducer(opening, { type: 'finish' })

    expect(opening.phase).toBe('opening')
    expect(opened.phase).toBe('opened')
  })

  it('does not restart an envelope that is already opening', () => {
    const opening = { phase: 'opening' }
    expect(envelopeReducer(opening, { type: 'open' })).toBe(opening)
  })

  it('opens immediately when reduced motion is requested', () => {
    expect(
      envelopeReducer(initialEnvelopeState, { type: 'open', reduced: true }),
    ).toEqual({ phase: 'opened' })
  })

  it('skips directly to opened content for keyboard navigation', () => {
    expect(envelopeReducer(initialEnvelopeState, { type: 'skip' })).toEqual({
      phase: 'opened',
    })
  })

  it('keeps the opening fallback aligned with the four-second choreography', () => {
    expect(envelopeState.OPENING_FALLBACK_MS).toBe(4300)
  })
})
