import { couple } from '../data'
import { PageKicker } from './Decorations'

export default function CouplePage() {
  return (
    <section className="invitation-sheet sheet-couple">
      <div className="couple-art-wrap">
        <img
          className="couple-art"
          src="/artwork/couple.webp"
          alt="Đôi uyên ương trong tà áo dài nhìn về phong cảnh hồ sen"
          draggable="false"
        />
        <div className="couple-art-glow" aria-hidden="true" />
      </div>
      <div className="couple-copy">
        <PageKicker>Duyên lành</PageKicker>
        <p className="brush-script">Hai người, một lời hẹn</p>
        <h2>
          {couple.bride}
          <span>&amp;</span>
          {couple.groom}
        </h2>
        <p>
          Một hành trình mới bắt đầu, từ hai nếp nhà, trong niềm vui của những
          người thương yêu nhất.
        </p>
        <div className="role-ribbon">
          <span>Cô dâu · {couple.brideRole}</span>
          <i aria-hidden="true" />
          <span>Chú rể · {couple.groomRole}</span>
        </div>
      </div>
    </section>
  )
}
