import { loveNotes } from '../data'
import SectionHeading from './SectionHeading'

export default function LoveNotes() {
  return (
    <section id="love-notes" className="editorial-section notes-section">
      <div className="section-shell">
        <SectionHeading eyebrow="From us, with love" title="Những lời muốn nói" />
      </div>

      <div className="love-note-list">
        {loveNotes.map((note, index) => (
          <article className={`love-note note-${index + 1}`} key={note.id}>
            <img
              src={note.image}
              alt=""
              loading="lazy"
              decoding="async"
              draggable="false"
            />
            <div className="note-shade" aria-hidden="true" />
            <div className="note-copy" data-reveal>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <blockquote>{note.message}</blockquote>
              <p>{note.from}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
