import { families } from '../data'
import { CornerFlourish, LotusMark, PageKicker } from './Decorations'

export default function FamiliesPage() {
  return (
    <section className="invitation-sheet sheet-families">
      <CornerFlourish />
      <PageKicker>Hai nếp nhà</PageKicker>
      <h2>Hai gia đình</h2>
      <p className="sheet-intro">
        Trân trọng báo tin lễ vu quy và lễ thành hôn của con chúng tôi
      </p>

      <div className="family-panels">
        {families.map((family, index) => (
          <article className={`family-panel family-panel-${index + 1}`} key={family.id}>
            <span className="family-number">0{index + 1}</span>
            <p className="family-side">{family.title}</p>
            <h3>{family.father}</h3>
            <h3>{family.mother}</h3>
            <div className="family-line" aria-hidden="true" />
            <p>{family.address}</p>
          </article>
        ))}
      </div>
      <LotusMark className="families-lotus" />
    </section>
  )
}
