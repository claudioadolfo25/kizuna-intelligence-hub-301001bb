import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { principles, decisions, dimensions } from "@/data/cokizuna";
import { useLang, tx } from "@/lib/lang";

const Methodology = () => {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <>
      <SEO title="Metodología · Co-Kizuna" description="12 principios operativos. 11 dimensiones de análisis. 6 decisiones Co-Kizuna. Una metodología validada por estándares internacionales." />

      {/* Built to win — narrative intro */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container">
          <p className="eyebrow">{lang === "es" ? "Metodología · Co-Kizuna" : "Methodology · Co-Kizuna"}</p>
          <h1 className="display mt-6 text-4xl md:text-6xl max-w-4xl leading-[1.05]">
            {lang === "es" ? (
              <>Construida para ganar.<br /><span className="text-foreground/55">No para explicar por qué se perdió.</span></>
            ) : (
              <>Built to win.<br /><span className="text-foreground/55">Not to explain why one lost.</span></>
            )}
          </h1>
          <p className="mt-10 max-w-3xl text-lg text-foreground/75 leading-relaxed">
            {lang === "es"
              ? "Co-Kizuna nació de 25 años operando en compras públicas desde Lautaro, La Araucanía. No de un laboratorio. No de un paper. De licitar, ganar, perder, aprender — y sistematizar cada paso hasta convertirlo en método replicable."
              : "Co-Kizuna emerged from 25 years operating in public procurement from Lautaro, La Araucanía. Not from a lab. Not from a paper. From bidding, winning, losing, learning — and systematizing every step into a replicable method."}
          </p>

          {/* Origin block */}
          <div className="mt-20 grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-3">
              <span className="font-display text-7xl md:text-8xl text-seal leading-none">1∞</span>
              <p className="eyebrow mt-4">{lang === "es" ? "El origen real" : "The real origin"}</p>
            </div>
            <div className="md:col-span-9 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                {lang === "es"
                  ? "Un fundador. $2.303 millones CLP gestionados en contratos con el Estado. 5 de 5 licitaciones adjudicadas. Posición #1.931 entre más de 50.000 proveedores nacionales. +693% de crecimiento en facturación en un año."
                  : "One founder. CLP $2,303 million managed in State contracts. 5 of 5 tenders awarded. Ranked #1,931 among more than 50,000 national suppliers. +693% revenue growth in one year."}
              </p>
              <p className="text-foreground/60 italic">
                {lang === "es"
                  ? "Todos los datos verificables en mercadopublico.cl. Lo que se construyó primero como práctica, hoy es metodología."
                  : "All data verifiable at mercadopublico.cl. What was first built as practice is today methodology."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* Methodology summary — short title */}
      <section className="py-20 md:py-24">
        <div className="container">
          <p className="eyebrow">{t("nav.methodology")}</p>
          <h2 className="display mt-6 text-3xl md:text-5xl max-w-5xl">{t("methodology.title")}</h2>
          <p className="mt-8 max-w-3xl text-lg text-foreground/75 leading-relaxed">{t("methodology.intro")}</p>
        </div>
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* Why · How · What */}
      <section className="py-24">
        <div className="container">
          <p className="eyebrow">{lang === "es" ? "Por qué · Cómo · Qué" : "Why · How · What"}</p>
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {[
              {
                tag: lang === "es" ? "Por qué nació" : "Why it was born",
                title: lang === "es"
                  ? "El mercado premia el volumen de análisis, no la calidad de la oferta."
                  : "The market rewards volume of analysis, not quality of bid.",
                body: lang === "es"
                  ? "Los grandes ganan porque procesan más — cien páginas de pliego en paralelo, historial interno, conocimiento del evaluador. El proveedor solista con oferta real pierde en la última página. No por precio. Por falta de infraestructura de inteligencia. Co-Kizuna existe para resolver eso."
                  : "Large players win because they process more — a hundred pages of specs in parallel, internal history, evaluator knowledge. The solo provider with the real bid loses on the last page. Not on price. On lack of intelligence infrastructure. Co-Kizuna exists to solve that.",
              },
              {
                tag: lang === "es" ? "Cómo funciona" : "How it works",
                title: lang === "es"
                  ? "Metodología primero. Tecnología después. Siempre en ese orden."
                  : "Methodology first. Technology after. Always in that order.",
                body: lang === "es"
                  ? "Antes de automatizar, Co-Kizuna ordena. 12 principios que gobiernan cada análisis. 11 dimensiones que cubren cada ángulo del ecosistema. 6 decisiones estructuradas que convierten inteligencia en acción. El método hace confiable a la máquina — no al revés."
                  : "Before automating, Co-Kizuna orders. 12 principles governing every analysis. 11 dimensions covering every angle of the ecosystem. 6 structured decisions turning intelligence into action. The method makes the machine trustworthy — not the other way around.",
              },
              {
                tag: lang === "es" ? "Qué es" : "What it is",
                title: lang === "es"
                  ? "Un cuerpo de principios, no un software ni un portal."
                  : "A body of principles, not a software or a portal.",
                body: lang === "es"
                  ? "Co-Kizuna es ontología universal para inteligencia en compras públicas. Principios, procedimientos y herramientas que transforman datos abiertos en conocimiento accionable. Construido en Chile. Diseñado para cualquier mercado donde el Estado compre y el proveedor quiera ganar."
                  : "Co-Kizuna is universal ontology for public procurement intelligence. Principles, procedures and tools that turn open data into actionable knowledge. Built in Chile. Designed for any market where the State buys and the supplier wants to win.",
              },
            ].map((b, i) => (
              <div key={i} className="bg-background p-10">
                <p className="eyebrow text-foreground/40">{String(i + 1).padStart(2, "0")} · {b.tag}</p>
                <h3 className="font-display text-2xl mt-4 leading-snug">{b.title}</h3>
                <p className="mt-5 text-foreground/70 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* Founder quote */}
      <section className="py-24">
        <div className="container">
          <blockquote className="font-display text-2xl md:text-4xl leading-snug max-w-4xl text-foreground/90">
            {lang === "es"
              ? "«No construimos donde la demanda estaba probada. Construimos donde la infraestructura de inteligencia era el requisito previo para que la demanda pudiera existir.»"
              : "«We didn't build where demand was proven. We built where intelligence infrastructure was the prerequisite for demand to exist.»"}
          </blockquote>
          <p className="mt-6 eyebrow text-foreground/60">— Claudio Ayelef · {lang === "es" ? "Fundador" : "Founder"} · Co-Kizuna</p>
        </div>
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* Structure of the method */}
      <section className="py-24">
        <div className="container">
          <p className="eyebrow">{lang === "es" ? "La estructura del método" : "The structure of the method"}</p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
            {[
              { n: "12", t: lang === "es" ? "Principios operativos. Cada uno con su esencia, aplicación y antiprincipio." : "Operational principles. Each with its essence, application and antiprinciple." },
              { n: "11", t: lang === "es" ? "Dimensiones de análisis para entender cualquier ecosistema de compras." : "Dimensions of analysis to understand any procurement ecosystem." },
              { n: "6", t: lang === "es" ? "Decisiones que convierten la inteligencia en acción concreta." : "Decisions that turn intelligence into concrete action." },
              { n: "4", t: lang === "es" ? "Fases del ciclo operativo con aprendizaje que retorna al inicio." : "Phases of the operating cycle with learning that returns to the start." },
            ].map((b, i) => (
              <div key={i} className="bg-background p-10">
                <span className="font-display text-6xl md:text-7xl text-seal leading-none">{b.n}</span>
                <p className="mt-6 text-foreground/75 leading-relaxed">{b.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* Quick links */}
      <section className="py-20">
        <div className="container grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          <Link to="/metodologia/principios" className="bg-background p-10 group hover:bg-secondary transition-colors">
            <p className="eyebrow">01</p>
            <h2 className="font-display text-3xl mt-4">{t("methodology.principlesTitle")}</h2>
            <p className="mt-4 text-foreground/70">{t("methodology.principlesIntro")}</p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] group-hover:text-seal transition-colors">
              {t("common.explore")} <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <Link to="/metodologia/decisiones" className="bg-background p-10 group hover:bg-secondary transition-colors">
            <p className="eyebrow">02</p>
            <h2 className="font-display text-3xl mt-4">{t("methodology.decisionsTitle")}</h2>
            <p className="mt-4 text-foreground/70">{t("methodology.decisionsIntro")}</p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] group-hover:text-seal transition-colors">
              {t("common.explore")} <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <div className="bg-background p-10">
            <p className="eyebrow">03 · {t("common.soon")}</p>
            <h2 className="font-display text-3xl mt-4">{lang === "es" ? "11 Dimensiones" : "11 Dimensions"}</h2>
            <p className="mt-4 text-foreground/70">
              {lang === "es"
                ? "Once miradas para entender y transformar cualquier ecosistema de compras públicas."
                : "Eleven lenses to understand and transform any public procurement ecosystem."}
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
              {t("common.soon")}
            </span>
          </div>
        </div>
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* Principles preview */}
      <section className="py-24">
        <div className="container">
          <p className="eyebrow">{lang === "es" ? "Vista rápida" : "Quick view"}</p>
          <h2 className="display mt-5 text-3xl md:text-5xl">{t("methodology.principlesTitle")}</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {principles.map((p) => (
              <div key={p.index} className="border-t border-foreground/15 pt-4">
                <div className="flex items-baseline gap-3">
                  <span className="eyebrow text-foreground/40">{String(p.index).padStart(2, "0")}</span>
                  <span className="font-jp text-seal text-sm">{p.jp}</span>
                </div>
                <h3 className="font-display text-xl mt-2">{p.name}</h3>
                <p className="mt-2 text-sm text-foreground/70">{tx(p.essence, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* Decisions preview */}
      <section className="py-24">
        <div className="container">
          <p className="eyebrow">{lang === "es" ? "Vista rápida" : "Quick view"}</p>
          <h2 className="display mt-5 text-3xl md:text-5xl">{t("methodology.decisionsTitle")}</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-x-10 gap-y-8">
            {decisions.map((d, i) => (
              <div key={i} className="border-l-2 border-foreground/20 pl-6">
                <p className="eyebrow text-foreground/40">{String(i + 1).padStart(2, "0")} · {tx(d.level, lang)}</p>
                <h3 className="font-display text-2xl mt-2">{tx(d.category, lang)}</h3>
                <p className="mt-2 text-foreground/70 italic">{tx(d.question, lang)}</p>
                <p className="mt-2 text-sm text-foreground/65">{tx(d.body, lang)}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 reinforcement max-w-3xl">{t("methodology.decisionsReinforcement")}</div>
        </div>
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* Cycle */}
      <section className="py-24">
        <div className="container">
          <p className="eyebrow">{lang === "es" ? "Ciclo" : "Cycle"}</p>
          <h2 className="display mt-5 text-3xl md:text-5xl">{t("methodology.cycleTitle")}</h2>
          <p className="mt-6 max-w-2xl text-foreground/75">{t("methodology.cycleIntro")}</p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
            {[
              { es: "Pre-licitación", en: "Pre-tender" },
              { es: "Licitación", en: "Tender" },
              { es: "Ejecución", en: "Execution" },
              { es: "Post-licitación", en: "Post-tender" },
            ].map((phase, i) => (
              <div key={i} className="bg-background p-8">
                <p className="eyebrow text-foreground/40">0{i + 1}</p>
                <h4 className="font-display text-2xl mt-4">{tx(phase, lang)}</h4>
                {i === 3 && (
                  <p className="mt-4 text-xs text-seal uppercase tracking-[0.18em]">→ {lang === "es" ? "Aprendizaje retorna a 01" : "Learning returns to 01"}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* Validation */}
      <section className="py-24">
        <div className="container">
          <p className="eyebrow">{lang === "es" ? "Validación" : "Validation"}</p>
          <h2 className="display mt-5 text-3xl md:text-5xl max-w-3xl">{t("methodology.validationTitle")}</h2>
          <p className="mt-6 max-w-3xl text-foreground/75">{t("methodology.validationBody")}</p>
          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center">
            {["OCDE", "ISO", "Banco Mundial", "BID", "ProZorro", "Alice"].map((ref) => (
              <span key={ref} className="font-display text-xl text-foreground/50">{ref}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Dimensions teaser */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <p className="eyebrow">{t("common.soon")}</p>
          <h2 className="display mt-5 text-3xl md:text-5xl max-w-3xl">{lang === "es" ? "Las 11 dimensiones de análisis" : "The 11 dimensions of analysis"}</h2>
          <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 max-w-5xl">
            {dimensions.map((d, i) => (
              <li key={i} className="flex gap-4 border-b border-foreground/15 pb-3">
                <span className="eyebrow text-foreground/40 w-8">{String(i + 1).padStart(2, "0")}</span>
                <span>{tx(d, lang)}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default Methodology;
