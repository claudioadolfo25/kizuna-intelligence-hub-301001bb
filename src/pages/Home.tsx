import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";
import { instruments, roadmap } from "@/data/cokizuna";
import { useLang, tx } from "@/lib/lang";

const Home = () => {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <>
      <SEO
        title="Co-Kizuna · Zentei antes de licitar · Inteligencia para compras públicas"
        description="La metodología OPC que convierte a un proveedor solista en el competidor más preparado del mercado. 13 agentes IA. Un método. Resultados medibles. 1∞."
      />

      {/* HERO */}
      <section className="relative pt-16 md:pt-28 pb-24 md:pb-40 overflow-hidden">
        <span className="kanji-mark absolute -right-12 top-12 md:right-0 md:top-20 text-[20rem] md:text-[34rem] leading-none select-none">
          絆
        </span>
        <div className="container relative">
          {/* 1∞ symbol prominently displayed */}
          <div className="flex items-baseline gap-3 mb-6 reveal">
            <span className="font-jp text-3xl md:text-4xl text-seal leading-none">絆</span>
            <span className="inline-flex items-baseline gap-[3px] text-sm uppercase tracking-[0.22em] text-muted-foreground border-l border-foreground/15 pl-3 ml-1">
              <span className="font-display text-foreground text-xl md:text-2xl">1</span>
              <span className="font-display text-seal text-2xl md:text-3xl leading-none">∞</span>
            </span>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("home.heroEyebrow")}</span>
          </div>

          <h1 className="display mt-4 text-4xl md:text-7xl max-w-5xl reveal reveal-delay-1">
            {t("home.heroTitle")}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75 leading-relaxed reveal reveal-delay-2">
            {t("home.heroSubtitle")}
          </p>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground reveal reveal-delay-2">
            {t("home.heroSupport")}
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 reveal reveal-delay-3">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm uppercase tracking-[0.18em] hover:bg-seal transition-colors"
            >
              {t("home.ctaDemo")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/metodologia" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] border-b border-foreground/40 pb-1 hover:border-seal hover:text-seal transition-colors">
              {t("home.ctaMethod")}
            </Link>
            <Link to="/instrumentos" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors">
              {t("home.ctaInstruments")} <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="mt-16 reinforcement max-w-2xl text-lg reveal reveal-delay-3">
            {t("home.heroReinforcement")}
          </div>
        </div>
      </section>

      <Divider />

      {/* OPC SECTION — CLEAN LIF SPA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <span className="kanji-mark absolute -left-10 top-10 text-[26rem] leading-none">人</span>
        <div className="container relative">
          <p className="eyebrow">{t("home.opcEyebrow")}</p>
          <div className="mt-6 flex items-baseline gap-4">
            <span className="font-display text-foreground text-5xl md:text-6xl">1</span>
            <span className="font-display text-seal text-6xl md:text-7xl leading-none">∞</span>
          </div>
          <h2 className="display mt-6 text-3xl md:text-5xl max-w-4xl">{t("home.opcTitle")}</h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/80">{t("home.opcBody")}</p>
          <p className="mt-4 max-w-3xl font-display text-2xl text-foreground">{t("home.opcBody2")}</p>

          <div className="mt-14 grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {[t("home.opcBlockA"), t("home.opcBlockB"), t("home.opcBlockC")].map((b, i) => (
              <div key={i} className="bg-background p-8">
                <p className="eyebrow text-foreground/50">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-4 text-foreground/80 leading-relaxed text-sm">{b}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 reinforcement max-w-3xl text-lg">{t("home.opcSlogan")}</p>
        </div>
      </section>

      <Divider />

      {/* PROBLEM */}
      <Section eyebrow={t("home.problemEyebrow")} title={t("home.problemTitle")}>
        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-lg leading-relaxed text-foreground/80">{t("home.problemBody")}</p>
          <p className="text-lg leading-relaxed text-foreground/80">{t("home.problemBody2")}</p>
        </div>
        <div className="mt-12 reinforcement max-w-3xl">{t("home.problemReinforcement")}</div>
      </Section>

      <Divider />

      {/* METHODOLOGY */}
      <Section eyebrow={t("home.methodEyebrow")} title={t("home.methodTitle")}>
        <p className="max-w-3xl text-lg leading-relaxed text-foreground/80">{t("home.methodBody")}</p>
        <Link
          to="/metodologia/principios"
          className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] border-b border-foreground/40 pb-1 hover:border-seal hover:text-seal transition-colors"
        >
          {t("home.methodCta")} <ArrowRight className="w-4 h-4" />
        </Link>
        <div className="mt-12 reinforcement max-w-3xl">{t("home.methodReinforcement")}</div>
      </Section>

      <Divider />

      {/* INSTRUMENTS */}
      <Section eyebrow={t("home.instrumentsEyebrow")} title={t("home.instrumentsTitle")} subtitle={t("home.instrumentsSubtitle")}>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {instruments.slice(0, 6).map((inst, i) => (
            <Link
              key={inst.slug}
              to={`/instrumentos`}
              className="bg-background p-8 group hover:bg-secondary transition-colors"
            >
              <p className="eyebrow text-foreground/60">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-display text-2xl mt-4">{tx(inst.title, lang)}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{tx(inst.purpose, lang)}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground group-hover:text-seal transition-colors inline-flex items-center gap-1">
                {tx(inst.audience, lang)} <ArrowUpRight className="w-3 h-3" />
              </p>
            </Link>
          ))}
        </div>
        <Link to="/instrumentos" className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] border-b border-foreground/40 pb-1 hover:border-seal hover:text-seal transition-colors">
          {t("common.viewAll")} <ArrowRight className="w-4 h-4" />
        </Link>
      </Section>

      <Divider />

      {/* PROVIDERS */}
      <Section eyebrow={t("home.providersEyebrow")} title={t("home.providersTitle")}>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg leading-relaxed text-foreground/80">{t("home.providersBody")}</p>
            <Link
              to="/contacto"
              className="mt-8 inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm uppercase tracking-[0.18em] hover:bg-seal transition-colors"
            >
              {t("home.ctaDemo")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ul className="space-y-4">
            {t("home.providersList").split(" · ").map((item, i) => (
              <li key={i} className="flex gap-4 border-b border-foreground/10 pb-4">
                <span className="font-jp text-seal">絆</span>
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 reinforcement max-w-3xl">{t("home.providersReinforcement")}</div>
      </Section>

      <Divider />

      {/* BUYERS soon + DIMENSIONS soon */}
      <section className="py-24 md:py-32">
        <div className="container grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          <div className="bg-background p-10 md:p-14">
            <p className="eyebrow">{t("home.buyersEyebrow")}</p>
            <h3 className="font-display text-3xl md:text-4xl mt-5">{t("home.buyersTitle")}</h3>
            <p className="mt-5 text-foreground/75 leading-relaxed">{t("home.buyersBody")}</p>
            <Link to="/contacto" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] border-b border-foreground/40 pb-1 hover:border-seal hover:text-seal transition-colors">
              {t("home.buyersCta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-background p-10 md:p-14">
            <p className="eyebrow">{t("home.dimensionsEyebrow")}</p>
            <h3 className="font-display text-3xl md:text-4xl mt-5">{t("home.dimensionsTitle")}</h3>
            <p className="mt-5 text-foreground/75 leading-relaxed">{t("home.dimensionsBody")}</p>
            <Link to="/metodologia" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] border-b border-foreground/40 pb-1 hover:border-seal hover:text-seal transition-colors">
              {t("common.learnMore")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Divider />

      {/* GLOBAL ROADMAP */}
      <Section eyebrow={t("home.globalEyebrow")} title={t("home.globalTitle")}>
        <p className="max-w-3xl text-lg leading-relaxed text-foreground/80">{t("home.globalBody")}</p>
        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
          {roadmap.map((stage, i) => (
            <li key={stage.region} className="bg-background p-8 relative">
              <p className="eyebrow text-foreground/50">{String(i + 1).padStart(2, "0")}</p>
              <h4 className="font-display text-2xl mt-4">{stage.region}</h4>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{tx(stage.description, lang)}</p>
              <span className={`mt-6 inline-block text-[10px] uppercase tracking-[0.22em] px-2 py-1 ${
                stage.status === "active" ? "bg-seal text-seal-foreground"
                : stage.status === "inDevelopment" ? "bg-foreground/90 text-background"
                : "border border-foreground/30 text-muted-foreground"
              }`}>
                {t(`common.${stage.status === "vision" ? "soon" : stage.status}`)}
              </span>
            </li>
          ))}
        </ol>
      </Section>

      {/* FINAL CTA */}
      <section className="py-32 md:py-44 bg-foreground text-background relative overflow-hidden">
        <span className="kanji-mark absolute -left-8 -bottom-20 text-[24rem] text-background/[0.04]">絆</span>
        <div className="container relative">
          <p className="eyebrow text-background/60">{t("home.finalEyebrow")}</p>
          <h2 className="display mt-6 text-4xl md:text-6xl max-w-4xl">{t("home.finalTitle")}</h2>
          <p className="mt-8 max-w-2xl text-lg text-background/75 leading-relaxed">{t("home.finalBody")}</p>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            <Link to="/contacto" className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 text-sm uppercase tracking-[0.18em] hover:bg-seal hover:text-seal-foreground transition-colors">
              {t("home.ctaDemo")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/instrumentos" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-background/80 border-b border-background/40 pb-1 hover:border-seal hover:text-seal transition-colors">
              {t("home.ctaInstruments")}
            </Link>
            <Link to="/metodologia" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-background/80 border-b border-background/40 pb-1 hover:border-seal hover:text-seal transition-colors">
              {t("home.ctaMethod")}
            </Link>
          </div>
          <p className="mt-16 max-w-2xl font-display text-xl italic text-background/85 border-l-2 border-seal pl-6">
            {t("home.finalReinforcement")}
          </p>
        </div>
      </section>
    </>
  );
};

const Section = ({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section className="py-24 md:py-32">
    <div className="container">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display mt-5 text-3xl md:text-5xl max-w-4xl">{title}</h2>
      {subtitle && <p className="mt-6 max-w-2xl text-lg text-foreground/75">{subtitle}</p>}
      <div className="mt-12">{children}</div>
    </div>
  </section>
);

const Divider = () => (
  <div className="container">
    <div className="hairline" />
  </div>
);

export default Home;
