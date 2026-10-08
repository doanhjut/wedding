import ClosingPage from './ClosingPage'
import CouplePage from './CouplePage'
import CoverPage from './CoverPage'
import DatesPage from './DatesPage'
import EventsPage from './EventsPage'
import FamiliesPage from './FamiliesPage'
import VenuesPage from './VenuesPage'

export function createInvitationPages({ onSaveCalendar, onShare }) {
  return [
    { id: 'cover', label: 'Bìa thiệp', content: <CoverPage /> },
    { id: 'couple', label: 'Đôi uyên ương', content: <CouplePage /> },
    { id: 'families', label: 'Hai gia đình', content: <FamiliesPage /> },
    { id: 'dates', label: 'Ngày cưới', content: <DatesPage /> },
    { id: 'events', label: 'Lịch trình nghi lễ', content: <EventsPage /> },
    { id: 'venues', label: 'Địa điểm', content: <VenuesPage /> },
    {
      id: 'closing',
      label: 'Lời mời',
      content: <ClosingPage onSaveCalendar={onSaveCalendar} onShare={onShare} />,
    },
  ]
}
