export default function ThankYouSection({ onSaveCalendar, onShare }) {
  return (
    <footer id="thank-you" className="thank-you-section">
      <img
        src="/artwork/scroll/ceremony.webp"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div className="thank-you-shade" aria-hidden="true" />
      <div className="thank-you-copy" data-reveal>
        <p className="section-eyebrow light">
          <span aria-hidden="true" />
          Thank you
          <span aria-hidden="true" />
        </p>
        <blockquote>
          Sự hiện diện của Quý Khách là niềm vinh hạnh và là món quà quý giá dành
          cho gia đình chúng tôi.
        </blockquote>
        <p className="thank-you-names">Lưu Doanh &amp; Minh Trang</p>
        <p className="thank-you-date">24 — 25 · 10 · 2026</p>
        <div className="thank-you-actions">
          <button type="button" className="button-gold" onClick={onSaveCalendar}>
            Lưu ngày cưới
          </button>
          <button type="button" className="button-ghost" onClick={onShare}>
            Chia sẻ thiệp
          </button>
        </div>
        <a className="back-to-top" href="#top">
          Trở về đầu trang <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}
