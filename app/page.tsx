import Link from 'next/link'
import { events, nextEvent, village } from '../lib/events'

const wa = (message: string) => `https://wa.me/${village.whatsapp}?text=${encodeURIComponent(message)}`

export default function HomePage() {
  return (
    <main>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Village Concept Bar — início">
          <img src="https://files.pensanoevento.com.br/images/eventos/grupos/logo_village.png" alt="Village Concept Bar" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#agenda">Agenda</a>
          <a href="#experiencia">Experiência</a>
          <a href="#reservas">Reservas</a>
          <a href="#galeria">Galeria</a>
          <a href="#localizacao">Localização</a>
        </nav>
        <a className="header-ticket" href={village.ticketHub} target="_blank" rel="noreferrer">Ingressos</a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <img src={nextEvent.image} alt="" fetchPriority="high" />
          <div className="hero-vignette" />
          <div className="hero-grain" />
        </div>
        <div className="hero-content">
          <p className="eyebrow">São José • Santa Catarina • 18+</p>
          <h1 id="hero-title"><span>VILLAGE</span><br />CONCEPT BAR</h1>
          <div className="hero-bottom">
            <div>
              <p className="hero-line">A maior do continente.</p>
              <p className="hero-subline">Agenda, ingressos, listas e reservas em um só lugar.</p>
            </div>
            <div className="hero-actions">
              <a className="btn btn-gold" href="#agenda">Ver próximos eventos</a>
              <a className="btn btn-ghost" href="#reservas">Listas & reservas</a>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#proximo" aria-label="Ir para o próximo evento">SCROLL <span>↓</span></a>
      </section>

      <div id="conteudo" />

      <section className="next-event section" id="proximo">
        <div className="section-kicker">Próxima noite</div>
        <div className="next-grid">
          <div className="poster-wrap">
            {nextEvent.image && <img src={nextEvent.image} alt={`Poster oficial — ${nextEvent.name}`} loading="eager" />}
            <span className="poster-label">AMANHÃ</span>
          </div>
          <div className="next-copy">
            <p className="event-tag">{nextEvent.tag}</p>
            <h2>{nextEvent.name}</h2>
            <div className="event-meta-large">
              <span>{nextEvent.weekday}</span>
              <strong>{nextEvent.dateLabel}</strong>
              <span>{nextEvent.opens} → {nextEvent.closes}</span>
              <span>{nextEvent.age}</span>
            </div>
            <p className="muted">Ingressos e lista são processados no sistema oficial da casa.</p>
            <div className="button-row">
              <a className="btn btn-gold" href={nextEvent.ticketUrl} target="_blank" rel="noreferrer">Garantir ingresso</a>
              <a className="btn btn-outline" href={nextEvent.listUrl} target="_blank" rel="noreferrer">Colocar nome na lista</a>
            </div>
          </div>
        </div>
      </section>

      <section className="agenda section" id="agenda">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Agenda oficial</span>
            <h2>As próximas noites.</h2>
          </div>
          <a className="text-link" href={village.ticketHub} target="_blank" rel="noreferrer">Ver agenda no Pensanoevento ↗</a>
        </div>
        <div className="agenda-list">
          {events.map((event, index) => (
            <article className="agenda-row" key={event.slug}>
              <div className="agenda-index">0{index + 1}</div>
              <div className="agenda-date"><strong>{event.dateLabel}</strong><span>{event.weekday}</span></div>
              <div className="agenda-name">
                {event.tag && <span className="mini-tag">{event.tag}</span>}
                <h3>{event.name}</h3>
                <p>{event.opens} → {event.closes} · {event.age}</p>
              </div>
              <div className="agenda-actions">
                <Link href={`/eventos/${event.slug}`} className="event-detail">Detalhes</Link>
                <a href={event.ticketUrl} target="_blank" rel="noreferrer">Ingresso ↗</a>
                <a href={event.listUrl} target="_blank" rel="noreferrer">Lista ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto" id="experiencia">
        <div className="manifesto-inner">
          <span className="section-kicker">Experiência Village</span>
          <p className="manifesto-line">São José.</p>
          <p className="manifesto-line outline-text">Luzes acesas.</p>
          <p className="manifesto-line">Village.</p>
          <div className="manifesto-note">
            <p>Não é sobre explicar a noite.</p>
            <p>É sobre estar onde ela acontece.</p>
          </div>
        </div>
      </section>

      <section className="reserve section" id="reservas">
        <div className="reserve-intro">
          <span className="section-kicker">Reservas</span>
          <h2>Viva a Village<br />de outro nível.</h2>
          <p>Camarotes, bistrôs e celebrações com atendimento direto da equipe.</p>
        </div>
        <div className="reserve-options">
          <a className="reserve-item" href={wa('Olá! Vi os camarotes pelo site da Village e gostaria de consultar disponibilidade para um evento.')} target="_blank" rel="noreferrer">
            <span>01</span><div><h3>Camarotes & bistrôs</h3><p>Consulte disponibilidade para sua noite.</p></div><b>↗</b>
          </a>
          <a className="reserve-item" href={wa('Olá! Quero comemorar meu aniversário na Village e gostaria de conhecer as opções.')} target="_blank" rel="noreferrer">
            <span>02</span><div><h3>Aniversários</h3><p>Seu momento, dentro da energia da casa.</p></div><b>↗</b>
          </a>
          <a className="reserve-item" href={wa('Olá! Gostaria de informações para realizar uma formatura ou confraternização na Village.')} target="_blank" rel="noreferrer">
            <span>03</span><div><h3>Formaturas & confraternizações</h3><p>Fale com a equipe sobre o formato ideal.</p></div><b>↗</b>
          </a>
          <a className="reserve-item" href={wa('Olá! Gostaria de informações para uma despedida/comemoração na Village.')} target="_blank" rel="noreferrer">
            <span>04</span><div><h3>Comemorações</h3><p>Despedidas e grupos com atendimento direto.</p></div><b>↗</b>
          </a>
        </div>
      </section>

      <section className="gallery section" id="galeria">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Conteúdo</span>
            <h2>A noite continua<br />no Instagram.</h2>
          </div>
          <a className="btn btn-outline" href={village.instagram} target="_blank" rel="noreferrer">@villageconceptbar ↗</a>
        </div>
        <div className="gallery-stage">
          <div className="gallery-word">VILLAGE</div>
          <div className="gallery-poster"><img src={nextEvent.image} alt={`Destaque atual da Village — ${nextEvent.name}`} loading="lazy" /></div>
          <div className="gallery-copy"><p>Eventos.</p><p>Shows.</p><p>Gente.</p><p>Movimento.</p></div>
        </div>
      </section>

      <section className="location section" id="localizacao">
        <div className="location-title">
          <span className="section-kicker">Onde a noite acontece</span>
          <h2>Village Concept Bar</h2>
        </div>
        <div className="location-grid">
          <div className="address-block">
            <p>Rua Domingos André Zanini, 277</p>
            <p>Barreiros · São José — SC</p>
            <p className="muted">Confira a agenda para horários de cada evento.</p>
          </div>
          <div className="location-actions">
            <a className="btn btn-gold" href={village.maps} target="_blank" rel="noreferrer">Como chegar ↗</a>
            <a className="btn btn-outline" href={wa('Olá! Vim pelo site da Village e gostaria de falar com a equipe.')} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <p>PRÓXIMA NOITE</p>
        <h2>{nextEvent.name}</h2>
        <div className="final-meta">{nextEvent.dateLabel} · {nextEvent.opens} · SÃO JOSÉ/SC · {nextEvent.age}</div>
        <a className="btn btn-gold btn-large" href={nextEvent.ticketUrl} target="_blank" rel="noreferrer">Garantir ingresso</a>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="https://files.pensanoevento.com.br/images/eventos/grupos/logo_village.png" alt="Village Concept Bar" />
          <p>A maior do continente.</p>
        </div>
        <div className="footer-links">
          <a href="#agenda">Agenda</a>
          <a href="#reservas">Reservas</a>
          <a href={village.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href={wa('Olá! Vim pelo site da Village e gostaria de falar com a equipe.')} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          <a href={village.maps} target="_blank" rel="noreferrer">Localização ↗</a>
          <Link href="/politica-de-privacidade">Privacidade</Link>
        </div>
        <div className="footer-legal"><span>18+</span><span>© 2026 Village Concept Bar</span></div>
      </footer>

      <nav className="mobile-action-bar" aria-label="Ações rápidas">
        <a href="#agenda">Agenda</a>
        <a href={village.ticketHub} target="_blank" rel="noreferrer">Ingressos</a>
        <a href="#reservas">Reservas</a>
      </nav>
    </main>
  )
}
