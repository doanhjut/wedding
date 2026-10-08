import { coupleProfiles } from '../data'
import SectionHeading from './SectionHeading'

export default function CoupleProfiles() {
  return (
    <section id="couple" className="editorial-section profiles-section">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Bride & Groom"
          title="Chúng mình"
          description="Hai tính cách khác nhau, cùng chọn một mái nhà và một tương lai."
        />

        <div className="profile-grid">
          {coupleProfiles.map((profile, index) => (
            <article
              className={`profile-card profile-${profile.id}`}
              key={profile.id}
              data-reveal={index === 0 ? 'from-left' : 'from-right'}
            >
              <div className="profile-image">
                <img
                  src={profile.image}
                  alt={`${profile.label} ${profile.name}`}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
                <span aria-hidden="true">0{index + 1}</span>
              </div>
              <div className="profile-copy">
                <p>{profile.label}</p>
                <h3>{profile.name}</h3>
                <span>{profile.role}</span>
                <div className="gold-rule" aria-hidden="true" />
                <p>{profile.description}</p>
                <svg viewBox="0 0 180 36" aria-hidden="true">
                  <path d="M4 25c21-19 26 8 49-7 19-12 20 12 42 2 25-12 38 3 81-15" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
