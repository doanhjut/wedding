export default function EnvelopeHero({ phase, onOpen, onFinish }) {
  const isOpened = phase === 'opened'

  function finishHeroReveal(event) {
    if (
      event.target === event.currentTarget &&
      event.animationName === 'reveal-hero'
    ) {
      onFinish()
    }
  }

  return (
    <section id="top" className={`envelope-hero phase-${phase}`} aria-label="Thiệp cưới">
      <div
        className="hero-reveal"
        onAnimationEnd={phase === 'opening' ? finishHeroReveal : undefined}
      >
        <img
          className="hero-photo"
          src="/artwork/scroll/hero.webp"
          alt="Minh họa đôi uyên ương trong trang phục cưới Việt Nam"
          fetchpriority="high"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-monogram" aria-hidden="true">
          D <i /> M
        </div>
        <div className="hero-copy">
          <p className="hero-overline">We are getting married</p>
          <p className="hero-wedding">Wedding</p>
          <h1>
            <span>Lưu Doanh</span>
            <em>&amp;</em>
            <span className="hero-name-line">Minh Trang</span>
          </h1>
          <p className="hero-date-line">24 — 25 · 10 · 2026</p>
        </div>
      </div>

      <div className="envelope-scene" aria-hidden={isOpened}>
        <div className="envelope-shadow" />
        <div className="envelope">
          <div
            className={`envelope-letter${phase === 'opening' ? ' is-rising' : ''}`}
            data-stack={phase === 'opening' ? 'inside' : undefined}
          >
            <p>Save the date</p>
            <strong>Lưu Doanh &amp; Minh Trang</strong>
            <span>24 — 25 · 10 · 2026</span>
          </div>
          <div className="envelope-back" />
          <div className="envelope-flap" />
          <div className="envelope-pocket-left" />
          <div className="envelope-pocket-right" />
          <div className="envelope-pocket-front" />
          <button
            type="button"
            className="wax-seal"
            onClick={onOpen}
            aria-label="Mở thiệp cưới"
            aria-expanded={phase !== 'sealed'}
            disabled={phase !== 'sealed'}
          >
            <span>D</span>
            <i />
            <span>M</span>
          </button>
        </div>
        <p className="envelope-instruction">
          <span aria-hidden="true">✦</span> Chạm vào triện để mở thiệp
        </p>
      </div>

      {isOpened && (
        <a className="hero-scroll-cue" href="#invitation">
          <span>Cuộn xuống để xem thiệp</span>
          <i aria-hidden="true" />
        </a>
      )}
    </section>
  )
}
