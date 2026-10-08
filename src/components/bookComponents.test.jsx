import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import BookControls from './BookControls'
import PageTurn from './PageTurn'

describe('PageTurn', () => {
  it('marks only the current sheet as readable', () => {
    const current = renderToStaticMarkup(
      <PageTurn index={2} currentPage={2} label="Ngày cưới">
        Nội dung
      </PageTurn>,
    )
    const past = renderToStaticMarkup(
      <PageTurn index={1} currentPage={2} label="Gia đình">
        Nội dung cũ
      </PageTurn>,
    )

    expect(current).toContain('page-active')
    expect(current).toContain('aria-hidden="false"')
    expect(past).toContain('page-past')
    expect(past).toContain('aria-hidden="true"')
  })
})

describe('BookControls', () => {
  it('renders page status and one accessible dot per sheet', () => {
    const html = renderToStaticMarkup(
      <BookControls
        currentPage={3}
        pageCount={7}
        onPrevious={() => {}}
        onNext={() => {}}
        onGo={() => {}}
      />,
    )

    expect(html).toContain('Trang 4 / 7')
    expect((html.match(/aria-label=\"Đến trang/g) || []).length).toBe(7)
  })

  it('disables previous on the cover and next on the final page', () => {
    const cover = renderToStaticMarkup(
      <BookControls
        currentPage={0}
        pageCount={7}
        onPrevious={() => {}}
        onNext={() => {}}
        onGo={() => {}}
      />,
    )
    const ending = renderToStaticMarkup(
      <BookControls
        currentPage={6}
        pageCount={7}
        onPrevious={() => {}}
        onNext={() => {}}
        onGo={() => {}}
      />,
    )

    expect(cover).toMatch(
      /<button(?=[^>]*aria-label=\"Trang trước\")(?=[^>]*disabled)[^>]*>/,
    )
    expect(ending).toMatch(
      /<button(?=[^>]*aria-label=\"Trang sau\")(?=[^>]*disabled)[^>]*>/,
    )
  })
})
