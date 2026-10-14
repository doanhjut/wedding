import CoupleProfiles from './CoupleProfiles'
import InvitationSection from './InvitationSection'
import LoveNotes from './LoveNotes'
import RSVPSection from './RSVPSection'
import ScheduleTimeline from './ScheduleTimeline'
import ThankYouSection from './ThankYouSection'
import WeddingGallery from './WeddingGallery'

export default function WeddingSections({ onSaveCalendar, onShare }) {
  return (
    <>
      <InvitationSection onSaveCalendar={onSaveCalendar} onShare={onShare} />
      <WeddingGallery />
      <CoupleProfiles />
      <LoveNotes />
      <ScheduleTimeline />
      <RSVPSection />
      <ThankYouSection onSaveCalendar={onSaveCalendar} onShare={onShare} />
    </>
  )
}
