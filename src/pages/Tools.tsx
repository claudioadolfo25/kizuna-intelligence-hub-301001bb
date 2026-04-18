import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";
import { tools, toolStatusLabel } from "@/data/tools";
import { useLang, tx } from "@/lib/lang";

const Tools = () => {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <>
      <SEO
        title={lang === "es" ? "Herramientas · Co-Kizuna" : "Tools · Co-Kizuna"}
        description={
          lang === "es"
            ? "QuiverCL, GaiaCL, WorkshopCL y ContourCL: las herramientas operativas de la metodología Co-Kizuna."
            : "QuiverCL, GaiaCL, WorkshopCL and ContourCL: the operational tools of the Co-Kizuna methodology."
        }
      />

      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 relative overflow-hidden">
        <span className="kanji-mark absolute -right-16 top-10 text-[24rem] leading-none select-none">絆</span>
        <div className="container relative">
          <p className="eyebrow">{t("nav.tools")}</p>
          <h1 className="display mt-6 text-4xl md:text-6xl max-w-4xl">
            {lang === "es"
              ? "Herramientas que ejecutan la metodología."
              : "Tools that execute the methodology."}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75 leading-relaxed">
            {lang === "es"
              ? "Cada herramienta declara qué decisiones Co-Kizuna sirve y qué principios aplica. Sin caja negra. Sin promesas vagas."
              : "Each tool declares which Co-Kizuna decisions it serves and which principles it applies. No black box. No vague promises."}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-32">
        <div className="container grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          {tools.map((tool, i) => (
            <Link
              key={tool.slug}
              to={`/herramientas/${tool.slug}`}
              className="bg-background p-10 md:p-12 group hover:bg-secondary transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="eyebrow text-foreground/50">{String(i + 1).padStart(2, "0")}</p>
                <span
                  className={`text-[10px] uppercase tracking-[0.22em] px-2 py-1 ${
                    tool.status === "active"
                      ? "bg-seal text-seal-foreground"
                      : tool.status === "beta"
                        ? "bg-foreground text-background"
                        : "border border-foreground/30 text-muted-foreground"
                  }`}
                >
                  {toolStatusLabel(tool.status, lang)}
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl mt-6">{tool.name}</h2>
              <p className="mt-3 text-foreground/75 leading-relaxed">{tx(tool.tagline, lang)}</p>

              <div className="mt-8 space-y-3 text-xs">
                <div className="flex gap-3">
                  <span className="eyebrow text-muted-foreground w-24 shrink-0">
                    {lang === "es" ? "Decisiones" : "Decisions"}
                  </span>
                  <span className="text-foreground/80">{tool.decisions.join(" · ")}</span>
                </div>
                <div className="flex gap-3">
                  <span className="eyebrow text-muted-foreground w-24 shrink-0">
                    {lang === "es" ? "Principios" : "Principles"}
                  </span>
                  <span className="font-jp text-seal">{tool.principles.join(" · ")}</span>
                </div>
              </div>

              <span className="mt-auto pt-10 inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-muted-foreground group-hover:text-seal transition-colors">
                {lang === "es" ? "Ver herramienta" : "View tool"} <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tools;
