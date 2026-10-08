import { useRef, useState } from 'react'

const OPEN_DISTANCE = 88

export default function Opening({ onOpen, reduced }) {
  const startY = useRef(0)
  const [pull, setPull] = useState(0)
  const [dragging, setDragging] = useState(false)

  function beginDrag(event) {
    if (reduced) return
    startY.current = event.clientY
    setDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function moveDrag(event) {
    if (!dragging) return
    const distance = Math.max(0, Math.min(event.clientY - startY.current, 150))
    setPull(distance)
  }

  function endDrag() {
    if (!dragging) return
    setDragging(false)
    if (pull >= OPEN_DISTANCE) onOpen()
    else setPull(0)
  }

  const progress = reduced ? 0 : pull / 150

  return (
    <section className="opening" aria-label="Mở thiệp">
      <div className="opening-grain" aria-hidden="true" />
      <p className="eyebrow">Duyên lụa</p>
      <div
        className="scroll-silk"
        style={{ transform: `translateY(${pull * 0.35}px)` }}
      >
        <button
          type="button"
          className="seal"
          style={{
            transform: `scale(${1 - progress * 0.08}) rotate(${progress * 12}deg)`,
            opacity: 1 - progress * 0.35,
          }}
          onPointerDown={beginDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClick={onOpen}
          aria-label="Mở thiệp cưới của Minh Trang và Lưu Doanh"
        >
          <span>M</span>
          <span className="seal-dot" />
          <span>D</span>
        </button>
        <div className="ribbon" style={{ height: `${92 + pull}px` }} />
      </div>
      <h1>Minh Trang &amp; Lưu Doanh</h1>
      <p className="opening-hint">
        {reduced ? 'Chạm triện để mở thiệp.' : 'Kéo dải lụa hoặc chạm triện để mở thiệp.'}
      </p>
    </section>
  )
}
