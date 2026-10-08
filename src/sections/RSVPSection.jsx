import { rsvpConfig } from '../data'
import SectionHeading from './SectionHeading'

export default function RSVPSection() {
  const isReady = Boolean(rsvpConfig.formUrl)

  return (
    <section id="rsvp" className="editorial-section rsvp-section">
      <div className="section-shell rsvp-layout">
        <div className="rsvp-heading">
          <SectionHeading
            eyebrow="Répondez s'il vous plaît"
            title="Xác nhận tham dự"
            description="Sự hồi âm của bạn sẽ giúp hai gia đình chuẩn bị buổi tiệc chu đáo hơn."
            align="left"
          />
          <p className="rsvp-deadline">
            Vui lòng phản hồi trước ngày <strong>{rsvpConfig.responseDeadline}</strong>
          </p>
        </div>

        <div className="rsvp-card" data-reveal>
          <span className="rsvp-mark" aria-hidden="true">
            RSVP
          </span>
          <p className="rsvp-card-eyebrow">Will you join us?</p>
          <h3>Chúng mình rất mong được gặp bạn</h3>
          <p>
            Biểu mẫu sẽ ghi câu trả lời trực tiếp vào Google Sheets và có thể tải
            xuống dưới dạng Excel bất cứ lúc nào.
          </p>

          {isReady ? (
            <a
              className="rsvp-button"
              href={rsvpConfig.formUrl}
              target="_blank"
              rel="noreferrer"
            >
              Mở biểu mẫu xác nhận <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <>
              <button type="button" className="rsvp-button" disabled>
                Biểu mẫu đang được chuẩn bị
              </button>
              <small>Xác nhận trực tuyến sẽ được mở trong thời gian sớm nhất.</small>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
