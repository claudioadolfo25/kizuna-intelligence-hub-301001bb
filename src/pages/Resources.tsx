import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Plus, Minus, Download } from "lucide-react";
import SEO from "@/components/SEO";
import { faqs, glossary } from "@/data/cokizuna";
import { useLang, tx } from "@/lib/lang";

const Resources = () => {
  const { t } = useTranslation();
  const lang = useLang();
  const [open, setOpen] = useState<number | null>(0);

  const docs = lang === "es"
    ? [
        { title: "Manifiesto Co-Kizuna", desc: "El documento fundacional." },
        { title: "Guía de los 12 principios", desc: "Detalle operativo y antiprincipios." },
        { title: "Decision Canvas (en blanco)", desc: "Lienzo PDF para imprimir." },
        { title: "Decision Canvas (ejemplo)", desc: "Caso completo de un proveedor." },
      ]
    : [
        { title: "Co-Kizuna Manifesto", desc: "The founding document." },
        { title: "Guide to the 12 principles", desc: "Operational detail and antiprinciples." },
        { title: "Decision Canvas (blank)", desc: "Printable PDF canvas." },
        { title: "Decision Canvas (example)", desc: "Full case of a supplier." },
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
          <div className="mt-10 grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
            {docs.map((d, i) => (
              <div key={i} className="bg-background p-8 flex flex-col">
                <p className="eyebrow text-foreground/40">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-2xl mt-3">{d.title}</h3>
                <p className="mt-2 text-sm text-foreground/65">{d.desc}</p>
                <button disabled className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground cursor-not-allowed">
                  <Download className="w-3.5 h-3.5" /> {t("resources.soonAvailable")}
                </button>
              </div>
            ))}
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
