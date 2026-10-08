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
