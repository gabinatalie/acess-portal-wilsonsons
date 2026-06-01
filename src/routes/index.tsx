import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
  Linkedin,
  Instagram,
  Youtube,
  Home,
  Anchor,
  ExternalLink,
} from "lucide-react";
import heroAsset from "@/assets/hero-port-new.jpg.asset.json";
import safetyEpi from "@/assets/safety-epi.webp.asset.json";
import safetyTeam from "@/assets/safety-team.jpg.asset.json";
import safetyEmergency from "@/assets/safety-emergency.png.asset.json";
import wilsonLogo from "@/assets/wilson-sons-logo.png";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wilson Sons | Portal de Acesso Operacional" },
      {
        name: "description",
        content:
          "Portal oficial de credenciamento e integração de segurança Wilson Sons. Agende sua visita às operações portuárias.",
      },
      { property: "og:title", content: "Wilson Sons | Portal de Acesso Operacional" },
      {
        property: "og:description",
        content: "Credenciamento e integração de segurança obrigatórios para visitas.",
      },
      { property: "og:image", content: heroAsset.url },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* NAV — Glassmorphism */}
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/60 backdrop-blur-md supports-[backdrop-filter]:bg-white/55 shadow-[0_4px_30px_-12px_rgba(0,51,88,0.08)]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
          <a href="#top" className="flex items-center px-2">
            <img src={wilsonLogo} alt="Wilson, Sons" className="h-16 w-auto" />
          </a>
          <a href="#agendamento">
            <Button className="h-11 rounded-full bg-cyan px-6 font-semibold text-cyan-foreground shadow-md shadow-cyan/30 transition-transform hover:bg-cyan/90 hover:scale-[1.02]">
              Agendar Visita
            </Button>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroAsset.url}
            alt="Operações portuárias Wilson Sons"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/55" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-44">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan" /> Credenciamento Obrigatório
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="hero-title-gradient">Portal de Acesso Operacional</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              Na Wilson Sons, a segurança é o nosso pilar fundamental. Para ingressar em
              nossas operações portuárias, todo visitante deve concluir a integração de
              segurança e o credenciamento prévio.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#integracao">
                <Button
                  size="lg"
                  className="h-12 rounded-full bg-cyan px-7 font-semibold text-cyan-foreground shadow-lg shadow-cyan/30 transition-transform hover:bg-cyan/90 hover:scale-[1.02]"
                >
                  Ver Integração <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="https://www.wilsonsons.com.br" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-white/40 bg-transparent px-7 font-semibold text-white transition-transform hover:bg-white/10 hover:text-white hover:scale-[1.02]"
                >
                  Institucional <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRAÇÃO — split sections */}
      <section id="integracao" className="relative dot-grid">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
                Integração de Segurança
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl">
                Antes de entrar, assista e leia.
              </h2>
              <p className="mt-4 text-muted-foreground">
                A integração é obrigatória para todos os visitantes e prestadores de serviço.
              </p>
            </div>
          </Reveal>

          {/* VIDEO HD */}
          <Reveal delay={120}>
            <div className="mx-auto mt-14 max-w-5xl">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl soft-shadow ring-1 ring-navy/5">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/rB6jcirH848?vq=hd1080&hd=1&rel=0&modestbranding=1"
                  title="Vídeo de Integração de Segurança Wilson Sons"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>

          {/* SPLIT SECTIONS */}
          <div className="mt-24 space-y-24">
            <SplitSection
              eyebrow="01 · EPIs Obrigatórios"
              title="Equipamentos de Proteção Individual"
              body="O uso de EPIs é obrigatório em toda a área operacional: capacete, protetor auricular, óculos de proteção, colete refletivo e calçado fechado de segurança. Sem o conjunto completo, o acesso ao pátio não é liberado."
              bullets={["Capacete certificado", "Protetor auricular", "Colete e calça refletivos"]}
              image={safetyEpi.url}
              reverse={false}
            />
            <SplitSection
              eyebrow="02 · Vestimenta e Equipe"
              title="Vestimenta Exigida no Pátio"
              body="Proibido o uso de bermudas, regatas e chinelos. Utilize uniforme de manga longa, calça comprida e calçados de segurança. Visitantes recebem o kit ao se apresentar na portaria após a integração."
              bullets={["Manga longa e calça comprida", "Calçado fechado de segurança", "Identificação visível"]}
              image={safetyTeam.url}
              reverse={true}
            />
            <SplitSection
              eyebrow="03 · Conduta em Emergências"
              title="Protocolo de Emergência"
              body="Ao soar o alarme, mantenha a calma e siga rigorosamente o anfitrião responsável até o ponto de encontro indicado. Não retorne ao local até liberação oficial do brigadista da operação."
              bullets={["Não se separe do grupo", "Use as rotas sinalizadas", "Aguarde liberação oficial"]}
              image={safetyEmergency.url}
              reverse={false}
            />
          </div>
        </div>
      </section>

      {/* AGENDAMENTO — Sticky scroll */}
      <section id="agendamento" className="relative bg-secondary/40 dot-grid py-24 md:py-32">
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid items-start gap-12 md:grid-cols-5 md:gap-16">
            {/* LEFT — Sticky (40%) */}
            <div className="md:col-span-2 md:sticky md:top-32 md:self-start">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                  <CalendarCheck className="h-3.5 w-3.5" /> Formulário Oficial
                </span>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl">
                  Solicite seu Acesso
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  Preencha o formulário ao lado para iniciar seu credenciamento. Você receberá
                  um e-mail com as instruções de comparecimento e a confirmação da sua visita
                  ao terminal Wilson Sons.
                </p>
                <ul className="mt-8 space-y-4 text-sm">
                  {[
                    "Resposta em até 48h úteis",
                    "Confirmação automática por e-mail",
                    "Suporte direto da equipe operacional",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-navy/85">
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-cyan/15 text-cyan">
                        <ShieldCheck className="h-4 w-4" />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* RIGHT — Scrollable (60%) */}
            <div className="md:col-span-3">
              <Reveal delay={120}>
                <div className="w-full rounded-3xl bg-white p-3 soft-shadow ring-1 ring-white">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScRlIx-L5OH76PvOqChTTVgRZF6bL6po1FoQ8DNPl54ZcMCLA/viewform?embedded=true"
                    className="h-[1300px] w-full rounded-2xl bg-white"
                    title="Formulário de Agendamento Wilson Sons"
                  >
                    Carregando…
                  </iframe>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="inline-block rounded-xl bg-white p-4">
                <img src={wilsonLogo} alt="Wilson, Sons" className="h-12 w-auto" />
              </div>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75">
                Portal oficial de credenciamento, integração e segurança das operações
                portuárias Wilson Sons.
              </p>
              <div className="mt-6 flex items-center gap-3">
                {[
                  { Icon: Home, label: "Site" },
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Youtube, label: "YouTube" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-cyan/40 text-cyan transition-all hover:border-cyan hover:bg-cyan/15 hover:scale-105"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <FooterCol title="Institucional" links={["Sobre nós", "Política de Segurança", "Sustentabilidade", "Carreiras"]} />
            <FooterCol title="Operações" links={["Credenciamento", "Integração", "Visitas Técnicas", "Fornecedores"]} />
          </div>
          <div className="mt-14 border-t border-white/10 pt-8 text-center">
            <p className="flex items-center justify-center gap-2 text-xs tracking-wide text-white/70">
              <Anchor className="h-3.5 w-3.5 text-cyan" />
              Projeto desenvolvido por Gabrielle Alves para fins educativos na KODIE Academy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Split section ---------- */

function SplitSection({
  eyebrow,
  title,
  body,
  bullets,
  image,
  reverse,
}: {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  reverse: boolean;
}) {
  return (
    <Reveal>
      <div className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">
            {eyebrow}
          </span>
          <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
            {title}
          </h3>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{body}</p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm font-medium text-navy/85">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-cyan/15 text-cyan">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="group overflow-hidden rounded-3xl bg-secondary soft-shadow transition-transform duration-500 hover:scale-[1.02]">
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm text-white/75">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition-colors hover:text-white">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* AlertTriangle imported for potential reuse */
void AlertTriangle;
