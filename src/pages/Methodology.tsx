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

      <section className="pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container">
          <p className="eyebrow">{t("nav.methodology")}</p>
          <h1 className="display mt-6 text-4xl md:text-6xl max-w-5xl">{t("methodology.title")}</h1>
          <p className="mt-8 max-w-3xl text-lg text-foreground/75 leading-relaxed">{t("methodology.intro")}</p>
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
