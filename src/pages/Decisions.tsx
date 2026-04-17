import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import { decisions } from "@/data/cokizuna";
import { useLang, tx } from "@/lib/lang";

const Decisions = () => {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <>
      <SEO title="6 Decisiones · Co-Kizuna" description="Las seis decisiones que Co-Kizuna hace posibles: estratégica, táctica, operativa, anticipación, integridad y aprendizaje." />

      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container">
          <p className="eyebrow">{t("nav.methodology")} · {t("nav.decisions")}</p>
          <h1 className="display mt-6 text-4xl md:text-6xl max-w-4xl">{t("methodology.decisionsTitle")}</h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75">{t("methodology.decisionsIntro")}</p>
        </div>
      </section>

      {/* Table */}
      <section className="pb-20">
        <div className="container overflow-x-auto">
          <table className="w-full text-sm border-t border-foreground/15">
            <thead>
              <tr className="text-left">
                <Th>{lang === "es" ? "Categoría" : "Category"}</Th>
                <Th>{lang === "es" ? "Nivel" : "Level"}</Th>
                <Th>{lang === "es" ? "Horizonte" : "Horizon"}</Th>
                <Th>{lang === "es" ? "Pregunta clave" : "Key question"}</Th>
                <Th>{lang === "es" ? "Actor" : "Actor"}</Th>
              </tr>
            </thead>
            <tbody>
              {decisions.map((d, i) => (
                <tr key={i} className="border-b border-foreground/10">
                  <td className="py-5 pr-6 font-display text-lg">{tx(d.category, lang)}</td>
                  <td className={`py-5 pr-6 ${d.level.es === "Co-Kizuna" ? "text-seal font-medium" : "text-foreground/70"}`}>
                    {tx(d.level, lang)}
                  </td>
                  <td className="py-5 pr-6 text-foreground/75">{tx(d.horizon, lang)}</td>
                  <td className="py-5 pr-6 italic text-foreground/85">{tx(d.question, lang)}</td>
                  <td className="py-5 pr-2 text-muted-foreground">{tx(d.actor, lang)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detail */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
            {decisions.map((d, i) => (
              <article key={i} className="bg-background p-10">
                <p className="eyebrow text-foreground/40">0{i + 1} · {tx(d.level, lang)}</p>
                <h2 className="font-display text-3xl mt-3">{tx(d.category, lang)}</h2>
                <p className="mt-3 text-foreground/65 italic">{tx(d.question, lang)}</p>
                <p className="mt-5 text-foreground/80 leading-relaxed">{tx(d.body, lang)}</p>
                <div className="mt-6 flex gap-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{tx(d.horizon, lang)}</span>
                  <span>·</span>
                  <span>{tx(d.actor, lang)}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 reinforcement max-w-3xl">{t("methodology.decisionsReinforcement")}</div>
        </div>
      </section>
    </>
  );
};

const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="eyebrow text-foreground/50 py-4 pr-6 font-medium">{children}</th>
);

export default Decisions;
