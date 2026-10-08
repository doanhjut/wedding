import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the envelope-led vertical wedding experience', () => {
    const html = renderToStaticMarkup(<App />)

    expect(html).toContain('class="wedding-experience')
    expect(html).toContain('aria-label="Mở thiệp cưới"')
    expect(html).toContain('id="invitation"')
    expect(html).toContain('id="thank-you"')
    expect(html).not.toContain('class="invitation-book')
  })
})
