import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Plus, Minus, Mail } from "lucide-react";
import SEO from "@/components/SEO";
import EmailCapture from "@/components/EmailCapture";
import { faqs, glossary } from "@/data/cokizuna";
import { useLang, tx } from "@/lib/lang";

const Resources = () => {
  const { t } = useTranslation();
  const lang = useLang();
  const [open, setOpen] = useState<number | null>(0);

  const docs = lang === "es"
    ? [
        { slug: "manifiesto", title: "Manifiesto Co-Kizuna", desc: "El documento fundacional. Datos abiertos para todos. Inteligencia para quienes deciden." },
        { slug: "guia-principios", title: "Guía de los 12 principios", desc: "Detalle operativo, aplicación y antiprincipios." },
        { slug: "decision-canvas", title: "Decision Canvas (en blanco)", desc: "Lienzo PDF imprimible para estructurar decisiones." },
        { slug: "decision-canvas-ejemplo", title: "Decision Canvas (ejemplo)", desc: "Caso completo de un proveedor anonimizado." },
      ]
    : [
        { slug: "manifiesto", title: "Co-Kizuna Manifesto", desc: "The founding document. Open data for all. Intelligence for those who decide." },
        { slug: "guia-principles", title: "Guide to the 12 principles", desc: "Operational detail, application and antiprinciples." },
        { slug: "decision-canvas", title: "Decision Canvas (blank)", desc: "Printable PDF canvas to structure decisions." },
        { slug: "decision-canvas-ejemplo", title: "Decision Canvas (example)", desc: "Full anonymised supplier case." },
      ];

  return (
    <>
      <SEO title="Recursos · Co-Kizuna" description="Documentación metodológica, glosario y preguntas frecuentes." />

      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container">
          <p className="eyebrow">{t("nav.resources")}</p>
          <h1 className="display mt-6 text-4xl md:text-6xl max-w-4xl">{t("resources.title")}</h1>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-16">
        <div className="container">
          <p className="eyebrow">01 — {lang === "es" ? "Documentación" : "Documentation"}</p>
          <h2 className="display mt-5 text-3xl md:text-4xl">{t("resources.docsTitle")}</h2>
          <p className="mt-6 max-w-2xl text-foreground/70">
            {lang === "es"
              ? "Material metodológico Co-Kizuna. Déjenos su correo y se lo enviamos en cuanto esté disponible."
              : "Co-Kizuna methodological material. Leave your email and we'll send it as soon as it's ready."}
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
            {docs.map((d, i) => (
              <div key={d.slug} className="bg-background p-8 flex flex-col">
                <p className="eyebrow text-foreground/40">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-2xl mt-3">{d.title}</h3>
                <p className="mt-2 text-sm text-foreground/65">{d.desc}</p>
                <div className="mt-6">
                  <EmailCapture
                    source={`doc-${d.slug}`}
                    ctaLabel={lang === "es" ? "Recibirlo" : "Send it"}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Mail className="w-3.5 h-3.5" />
            {lang === "es"
              ? "Cada descarga construye la red Kizuna. Sin spam."
              : "Each download builds the Kizuna network. No spam."}
          </div>
        </div>
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* Glossary */}
      <section className="py-16">
        <div className="container">
          <p className="eyebrow">02 — {lang === "es" ? "Glosario" : "Glossary"}</p>
          <h2 className="display mt-5 text-3xl md:text-4xl">{t("resources.glossaryTitle")}</h2>
          <dl className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-6">
            {glossary.map((g) => (
              <div key={g.term} className="border-b border-foreground/10 pb-4">
                <dt className="font-display text-xl text-seal">{g.term}</dt>
                <dd className="mt-2 text-foreground/75">{tx(g.def, lang)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="container"><div className="hairline" /></div>

      {/* FAQ */}
      <section className="py-16 pb-32">
        <div className="container">
          <p className="eyebrow">03 — FAQ</p>
          <h2 className="display mt-5 text-3xl md:text-4xl">{t("resources.faqTitle")}</h2>
          <ul className="mt-10 border-t border-foreground/15 max-w-4xl">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={i} className="border-b border-foreground/15">
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full text-left py-6 flex items-start justify-between gap-6">
                    <span className="font-display text-lg md:text-xl">{tx(f.q, lang)}</span>
                    {isOpen ? <Minus className="w-5 h-5 mt-1 shrink-0 text-muted-foreground" /> : <Plus className="w-5 h-5 mt-1 shrink-0 text-muted-foreground" />}
                  </button>
                  {isOpen && (
                    <p className="pb-6 text-foreground/75 leading-relaxed animate-fade-in max-w-3xl">{tx(f.a, lang)}</p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Resources;
