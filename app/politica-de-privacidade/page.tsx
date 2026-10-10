import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <Link className="event-back" href="/">← Voltar para o site</Link>
      <h1>Política de Privacidade</h1>
      <p>Esta página informa, de forma simples, como o site da Village Concept Bar trata dados durante a navegação.</p>
      <h2>Links externos</h2>
      <p>Ingressos e listas podem direcionar para o Pensanoevento. Reservas podem direcionar para o WhatsApp. Ao acessar esses serviços, passam a valer também as políticas das respectivas plataformas.</p>
      <h2>Analytics e publicidade</h2>
      <p>Ferramentas de analytics, pixels de publicidade ou rastreamento adicional não devem ser ativadas sem autorização e sem a implementação adequada de consentimento quando aplicável.</p>
      <h2>Contato</h2>
      <p>Para dúvidas sobre o site ou privacidade, utilize os canais oficiais divulgados pela Village Concept Bar.</p>
      <p>Última atualização: outubro de 2026.</p>
    </main>
  )
}
