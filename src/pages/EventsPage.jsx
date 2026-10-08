import { events } from '../data'
import { PageKicker } from './Decorations'

export default function EventsPage() {
  return (
    <section className="invitation-sheet sheet-events">
      <PageKicker>Lịch trình</PageKicker>
      <h2>Hành trình hai ngày</h2>
      <p className="sheet-intro">Bốn khoảnh khắc, cùng chung một niềm vui</p>
      <div className="event-thread" aria-hidden="true" />
      <ol className="event-list">
        {events.map((event, index) => (
          <li key={event.id}>
            <span className="event-index">0{index + 1}</span>
            <div className="event-time">
              <strong>{event.time}</strong>
              <span>{event.date}</span>
            </div>
            <div className="event-copy">
              <p>{event.side}</p>
              <h3>{event.kind}</h3>
              <span>
                {event.place} · {event.weekday}
              </span>
            </div>
          </li>
        ))}
      </ol>
      <p className="event-note">Chạm trang kế tiếp để xem địa điểm</p>
    </section>
  )
}
