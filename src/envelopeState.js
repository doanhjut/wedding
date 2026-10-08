export const initialEnvelopeState = { phase: 'sealed' }
export const OPENING_FALLBACK_MS = 4300

export function envelopeReducer(state, action) {
  if (action.type === 'skip') {
    return { phase: 'opened' }
  }

  if (action.type === 'open' && state.phase === 'sealed') {
    return { phase: action.reduced ? 'opened' : 'opening' }
  }

  if (action.type === 'finish' && state.phase === 'opening') {
    return { phase: 'opened' }
  }

  return state
}
