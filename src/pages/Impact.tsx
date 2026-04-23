import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import { roadmap } from "@/data/cokizuna";
import { useLang, tx } from "@/lib/lang";

const Impact = () => {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <>
      <SEO title="Impacto Global · Co-Kizuna" description="Chile, nuestro origen. El mundo, nuestro mercado. Roadmap de expansión y validaciones internacionales." />

      <section className="pt-20 pb-16 md:pt-28 md:pb-20 relative overflow-hidden">
        <span className="kanji-mark absolute -right-12 top-10 text-[28rem]">絆</span>
        <div className="container relative">
          <p className="eyebrow">{t("nav.impact")}</p>
          <h1 className="display mt-6 text-4xl md:text-6xl max-w-4xl">{t("impact.title")}</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid md:grid-cols-2 gap-12 max-w-5xl">
          <div>
            <p className="eyebrow">01 — {lang === "es" ? "Origen" : "Origin"}</p>
            <h2 className="display mt-5 text-3xl md:text-4xl">{t("impact.labTitle")}</h2>
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed">{t("impact.labBody")}</p>
        </div>
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* Roadmap timeline */}
      <section className="py-24">
        <div className="container">
          <p className="eyebrow">02 — {lang === "es" ? "Expansión" : "Expansion"}</p>
          <h2 className="display mt-5 text-3xl md:text-5xl">{t("impact.roadmapTitle")}</h2>

          <ol className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-foreground/15" aria-hidden />
            {roadmap.map((stage, i) => (
              <li key={stage.region} className="relative grid md:grid-cols-2 gap-8 mb-16">
                <div className={`md:text-right ${i % 2 === 0 ? "md:pr-12" : "md:order-2 md:pl-12"}`}>
                  <p className="eyebrow text-foreground/40">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-display text-3xl mt-3">{stage.region}</h3>
                  <p className="mt-3 text-foreground/70">{tx(stage.description, lang)}</p>
                </div>
                <div className={`${i % 2 === 0 ? "md:pl-12" : "md:order-1 md:pr-12 md:text-right"}`}>
                  <span className={`inline-block text-[10px] uppercase tracking-[0.22em] px-2 py-1 ${
                    stage.status === "active" ? "bg-seal text-seal-foreground"
                    : stage.status === "inDevelopment" ? "bg-foreground/90 text-background"
                    : "border border-foreground/30 text-muted-foreground"
                  }`}>
                    {t(`common.${stage.status === "vision" ? "soon" : stage.status}`)}
                  </span>
                </div>
                <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-2 h-2 rounded-full bg-seal" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* OPC GLOBAL CONTEXT — China + Co-Kizuna */}
      <section className="py-24 relative overflow-hidden">
        <span className="kanji-mark absolute -right-12 top-10 text-[24rem]">人</span>
        <div className="container relative">
          <p className="eyebrow">03 — {lang === "es" ? "Contexto OPC global" : "Global OPC context"}</p>
          <h2 className="display mt-5 text-3xl md:text-5xl max-w-4xl">
            {lang === "es"
              ? "Mientras China moviliza miles de OPC con IA, Co-Kizuna construye la metodología que las hace ganar licitaciones."
              : "While China mobilizes thousands of AI-powered OPCs, Co-Kizuna builds the methodology that helps them win tenders."}
          </h2>
          <p className="mt-8 max-w-3xl text-lg text-foreground/80 leading-relaxed">
            {lang === "es"
              ? "El plan nacional chino de IA escala el modelo One-Person Company a miles de fundadores solistas con incubadoras gratuitas y computación subsidiada. CLEAN LIF SPA opera bajo la misma asimetría — desde Chile, para el mundo. La diferencia: nosotros aportamos el método, Zentei, y los 13 agentes especializados en compras públicas."
              : "China's national AI plan scales the One-Person Company model to thousands of solo founders with free incubators and subsidized compute. CLEAN LIF SPA operates under the same asymmetry — from Chile, for the world. The difference: we bring the method, Zentei, and 13 agents specialized in public procurement."}
          </p>
          <p className="mt-8 reinforcement max-w-3xl text-lg">
            {lang === "es" ? "1∞ · Zentei antes de licitar." : "1∞ · Zentei before bidding."}
          </p>
        </div>
      </section>

      <div className="container"><div className="hairline" /></div>

      <section className="py-24">
        <div className="container">
          <p className="eyebrow">04 — {lang === "es" ? "Referencias" : "References"}</p>
          <h2 className="display mt-5 text-3xl md:text-5xl">{t("impact.validationsTitle")}</h2>
          <p className="mt-6 max-w-3xl text-foreground/75 leading-relaxed">{t("impact.validationsBody")}</p>
          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center">
            {["OCDE", "ISO", "Banco Mundial", "BID", "ProZorro", "Alice"].map((ref) => (
              <span key={ref} className="font-display text-2xl text-foreground/45">{ref}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
