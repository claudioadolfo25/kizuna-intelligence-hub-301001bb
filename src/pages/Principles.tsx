import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Plus, Minus } from "lucide-react";
import SEO from "@/components/SEO";
import { principles } from "@/data/cokizuna";
import { useLang, tx } from "@/lib/lang";

const Principles = () => {
  const { t } = useTranslation();
  const lang = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <SEO title="12 Principios · Co-Kizuna" description="Los doce principios operativos de Co-Kizuna. Tankyū, Kanso, Hoshin, Kaiji y más. Filosofía japonesa aplicada a la inteligencia en compras públicas." />

      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container">
          <p className="eyebrow">{t("nav.methodology")} · {t("nav.principles")}</p>
          <h1 className="display mt-6 text-4xl md:text-6xl max-w-4xl">
            {lang === "es"
              ? "Doce principios. Una doctrina."
              : "Twelve principles. One doctrine."}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75">
            {lang === "es"
              ? "Cada principio responde a una pregunta operativa. Cada antiprincipio explica qué evitar."
              : "Each principle answers an operational question. Each antiprinciple explains what to avoid."}
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container">
          <ul className="border-t border-foreground/15">
            {principles.map((p) => {
              const isOpen = open === p.index;
              return (
                <li key={p.index} className="border-b border-foreground/15">
                  <button
                    onClick={() => setOpen(isOpen ? null : p.index)}
                    className="w-full text-left py-6 md:py-8 grid grid-cols-12 gap-4 items-baseline group"
                    aria-expanded={isOpen}
                  >
                    <span className="col-span-2 md:col-span-1 eyebrow text-foreground/40">{String(p.index).padStart(2, "0")}</span>
                    <span className="col-span-3 md:col-span-2 font-jp text-seal text-sm md:text-base">{p.jp}</span>
                    <span className="col-span-6 md:col-span-7 font-display text-xl md:text-3xl">{p.name}</span>
                    <span className="col-span-1 md:col-span-2 flex justify-end text-muted-foreground group-hover:text-foreground transition-colors">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="grid grid-cols-12 gap-4 pb-10 animate-fade-in">
                      <div className="col-span-12 md:col-start-4 md:col-span-7 space-y-6">
                        <Block label={lang === "es" ? "Esencia" : "Essence"} text={tx(p.essence, lang)} />
                        <Block label={lang === "es" ? "Aplicación" : "Application"} text={tx(p.application, lang)} />
                        <Block label={lang === "es" ? "Antiprincipio · qué NO hacer" : "Antiprinciple · what NOT to do"} text={tx(p.anti, lang)} muted />
                      </div>
                    </div>
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

const Block = ({ label, text, muted }: { label: string; text: string; muted?: boolean }) => (
  <div>
    <p className="eyebrow">{label}</p>
    <p className={`mt-2 text-lg leading-relaxed ${muted ? "text-foreground/55 italic" : "text-foreground/85"}`}>{text}</p>
  </div>
);

export default Principles;
