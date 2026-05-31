import { createFileRoute } from "@tanstack/react-router";
import {
  Shirt,
  HardHat,
  AlertTriangle,
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
  Linkedin,
  Instagram,
  Youtube,
  Home,
  ShieldAlert,
  CircleDot,
} from "lucide-react";
import heroPort from "@/assets/hero-port.jpg";
import wilsonLogo from "@/assets/wilson-sons-logo.png";
import safetyAttire from "@/assets/safety-attire.jpg";
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
      { property: "og:image", content: heroPort },
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
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="flex items-center">
            <img src={wilsonLogo} alt="Wilson, Sons" className="h-12 w-auto" />
          </a>
          <a href="#agendamento">
            <Button className="h-11 rounded-full bg-cyan px-6 font-semibold text-cyan-foreground shadow-md shadow-cyan/30 hover:bg-cyan/90">
              Agendar Visita
            </Button>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroPort}
            alt="Operações portuárias Wilson Sons"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan" /> Credenciamento Obrigatório
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Portal de Acesso <span className="text-cyan">Operacional</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Na Wilson Sons, a segurança é o nosso pilar fundamental. Para ingressar em
              nossas operações portuárias, todo visitante deve concluir a integração de
              segurança e o credenciamento prévio.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#agendamento">
                <Button
                  size="lg"
                  className="h-12 rounded-full bg-cyan px-7 font-semibold text-cyan-foreground shadow-lg shadow-cyan/30 hover:bg-cyan/90"
                >
                  Iniciar Credenciamento <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#integracao">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-white/40 bg-transparent px-7 font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  Ver Integração
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRAÇÃO */}
      <section id="integracao" className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
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

        {/* VIDEO */}
        <Reveal delay={120}>
          <div className="mx-auto mt-14 max-w-5xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl shadow-navy/20 ring-1 ring-navy/10">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/rB6jcirH848?vq=hd1080&rel=0&modestbranding=1"
                title="Vídeo de Integração de Segurança Wilson Sons"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>

        {/* BENTO GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Reveal delay={0}>
            <BentoCard
              eyebrow="01 · Vestimenta"
              title="Vestimenta Exigida"
              icon={<Shirt className="h-6 w-6" />}
              image={safetyAttire}
              accent="Proibido bermudas, regatas, chinelos."
              body="Utilize calça comprida e calçados fechados em toda a área operacional."
            />
          </Reveal>
          <Reveal delay={120}>
            <EpiCard />
          </Reveal>
          <Reveal delay={240}>
            <EmergencyCard />
          </Reveal>
        </div>
      </section>

      {/* AGENDAMENTO */}
      <section id="agendamento" className="relative overflow-hidden bg-secondary py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.32_0.09_247)_0%,transparent_50%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 md:px-10">
          <Reveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                <CalendarCheck className="h-3.5 w-3.5" /> Formulário Oficial
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl">
                Solicite seu Acesso
              </h2>
              <p className="mt-4 text-muted-foreground">
                Preencha o formulário abaixo. Você receberá um e-mail com as instruções de
                comparecimento.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-12 rounded-3xl border border-navy/10 bg-white p-3 shadow-2xl shadow-navy/15 ring-1 ring-white">
              <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-secondary/40 to-white p-1">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScRlIx-L5OH76PvOqChTTVgRZF6bL6po1FoQ8DNPl54ZcMCLA/viewform?embedded=true"
                  className="h-[1100px] w-full rounded-xl bg-white"
                  title="Formulário de Agendamento Wilson Sons"
                >
                  Carregando…
                </iframe>
              </div>
            </div>
          </Reveal>
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
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-cyan hover:bg-cyan/10 hover:text-cyan"
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
            <p className="text-xs tracking-wide text-white/70">
              Projeto desenvolvido para fins educativos na KODIE Academy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Bento cards ---------- */

function CardShell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`group relative h-full overflow-hidden rounded-3xl border border-white/60 bg-white/90 p-7 shadow-[0_20px_50px_-20px_rgba(0,51,88,0.25)] ring-1 ring-navy/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-25px_rgba(0,190,221,0.35)] ${className}`}
    >
      {children}
    </div>
  );
}

function BentoCard({
  eyebrow,
  title,
  icon,
  image,
  accent,
  body,
}: {
  eyebrow: string;
  title: string;
  icon: React.ReactNode;
  image: string;
  accent: string;
  body: string;
}) {
  return (
    <CardShell>
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan text-cyan-foreground shadow-md shadow-cyan/40 ring-4 ring-cyan/15">
          {icon}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/50">
          {eyebrow}
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <div className="mt-5 overflow-hidden rounded-2xl bg-secondary">
        <img
          src={image}
          alt="Vestimenta exigida"
          loading="lazy"
          width={1024}
          height={1024}
          className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-semibold text-destructive">
        <CircleDot className="h-3 w-3" /> {accent}
      </div>
    </CardShell>
  );
}

function EpiCard() {
  const items = [
    { Icon: HardHat, label: "Capacete" },
    { Icon: ShieldCheck, label: "Colete" },
    { Icon: ShieldAlert, label: "Botas" },
  ];
  return (
    <CardShell>
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan text-cyan-foreground shadow-md shadow-cyan/40 ring-4 ring-cyan/15">
          <HardHat className="h-6 w-6" />
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/50">
          02 · EPIs
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold text-navy">EPIs Obrigatórios</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Uso obrigatório em todo o pátio operacional.
      </p>
      <ul className="mt-6 space-y-3">
        {items.map(({ Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-3 rounded-2xl border border-navy/5 bg-secondary/60 px-4 py-3"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-cyan ring-1 ring-cyan/30">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold text-navy">{label}</span>
            <ShieldCheck className="ml-auto h-4 w-4 text-cyan" />
          </li>
        ))}
      </ul>
    </CardShell>
  );
}

function EmergencyCard() {
  return (
    <CardShell className="bg-gradient-to-br from-navy to-[oklch(0.27_0.08_247)] text-white">
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan text-cyan-foreground shadow-md shadow-cyan/40 ring-4 ring-cyan/20">
          <AlertTriangle className="h-6 w-6" />
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
          03 · Emergência
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold">Protocolo de Emergência</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/75">
        Ao soar o alarme, mantenha a calma e siga rigorosamente o anfitrião responsável até
        o ponto de encontro indicado.
      </p>
      <div className="mt-6 space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
        {["Não se separe do grupo", "Use as rotas sinalizadas", "Aguarde liberação oficial"].map(
          (t) => (
            <div key={t} className="flex items-center gap-2 text-sm text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> {t}
            </div>
          ),
        )}
      </div>
    </CardShell>
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
