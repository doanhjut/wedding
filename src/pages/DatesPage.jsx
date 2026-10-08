import { PageKicker } from './Decorations'

const dates = [
  {
    day: '24',
    weekday: 'Thứ bảy',
    label: 'Đãi tiệc nhà gái',
    lunar: '15 tháng 9 năm Bính Ngọ',
    symbol: 'sun',
  },
  {
    day: '25',
    weekday: 'Chủ nhật',
    label: 'Ngày vu quy & thành hôn',
    lunar: '16 tháng 9 năm Bính Ngọ',
    symbol: 'moon',
  },
]

export default function DatesPage() {
  return (
    <section className="invitation-sheet sheet-dates">
      <div className="date-orbit orbit-large" aria-hidden="true" />
      <div className="date-orbit orbit-small" aria-hidden="true" />
      <PageKicker>Tháng mười · 2026</PageKicker>
      <h2>Ngày lành đã chọn</h2>
      <div className="date-cards">
        {dates.map((date) => (
          <article className="date-card" key={date.day}>
            <span className={`celestial celestial-${date.symbol}`} aria-hidden="true" />
            <div>
              <strong>{date.day}</strong>
              <small>/ 10</small>
            </div>
            <p>{date.weekday}</p>
            <h3>{date.label}</h3>
            <span className="lunar-date">Ngày âm · {date.lunar}</span>
          </article>
        ))}
      </div>
      <p className="date-year">Bính Ngọ</p>
    </section>
  )
}
