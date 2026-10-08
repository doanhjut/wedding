import { gallery } from '../data'
import SectionHeading from './SectionHeading'

export default function WeddingGallery() {
  return (
    <section id="gallery" className="editorial-section gallery-section">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Our moments"
          title="Những khoảnh khắc của chúng mình"
          description="Một vài khung hình thay lời kể về hành trình từ hai người xa lạ đến một lời hẹn trọn đời."
          align="left"
        />

        <div className="gallery-editorial">
          {gallery.map((image, index) => (
            <figure
              className={`gallery-item gallery-item-${index + 1}`}
              key={image.id}
              data-reveal
              data-parallax={index % 2 === 0 ? 'soft' : 'reverse'}
            >
              <div className="image-curtain">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
              </div>
              <figcaption>
                <span>0{index + 1}</span>
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
