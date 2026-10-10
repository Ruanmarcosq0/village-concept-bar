import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { events, village } from '../../../lib/events'

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const event = events.find((item) => item.slug === slug)
  if (!event) return {}
  return {
    title: event.name,
    description: `${event.name} na Village Concept Bar em São José/SC. ${event.dateLabel}, abertura ${event.opens}. Ingressos e lista oficiais.`,
    alternates: { canonical: `/eventos/${event.slug}` },
    openGraph: {
      type: 'website',
      title: `${event.name} | Village Concept Bar`,
      description: `${event.dateLabel} · ${event.opens} · São José/SC · ${event.age}`,
      url: `/eventos/${event.slug}`,
      images: event.image ? [{ url: event.image, alt: `Poster oficial — ${event.name}` }] : undefined
    }
  }
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = events.find((item) => item.slug === slug)
  if (!event) notFound()

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://village-concept-bar.vercel.app'
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    startDate: event.dateISO,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: village.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Domingos André Zanini, 277',
        addressLocality: 'São José',
        addressRegion: 'SC',
        postalCode: '88117-040',
        addressCountry: 'BR'
      }
    },
    image: event.image ? [event.image] : undefined,
    organizer: { '@type': 'Organization', name: 'Village Concept', url: siteUrl },
    offers: { '@type': 'Offer', url: event.ticketUrl, availability: 'https://schema.org/InStock' }
  }

  return (
    <main className="event-page">
      <div className="event-page-inner">
        <Link className="event-back" href="/#agenda">← Voltar para agenda</Link>
        <div className="event-page-grid">
          <div className="event-page-poster">
            {event.image ? <img src={event.image} alt={`Poster oficial — ${event.name}`} /> : <span>{event.dateLabel}</span>}
          </div>
          <div className="event-page-copy">
            {event.tag && <p className="event-tag">{event.tag}</p>}
            <h1>{event.name}</h1>
            <div className="event-info-grid">
              <div><span>Data</span><strong>{event.weekday}, {event.dateLabel}</strong></div>
              <div><span>Horário</span><strong>{event.opens} → {event.closes}</strong></div>
              <div><span>Local</span><strong>Village Concept Bar</strong></div>
              <div><span>Classificação</span><strong>{event.age}</strong></div>
            </div>
            <p className="muted">Rua Domingos André Zanini, 277 — Barreiros — São José/SC.</p>
            <div className="button-row">
              <a className="btn btn-gold" href={event.ticketUrl} target="_blank" rel="noreferrer">Ver ingressos ↗</a>
              <a className="btn btn-outline" href={event.listUrl} target="_blank" rel="noreferrer">Colocar nome na lista ↗</a>
              <a className="btn btn-outline" href={village.maps} target="_blank" rel="noreferrer">Como chegar ↗</a>
            </div>
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  )
}
