import { Link, useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import SEO from "@/components/SEO";
import EmailCapture from "@/components/EmailCapture";
import { tools, toolStatusLabel } from "@/data/tools";
import { principles, decisions } from "@/data/cokizuna";
import { useLang, tx } from "@/lib/lang";

const ToolDetail = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const lang = useLang();

  const tool = tools.find((x) => x.slug === slug);
  if (!tool) return <Navigate to="/herramientas" replace />;

  const linkedPrinciples = principles.filter((p) => tool.principles.includes(p.jp));
  const linkedDecisions = decisions.filter((d) => tool.decisions.includes(d.category.es));

  const isActive = tool.status === "active";

  return (
    <>
      <SEO
        title={`${tool.name} · Co-Kizuna`}
        description={tx(tool.tagline, lang)}
      />

      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-20 relative overflow-hidden">
        <span className="kanji-mark absolute -right-20 top-0 text-[28rem] leading-none select-none">絆</span>
        <div className="container relative">
          <Link
            to="/herramientas"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-seal transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> {lang === "es" ? "Herramientas" : "Tools"}
          </Link>

          <div className="mt-8 flex items-start gap-4 flex-wrap">
            <h1 className="display text-5xl md:text-7xl">{tool.name}</h1>
            <span
              className={`mt-4 text-[10px] uppercase tracking-[0.22em] px-2 py-1 ${
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

          <p className="mt-6 max-w-3xl text-xl md:text-2xl font-display text-foreground/85 leading-snug">
            {tx(tool.tagline, lang)}
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
            {tx(tool.audience, lang)}
          </p>
        </div>
      </section>

      <Divider />

      {/* What & Why */}
      <section className="py-20 md:py-28">
        <div className="container grid md:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow">{lang === "es" ? "Qué es" : "What it is"}</p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/85">{tx(tool.what, lang)}</p>
          </div>
          <div>
            <p className="eyebrow">{lang === "es" ? "Para qué" : "What for"}</p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/85">{tx(tool.why, lang)}</p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="container">
          <p className="eyebrow">{lang === "es" ? "Capacidades" : "Capabilities"}</p>
          <h2 className="display mt-5 text-3xl md:text-4xl">
            {lang === "es" ? "Lo que hace, en concreto." : "What it does, in concrete terms."}
          </h2>
          <ul className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-5 max-w-4xl">
            {(lang === "es" ? tool.features.es : tool.features.en).map((f, i) => (
              <li key={i} className="flex gap-4 border-b border-foreground/10 pb-4">
                <Check className="w-5 h-5 text-seal mt-0.5 shrink-0" />
                <span className="text-foreground/85">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      {/* Methodology mapping */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <p className="eyebrow">{lang === "es" ? "Conexión metodológica" : "Methodological mapping"}</p>
          <h2 className="display mt-5 text-3xl md:text-4xl max-w-3xl">
            {lang === "es"
              ? "Esta herramienta no nace del software. Nace del método."
              : "This tool isn't born from the software. It's born from the method."}
          </h2>

          {/* Decisions */}
          <div className="mt-14">
            <p className="eyebrow text-foreground/50">
              {lang === "es" ? "Decisiones Co-Kizuna que sirve" : "Co-Kizuna decisions it serves"}
            </p>
            <div className="mt-6 grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
              {linkedDecisions.map((d) => (
                <Link
                  key={d.category.es}
                  to="/metodologia/decisiones"
                  className="bg-background p-8 hover:bg-secondary/50 transition-colors group"
                >
                  <p className="eyebrow text-foreground/50">{tx(d.level, lang)}</p>
                  <h3 className="font-display text-2xl mt-3 group-hover:text-seal transition-colors">
                    {tx(d.category, lang)}
                  </h3>
                  <p className="mt-3 italic text-foreground/70">{tx(d.question, lang)}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Principles */}
          <div className="mt-16">
            <p className="eyebrow text-foreground/50">
              {lang === "es" ? "Principios aplicados" : "Applied principles"}
            </p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
              {linkedPrinciples.map((p) => (
                <Link
                  key={p.jp}
                  to="/metodologia/principios"
                  className="bg-background p-6 hover:bg-secondary/50 transition-colors group"
                >
                  <p className="font-jp text-seal text-sm">{p.jp}</p>
                  <h3 className="font-display text-xl mt-2 group-hover:text-seal transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm text-foreground/65">{tx(p.essence, lang)}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Dimensions */}
          {tool.dimensions && tool.dimensions.length > 0 && (
            <div className="mt-16 max-w-3xl">
              <p className="eyebrow text-foreground/50">
                {lang === "es" ? "Dimensiones que mide" : "Dimensions it measures"}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tool.dimensions.map((d) => (
                  <li
                    key={d}
                    className="text-xs uppercase tracking-[0.18em] border border-foreground/30 px-3 py-1.5 text-foreground/75"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          {isActive ? (
            <>
              <p className="eyebrow">{lang === "es" ? "El siguiente paso" : "The next step"}</p>
              <h2 className="display mt-5 text-3xl md:text-4xl">
                {lang === "es"
                  ? `Pruebe ${tool.name} con su caso real.`
                  : `Try ${tool.name} with your real case.`}
              </h2>
              <Link
                to="/contacto"
                className="mt-10 inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm uppercase tracking-[0.18em] hover:bg-seal transition-colors"
              >
                {t("nav.demo")} <ArrowRight className="w-4 h-4" />
              </Link>
            </>
          ) : (
            <>
              <p className="eyebrow">{lang === "es" ? "Lista de espera" : "Waitlist"}</p>
              <h2 className="display mt-5 text-3xl md:text-4xl">
                {lang === "es"
                  ? `Sea el primero en usar ${tool.name}.`
                  : `Be among the first to use ${tool.name}.`}
              </h2>
              <p className="mt-6 text-foreground/75">
                {lang === "es"
                  ? "Le avisaremos cuando esté disponible y le daremos acceso anticipado."
                  : "We'll notify you when it's ready and give you early access."}
              </p>
              <div className="mt-10">
                <EmailCapture
                  source={`waitlist-${tool.slug}`}
                  ctaLabel={lang === "es" ? "Unirme a la lista" : "Join the waitlist"}
                />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

const Divider = () => (
  <div className="container">
    <div className="hairline" />
  </div>
);

export default ToolDetail;
