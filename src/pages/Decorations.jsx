export function LotusMark({ className = '' }) {
  return (
    <svg className={`lotus-mark ${className}`} viewBox="0 0 160 90" aria-hidden="true">
      <path d="M80 73C61 57 54 36 80 10c26 26 19 47 0 63Z" />
      <path d="M73 76C48 70 28 55 31 29c31 9 43 25 42 47Z" />
      <path d="M87 76c25-6 45-21 42-47-31 9-43 25-42 47Z" />
      <path d="M64 80C38 84 17 77 8 55c30-4 47 5 56 25Z" />
      <path d="M96 80c26 4 47-3 56-25-30-4-47 5-56 25Z" />
      <path d="M37 86h86" />
    </svg>
  )
}

export function PageKicker({ children }) {
  return (
    <p className="page-kicker">
      <span aria-hidden="true" />
      {children}
      <span aria-hidden="true" />
    </p>
  )
}

export function CornerFlourish() {
  return (
    <svg className="corner-flourish" viewBox="0 0 120 120" aria-hidden="true">
      <path d="M5 115C17 64 49 24 115 5" />
      <path d="M27 85c-1-18 6-29 23-36-1 18-7 29-23 36Z" />
      <path d="M50 54c2-16 10-24 25-27-4 15-11 24-25 27Z" />
      <circle cx="26" cy="87" r="3" />
      <circle cx="52" cy="53" r="3" />
    </svg>
  )
}
