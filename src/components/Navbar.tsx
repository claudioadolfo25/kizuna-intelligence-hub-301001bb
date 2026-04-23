import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [methodOpen, setMethodOpen] = useState(false);
  const [instOpen, setInstOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMethodOpen(false);
    setInstOpen(false);
  }, [location.pathname]);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "bg-background/85 backdrop-blur border-b border-foreground/10" : "bg-background/0"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group" aria-label="Co-Kizuna · 1 humano, infinitos agentes">
          <span className="font-jp text-xl text-seal leading-none">絆</span>
          <span className="font-display text-lg tracking-tight">Co-Kizuna</span>
          <span
            className="hidden sm:inline-flex items-baseline gap-[2px] text-[11px] uppercase tracking-[0.22em] text-muted-foreground border-l border-foreground/15 pl-3 ml-1"
            title="1 humano · ∞ agentes"
          >
            <span className="font-display text-foreground">1</span>
            <span className="font-display text-seal text-base leading-none">∞</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink to="/nosotros" className={linkCls}>
            {t("nav.about")}
          </NavLink>

          {/* Methodology dropdown */}
          <div className="relative" onMouseEnter={() => setMethodOpen(true)} onMouseLeave={() => setMethodOpen(false)}>
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.methodology")}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {methodOpen && (
              <div className="absolute left-0 top-full pt-3 min-w-56">
                <div className="bg-background border border-foreground/10 py-3">
                  <NavLink to="/metodologia" className="block px-5 py-2 text-sm hover:bg-secondary">
                    {t("nav.methodology")}
                  </NavLink>
                  <NavLink to="/metodologia/principios" className="block px-5 py-2 text-sm hover:bg-secondary">
                    {t("nav.principles")}
                  </NavLink>
                  <NavLink to="/metodologia/decisiones" className="block px-5 py-2 text-sm hover:bg-secondary">
                    {t("nav.decisions")}
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          {/* Instruments dropdown */}
          <div className="relative" onMouseEnter={() => setInstOpen(true)} onMouseLeave={() => setInstOpen(false)}>
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.instruments")}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {instOpen && (
              <div className="absolute left-0 top-full pt-3 min-w-56">
                <div className="bg-background border border-foreground/10 py-3">
                  <NavLink to="/instrumentos" className="block px-5 py-2 text-sm hover:bg-secondary">
                    {t("nav.instruments")}
                  </NavLink>
                  <NavLink to="/instrumentos/decision-canvas" className="block px-5 py-2 text-sm hover:bg-secondary">
                    {t("nav.decisionCanvas")}
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/herramientas" className={linkCls}>
            {t("nav.tools")}
          </NavLink>
          <NavLink to="/soluciones" className={linkCls}>
            {t("nav.solutions")}
          </NavLink>
          <NavLink to="/impacto" className={linkCls}>
            {t("nav.impact")}
          </NavLink>
          <NavLink to="/recursos" className={linkCls}>
            {t("nav.resources")}
          </NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            to="/contacto"
            className="text-xs uppercase tracking-[0.2em] border-b border-foreground/40 pb-0.5 hover:border-seal hover:text-seal transition-colors"
          >
            {t("nav.demo")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2"
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-foreground/10 bg-background">
          <nav className="container py-6 flex flex-col gap-1">
            <MobileLink to="/nosotros" label={t("nav.about")} />
            <MobileLink to="/metodologia" label={t("nav.methodology")} />
            <MobileLink to="/metodologia/principios" label={`— ${t("nav.principles")}`} indent />
            <MobileLink to="/metodologia/decisiones" label={`— ${t("nav.decisions")}`} indent />
            <MobileLink to="/instrumentos" label={t("nav.instruments")} />
            <MobileLink to="/instrumentos/decision-canvas" label={`— ${t("nav.decisionCanvas")}`} indent />
            <MobileLink to="/herramientas" label={t("nav.tools")} />
            <MobileLink to="/soluciones" label={t("nav.solutions")} />
            <MobileLink to="/impacto" label={t("nav.impact")} />
            <MobileLink to="/recursos" label={t("nav.resources")} />
            <div className="hairline my-4" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
              <Link
                to="/contacto"
                className="text-xs uppercase tracking-[0.2em] text-seal border-b border-seal pb-0.5"
              >
                {t("nav.demo")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const MobileLink = ({ to, label, indent }: { to: string; label: string; indent?: boolean }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `py-3 text-base ${indent ? "pl-4 text-sm text-muted-foreground" : ""} ${
        isActive ? "text-foreground" : "text-muted-foreground"
      }`
    }
  >
    {label}
  </NavLink>
);

export default Navbar;
