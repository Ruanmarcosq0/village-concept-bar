import Link from 'next/link'
import { events, nextEvent, village } from '../lib/events'

const wa = (message: string) => `https://wa.me/${village.whatsapp}?text=${encodeURIComponent(message)}`

const actionBlocks = [
  { n: '01', title: 'PRÓXIMO EVENTO', text: `${nextEvent.weekday} · ${nextEvent.dateLabel} · ${nextEvent.opens}`, href: '#proximo', cta: 'VER DESTAQUE' },
  { n: '02', title: 'INGRESSOS', text: 'Compra pelo canal oficial, sem atalhos confusos.', href: village.ticketHub, cta: 'COMPRAR AGORA', external: true },
  { n: '03', title: 'LISTA', text: 'Coloque seu nome na lista oficial da próxima noite.', href: nextEvent.listUrl, cta: 'ENTRAR NA LISTA', external: true },
  { n: '04', title: 'RESERVAS', text: 'Camarotes, bistrôs, aniversários e grupos.', href: '#reservas', cta: 'FALAR COM A EQUIPE' }
]

export default function HomePage() {
  return (
    <main className="village-site">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <div className="top-strip">
        <span>A MAIOR DO CONTINENTE.</span>
        <div>
          <a href={village.instagram} target="_blank" rel="noreferrer">INSTAGRAM</a>
          <span>•</span>
          <a href={village.maps} target="_blank" rel="noreferrer">COMO CHEGAR</a>
          <span>•</span>
          <span>18+</span>
        </div>
      </div>

      <header className="campaign-header">
        <nav className="nav-left" aria-label="Navegação principal">
          <a href="#agenda">AGENDA</a>
          <a href="#experiencia">EXPERIÊNCIA</a>
          <a href="#reservas">RESERVAS</a>
        </nav>
        <a className="campaign-logo" href="#top" aria-label="Village Concept Bar — início">
          <img src="https://files.pensanoevento.com.br/images/eventos/grupos/logo_village.png" alt="Village Concept Bar" />
        </a>
        <nav className="nav-right" aria-label="Ações">
          <a href={village.instagram} target="_blank" rel="noreferrer">INSTAGRAM</a>
          <a className="nav-ticket" href={village.ticketHub} target="_blank" rel="noreferrer">INGRESSOS ↗</a>
        </nav>
      </header>

      <section className="campaign-hero" id="top" aria-labelledby="hero-title">
        <div className="hero-side-copy">
          <span>VILLAGE CONCEPT BAR</span>
          <strong>A NOITE<br />ACONTECE<br />AQUI.</strong>
        </div>

        <div className="hero-word-wrap" aria-hidden="true">
          <div className="hero-word">VILLAGE</div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-frame">
            <img src={nextEvent.image} alt="" fetchPriority="high" />
          </div>
        </div>

        <div className="hero-bottom-left">
          <a className="solid-cta" href={nextEvent.ticketUrl} target="_blank" rel="noreferrer">GARANTIR INGRESSO</a>
          <a className="line-cta" href="#agenda">VER AGENDA <span>▶</span></a>
        </div>

        <div className="hero-bottom-right">
          <span>PRÓXIMA NOITE</span>
          <strong>{nextEvent.dateLabel}</strong>
          <em>{nextEvent.opens} · {nextEvent.age}</em>
        </div>
      </section>

      <div id="conteudo" />

      <section className="action-band" aria-label="Ações principais">
        {actionBlocks.map((item) => (
          <a key={item.n} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined} className="action-tile">
            <div className="action-icon">{item.n}</div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <span>{item.cta} →</span>
            </div>
          </a>
        ))}
      </section>

      <section className="story-section" id="experiencia">
        <div className="story-copy">
          <span className="tiny-kicker">A EXPERIÊNCIA</span>
          <h2>LUZES.<br />MÚSICA.<br />VILLAGE.</h2>
          <p>Uma casa feita para noites grandes. Agenda, atrações, pista, camarotes e celebrações reunidos em um único lugar — com acesso rápido ao que realmente importa.</p>
          <a className="solid-cta" href={village.instagram} target="_blank" rel="noreferrer">VER A VILLAGE NO INSTAGRAM</a>
        </div>
        <div className="story-image">
          <img src={nextEvent.image} alt={`Destaque atual da Village — ${nextEvent.name}`} loading="lazy" />
        </div>
      </section>

      <section className="service-icons" aria-label="Diferenciais de acesso">
        <div><b>◎</b><strong>AGENDA OFICIAL</strong><span>Próximas noites e horários</span></div>
        <div><b>◈</b><strong>INGRESSOS</strong><span>Checkout oficial do evento</span></div>
        <div><b>⌁</b><strong>LISTA</strong><span>Nome na lista em poucos toques</span></div>
        <div><b>◇</b><strong>CAMAROTES</strong><span>Atendimento direto da equipe</span></div>
        <div><b>✦</b><strong>CELEBRAÇÕES</strong><span>Aniversários e grupos</span></div>
        <div><b>↗</b><strong>LOCALIZAÇÃO</strong><span>São José · Santa Catarina</span></div>
      </section>

      <section className="featured-event" id="proximo">
        <div className="featured-head">
          <div>
            <span className="tiny-kicker">PRÓXIMA NOITE</span>
            <h2>{nextEvent.name}</h2>
          </div>
          <div className="featured-date">
            <span>{nextEvent.weekday}</span>
            <strong>{nextEvent.dateLabel}</strong>
            <em>{nextEvent.opens} → {nextEvent.closes}</em>
          </div>
        </div>
        <div className="featured-grid">
          <div className="featured-poster"><img src={nextEvent.image} alt={`Poster oficial — ${nextEvent.name}`} /></div>
          <div className="featured-info">
            <span className="badge">{nextEvent.tag || 'VILLAGE'}</span>
            <h3>A cidade dorme.<br />A Village não.</h3>
            <p>Ingressos e lista são processados pelos canais oficiais. Sem checkout falso e sem preço desatualizado.</p>
            <div className="featured-buttons">
              <a className="solid-cta" href={nextEvent.ticketUrl} target="_blank" rel="noreferrer">VER INGRESSOS</a>
              <a className="outline-cta" href={nextEvent.listUrl} target="_blank" rel="noreferrer">COLOCAR NOME NA LISTA</a>
            </div>
          </div>
        </div>
      </section>

      <section className="agenda-campaign" id="agenda">
        <div className="agenda-title-row">
          <div>
            <span className="tiny-kicker">AGENDA OFICIAL</span>
            <h2>ESCOLHA SUA NOITE</h2>
          </div>
          <a href={village.ticketHub} target="_blank" rel="noreferrer">VER TODOS ↗</a>
        </div>
        <div className="event-cards">
          {events.map((event, index) => (
            <article className={`event-card ${index === 0 ? 'highlighted' : ''}`} key={event.slug}>
              <div className="event-image-wrap">
                {event.image ? <img src={event.image} alt={`Poster — ${event.name}`} loading="lazy" /> : <div className="event-placeholder">VILLAGE</div>}
                {index === 0 && <span className="most-popular">PRÓXIMA</span>}
              </div>
              <div className="event-card-body">
                <span>{event.weekday} · {event.dateLabel}</span>
                <h3>{event.name}</h3>
                <p>{event.opens} → {event.closes} · {event.age}</p>
                <div className="event-card-actions">
                  <Link href={`/eventos/${event.slug}`}>DETALHES</Link>
                  <a href={event.ticketUrl} target="_blank" rel="noreferrer">INGRESSO ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="reservations-section" id="reservas">
        <div className="reservations-copy">
          <span className="tiny-kicker">RESERVAS & CELEBRAÇÕES</span>
          <h2>VIVA A VILLAGE<br />DE OUTRO NÍVEL.</h2>
          <p>Camarotes, bistrôs, aniversários, formaturas, confraternizações e grupos. Atendimento direto, sem precisar procurar links espalhados.</p>
        </div>
        <div className="reservation-list">
          <a href={wa('Olá! Vi os camarotes pelo site da Village e gostaria de consultar disponibilidade para um evento.')} target="_blank" rel="noreferrer"><span>01</span><strong>CAMAROTES & BISTRÔS</strong><em>↗</em></a>
          <a href={wa('Olá! Quero comemorar meu aniversário na Village e gostaria de conhecer as opções.')} target="_blank" rel="noreferrer"><span>02</span><strong>ANIVERSÁRIOS</strong><em>↗</em></a>
          <a href={wa('Olá! Gostaria de informações para realizar uma formatura ou confraternização na Village.')} target="_blank" rel="noreferrer"><span>03</span><strong>FORMATURAS & GRUPOS</strong><em>↗</em></a>
          <a href={wa('Olá! Vim pelo site da Village e gostaria de falar com a equipe de reservas.')} target="_blank" rel="noreferrer"><span>04</span><strong>FALAR COM RESERVAS</strong><em>↗</em></a>
        </div>
      </section>

      <footer className="campaign-footer">
        <div className="footer-mark">
          <div>VILLAGE</div>
          <span>CONCEPT BAR</span>
          <p>A maior do continente.</p>
        </div>
        <div className="footer-columns">
          <div><strong>VILLAGE</strong><a href="#agenda">Agenda</a><a href="#experiencia">Experiência</a><a href="#reservas">Reservas</a></div>
          <div><strong>CONTATO</strong><a href={village.instagram} target="_blank" rel="noreferrer">Instagram</a><a href={wa('Olá! Vim pelo site da Village e gostaria de falar com a equipe.')} target="_blank" rel="noreferrer">WhatsApp</a><a href={village.maps} target="_blank" rel="noreferrer">Como chegar</a></div>
          <div><strong>ENDEREÇO</strong><span>Rua Domingos André Zanini, 277</span><span>Barreiros · São José — SC</span><span>18+</span></div>
          <div><strong>LEGAL</strong><Link href="/politica-de-privacidade">Privacidade</Link><span>© 2026 Village Concept Bar</span></div>
        </div>
      </footer>

      <nav className="mobile-action-bar" aria-label="Ações rápidas">
        <a href="#agenda">AGENDA</a>
        <a href={village.ticketHub} target="_blank" rel="noreferrer">INGRESSOS</a>
        <a href="#reservas">RESERVAS</a>
      </nav>
    </main>
  )
}
