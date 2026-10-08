function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

export function navigationReducer(page, action) {
  const lastPage = action.pageCount - 1

  if (action.type === 'next') return clamp(page + 1, 0, lastPage)
  if (action.type === 'previous') return clamp(page - 1, 0, lastPage)
  if (action.type === 'go') return clamp(action.page, 0, lastPage)
  return page
}

export function resolveSwipe({ deltaX, deltaY, velocity, width }) {
  if (Math.abs(deltaY) > Math.abs(deltaX)) return 0

  const distanceThreshold = Math.min(width * 0.18, 72)
  const isCommitted = Math.abs(deltaX) >= distanceThreshold || Math.abs(velocity) >= 0.55

  if (!isCommitted) return 0
  return deltaX < 0 ? 1 : -1
}
