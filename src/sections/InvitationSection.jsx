import { events, families } from '../data'
import SectionHeading from './SectionHeading'

const vuQuyEvent = events.find((event) => event.id === 'vu-quy')
const thanhHonEvent = events.find((event) => event.id === 'thanh-hon')

export default function InvitationSection({ onSaveCalendar, onShare }) {
  return (
    <section id="invitation" className="editorial-section invitation-section">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Trân trọng kính mời"
          title="Thông tin đám cưới"
          description="Kính mời Quý Khách đến chung vui cùng hai gia đình trong ngày hạnh phúc của chúng tôi."
        />

        <div className="printed-invitation" data-reveal>
          <div className="invite-ornament ornament-top" aria-hidden="true">
            ✦
          </div>
          <p className="invite-script">Wedding invitation</p>
          <h3>
            Lưu Doanh <em>&amp;</em> Minh Trang
          </h3>
          <p className="invite-roles">Chú rể · Con cả &nbsp;—&nbsp; Cô dâu · Con út</p>

          <div className="invite-families">
            {families.map((family) => (
              <article key={family.id}>
                <span>{family.title}</span>
                <strong>{family.father}</strong>
                <strong>{family.mother}</strong>
                <p>{family.address}</p>
                {family.mapUrl && (
                  <a
                    href={family.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                    aria-label={`Xem bản đồ: ${family.address}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.013 3.5-4.749 3.5-8.05a7.824 7.824 0 00-15.647 0c0 3.301 1.556 6.037 3.5 8.05a19.579 19.579 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    Xem bản đồ
                  </a>
                )}
              </article>
            ))}
          </div>

          <div className="invite-date-band">
            <span>Tháng mười</span>
            <strong>24 — 25</strong>
            <span>Năm 2026</span>
          </div>

          <div className="invite-events">
            <p>
              <strong className="invite-time">{vuQuyEvent.time}</strong>
              <span>{vuQuyEvent.kind} · {vuQuyEvent.date}</span>
            </p>
            <i aria-hidden="true" />
            <p>
              <strong className="invite-time">{thanhHonEvent.time}</strong>
              <span>{thanhHonEvent.kind} · {thanhHonEvent.date}</span>
            </p>
          </div>

          <div className="invite-actions">
            <button type="button" className="button-primary" onClick={onSaveCalendar}>
              Lưu vào lịch
            </button>
            <button type="button" className="button-secondary" onClick={onShare}>
              Chia sẻ thiệp
            </button>
          </div>
          <div className="invite-ornament ornament-bottom" aria-hidden="true">
            ❦
          </div>
        </div>
      </div>
    </section>
  )
}
