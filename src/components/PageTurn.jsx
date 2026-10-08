export default function PageTurn({ index, currentPage, label, children }) {
  const state =
    index === currentPage ? 'page-active' : index < currentPage ? 'page-past' : 'page-future'

  return (
    <article
      className={`book-page ${state}`}
      data-page-index={index}
      aria-label={label}
      aria-hidden={index !== currentPage}
      inert={index !== currentPage ? '' : undefined}
      style={{ '--page-distance': index - currentPage }}
    >
      <div className="page-face">{children}</div>
    </article>
  )
}
