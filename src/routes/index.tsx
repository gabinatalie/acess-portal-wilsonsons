import { createFileRoute } from "@tanstack/react-router";
import { Shirt, HardHat, AlertTriangle, Anchor, CalendarCheck, ShieldCheck, ArrowRight } from "lucide-react";
import heroPort from "@/assets/hero-port.jpg";
import wilsonLogo from "@/assets/wilson-sons-logo.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portal de Acesso Operacional | Credenciamento Portuário" },
      { name: "description", content: "Portal de credenciamento e integração de segurança para acesso às operações portuárias. Agende sua visita." },
      { property: "og:title", content: "Portal de Acesso Operacional" },
      { property: "og:description", content: "Credenciamento e integração de segurança obrigatórios para visitas." },
      { property: "og:image", content: heroPort },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center">
            <img src={wilsonLogo} alt="Wilson, Sons" className="h-10 w-auto" />
          </a>
          <a href="#agendamento">
            <Button className="rounded-full bg-cyan text-cyan-foreground hover:bg-cyan/90 font-semibold px-5">
              Agendar Visita
            </Button>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroPort} alt="Operações portuárias ao entardecer" width={1920} height={1280} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-28 md:py-40">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan" /> Credenciamento Obrigatório
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Portal de Acesso <span className="text-cyan">Operacional</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
              A segurança é nossa prioridade. Para ingressar na área portuária, todo visitante deve concluir a integração de segurança e o credenciamento prévio.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#agendamento">
                <Button size="lg" className="rounded-full bg-cyan text-cyan-foreground hover:bg-cyan/90 font-semibold px-7 h-12">
                  Iniciar Credenciamento <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#integracao">
                <Button size="lg" variant="outline" className="rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold px-7 h-12">
                  Ver Integração
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRAÇÃO */}
      <section id="integracao" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Integração de Segurança</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">Antes de entrar, assista e leia</h2>
          <p className="mt-4 text-muted-foreground">A integração é obrigatória para todos os visitantes e prestadores de serviço.</p>
        </div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl shadow-navy/10">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/rB6jcirH848"
                title="Vídeo de Integração de Segurança"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="grid gap-5">
            <InfoCard
              icon={<Shirt className="h-6 w-6" />}
              title="Vestimenta Proibida"
              desc="Não é permitido o uso de bermudas, regatas, camisetas sem manga, chinelos ou sandálias dentro da área operacional."
              tone="danger"
            />
            <InfoCard
              icon={<HardHat className="h-6 w-6" />}
              title="EPIs Obrigatórios"
              desc="Capacete com jugular, botas de segurança com biqueira, óculos de proteção e colete refletivo são exigidos em todo o pátio."
              tone="cyan"
            />
            <InfoCard
              icon={<AlertTriangle className="h-6 w-6" />}
              title="Conduta em Emergências"
              desc="Em caso de alarme, siga o anfitrião responsável até o ponto de encontro. Não se separe do grupo e mantenha a calma."
              tone="navy"
            />
          </div>
        </div>
      </section>

      {/* AGENDAMENTO */}
      <section id="agendamento" className="bg-secondary py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
              <CalendarCheck className="h-3.5 w-3.5" /> Formulário Oficial
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">Solicite seu Acesso</h2>
            <p className="mt-4 text-muted-foreground">Preencha o formulário abaixo. Você receberá um e-mail de confirmação com as instruções de comparecimento.</p>
          </div>
          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-background p-2 shadow-xl shadow-navy/10">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScRlIx-L5OH76PvOqChTTVgRZF6bL6po1FoQ8DNPl54ZcMCLA/viewform?embedded=true"
              className="h-[1100px] w-full rounded-2xl"
              title="Formulário de Agendamento"
            >
              Carregando…
            </iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan text-cyan-foreground">
                  <Anchor className="h-5 w-5" />
                </span>
                <span className="text-lg font-bold">PortAccess</span>
              </div>
              <p className="mt-4 text-sm text-white/70">Portal de credenciamento e segurança operacional portuária.</p>
            </div>
            <FooterCol title="Institucional" links={["Sobre nós", "Política de Segurança", "Sustentabilidade", "Carreiras"]} />
            <FooterCol title="Operações" links={["Credenciamento", "Integração", "Visitas Técnicas", "Fornecedores"]} />
            <FooterCol title="Contato" links={["Fale Conosco", "Imprensa", "Ouvidoria", "FAQ"]} />
          </div>
          <div className="mt-14 border-t border-white/15 pt-8 text-center text-sm text-white/70">
            Projeto desenvolvido para fins educativos na KODIE Academy
          </div>
        </div>
      </footer>
    </div>
  );
}

function InfoCard({ icon, title, desc, tone }: { icon: React.ReactNode; title: string; desc: string; tone: "danger" | "cyan" | "navy" }) {
  const toneClass =
    tone === "danger" ? "bg-destructive/10 text-destructive" : tone === "cyan" ? "bg-cyan/15 text-navy" : "bg-navy/10 text-navy";
  return (
    <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-cyan/50 hover:shadow-xl hover:shadow-navy/10">
      <div className="flex items-start gap-4">
        <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${toneClass}`}>{icon}</span>
        <div>
          <h3 className="text-lg font-semibold text-navy">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm text-white/75">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition-colors hover:text-white">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
