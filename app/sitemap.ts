import type { MetadataRoute } from 'next'
import { events } from '../lib/events'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://village-concept-bar.vercel.app'
  const now = new Date()
  return [
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${base}/politica-de-privacidade`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    ...events.map((event) => ({
      url: `${base}/eventos/${event.slug}`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.8
    }))
  ]
}
