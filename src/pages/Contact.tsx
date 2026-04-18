import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import { useLang } from "@/lib/lang";

const Contact = () => {
  const { t } = useTranslation();
  const lang = useLang();

  const schema = z.object({
    name: z.string().trim().min(1, t("contact.errors.required")).max(100, t("contact.errors.tooLong")),
    company: z.string().trim().min(1, t("contact.errors.required")).max(150, t("contact.errors.tooLong")),
    role: z.string().trim().max(100, t("contact.errors.tooLong")).optional().or(z.literal("")),
    email: z.string().trim().email(t("contact.errors.email")).max(255, t("contact.errors.tooLong")),
    country: z.string().trim().min(1, t("contact.errors.required")).max(60, t("contact.errors.tooLong")),
    actorType: z.enum(["provider", "buyer", "other"]),
    message: z.string().trim().max(1000, t("contact.errors.tooLong")).optional().or(z.literal("")),
  });

  const [searchParams] = useSearchParams();
  const initialActor = (() => {
    const a = searchParams.get("actor");
    return a === "buyer" || a === "other" ? a : "provider";
  })() as "provider" | "buyer" | "other";

  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    country: "",
    actorType: initialActor,
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [k]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <>
      <SEO title="Contacto · Co-Kizuna" description="Solicite su demostración de Co-Kizuna. Inteligencia para proveedores del Estado, compradores públicos y más." />

      <section className="pt-20 pb-16 md:pt-28 md:pb-20 relative overflow-hidden">
        <span className="kanji-mark absolute -right-10 -top-10 text-[24rem]">絆</span>
        <div className="container relative">
          <p className="eyebrow">{t("nav.contact")}</p>
          <h1 className="display mt-6 text-4xl md:text-6xl max-w-4xl">{t("contact.title")}</h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75 leading-relaxed">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container max-w-3xl">
          {submitted ? (
            <div className="border border-foreground/15 p-12 text-center animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-seal mx-auto" />
              <h2 className="display text-3xl mt-6">{t("contact.submitted")}</h2>
              <p className="mt-4 text-foreground/75 max-w-lg mx-auto">{t("contact.submittedBody")}</p>
              <p className="mt-8 font-jp text-3xl text-seal">絆</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8">
              <Field label={t("contact.name")} error={errors.name}>
                <input type="text" value={form.name} onChange={onChange("name")} className="cko-input" maxLength={100} />
              </Field>

              <div className="grid md:grid-cols-2 gap-8">
                <Field label={t("contact.company")} error={errors.company}>
                  <input type="text" value={form.company} onChange={onChange("company")} className="cko-input" maxLength={150} />
                </Field>
                <Field label={t("contact.role")} error={errors.role}>
                  <input type="text" value={form.role} onChange={onChange("role")} className="cko-input" maxLength={100} />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Field label={t("contact.email")} error={errors.email}>
                  <input type="email" value={form.email} onChange={onChange("email")} className="cko-input" maxLength={255} />
                </Field>
                <Field label={t("contact.country")} error={errors.country}>
                  <input type="text" value={form.country} onChange={onChange("country")} className="cko-input" maxLength={60} />
                </Field>
              </div>

              <Field label={t("contact.actorType")} error={errors.actorType}>
                <select value={form.actorType} onChange={onChange("actorType")} className="cko-input">
                  <option value="provider">{t("contact.actorProvider")}</option>
                  <option value="buyer">{t("contact.actorBuyer")}</option>
                  <option value="other">{t("contact.actorOther")}</option>
                </select>
              </Field>

              <Field label={t("contact.message")} error={errors.message}>
                <textarea value={form.message} onChange={onChange("message")} rows={5} className="cko-input resize-none" maxLength={1000} />
              </Field>

              <button type="submit" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm uppercase tracking-[0.18em] hover:bg-seal transition-colors">
                {t("contact.submit")} <ArrowRight className="w-4 h-4" />
              </button>

              <p className="reinforcement max-w-2xl">
                {lang === "es"
                  ? "Cada líder que decide invertir en inteligencia hoy construye la ventaja que otros buscarán mañana."
                  : "Every leader who invests in intelligence today builds the advantage others will seek tomorrow."}
              </p>
            </form>
          )}
        </div>
      </section>

      <style>{`
        .cko-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid hsl(var(--foreground) / 0.2);
          padding: 0.75rem 0;
          font-size: 1rem;
          font-family: var(--font-body);
          color: hsl(var(--foreground));
          outline: none;
          transition: border-color 0.2s;
        }
        .cko-input:focus {
          border-bottom-color: hsl(var(--seal));
        }
        select.cko-input { background: hsl(var(--background)); }
      `}</style>
    </>
  );
};

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <div>
    <label className="eyebrow block mb-2">{label}</label>
    {children}
    {error && <p className="mt-2 text-xs text-seal">{error}</p>}
  </div>
);

export default Contact;
