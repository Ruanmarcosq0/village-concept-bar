import type { Metadata } from 'next'
import './globals.css'
import './editorial.css'
import { village } from '../lib/events'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://village-concept-bar.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Village Concept Bar | São José — SC',
    template: '%s | Village Concept Bar'
  },
  description: 'Agenda, ingressos, listas e reservas da Village Concept Bar em São José, Santa Catarina.',
  keywords: ['Village Concept Bar', 'eventos São José SC', 'casa noturna São José SC', 'balada São José SC', 'shows Grande Florianópolis'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Village Concept Bar',
    title: 'Village Concept Bar | A maior do continente',
    description: 'Agenda, ingressos, listas e reservas. A noite acontece aqui.',
    url: siteUrl,
    images: [{ url: 'https://files.pensanoevento.com.br/images/eventos/6ac130f4b36f8_capa.webp', width: 1200, height: 630, alt: 'Village Concept Bar' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Village Concept Bar',
    description: 'Agenda, ingressos, listas e reservas em São José/SC.',
    images: ['https://files.pensanoevento.com.br/images/eventos/6ac130f4b36f8_capa.webp']
  },
  robots: { index: true, follow: true }
}

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'NightClub',
  name: village.name,
  url: siteUrl,
  telephone: '+55 48 99658-0908',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Domingos André Zanini, 277',
    addressLocality: 'São José',
    addressRegion: 'SC',
    postalCode: '88117-040',
    addressCountry: 'BR'
  },
  sameAs: [village.instagram],
  image: 'https://files.pensanoevento.com.br/images/eventos/grupos/logo_village.png'
}

const typography = `
  :root{--village-font:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif}
  html,body,button,input,textarea,select,*{font-family:var(--village-font)!important}
  body{font-weight:400;letter-spacing:-.01em}
  h1,h2,h3,h4,h5,h6,.hero-word,.footer-mark>div,.event-placeholder{font-family:var(--village-font)!important;font-weight:800!important;letter-spacing:-.045em!important}
  .hero-word{font-weight:900!important;letter-spacing:-.055em!important}
  .nav-left,.nav-right,.top-strip,.tiny-kicker,.hero-side-copy,.solid-cta,.outline-cta,.line-cta,.badge,.event-card-actions,.footer-columns,.mobile-action-bar{letter-spacing:.06em!important}
  p,.action-tile p,.story-copy p,.featured-info p,.reservations-copy p{line-height:1.65}
`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <style dangerouslySetInnerHTML={{ __html: typography }} />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  )
}
