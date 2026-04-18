import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { principles, dimensions, objectives, roadmap } from "@/data/cokizuna";
import { useLang, tx } from "@/lib/lang";

const About = () => {
  const { t } = useTranslation();
  const lang = useLang();

  const sections = [
    { id: "definicion", label: { es: "Definición", en: "Definition" } },
    { id: "filosofia", label: { es: "Filosofía", en: "Philosophy" } },
    { id: "origen", label: { es: "Origen", en: "Origin" } },
    { id: "principios", label: { es: "12 Principios", en: "12 Principles" } },
    { id: "dimensiones", label: { es: "11 Dimensiones", en: "11 Dimensions" } },
    { id: "vision", label: { es: "Visión", en: "Vision" } },
    { id: "alcance", label: { es: "Alcance", en: "Scope" } },
    { id: "objetivos", label: { es: "Objetivos", en: "Objectives" } },
    { id: "equipo", label: { es: "Equipo", en: "Team" } },
    { id: "manifiesto", label: { es: "Manifiesto", en: "Manifesto" } },
  ];

  const team = [
    {
      initials: "CK",
      role: { es: "Fundador · Dirección metodológica", en: "Founder · Methodological direction" },
      bio: {
        es: "Lidera la doctrina Co-Kizuna y la integración con estándares internacionales (OCDE, BID).",
        en: "Leads the Co-Kizuna doctrine and integration with international standards (OECD, IDB).",
      },
    },
    {
      initials: "AM",
      role: { es: "Asesor · Inteligencia de datos", en: "Advisor · Data intelligence" },
      bio: {
        es: "Diseña los motores analíticos detrás de QuiverCL y GaiaCL bajo el principio Kaiji.",
        en: "Designs the analytic engines behind QuiverCL and GaiaCL under the Kaiji principle.",
      },
    },
    {
      initials: "RP",
      role: { es: "Asesor · Compras públicas", en: "Advisor · Public procurement" },
      bio: {
        es: "Veinte años en pliegos, evaluación y auditoría en mercados latinoamericanos.",
        en: "Twenty years in tenders, evaluation and audit across Latin American markets.",
      },
    },
  ];

  return (
    <>
      <SEO title="Nosotros · Co-Kizuna" description="Metodología global de inteligencia para compras públicas. Definición, filosofía, origen, principios, visión y manifiesto Co-Kizuna." />

      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container">
          <p className="eyebrow">{t("nav.about")}</p>
          <h1 className="display mt-6 text-4xl md:text-6xl max-w-5xl">{t("about.title")}</h1>
        </div>
      </section>

      {/* TOC */}
      <div className="border-y border-foreground/10 sticky top-16 md:top-20 bg-background/90 backdrop-blur z-30">
        <div className="container overflow-x-auto">
          <ul className="flex gap-6 py-4 text-xs uppercase tracking-[0.18em] whitespace-nowrap">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {tx(s.label, lang)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Definición */}
      <section id="definicion" className="py-24 md:py-32 scroll-mt-32">
        <div className="container">
          <p className="eyebrow">{t("about.definitionEyebrow")}</p>
          <h2 className="display mt-5 text-3xl md:text-5xl max-w-3xl">{t("about.definitionTitle")}</h2>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-foreground/80">{t("about.definitionBody")}</p>

          <div className="mt-14 grid sm:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {[t("about.pillar1"), t("about.pillar2"), t("about.pillar3")].map((p, i) => (
              <div key={i} className="bg-background p-8">
                <p className="eyebrow text-foreground/50">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-4 font-display text-xl">{p}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 reinforcement max-w-3xl">{t("about.definitionReinforcement")}</div>
        </div>
      </section>

      <Divider />

      {/* Filosofía */}
      <section id="filosofia" className="py-24 md:py-32 scroll-mt-32">
        <div className="container">
          <p className="eyebrow">{t("about.philosophyEyebrow")}</p>
          <h2 className="display mt-5 text-3xl md:text-5xl">{t("about.philosophyTitle")}</h2>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-foreground/80">{t("about.philosophyBody")}</p>

          <ul className="mt-12 space-y-6 max-w-3xl">
            {t("about.philosophyList").split("|").map((item, i) => (
              <li key={i} className="border-l-2 border-foreground/30 pl-6 text-foreground/85 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-3xl font-display text-2xl text-foreground">{t("about.philosophyClose")}</p>
        </div>
      </section>

      <Divider />

      {/* Origen */}
      <section id="origen" className="py-24 md:py-32 scroll-mt-32 relative overflow-hidden">
        <span className="kanji-mark absolute -right-10 top-10 text-[28rem] leading-none">絆</span>
        <div className="container relative">
          <p className="eyebrow">{t("about.originEyebrow")}</p>
          <h2 className="display mt-5 text-3xl md:text-5xl">{t("about.originTitle")}</h2>

          <div className="mt-12 grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            <EtymCard top={t("about.originKizuna")} body={t("about.originKizunaBody")} />
            <EtymCard top={t("about.originCo")} body={t("about.originCoBody")} />
            <EtymCard top={t("about.originCoKizuna")} body={t("about.originCoKizunaBody")} highlight />
          </div>

          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-foreground/80">{t("about.originMethod")}</p>
          <div className="mt-10 reinforcement max-w-3xl">{t("about.originReinforcement")}</div>
        </div>
      </section>

      <Divider />

      {/* Principios */}
      <section id="principios" className="py-24 md:py-32 scroll-mt-32">
        <div className="container">
          <p className="eyebrow">{t("about.principlesEyebrow")}</p>
          <h2 className="display mt-5 text-3xl md:text-5xl">{t("about.principlesTitle")}</h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {principles.map((p) => (
              <div key={p.index} className="bg-background p-6">
                <p className="eyebrow text-foreground/50">{String(p.index).padStart(2, "0")}</p>
                <p className="font-jp text-seal text-sm mt-3">{p.jp}</p>
                <h3 className="font-display text-xl mt-2">{p.name}</h3>
                <p className="mt-3 text-sm text-foreground/70">{tx(p.essence, lang)}</p>
              </div>
            ))}
          </div>

          <Link to="/metodologia/principios" className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] border-b border-foreground/40 pb-1 hover:border-seal hover:text-seal transition-colors">
            {t("about.principlesCta")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Divider />

      {/* Dimensiones */}
      <section id="dimensiones" className="py-24 md:py-32 scroll-mt-32">
        <div className="container">
          <p className="eyebrow">{t("about.dimensionsEyebrow")}</p>
          <h2 className="display mt-5 text-3xl md:text-5xl">{t("about.dimensionsTitle")}</h2>
          <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 max-w-5xl">
            {dimensions.map((d, i) => (
              <li key={i} className="flex gap-4 border-b border-foreground/10 pb-4">
                <span className="eyebrow text-foreground/40 w-8">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-foreground/85">{tx(d, lang)}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Divider />

      {/* Visión */}
      <section id="vision" className="py-24 md:py-32 scroll-mt-32">
        <div className="container">
          <p className="eyebrow">{t("about.visionEyebrow")}</p>
          <h2 className="display mt-5 text-3xl md:text-5xl">{t("about.visionTitle")}</h2>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-foreground/80">{t("about.visionBody")}</p>
          <p className="mt-10 max-w-3xl font-display text-2xl text-foreground">{t("about.visionClose")}</p>
        </div>
      </section>

      <Divider />

      {/* Alcance */}
      <section id="alcance" className="py-24 md:py-32 scroll-mt-32">
        <div className="container">
          <p className="eyebrow">{t("about.scopeEyebrow")}</p>
          <h2 className="display mt-5 text-3xl md:text-5xl">{t("about.scopeTitle")}</h2>
          <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
            {roadmap.map((stage, i) => (
              <li key={stage.region} className="bg-background p-8">
                <p className="eyebrow text-foreground/50">{String(i + 1).padStart(2, "0")}</p>
                <h4 className="font-display text-2xl mt-4">{stage.region}</h4>
                <p className="mt-3 text-sm text-foreground/70">{tx(stage.description, lang)}</p>
                <span className={`mt-5 inline-block text-[10px] uppercase tracking-[0.22em] px-2 py-1 ${
                  stage.status === "active" ? "bg-seal text-seal-foreground"
                  : stage.status === "inDevelopment" ? "bg-foreground/90 text-background"
                  : "border border-foreground/30 text-muted-foreground"
                }`}>
                  {t(`common.${stage.status === "vision" ? "soon" : stage.status}`)}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Divider />

      {/* Objetivos */}
      <section id="objetivos" className="py-24 md:py-32 scroll-mt-32">
        <div className="container">
          <p className="eyebrow">{t("about.objectivesEyebrow")}</p>
          <h2 className="display mt-5 text-3xl md:text-5xl">{t("about.objectivesTitle")}</h2>
          <ol className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-8">
            {objectives.map((o, i) => (
              <li key={i} className="border-l-2 border-foreground/30 pl-6">
                <p className="eyebrow text-foreground/40">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-lg text-foreground/85">{tx(o, lang)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Divider />

      {/* Equipo */}
      <section id="equipo" className="py-24 md:py-32 scroll-mt-32">
        <div className="container">
          <p className="eyebrow">{t("about.teamEyebrow")}</p>
          <h2 className="display mt-5 text-3xl md:text-5xl max-w-3xl">{t("about.teamTitle")}</h2>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75 leading-relaxed">{t("about.teamBody")}</p>

          <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {team.map((m, i) => (
              <li key={i} className="bg-background p-8">
                <div className="w-16 h-16 border border-foreground/20 flex items-center justify-center font-display text-xl text-seal">
                  {m.initials}
                </div>
                <p className="mt-6 eyebrow text-foreground/50">{tx(m.role, lang)}</p>
                <p className="mt-3 text-foreground/75 leading-relaxed">{tx(m.bio, lang)}</p>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {t("about.teamSoon")}
          </p>
        </div>
      </section>

      {/* Manifiesto */}
      <section id="manifiesto" className="py-32 md:py-44 bg-foreground text-background relative overflow-hidden scroll-mt-32">
        <span className="kanji-mark absolute -right-10 -top-10 text-[28rem] text-background/[0.04]">絆</span>
        <div className="container relative max-w-4xl">
          <p className="eyebrow text-background/60">{t("about.manifestoEyebrow")}</p>
          <h2 className="display mt-6 text-3xl md:text-5xl">{t("about.manifestoTitle")}</h2>

          <div className="mt-12 space-y-6 font-display text-xl md:text-2xl leading-snug text-background/95">
            <p className="italic text-seal">«Los datos abiertos de compras públicas existen en casi todos los países. Pero la inteligencia para entenderlos no.»</p>
            <p>Los grandes proveedores tienen equipos de analistas. Los pequeños, una hoja de cálculo. Los gobiernos centrales tienen unidades de datos. Los municipios, un funcionario con suerte.</p>
            <p>Esa desigualdad es el problema que Co-Kizuna vino a resolver.</p>
            <p>No somos una herramienta para grandes empresas. Somos un democratizador con valor. No somos un portal de transparencia más. Somos una metodología de inteligencia. No somos solo para Chile. Chile es nuestro laboratorio fundacional.</p>
            <p>Construimos doce principios operativos y once dimensiones de análisis.</p>
            <p className="text-seal">Datos abiertos para todos. Inteligencia Co-Kizuna para quienes deciden.</p>
            <p>Chile es nuestro comienzo. El mundo es nuestro mercado. La inteligencia es nuestra causa.</p>
          </div>

          <Link to="/contacto" className="mt-14 inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 text-sm uppercase tracking-[0.18em] hover:bg-seal hover:text-seal-foreground transition-colors">
            {t("nav.demo")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

const EtymCard = ({ top, body, highlight }: { top: string; body: string; highlight?: boolean }) => (
  <div className={`bg-background p-8 ${highlight ? "border-l-2 border-seal" : ""}`}>
    <p className={`font-display text-xl ${highlight ? "text-seal" : ""}`}>{top}</p>
    <p className="mt-4 text-foreground/75 leading-relaxed">{body}</p>
  </div>
);

const Divider = () => (
  <div className="container"><div className="hairline" /></div>
);

export default About;
