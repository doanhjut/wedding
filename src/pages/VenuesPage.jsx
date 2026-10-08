import { mapsUrl, venues } from '../data'
import { PageKicker } from './Decorations'

export default function VenuesPage() {
  return (
    <section className="invitation-sheet sheet-venues">
      <div className="venue-art" aria-hidden="true">
        <img src="/artwork/places.webp" alt="" draggable="false" />
      </div>
      <div className="venues-copy">
        <PageKicker>Nơi gặp gỡ</PageKicker>
        <h2>Từ Ninh Bình đến Hải Phòng</h2>
        <div className="venue-postcards">
          {venues.map((venue, index) => (
            <article key={venue.id}>
              <span className="postcard-stamp">0{index + 1}</span>
              <p>{venue.region}</p>
              <h3>{venue.title}</h3>
              <address>{venue.address}</address>
              <a href={mapsUrl(venue.address)} target="_blank" rel="noreferrer">
                Mở chỉ đường <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
