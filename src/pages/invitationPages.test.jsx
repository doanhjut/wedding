import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { createInvitationPages } from './index'

describe('createInvitationPages', () => {
  it('creates seven distinct invitation sheets with all essential details', () => {
    const pages = createInvitationPages({
      onSaveCalendar: () => {},
      onShare: () => {},
    })
    const html = pages.map((page) => renderToStaticMarkup(page.content)).join('')

    expect(pages).toHaveLength(7)
    expect(new Set(pages.map((page) => page.id)).size).toBe(7)
    expect(html).toContain('Minh Trang')
    expect(html).toContain('Lưu Doanh')
    expect(html).toContain('Hai gia đình')
    expect(html).toContain('24')
    expect(html).toContain('25')
    expect(html).toContain('Lễ vu quy')
    expect(html).toContain('Lễ thành hôn')
    expect(html).toContain('Ninh Bình')
    expect(html).toContain('Hải Phòng')
    expect(html).toContain('Lưu vào lịch')
  })
})
