import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
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
  Play,
  Activity,
  Waves,
  MapPin,
  CheckCircle2,
  QrCode,
  User as UserIcon,
  HelpCircle,
} from "lucide-react";
import heroAsset from "@/assets/hero-port-new.jpg.asset.json";
import safetyEpi from "@/assets/safety-epi.webp.asset.json";
import safetyTeam from "@/assets/safety-team.jpg.asset.json";
import safetyEmergency from "@/assets/safety-emergency.png.asset.json";
import wilsonLogo from "@/assets/wilson-sons-logo.png";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


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
      {/* STATUS BAR — Contextual operational widget */}
      <div className="relative z-[60] border-b border-navy/10 bg-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-1 px-6 py-2 text-[11px] font-medium tracking-wide md:px-10 md:text-xs">
          <div className="flex items-center gap-2">
            <span className="relative grid h-2.5 w-2.5 place-items-center">
              <span className="absolute inset-0 rounded-full bg-emerald-400/60 status-dot" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="uppercase tracking-[0.18em] text-white/70">Ao vivo</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-white/85">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-cyan" /> Unidade: <strong className="font-semibold text-white">Tecon Santos</strong></span>
            <span className="hidden h-3 w-px bg-white/20 md:inline-block" />
            <span className="inline-flex items-center gap-1.5"><Activity className="h-3.5 w-3.5 text-cyan" /> Status: <strong className="font-semibold text-emerald-300">Operação Normal</strong></span>
            <span className="hidden h-3 w-px bg-white/20 md:inline-block" />
            <span className="inline-flex items-center gap-1.5"><Waves className="h-3.5 w-3.5 text-cyan" /> Maré: <strong className="font-semibold text-white">0.8m</strong></span>
          </div>
        </div>
      </div>

      {/* NAV — Glassmorphism */}
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/55 backdrop-blur-xl supports-[backdrop-filter]:bg-white/45 shadow-[0_4px_30px_-12px_rgba(0,51,88,0.08)]">
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
      <section id="integracao" className="relative dot-grid radial-depth">
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
              <YouTubeFacade videoId="rB6jcirH848" title="Vídeo de Integração de Segurança Wilson Sons" />
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

      {/* PREPARE SUA CHEGADA — Logistics */}
      <section id="chegada" className="relative bg-background dot-grid py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
                Logística & Localização
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl">
                Prepare sua Chegada
              </h2>
              <p className="mt-4 text-muted-foreground">
                Confira o endereço da unidade onde será sua visita e acesse a rota direta no Google Maps.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                city: "Salvador",
                unit: "Tecon Salvador",
                address: "Av. da França, s/n — Comércio, Salvador — BA, 40010-000",
                maps: "https://www.google.com/maps/search/?api=1&query=Tecon+Salvador+Wilson+Sons",
              },
              {
                city: "Rio Grande",
                unit: "Tecon Rio Grande",
                address: "Av. Honório Bicalho, s/n — Distrito Industrial, Rio Grande — RS, 96204-700",
                maps: "https://www.google.com/maps/search/?api=1&query=Tecon+Rio+Grande+Wilson+Sons",
              },
              {
                city: "Guarujá",
                unit: "Brasco Guarujá",
                address: "Av. Santos Dumont, s/n — Vicente de Carvalho, Guarujá — SP, 11460-000",
                maps: "https://www.google.com/maps/search/?api=1&query=Brasco+Guaruj%C3%A1+Wilson+Sons",
              },
              {
                city: "Santo André",
                unit: "Wilson Sons Logística",
                address: "Rod. Índio Tibiriçá, km 47 — Santo André — SP, 09225-000",
                maps: "https://www.google.com/maps/search/?api=1&query=Wilson+Sons+Log%C3%ADstica+Santo+Andr%C3%A9",
              },
            ].map((u, i) => (
              <Reveal key={u.city} delay={i * 80}>
                <div className="group flex h-full flex-col rounded-2xl bg-white p-6 soft-shadow ring-1 ring-navy/5 cyan-glow-hover transition-transform hover:-translate-y-1">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan">{u.unit}</p>
                  <h3 className="mt-1 font-display text-xl font-extrabold text-navy">{u.city}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{u.address}</p>
                  <a
                    href={u.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy/90"
                  >
                    <MapPin className="h-4 w-4 text-cyan" /> Ver no Google Maps
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mx-auto mt-20 max-w-3xl">
              <div className="mb-6 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
                <HelpCircle className="h-4 w-4" /> Perguntas Frequentes
              </div>
              <Accordion type="single" collapsible className="overflow-hidden rounded-2xl bg-white ring-1 ring-navy/5 soft-shadow">
                <AccordionItem value="epi" className="border-navy/10 px-6">
                  <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline">
                    Preciso levar meus próprios EPIs?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Não. A Wilson Sons fornece todo o kit de EPI (capacete, óculos, protetor auricular e colete) na portaria após a integração. Apenas o calçado fechado de segurança deve ser de uso pessoal e estar em boas condições.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="park" className="border-navy/10 px-6">
                  <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline">
                    Há estacionamento disponível para visitantes?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim. Todas as unidades dispõem de área de estacionamento para visitantes, mediante apresentação do credenciamento aprovado e documento com foto na portaria de acesso.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="photo" className="border-b-0 px-6">
                  <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline">
                    É permitido tirar fotos dentro do terminal?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Por questões de segurança operacional e portuária, fotografias e filmagens só são permitidas mediante autorização prévia da equipe de Comunicação Corporativa Wilson Sons.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AGENDAMENTO — Sticky scroll */}
      <section id="agendamento" className="relative bg-secondary/40 dot-grid radial-depth py-24 md:py-32">
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
                <SchedulingPanel />
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
  imageOffset = "",
}: {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  reverse: boolean;
  imageOffset?: string;
}) {
  return (
    <Reveal>
      <div className={`grid items-start gap-10 md:grid-cols-2 md:gap-16 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
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
        <div className={`group overflow-hidden rounded-3xl bg-white soft-shadow cyan-glow-hover ${imageOffset}`}>
          <div className="aspect-video w-full overflow-hidden bg-white">
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

function YouTubeFacade({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const poster = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl soft-shadow ring-1 ring-navy/5 bg-navy">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&vq=hd1080&hd=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Reproduzir: ${title}`}
        >
          <img
            src={poster}
            alt={title}
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
            }}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
          <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cyan text-cyan-foreground shadow-2xl shadow-cyan/40 transition-transform duration-300 group-hover:scale-110">
            <Play className="h-8 w-8 translate-x-0.5 fill-current" />
          </span>
        </button>
      )}
    </div>
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

