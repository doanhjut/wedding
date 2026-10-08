import { useEffect, useReducer } from 'react'
import {
  envelopeReducer,
  initialEnvelopeState,
  OPENING_FALLBACK_MS,
} from './envelopeState'
import { useScrollMotion } from './scrollMotion'
import EnvelopeHero from './sections/EnvelopeHero'
import WeddingSections from './sections/WeddingSections'

export default function WeddingExperience({
  reduced = false,
  onSaveCalendar,
  onShare,
}) {
  const [envelope, dispatch] = useReducer(envelopeReducer, initialEnvelopeState)
  const opened = envelope.phase === 'opened'

  useScrollMotion(reduced, opened)

  useEffect(() => {
    document.body.classList.toggle('envelope-locked', !opened)
    return () => document.body.classList.remove('envelope-locked')
  }, [opened])

  useEffect(() => {
    if (envelope.phase !== 'opening') return undefined
    const fallback = window.setTimeout(
      () => dispatch({ type: 'finish' }),
      OPENING_FALLBACK_MS,
    )
    return () => window.clearTimeout(fallback)
  }, [envelope.phase])

  function skipOpening(event) {
    event.preventDefault()
    dispatch({ type: 'skip' })
    window.requestAnimationFrame(() => {
      document.querySelector('#invitation')?.scrollIntoView({ block: 'start' })
    })
  }

  return (
    <main className={`wedding-experience experience-${envelope.phase}`}>
      <a className="skip-link" href="#invitation" onClick={skipOpening}>
        Bỏ qua phần mở thiệp
      </a>
      <div className="scroll-progress" aria-hidden="true">
        <span />
      </div>
      <div className="gold-thread-fixed" aria-hidden="true" />

      <EnvelopeHero
        phase={envelope.phase}
        onOpen={() => dispatch({ type: 'open', reduced })}
        onFinish={() => dispatch({ type: 'finish' })}
      />

      <div className={`wedding-content ${opened ? 'is-ready' : ''}`}>
        <WeddingSections onSaveCalendar={onSaveCalendar} onShare={onShare} />
      </div>
    </main>
  )
}
