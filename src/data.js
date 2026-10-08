export const couple = {
  bride: 'Minh Trang',
  groom: 'Lưu Doanh',
  brideRole: 'Con út',
  groomRole: 'Con cả',
}

export const gallery = [
  {
    id: 'together',
    src: '/artwork/scroll/hero.webp',
    alt: 'Đôi uyên ương trong tà áo dài tại một sân nhà cổ',
    caption: 'Ngày mình gọi hai tiếng chúng ta',
  },
  {
    id: 'details',
    src: '/artwork/scroll/details.webp',
    alt: 'Đôi nhẫn cưới trên tay cô dâu và chú rể',
    caption: 'Từ hôm nay, tay nắm tay',
  },
  {
    id: 'ceremony',
    src: '/artwork/scroll/ceremony.webp',
    alt: 'Đôi uyên ương trước cổng hoa trong buổi lễ cưới',
    caption: 'Chặng đường mới bắt đầu',
  },
]

export const coupleProfiles = [
  {
    id: 'groom',
    label: 'Chú rể',
    name: 'Lưu Doanh',
    role: 'Con cả',
    image: '/artwork/scroll/groom.webp',
    description:
      'Một người điềm tĩnh, ấm áp, chọn đồng hành và chăm sóc người mình thương qua từng điều giản dị.',
  },
  {
    id: 'bride',
    label: 'Cô dâu',
    name: 'Minh Trang',
    role: 'Con út',
    image: '/artwork/scroll/bride.webp',
    description:
      'Một người yêu những điều tinh tế, tin vào sự chân thành và luôn muốn ngôi nhà nhỏ ngập đầy tiếng cười.',
  },
]

export const loveNotes = [
  {
    id: 'from-groom',
    from: 'Lưu Doanh gửi Minh Trang',
    message:
      'Từ hôm nay, mọi ngày bình thường đều trở thành ngày của chúng ta. Anh hứa sẽ cùng em đi qua những mùa vui và cả những ngày cần một bàn tay nắm chặt.',
    image: '/artwork/scroll/ceremony.webp',
  },
  {
    id: 'from-bride',
    from: 'Minh Trang gửi Lưu Doanh',
    message:
      'Giữa rất nhiều con đường, em chọn con đường có anh. Mong rằng mỗi ngày sau hôm nay, chúng ta vẫn nhìn nhau bằng ánh mắt dịu dàng như thuở đầu.',
    image: '/artwork/scroll/details.webp',
  },
]

// Paste the public Google Forms "viewform" URL here after creating the RSVP form.
export const rsvpConfig = {
  formUrl: '',
  responseDeadline: '15/10/2026',
}

export function getGoogleFormEmbedUrl(formUrl) {
  if (!formUrl) return ''
  const [base] = formUrl.split('?')
  return `${base}?embedded=true`
}

export const families = [
  {
    id: 'groom',
    title: 'Nhà trai',
    father: 'Ông Lưu Xuân Diệu',
    mother: 'Bà Trần Thị Tho',
    address: 'Thôn Ninh Thành, xã Vĩnh Lại, TP Hải Phòng',
  },
  {
    id: 'bride',
    title: 'Nhà gái',
    father: 'Ông Trần Quang Hinh',
    mother: 'Bà Nguyễn Thị Loan',
    address: 'Tổ dân phố Đông Mỹ Thắng, phường Đông A, tỉnh Ninh Bình',
  },
]

const brideFamily = families.find((family) => family.id === 'bride')
const groomFamily = families.find((family) => family.id === 'groom')

export const events = [
  {
    id: 'party-bride',
    kind: 'Đãi tiệc',
    side: 'Nhà gái',
    place: 'Tư gia nhà gái',
    address: brideFamily.address,
    time: '10:00',
    weekday: 'Thứ bảy',
    date: '24/10/2026',
    lunar: '15 tháng 9 năm Bính Ngọ',
    start: '20261024T100000',
    end: '20261024T120000',
  },
  {
    id: 'vu-quy',
    kind: 'Lễ vu quy',
    side: 'Nhà gái',
    place: 'Tư gia nhà gái',
    address: brideFamily.address,
    time: '08:00',
    weekday: 'Chủ nhật',
    date: '25/10/2026',
    lunar: '16 tháng 9 năm Bính Ngọ',
    start: '20261025T080000',
    end: '20261025T093000',
  },
  {
    id: 'thanh-hon',
    kind: 'Lễ thành hôn',
    side: 'Nhà trai',
    place: 'Tư gia nhà trai',
    address: groomFamily.address,
    time: '11:00',
    weekday: 'Chủ nhật',
    date: '25/10/2026',
    lunar: '16 tháng 9 năm Bính Ngọ',
    start: '20261025T110000',
    end: '20261025T120000',
  },
  {
    id: 'party-groom',
    kind: 'Đãi tiệc',
    side: 'Nhà trai',
    place: 'Tư gia nhà trai',
    address: groomFamily.address,
    time: '12:00',
    weekday: 'Chủ nhật',
    date: '25/10/2026',
    lunar: '16 tháng 9 năm Bính Ngọ',
    start: '20261025T120000',
    end: '20261025T140000',
  },
]

export const venues = [
  {
    id: 'groom-home',
    title: 'Tư gia nhà trai',
    region: 'Hải Phòng',
    address: groomFamily.address,
  },
  {
    id: 'bride-home',
    title: 'Tư gia nhà gái',
    region: 'Ninh Bình',
    address: brideFamily.address,
  },
]

export function mapsUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}

export function calendarFile() {
  const stamp = '20260925T030000Z'
  const body = events
    .map(
      (event) => `BEGIN:VEVENT
UID:${event.id}@duyen-lua
DTSTAMP:${stamp}
DTSTART;TZID=Asia/Ho_Chi_Minh:${event.start}
DTEND;TZID=Asia/Ho_Chi_Minh:${event.end}
SUMMARY:${event.kind} — Lưu Doanh & Minh Trang
LOCATION:${event.place}, ${event.address}
DESCRIPTION:${event.weekday}, ${event.date}. Ngày âm: ${event.lunar}
END:VEVENT`,
    )
    .join('\n')

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Duyen Lua//Wedding//VI
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VTIMEZONE
TZID:Asia/Ho_Chi_Minh
X-LIC-LOCATION:Asia/Ho_Chi_Minh
BEGIN:STANDARD
TZOFFSETFROM:+0700
TZOFFSETTO:+0700
TZNAME:ICT
DTSTART:19700101T000000
END:STANDARD
END:VTIMEZONE
${body}
END:VCALENDAR`
}
