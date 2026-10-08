import { describe, expect, it } from 'vitest'
import {
  coupleProfiles,
  gallery,
  getGoogleFormEmbedUrl,
  loveNotes,
  rsvpConfig,
} from './data'

describe('scroll wedding content', () => {
  it('provides a complete editorial gallery with useful alt text', () => {
    expect(gallery).toHaveLength(3)
    expect(gallery.every((image) => image.src.endsWith('.webp'))).toBe(true)
    expect(gallery.every((image) => image.alt.length > 10)).toBe(true)
  })

  it('provides a profile and personal note for both partners', () => {
    expect(coupleProfiles).toHaveLength(2)
    expect(loveNotes).toHaveLength(2)
    expect(coupleProfiles.map((profile) => profile.name)).toEqual([
      'Lưu Doanh',
      'Minh Trang',
    ])
    expect(loveNotes.every((note) => note.message.length > 30)).toBe(true)
  })

  it('keeps RSVP disabled until a Google Form URL is configured', () => {
    expect(rsvpConfig.formUrl).toBe('')
    expect(getGoogleFormEmbedUrl(rsvpConfig.formUrl)).toBe('')
    expect(
      getGoogleFormEmbedUrl(
        'https://docs.google.com/forms/d/e/example/viewform?usp=sharing',
      ),
    ).toBe('https://docs.google.com/forms/d/e/example/viewform?embedded=true')
  })
})