/* ---------- Scheduling panel with Digital Visitor Pass ---------- */

function SchedulingPanel() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  if (submitted) {
    const passId = `WS-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    const qrPayload = encodeURIComponent(
      `WILSON-SONS|PASS:${passId}|NAME:${name || "VISITANTE"}|DATE:${date || "A AGENDAR"}|UNIT:TECON-SANTOS`,
    );
    const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=0&qzone=1&data=${qrPayload}`;
    const today = new Date().toLocaleDateString("pt-BR");

    return (
      <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-[#001f3f] p-1 soft-shadow ring-1 ring-cyan/30">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan/20 blur-3xl" />
        <div className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-cyan/10 blur-3xl" />
        <div className="relative rounded-[22px] bg-navy/70 backdrop-blur-xl p-8 md:p-10 text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white p-2">
                <img src={wilsonLogo} alt="Wilson, Sons" className="h-7 w-auto" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-cyan">Digital Visitor Pass</p>
                <p className="text-sm font-semibold">Wilson Sons · Acesso Operacional</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
              <CheckCircle2 className="h-3.5 w-3.5" /> Confirmado
            </span>
          </div>

          <div className="mt-8 grid items-center gap-8 md:grid-cols-[260px_1fr]">
            <div className="mx-auto rounded-2xl bg-white p-4 shadow-2xl shadow-cyan/20">
              <img src={qrSrc} alt="QR Code do credenciamento" className="h-[220px] w-[220px]" />
              <p className="mt-2 text-center text-[10px] font-mono tracking-widest text-navy/70">{passId}</p>
            </div>
            <div className="space-y-4 text-sm">
              <PassRow icon={<UserIcon className="h-4 w-4" />} label="Visitante" value={name || "—"} />
              <PassRow icon={<CalendarCheck className="h-4 w-4" />} label="Data prevista" value={date || "A confirmar"} />
              <PassRow icon={<MapPin className="h-4 w-4" />} label="Unidade" value="Tecon Santos" />
              <PassRow icon={<ShieldCheck className="h-4 w-4" />} label="Integração" value="Pendente · realizar na portaria" />
              <PassRow icon={<QrCode className="h-4 w-4" />} label="Emitido em" value={today} />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-white/15 pt-5 text-[11px] text-white/60">
            <span>Apresente este passe na portaria junto a um documento com foto.</span>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="rounded-full border border-white/20 px-3 py-1 text-white/80 hover:bg-white/10"
            >
              Novo agendamento
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-3xl bg-white/80 p-3 soft-shadow ring-1 ring-white backdrop-blur-xl">
      <div className="flex flex-wrap items-center gap-3 px-3 py-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome (para o passe digital)"
          className="min-w-[200px] flex-1 rounded-lg border border-navy/10 bg-white/70 px-3 py-2 text-sm outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="rounded-lg border border-navy/10 bg-white/70 px-3 py-2 text-sm outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
        />
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="rounded-lg bg-cyan px-4 py-2 text-sm font-semibold text-cyan-foreground shadow-md shadow-cyan/30 transition hover:bg-cyan/90"
        >
          Já enviei o formulário
        </button>
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScRlIx-L5OH76PvOqChTTVgRZF6bL6po1FoQ8DNPl54ZcMCLA/viewform?embedded=true"
        className="h-[1300px] w-full rounded-2xl bg-white"
        title="Formulário de Agendamento Wilson Sons"
      >
        Carregando…
      </iframe>
    </div>
  );
}

function PassRow({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-full bg-cyan/15 text-cyan">{icon}</span>
      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">{label}</p>
        <p className="text-base font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}

/* AlertTriangle imported for potential reuse */
void AlertTriangle;
