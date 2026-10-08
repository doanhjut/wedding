import { LotusMark, PageKicker } from './Decorations'

export default function ClosingPage({ onSaveCalendar, onShare }) {
  return (
    <section className="invitation-sheet sheet-closing">
      <div className="closing-halo" aria-hidden="true" />
      <PageKicker>Thay lời kết</PageKicker>
      <LotusMark className="closing-lotus" />
      <blockquote>
        Sự hiện diện của Quý Khách là niềm vinh hạnh của gia đình chúng tôi.
      </blockquote>
      <p className="closing-invite">Trân trọng kính mời</p>
      <h2>Minh Trang &amp; Lưu Doanh</h2>
      <svg className="infinity-thread" viewBox="0 0 220 70" aria-hidden="true">
        <path d="M16 35c0-25 38-28 64 0s64 25 64 0-38-28-64 0-64 25-64 0Zm128 0c26 28 60 25 60 0s-34-28-60 0Z" />
      </svg>
      <div className="closing-actions">
        <button type="button" className="action-gold" onClick={onSaveCalendar}>
          Lưu vào lịch
        </button>
        <button type="button" className="action-quiet" onClick={onShare}>
          Chia sẻ thiệp
        </button>
      </div>
      <p className="closing-date">24 — 25 · 10 · 2026</p>
    </section>
  )
}
