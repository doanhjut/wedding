import { events } from '../data'
import SectionHeading from './SectionHeading'

export default function ScheduleTimeline() {
  return (
    <section id="schedule" className="editorial-section schedule-section">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Wedding timeline"
          title="Lịch trình ngày cưới"
          description="Xin lưu lại những cột mốc dưới đây để cùng chúng tôi đi qua trọn vẹn ngày vui."
        />

        <div className="timeline-wrap">
          <div className="timeline-thread" aria-hidden="true">
            <span />
          </div>
          <ol className="wedding-timeline">
            {events.map((event, index) => (
              <li key={event.id} data-reveal={index % 2 === 0 ? 'from-left' : 'from-right'}>
                <div className="timeline-dot" aria-hidden="true">
                  <span />
                </div>
                <article>
                  <p className="timeline-side">{event.side}</p>
                  <div className="timeline-time">
                    <strong>{event.time}</strong>
                    <span>
                      {event.weekday}
                      <br />
                      {event.date}
                    </span>
                  </div>
                  <h3>{event.kind}</h3>
                  <p>{event.place}</p>
                  <address>{event.address}</address>
                  {event.mapUrl && (
                    <a
                      href={event.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="map-link"
                      aria-label={`Xem bản đồ: ${event.address}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.013 3.5-4.749 3.5-8.05a7.824 7.824 0 00-15.647 0c0 3.301 1.556 6.037 3.5 8.05a19.579 19.579 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                      Xem bản đồ
                    </a>
                  )}
                  <small>Ngày âm · {event.lunar}</small>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
