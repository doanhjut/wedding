export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  return (
    <header className={`section-heading align-${align}`} data-reveal>
      <p className="section-eyebrow">
        <span aria-hidden="true" />
        {eyebrow}
        <span aria-hidden="true" />
      </p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  )
}
