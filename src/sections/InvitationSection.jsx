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
