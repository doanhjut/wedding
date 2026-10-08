import { useEffect, useReducer, useRef, useState } from 'react'
import BookControls from './components/BookControls'
import PageTurn from './components/PageTurn'
import { navigationReducer, resolveSwipe } from './bookNavigation'

export default function InvitationBook({ pages, reduced = false }) {
  const pageCount = pages.length
  const [currentPage, dispatch] = useReducer(navigationReducer, 0)
  const [dragX, setDragX] = useState(0)
  const gesture = useRef(null)

  function go(type, page) {
    dispatch({ type, page, pageCount })
  }

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'ArrowLeft') go('previous')
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault()
        go('next')
      }
      if (event.key === 'Home') go('go', 0)
      if (event.key === 'End') go('go', pageCount - 1)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [pageCount])

  function startGesture(event) {
    if (event.target.closest('button, a') || reduced) return
    gesture.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      startedAt: performance.now(),
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function moveGesture(event) {
    if (!gesture.current || gesture.current.pointerId !== event.pointerId) return
    const deltaX = event.clientX - gesture.current.x
    const deltaY = event.clientY - gesture.current.y
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      event.preventDefault()
      setDragX(deltaX)
    }
  }

  function endGesture(event) {
    if (!gesture.current || gesture.current.pointerId !== event.pointerId) return
    const deltaX = event.clientX - gesture.current.x
    const deltaY = event.clientY - gesture.current.y
    const elapsed = Math.max(performance.now() - gesture.current.startedAt, 1)
    const direction = resolveSwipe({
      deltaX,
      deltaY,
      velocity: Math.abs(deltaX) / elapsed,
      width: event.currentTarget.clientWidth,
    })

    if (direction === 1) go('next')
    if (direction === -1) go('previous')
    gesture.current = null
    setDragX(0)
  }

  return (
    <main
      className={`invitation-book ${dragX ? 'is-dragging' : ''}`}
      aria-label="Cuốn thiệp cưới Minh Trang và Lưu Doanh"
    >
      <div className="book-ambient" aria-hidden="true">
        <span className="ambient-orbit orbit-one" />
        <span className="ambient-orbit orbit-two" />
      </div>

      <div
        className="book-stage"
        style={{ '--drag-x': `${dragX}px` }}
        onPointerDown={startGesture}
        onPointerMove={moveGesture}
        onPointerUp={endGesture}
        onPointerCancel={endGesture}
      >
        <div className="book-spine" aria-hidden="true" />
        {pages.map((page, index) => (
          <PageTurn
            key={page.id}
            index={index}
            currentPage={currentPage}
            label={page.label}
          >
            {page.content}
          </PageTurn>
        ))}
      </div>

      <BookControls
        currentPage={currentPage}
        pageCount={pageCount}
        onPrevious={() => go('previous')}
        onNext={() => go('next')}
        onGo={(page) => go('go', page)}
      />
      <p className="gesture-hint">
        <span aria-hidden="true">←</span> Vuốt để lật thiệp <span aria-hidden="true">→</span>
      </p>
    </main>
  )
}
