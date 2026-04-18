import { useState } from "react";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { ArrowRight, Check } from "lucide-react";
import { useLang } from "@/lib/lang";

const emailSchema = z
  .string()
  .trim()
  .min(1, "required")
  .email("invalid")
  .max(255, "tooLong");

type Variant = "light" | "dark";

interface EmailCaptureProps {
  /** Headline above the field */
  title?: string;
  /** Short context line */
  description?: string;
  /** Visual context — light bg vs dark bg */
  variant?: Variant;
  /** Tag identifying the lead source (manifesto, principles-guide, etc.) */
  source: string;
  /** Override default CTA copy */
  ctaLabel?: string;
}

const EmailCapture = ({ title, description, variant = "light", source, ctaLabel }: EmailCaptureProps) => {
  const { t } = useTranslation();
  const lang = useLang();
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(value);
    if (!result.success) {
      const code = result.error.issues[0]?.message ?? "invalid";
      setError(
        code === "required"
          ? t("contact.errors.required")
          : code === "tooLong"
            ? t("contact.errors.tooLong")
            : t("contact.errors.email"),
      );
      return;
    }
    setError(null);
    // Lead capture (UI-only). Source tag preserved for future backend.
    void source;
    setSubmitted(true);
  };

  const isDark = variant === "dark";
  const successMsg =
    lang === "es"
      ? "Recibido. Le escribiremos pronto con el material."
      : "Got it. We'll send the material soon.";
  const placeholder = lang === "es" ? "su@correo.com" : "you@email.com";
  const defaultCta = lang === "es" ? "Recibir material" : "Send me the material";

  if (submitted) {
    return (
      <div
        className={`flex items-start gap-3 p-5 border ${
          isDark ? "border-background/20 text-background" : "border-foreground/15 text-foreground"
        }`}
      >
        <Check className={`w-5 h-5 mt-0.5 shrink-0 ${isDark ? "text-seal" : "text-seal"}`} />
        <p className="text-sm leading-relaxed">{successMsg}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-xl">
      {title && (
        <p className={`font-display text-xl ${isDark ? "text-background" : "text-foreground"}`}>{title}</p>
      )}
      {description && (
        <p className={`mt-2 text-sm ${isDark ? "text-background/70" : "text-foreground/65"}`}>{description}</p>
      )}
      <div
        className={`mt-5 flex flex-col sm:flex-row gap-2 sm:gap-0 sm:items-stretch border ${
          isDark ? "border-background/30" : "border-foreground/30"
        }`}
      >
        <label htmlFor={`email-${source}`} className="sr-only">
          {t("contact.email")}
        </label>
        <input
          id={`email-${source}`}
          type="email"
          value={value}
          maxLength={255}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          aria-invalid={!!error}
          className={`flex-1 px-4 py-3 bg-transparent outline-none text-sm placeholder:text-muted-foreground ${
            isDark ? "text-background" : "text-foreground"
          }`}
        />
        <button
          type="submit"
          className={`px-5 py-3 text-xs uppercase tracking-[0.18em] inline-flex items-center justify-center gap-2 transition-colors ${
            isDark
              ? "bg-background text-foreground hover:bg-seal hover:text-seal-foreground"
              : "bg-foreground text-background hover:bg-seal"
          }`}
        >
          {ctaLabel ?? defaultCta} <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
      {error && (
        <p className={`mt-2 text-xs ${isDark ? "text-seal" : "text-seal"}`} role="alert">
          {error}
        </p>
      )}
      <p className={`mt-3 text-xs ${isDark ? "text-background/50" : "text-muted-foreground"}`}>
        {lang === "es"
          ? "Sin spam. Sólo materiales metodológicos Co-Kizuna."
          : "No spam. Only Co-Kizuna methodological materials."}
      </p>
    </form>
  );
};

export default EmailCapture;
