export type VillageEvent = {
  slug: string
  name: string
  dateISO: string
  dateLabel: string
  weekday: string
  opens: string
  closes: string
  age: string
  ticketUrl: string
  listUrl: string
  tag?: string
  image?: string
}

export const events: VillageEvent[] = [
  {
    slug: 'show-nacional-coral-das-quebradas',
    name: 'SHOW NACIONAL: CORAL DAS QUEBRADAS',
    dateISO: '2026-10-11T22:00:00-03:00',
    dateLabel: '11 OUT',
    weekday: 'DOMINGO',
    opens: '22H',
    closes: '05H',
    age: '18+',
    ticketUrl: 'https://www.pensanoevento.com.br/eventos/110878/show-nacional-coral-das-quebradas',
    listUrl: 'https://www.pensanoevento.com.br/nomenalista/110878/show-nacional-coral-das-quebradas',
    tag: 'SHOW NACIONAL',
    image: 'https://files.pensanoevento.com.br/images/eventos/6ac130f4b36f8_capa.webp'
  },
  {
    slug: 'terca-da-maldade-13-outubro',
    name: 'Terça da Maldade',
    dateISO: '2026-10-13T22:00:00-03:00',
    dateLabel: '13 OUT',
    weekday: 'TERÇA',
    opens: '22H',
    closes: '05H',
    age: '18+',
    ticketUrl: 'https://www.pensanoevento.com.br/eventos/107117/terca-da-maldade',
    listUrl: 'https://www.pensanoevento.com.br/nomenalista/107117/terca-da-maldade'
  },
  {
    slug: 'village-sexta-16-outubro',
    name: 'Village | Sexta-Feira',
    dateISO: '2026-10-16T22:00:00-03:00',
    dateLabel: '16 OUT',
    weekday: 'SEXTA',
    opens: '22H',
    closes: '05H',
    age: '18+',
    ticketUrl: 'https://www.pensanoevento.com.br/eventos/107135/village-sexta-feira',
    listUrl: 'https://www.pensanoevento.com.br/nomenalista/107135/village-sexta-feira'
  },
  {
    slug: 'village-sabado-17-outubro',
    name: 'Village | Sábado',
    dateISO: '2026-10-17T22:00:00-03:00',
    dateLabel: '17 OUT',
    weekday: 'SÁBADO',
    opens: '22H',
    closes: '05H',
    age: '18+',
    ticketUrl: 'https://www.pensanoevento.com.br/eventos/107145/village-sabado',
    listUrl: 'https://www.pensanoevento.com.br/nomenalista/107145/village-sabado'
  },
  {
    slug: 'village-terca-20-outubro',
    name: 'Village | Terça-Feira',
    dateISO: '2026-10-20T22:00:00-03:00',
    dateLabel: '20 OUT',
    weekday: 'TERÇA',
    opens: '22H',
    closes: '05H',
    age: '18+',
    ticketUrl: 'https://www.pensanoevento.com.br/eventos/107118/village-terca-feira',
    listUrl: 'https://www.pensanoevento.com.br/nomenalista/107118/village-terca-feira'
  }
]

export const nextEvent = events[0]

export const village = {
  name: 'Village Concept Bar',
  address: 'Rua Domingos André Zanini, 277 — Barreiros — São José/SC',
  phoneDisplay: '(48) 99658-0908',
  whatsapp: '5548996580908',
  instagram: 'https://www.instagram.com/villageconceptbar/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Village+Concept+Bar+Rua+Domingos+Andre+Zanini+277+Sao+Jose+SC',
  ticketHub: 'https://www.pensanoevento.com.br/locais/111/village-concept-bar'
}
