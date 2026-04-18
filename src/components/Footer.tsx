import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-foreground/10">
      <div className="container py-16 grid gap-12 md:grid-cols-12">
        {/* Brand & tagline */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-jp text-2xl text-seal leading-none">絆</span>
            <span className="font-display text-xl">Co-Kizuna</span>
          </div>
          <p className="font-display text-2xl leading-snug max-w-md text-foreground/90">
            {t("footer.tagline")}
          </p>
          <p className="mt-6 text-sm text-muted-foreground">{t("footer.origin")}</p>
        </div>

        {/* Navigate */}
        <div className="md:col-span-3">
          <p className="eyebrow mb-5">{t("footer.navigate")}</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/nosotros" className="hover:text-seal transition-colors">{t("nav.about")}</Link></li>
            <li><Link to="/metodologia" className="hover:text-seal transition-colors">{t("nav.methodology")}</Link></li>
            <li><Link to="/instrumentos" className="hover:text-seal transition-colors">{t("nav.instruments")}</Link></li>
            <li><Link to="/herramientas" className="hover:text-seal transition-colors">{t("nav.tools")}</Link></li>
            <li><Link to="/soluciones" className="hover:text-seal transition-colors">{t("nav.solutions")}</Link></li>
            <li><Link to="/impacto" className="hover:text-seal transition-colors">{t("nav.impact")}</Link></li>
            <li><Link to="/recursos" className="hover:text-seal transition-colors">{t("nav.resources")}</Link></li>
          </ul>
        </div>

        {/* Method */}
        <div className="md:col-span-2">
          <p className="eyebrow mb-5">{t("footer.method")}</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/metodologia/principios" className="hover:text-seal transition-colors">{t("nav.principles")}</Link></li>
            <li><Link to="/metodologia/decisiones" className="hover:text-seal transition-colors">{t("nav.decisions")}</Link></li>
            <li><Link to="/instrumentos/decision-canvas" className="hover:text-seal transition-colors">{t("nav.decisionCanvas")}</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="md:col-span-2">
          <p className="eyebrow mb-5">{t("footer.company")}</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/contacto" className="hover:text-seal transition-colors">{t("nav.contact")}</Link></li>
            <li><span className="text-muted-foreground">{t("footer.community")}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {year} Co-Kizuna. {t("footer.rights")}</p>
          <p className="font-jp">絆 Kizuna · Chile · Global</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
