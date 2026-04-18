import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";
import { instruments } from "@/data/cokizuna";
import { useLang, tx } from "@/lib/lang";

const Instruments = () => {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <>
      <SEO title="Instrumentos · Co-Kizuna" description="Decision Canvas, Matriz de Priorización, Simulador Skinner, Radar de Competencia, Early Warning System y más." />

      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container">
          <p className="eyebrow">{t("nav.instruments")}</p>
          <h1 className="display mt-6 text-4xl md:text-6xl max-w-4xl">{t("instruments.title")}</h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75">{t("instruments.subtitle")}</p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {instruments.map((inst, i) => (
            <article key={inst.slug} className="bg-background p-10 flex flex-col">
              <p className="eyebrow text-foreground/40">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="font-display text-2xl md:text-3xl mt-4">{tx(inst.title, lang)}</h2>
              <p className="mt-3 text-foreground/75 leading-relaxed">{tx(inst.purpose, lang)}</p>
              <p className="mt-6 text-sm text-foreground/65 leading-relaxed">{tx(inst.body, lang)}</p>
              <div className="mt-auto pt-8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{tx(inst.audience, lang)}</span>
                {inst.slug === "decision-canvas" ? (
                  <Link to="/instrumentos/decision-canvas" className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] hover:text-seal transition-colors">
                    {t("common.learnMore")} <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{t("common.soon")}</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="container mt-20 flex flex-wrap gap-6 items-center">
          <Link to="/contacto" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm uppercase tracking-[0.18em] hover:bg-seal transition-colors">
            {t("nav.demo")} <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/herramientas" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] border-b border-foreground/40 pb-1 hover:border-seal hover:text-seal transition-colors">
            {lang === "es" ? "Ver herramientas Co-Kizuna" : "See Co-Kizuna tools"} <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Instruments;
