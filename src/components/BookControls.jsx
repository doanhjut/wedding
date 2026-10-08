export default function BookControls({
  currentPage,
  pageCount,
  onPrevious,
  onNext,
  onGo,
}) {
  return (
    <nav id="book-controls" className="book-controls" aria-label="Điều hướng thiệp">
      <button
        type="button"
        className="turn-button previous"
        onClick={onPrevious}
        disabled={currentPage === 0}
        aria-label="Trang trước"
      >
        <span aria-hidden="true">←</span>
      </button>

      <div className="page-progress">
        <span className="page-count" aria-live="polite">
          Trang {currentPage + 1} / {pageCount}
        </span>
        <div className="page-dots">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              type="button"
              key={index}
              className={index === currentPage ? 'is-current' : ''}
              aria-label={`Đến trang ${index + 1}`}
              aria-current={index === currentPage ? 'page' : undefined}
              onClick={() => onGo(index)}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        className="turn-button next"
        onClick={onNext}
        disabled={currentPage === pageCount - 1}
        aria-label="Trang sau"
      >
        <span aria-hidden="true">→</span>
      </button>
    </nav>
  )
}
