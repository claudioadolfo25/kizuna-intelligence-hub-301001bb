import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith("en") ? "en" : "es";

  const set = (lng: "es" | "en") => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="inline-flex items-center text-xs tracking-[0.2em] uppercase">
      <button
        onClick={() => set("es")}
        className={`px-2 py-1 transition-colors ${current === "es" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
        aria-pressed={current === "es"}
        aria-label="Español"
      >
        ES
      </button>
      <span className="text-foreground/30">/</span>
      <button
        onClick={() => set("en")}
        className={`px-2 py-1 transition-colors ${current === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
        aria-pressed={current === "en"}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
