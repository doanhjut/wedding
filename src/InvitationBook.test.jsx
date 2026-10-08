import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import InvitationBook from './InvitationBook'

describe('InvitationBook', () => {
  it('renders every sheet while exposing only the cover', () => {
    const pages = Array.from({ length: 7 }, (_, index) => ({
      id: `page-${index}`,
      label: `Trang ${index + 1}`,
      content: <p>Nội dung {index + 1}</p>,
    }))

    const html = renderToStaticMarkup(<InvitationBook pages={pages} reduced />)

    expect(html).toContain('aria-label="Cuốn thiệp cưới Minh Trang và Lưu Doanh"')
    expect((html.match(/class=\"book-page/g) || []).length).toBe(7)
    expect(html).toContain('Trang 1 / 7')
    expect((html.match(/aria-hidden=\"false\"/g) || []).length).toBe(1)
  })
})
