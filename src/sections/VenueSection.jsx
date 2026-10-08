import { mapsUrl, venues } from '../data'
import SectionHeading from './SectionHeading'

export default function VenueSection() {
  return (
    <section id="venues" className="editorial-section venue-section">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Save the location"
          title="Nơi chúng mình gặp nhau"
          description="Hai điểm đến, nối lại bằng một lời hẹn chung vui."
        />

        <div className="venue-layout" data-reveal>
          <div className="venue-visual">
            <img
              src="/artwork/places.webp"
              alt="Minh họa phong cảnh Ninh Bình và Hải Phòng"
              loading="lazy"
              decoding="async"
            />
            <div className="venue-stamp" aria-hidden="true">
              M · D
            </div>
          </div>
          <div className="venue-cards">
            {venues.map((venue, index) => (
              <article key={venue.id}>
                <span className="venue-index">0{index + 1}</span>
                <p>{venue.region}</p>
                <h3>{venue.title}</h3>
                <address>{venue.address}</address>
                <a href={mapsUrl(venue.address)} target="_blank" rel="noreferrer">
                  Mở Google Maps <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
