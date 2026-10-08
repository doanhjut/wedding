import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import WeddingSections from './WeddingSections'

describe('WeddingSections', () => {
  it('renders every narrative section in the intended order', () => {
    const html = renderToStaticMarkup(
      <WeddingSections onSaveCalendar={() => {}} onShare={() => {}} />,
    )

    const ids = [
      'invitation',
      'gallery',
      'couple',
      'love-notes',
      'schedule',
      'venues',
      'rsvp',
      'thank-you',
    ]

    ids.forEach((id) => expect(html).toContain(`id="${id}"`))
    expect(ids.map((id) => html.indexOf(`id="${id}"`))).toEqual(
      [...ids.map((id) => html.indexOf(`id="${id}"`))].sort((a, b) => a - b),
    )
    expect(html).toContain('Lễ vu quy')
    expect(html).toContain('Lễ vu quy · 25/10/2026')
    expect(html).not.toContain('Tiệc nhà gái · 24/10/2026')
    expect(html).toContain('class="invite-time"')
    expect(html).toContain('Mở Google Maps')
    expect(html).toContain('Xác nhận tham dự')
    expect(html).toContain('Sự hiện diện của Quý Khách')
  })
})
