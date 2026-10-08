import { useState } from 'react'
import { calendarFile } from './data'
import { usePrefersReducedMotion } from './hooks'
import WeddingExperience from './WeddingExperience'

export default function App() {
  const reduced = usePrefersReducedMotion()
  const [status, setStatus] = useState('')

  function saveCalendar() {
    const file = new Blob([calendarFile()], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(file)
    const link = document.createElement('a')
    link.href = url
    link.download = 'minh-trang-luu-doanh.ics'
    link.click()
    URL.revokeObjectURL(url)
    setStatus('Đã tạo tệp lịch cưới.')
  }

  async function shareInvitation() {
    const shareData = {
      title: 'Thiệp cưới Lưu Doanh & Minh Trang',
      text: 'Trân trọng kính mời đến chung vui cùng Lưu Doanh & Minh Trang.',
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        setStatus('Đã mở bảng chia sẻ.')
      } else {
        await navigator.clipboard.writeText(shareData.url)
        setStatus('Đã sao chép đường dẫn thiệp.')
      }
    } catch (error) {
      if (error?.name !== 'AbortError') setStatus('Chưa thể chia sẻ thiệp.')
    }
  }

  return (
    <>
      <WeddingExperience
        reduced={reduced}
        onSaveCalendar={saveCalendar}
        onShare={shareInvitation}
      />
      <p className={`app-status ${status ? 'is-visible' : ''}`} aria-live="polite">
        {status}
      </p>
    </>
  )
}
