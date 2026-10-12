import ButterflySwarm from './ButterflySwarm'

export default function EnvelopeHero({ phase, onOpen, onFinish }) {
  const isOpened = phase === 'opened'

  return (
    <section id="top" className={`envelope-hero phase-${phase}`} aria-label="Thiệp cưới">
      <div className="hero-reveal">
        <img
          className="hero-photo"
          src="/artwork/scroll/hero.webp"
          alt="Minh họa đôi uyên ương trong trang phục cưới Việt Nam"
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

      <div className="card-scene" aria-hidden={isOpened}>
        <picture className="card-bg-frame">
          <source media="(max-width: 900px)" srcSet="/artwork/card/bg-mobile.webp" />
          <img
            className="card-bg"
            src="/artwork/card/bg-web.webp"
            alt=""
            fetchpriority="high"
          />
        </picture>

        <div className="card-layout">
          <header className="card-copy">
            <p className="card-script">Thiệp mời</p>
            <h1 className="card-title">
              <span>Đám</span>
              <i className="double-happiness" aria-hidden="true">
                囍
              </i>
              <span>cưới</span>
            </h1>
            <svg className="card-blossom" viewBox="0 0 72 28" aria-hidden="true">
              <path d="M4 14h16M52 14h16" stroke="#d4b06a" strokeWidth="1" />
              <circle cx="36" cy="14" r="2.2" fill="#d4b06a" />
              <circle cx="36" cy="8.6" r="2.4" fill="#e8cb90" />
              <circle cx="40.6" cy="12.2" r="2.4" fill="#e8cb90" />
              <circle cx="38.8" cy="17.2" r="2.4" fill="#e8cb90" />
              <circle cx="33.2" cy="17.2" r="2.4" fill="#e8cb90" />
              <circle cx="31.4" cy="12.2" r="2.4" fill="#e8cb90" />
            </svg>
            <p className="card-names">Lưu Doanh &amp; Minh Trang</p>
          </header>

          <button
            type="button"
            className="card-envelope"
            onClick={onOpen}
            aria-label="Mở thiệp cưới"
            aria-expanded={phase !== 'sealed'}
            disabled={phase !== 'sealed'}
          >
            <img src="/artwork/card/envelope.webp" alt="" draggable="false" />
          </button>

          <p className="card-hint">
            <span aria-hidden="true">✦</span>
            Chạm vào thiệp để mở
            <span aria-hidden="true">✦</span>
          </p>

          <img
            className="card-couple"
            src="/artwork/card/couple.webp"
            alt="Minh họa cô dâu và chú rể trong trang phục cưới truyền thống"
            draggable="false"
          />
          <img
            className="card-plaque"
            src="/artwork/card/plaque.webp"
            alt="Trân trọng kính mời: Bạn và gia đình"
            draggable="false"
          />
        </div>

        <svg
          className="card-waves"
          viewBox="0 0 1440 210"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#f8d7de"
            d="M0 118 Q60 28 120 118 Q180 28 240 118 Q300 28 360 118 Q420 28 480 118 Q540 28 600 118 Q660 28 720 118 Q780 28 840 118 Q900 28 960 118 Q1020 28 1080 118 Q1140 28 1200 118 Q1260 28 1320 118 Q1380 28 1440 118 L1440 210 L0 210 Z"
          />
          <path
            fill="#f0b8c6"
            d="M0 150 Q60 78 120 150 Q180 78 240 150 Q300 78 360 150 Q420 78 480 150 Q540 78 600 150 Q660 78 720 150 Q780 78 840 150 Q900 78 960 150 Q1020 78 1080 150 Q1140 78 1200 150 Q1260 78 1320 150 Q1380 78 1440 150 L1440 210 L0 210 Z"
          />
          <path
            fill="#e4899e"
            d="M0 176 Q60 124 120 176 Q180 124 240 176 Q300 124 360 176 Q420 124 480 176 Q540 124 600 176 Q660 124 720 176 Q780 124 840 176 Q900 124 960 176 Q1020 124 1080 176 Q1140 124 1200 176 Q1260 124 1320 176 Q1380 124 1440 176 L1440 210 L0 210 Z"
          />
        </svg>
      </div>

      {phase === 'opening' && <ButterflySwarm onFinish={onFinish} />}

      {isOpened && (
        <a className="hero-scroll-cue" href="#invitation">
          <span>Cuộn xuống để xem thiệp</span>
          <i aria-hidden="true" />
        </a>
      )}
    </section>
  )
}
