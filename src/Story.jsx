import { useState } from 'react'
import { calendarFile, couple, events, families, mapsUrl, venues } from './data'
import { useReveal } from './hooks'

function Chapter({ id, eyebrow, title, children, reduced, className = '' }) {
  const [ref, visible] = useReveal(reduced)
  return (
    <section
      id={id}
      ref={ref}
      className={`chapter reveal ${visible ? 'is-in' : ''} ${className}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function saveCalendar() {
  const file = new Blob([calendarFile()], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(file)
  const link = document.createElement('a')
  link.href = url
  link.download = 'minh-trang-luu-doanh.ics'
  link.click()
  URL.revokeObjectURL(url)
}

async function shareInvitation() {
  const data = {
    title: 'Thiệp cưới Minh Trang & Lưu Doanh',
    text: 'Trân trọng kính mời đến chung vui cùng Minh Trang & Lưu Doanh, 24–25/10/2026.',
    url: window.location.href,
  }
  if (navigator.share) {
    await navigator.share(data)
    return
  }
  await navigator.clipboard.writeText(window.location.href)
}

export default function Story({ reduced }) {
  const [flipped, setFlipped] = useState(null)
  const [shared, setShared] = useState('')

  async function onShare() {
    try {
      await shareInvitation()
      setShared(navigator.share ? 'Đã mở bảng chia sẻ.' : 'Đã sao chép đường dẫn.')
    } catch (error) {
      if (error && error.name === 'AbortError') return
      setShared('Chưa chia sẻ được. Hãy sao chép địa chỉ trang.')
    }
  }

  return (
    <main>
      <header className="hero">
        <p className="eyebrow">Trân trọng kính mời</p>
        <h1>
          <span className="mask-line">{couple.bride}</span>
          <span className="ampersand">&amp;</span>
          <span className="mask-line delay">{couple.groom}</span>
        </h1>
        <p className="roles">
          Cô dâu: {couple.brideRole} · Chú rể: {couple.groomRole}
        </p>
        <p className="hero-date">24 — 25 . 10 . 2026</p>
      </header>

      <Chapter
        id="gia-dinh"
        eyebrow="Chương một"
        title="Hai gia đình"
        reduced={reduced}
      >
        <p className="lead">
          Trân trọng báo tin lễ vu quy và lễ thành hôn của con chúng tôi.
        </p>
        <div className="family-grid">
          {families.map((family) => (
            <article key={family.id} className="silk-card">
              <h3>{family.title}</h3>
              <p>{family.father}</p>
              <p>{family.mother}</p>
              <p className="address">{family.address}</p>
            </article>
          ))}
        </div>
      </Chapter>

      <Chapter
        id="ngay-cuoi"
        eyebrow="Chương hai"
        title="Hai ngày, một lời hẹn"
        reduced={reduced}
        className="dates"
      >
        <div className="date-pair">
          <article>
            <span className="sun" aria-hidden="true" />
            <strong>24</strong>
            <p>Thứ bảy, tháng 10</p>
            <small>15 tháng 9 năm Bính Ngọ</small>
          </article>
          <article>
            <span className="moon" aria-hidden="true" />
            <strong>25</strong>
            <p>Chủ nhật, tháng 10</p>
            <small>16 tháng 9 năm Bính Ngọ</small>
          </article>
        </div>
      </Chapter>

      <Chapter
        id="hanh-trinh"
        eyebrow="Chương ba"
        title="Hành trình hai ngày"
        reduced={reduced}
      >
        <ol className="timeline">
          {events.map((event, index) => (
            <li key={event.id} style={{ '--i': index }}>
              <div>
                <span>
                  {event.date} · {event.time}
                </span>
                <h3>
                  {event.kind} {event.side.toLowerCase()}
                </h3>
                <p>
                  {event.place} · {event.weekday}
                </p>
                <p className="address">{event.address}</p>
                <small>Ngày âm: {event.lunar}</small>
              </div>
            </li>
          ))}
        </ol>
      </Chapter>

      <Chapter
        id="dia-diem"
        eyebrow="Chương bốn"
        title="Nơi gặp gỡ"
        reduced={reduced}
      >
        <div className="venue-grid">
          {venues.map((venue) => {
            const isFlipped = flipped === venue.id
            return (
              <button
                key={venue.id}
                type="button"
                className={`venue ${isFlipped ? 'is-flipped' : ''}`}
                aria-pressed={isFlipped}
                onClick={() => setFlipped(isFlipped ? null : venue.id)}
              >
                <span className="venue-face front">
                  <small>{venue.region}</small>
                  <strong>{venue.title}</strong>
                  <em>Chạm để xem đường đi</em>
                </span>
                <span className="venue-face back">
                  <small>{venue.address}</small>
                  <a
                    href={mapsUrl(venue.address)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Xem chỉ đường
                  </a>
                </span>
              </button>
            )
          })}
        </div>
      </Chapter>

      <Chapter
        id="loi-moi"
        eyebrow="Chương năm"
        title="Lời mời"
        reduced={reduced}
      >
        <blockquote>
          Sự hiện diện của Quý Khách là niềm vinh hạnh của gia đình chúng tôi.
          Kính mời!
        </blockquote>
        <div className="actions">
          <button type="button" className="primary" onClick={saveCalendar}>
            Lưu các mốc vào lịch
          </button>
          <button type="button" className="ghost" onClick={onShare}>
            Chia sẻ thiệp
          </button>
        </div>
        {shared && <p className="share-status">{shared}</p>}
      </Chapter>

      <footer className="closing">
        <svg viewBox="0 0 160 80" aria-hidden="true">
          <path d="M30 40 C30 18 62 18 80 40 C98 62 130 62 130 40 C130 18 98 18 80 40 C62 62 30 62 30 40" />
        </svg>
        <p>Minh Trang &amp; Lưu Doanh</p>
      </footer>
    </main>
  )
}
