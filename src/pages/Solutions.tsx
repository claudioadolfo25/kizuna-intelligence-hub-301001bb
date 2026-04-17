import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Check } from "lucide-react";
import SEO from "@/components/SEO";
import { useLang } from "@/lib/lang";

const Solutions = () => {
  const { t } = useTranslation();
  const lang = useLang();

  const providerBenefits = lang === "es"
    ? [
        "Anticipación de oportunidades",
        "Inteligencia de precios",
        "Análisis de competencia",
        "Patrones de comportamiento de compradores",
        "Simulación de escenarios",
      ]
    : [
        "Opportunity anticipation",
        "Price intelligence",
        "Competitive analysis",
        "Buyer behavior patterns",
        "Scenario simulation",
      ];

  return (
    <>
      <SEO title="Soluciones · Co-Kizuna" description="Soluciones para proveedores del Estado, compradores públicos y dimensiones Co-Kizuna." />

      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container">
          <p className="eyebrow">{t("nav.solutions")}</p>
          <h1 className="display mt-6 text-4xl md:text-6xl max-w-4xl">{t("solutions.title")}</h1>
        </div>
      </section>

      {/* Phase 1 */}
      <section className="py-20">
        <div className="container grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="inline-block text-[10px] uppercase tracking-[0.22em] px-2 py-1 bg-seal text-seal-foreground">
              {t("solutions.providersStatus")}
            </span>
            <h2 className="display mt-6 text-3xl md:text-5xl">{t("solutions.providersTitle")}</h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">{t("solutions.providersBody")}</p>
            <Link to="/contacto" className="mt-8 inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm uppercase tracking-[0.18em] hover:bg-seal transition-colors">
              {t("nav.demo")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ul className="md:col-span-7 space-y-4">
            {providerBenefits.map((b, i) => (
              <li key={i} className="flex gap-4 border-b border-foreground/10 pb-4">
                <Check className="w-5 h-5 text-seal mt-0.5 shrink-0" />
                <span className="text-foreground/85">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* Phase 2 */}
      <section className="py-20">
        <div className="container grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="inline-block text-[10px] uppercase tracking-[0.22em] px-2 py-1 border border-foreground/30 text-muted-foreground">
              {t("solutions.buyersStatus")}
            </span>
            <h2 className="display mt-6 text-3xl md:text-5xl">{t("solutions.buyersTitle")}</h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">{t("solutions.buyersBody")}</p>
            <Link to="/contacto" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] border-b border-foreground/40 pb-1 hover:border-seal hover:text-seal transition-colors">
              {lang === "es" ? "Acceso anticipado" : "Early access"} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {(lang === "es"
              ? ["Mejores pliegos", "Evaluación sin sesgos", "Auditoría eficiente"]
              : ["Better tenders", "Bias-free evaluation", "Efficient audit"]
            ).map((item, i) => (
              <div key={i} className="bg-background p-6">
                <p className="eyebrow text-foreground/40">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-display text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* Phase 3 */}
      <section className="py-20">
        <div className="container">
          <span className="inline-block text-[10px] uppercase tracking-[0.22em] px-2 py-1 border border-foreground/30 text-muted-foreground">
            {t("solutions.dimensionsStatus")}
          </span>
          <h2 className="display mt-6 text-3xl md:text-5xl max-w-3xl">{t("solutions.dimensionsTitle")}</h2>
          <p className="mt-6 max-w-2xl text-foreground/75 leading-relaxed">{t("solutions.dimensionsBody")}</p>
          <Link to="/metodologia" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] border-b border-foreground/40 pb-1 hover:border-seal hover:text-seal transition-colors">
            {t("common.learnMore")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Solutions;
