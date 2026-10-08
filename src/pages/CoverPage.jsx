import { CornerFlourish } from './Decorations'

export default function CoverPage() {
  return (
    <section className="invitation-sheet sheet-cover">
      <img
        className="cover-art"
        src="/artwork/cover.webp"
        alt="Đôi chim hạc giữa hoa sen và họa tiết trống đồng"
        draggable="false"
      />
      <div className="cover-vignette" aria-hidden="true" />
      <CornerFlourish />
      <div className="cover-copy">
        <p>Trân trọng báo tin</p>
        <h1>
          Minh Trang
          <span>&amp;</span>
          Lưu Doanh
        </h1>
        <div className="cover-seal" aria-hidden="true">
          M <i /> D
        </div>
        <p className="cover-date">24 — 25 · 10 · 2026</p>
      </div>
      <p className="cover-whisper">Vuốt sang trái để mở thiệp</p>
    </section>
  )
}
