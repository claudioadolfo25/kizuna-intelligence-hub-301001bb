import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { useLang } from "@/lib/lang";

const blocks = [
  { es: "Contexto", en: "Context", desc: { es: "País, región, rubro, momento del ciclo.", en: "Country, region, sector, cycle moment." } },
  { es: "Mi empresa", en: "My company", desc: { es: "Tamaño, experiencia, capacidad.", en: "Size, experience, capacity." } },
  { es: "Tipo de decisión", en: "Decision type", desc: { es: "Estratégica, táctica, operativa, anticipación, integridad o aprendizaje.", en: "Strategic, tactical, operational, anticipation, integrity or learning." } },
  { es: "Pregunta clave", en: "Key question", desc: { es: "¿Qué necesito decidir exactamente?", en: "What do I need to decide exactly?" } },
  { es: "Variables clave", en: "Key variables", desc: { es: "Precio, competencia, pliego, capacidad, tiempo, margen.", en: "Price, competition, tender, capacity, time, margin." } },
  { es: "Datos disponibles", en: "Available data", desc: { es: "Historial, patrones, perfil de evaluadores.", en: "History, patterns, evaluator profile." } },
  { es: "Incertidumbres", en: "Uncertainties", desc: { es: "¿Qué NO sé? ¿Qué puede salir mal?", en: "What don't I know? What can go wrong?" } },
  { es: "Análisis Co-Kizuna", en: "Co-Kizuna analysis", desc: { es: "Probabilidad, margen, alertas, recomendación.", en: "Probability, margin, alerts, recommendation." } },
  { es: "Mi decisión y acción", en: "My decision and action", desc: { es: "SÍ / NO / CON AJUSTES. Próxima acción, fecha, responsable.", en: "YES / NO / WITH ADJUSTMENTS. Next action, date, owner." } },
];

const DecisionCanvas = () => {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <>
      <SEO title="Decision Canvas · Co-Kizuna" description="El lienzo Co-Kizuna: una página, nueve bloques, dieciocho minutos. Una decisión mejor documentada." />

      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container">
          <p className="eyebrow">{t("nav.instruments")} · {t("nav.decisionCanvas")}</p>
          <h1 className="display mt-6 text-4xl md:text-6xl max-w-4xl">{t("instruments.canvasTitle")}</h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75">{t("instruments.canvasBody")}</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15">
            {blocks.map((b, i) => (
              <div key={i} className="bg-background p-8 min-h-[180px] flex flex-col">
                <p className="eyebrow text-foreground/40">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-xl md:text-2xl mt-3">{lang === "es" ? b.es : b.en}</h3>
                <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{lang === "es" ? b.desc.es : b.desc.en}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 reinforcement max-w-3xl">{t("instruments.canvasReinforcement")}</div>

          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 items-center">
            <button disabled className="inline-flex items-center gap-2 bg-foreground/30 text-background px-6 py-3 text-sm uppercase tracking-[0.18em] cursor-not-allowed">
              {lang === "es" ? "Descargar PDF · próximamente" : "Download PDF · soon"}
            </button>
            <Link to="/contacto" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] border-b border-foreground/40 pb-1 hover:border-seal hover:text-seal transition-colors">
              {t("nav.demo")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DecisionCanvas;
