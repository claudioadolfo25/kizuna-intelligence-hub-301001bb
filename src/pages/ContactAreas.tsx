import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Briefcase,
  Headphones,
  Users,
  Newspaper,
  Handshake,
  Wallet,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import SEO from "@/components/SEO";
import { useLang } from "@/lib/lang";

type Area = {
  key: string;
  icon: typeof Briefcase;
  jp: string;
  title: { es: string; en: string };
  body: { es: string; en: string };
  email: string;
  cta: { es: string; en: string };
  to?: string;
};

const areas: Area[] = [
  {
    key: "comercial",
    icon: Briefcase,
    jp: "商",
    title: { es: "Comercial · Demo", en: "Sales · Demo" },
    body: {
      es: "Solicite una demostración guiada. Para proveedores del Estado, compradores públicos y socios estratégicos.",
      en: "Request a guided demo. For state suppliers, public buyers and strategic partners.",
    },
    email: "comercial@co-kizuna.com",
    cta: { es: "Solicitar demo", en: "Request demo" },
    to: "/contacto/formulario",
  },
  {
    key: "soporte",
    icon: Headphones,
    jp: "技",
    title: { es: "Soporte TI", en: "IT Support" },
    body: {
      es: "Asistencia técnica para clientes activos: QuiverCL, GaiaCL, integraciones y APIs.",
      en: "Technical assistance for active clients: QuiverCL, GaiaCL, integrations and APIs.",
    },
    email: "soporte@co-kizuna.com",
    cta: { es: "Escribir a soporte", en: "Email support" },
  },
  {
    key: "finanzas",
    icon: Wallet,
    jp: "財",
    title: { es: "Finanzas y facturación", en: "Finance & billing" },
    body: {
      es: "Consultas sobre planes, facturación, órdenes de compra y procesos administrativos.",
      en: "Inquiries about plans, billing, purchase orders and administrative processes.",
    },
    email: "finanzas@co-kizuna.com",
    cta: { es: "Contactar finanzas", en: "Contact finance" },
  },
  {
    key: "comunidad",
    icon: Users,
    jp: "絆",
    title: { es: "Comunidad Kizuna", en: "Kizuna Community" },
    body: {
      es: "Sume su organización a la red Kizuna: practicantes, investigadores y formadores en compras públicas.",
      en: "Join your organization to the Kizuna network: practitioners, researchers and trainers in public procurement.",
    },
    email: "comunidad@co-kizuna.com",
    cta: { es: "Sumarme a la comunidad", en: "Join the community" },
  },
  {
    key: "alianzas",
    icon: Handshake,
    jp: "盟",
    title: { es: "Alianzas e instituciones", en: "Partnerships & institutions" },
    body: {
      es: "Convenios con gobiernos, organismos multilaterales, universidades y aceleradoras.",
      en: "Agreements with governments, multilateral organizations, universities and accelerators.",
    },
    email: "alianzas@co-kizuna.com",
    cta: { es: "Proponer alianza", en: "Propose partnership" },
  },
  {
    key: "prensa",
    icon: Newspaper,
    jp: "報",
    title: { es: "Prensa y medios", en: "Press & media" },
    body: {
      es: "Entrevistas, columnas, datos para periodistas y solicitudes de uso de marca.",
      en: "Interviews, columns, data for journalists and brand-use requests.",
    },
    email: "prensa@co-kizuna.com",
    cta: { es: "Contactar prensa", en: "Contact press" },
  },
  {
    key: "integridad",
    icon: ShieldCheck,
    jp: "誠",
    title: { es: "Integridad y cumplimiento", en: "Integrity & compliance" },
    body: {
      es: "Reporte hallazgos, dudas éticas o consultas de cumplimiento. Confidencial.",
      en: "Report findings, ethical concerns or compliance inquiries. Confidential.",
    },
    email: "integridad@co-kizuna.com",
    cta: { es: "Canal confidencial", en: "Confidential channel" },
  },
  {
    key: "academia",
    icon: GraduationCap,
    jp: "学",
    title: { es: "Academia y formación", en: "Academia & training" },
    body: {
      es: "Talleres, programas WorkshopCL y materiales para universidades y escuelas de gobierno.",
      en: "Workshops, WorkshopCL programs and materials for universities and schools of government.",
    },
    email: "academia@co-kizuna.com",
    cta: { es: "Solicitar programa", en: "Request program" },
  },
];

const ContactAreas = () => {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <>
      <SEO
        title="Contacto · Co-Kizuna"
        description="Áreas de contacto Co-Kizuna: comercial, soporte TI, finanzas, comunidad, alianzas, prensa, integridad y academia."
      />

      <section className="pt-20 pb-16 md:pt-28 md:pb-20 relative overflow-hidden">
        <span className="kanji-mark absolute -right-10 -top-10 text-[24rem]">絆</span>
        <div className="container relative">
          <p className="eyebrow">{t("nav.contact")}</p>
          <h1 className="display mt-6 text-4xl md:text-6xl max-w-4xl">
            {lang === "es" ? "¿Con quién quiere hablar?" : "Who would you like to reach?"}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75 leading-relaxed">
            {lang === "es"
              ? "Elija el área que mejor represente su consulta. Cada vínculo es directo, humano y trazable."
              : "Choose the area that best matches your inquiry. Every connection is direct, human and traceable."}
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container">
          <div className="grid gap-px bg-foreground/10 border border-foreground/10 md:grid-cols-2 lg:grid-cols-3">
            {areas.map(({ key, icon: Icon, jp, title, body, email, cta, to }) => {
              const inner = (
                <>
                  <div className="flex items-start justify-between">
                    <Icon className="w-6 h-6 text-foreground/70 group-hover:text-seal transition-colors" />
                    <span className="font-jp text-3xl text-seal/80">{jp}</span>
                  </div>
                  <h2 className="font-display text-2xl mt-6">{title[lang]}</h2>
                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{body[lang]}</p>
                  <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground break-all">
                    {email}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] group-hover:text-seal transition-colors">
                    {cta[lang]} <ArrowRight className="w-4 h-4" />
                  </span>
                </>
              );

              return to ? (
                <Link
                  key={key}
                  to={to}
                  className="bg-background p-8 group flex flex-col hover:bg-secondary transition-colors"
                >
                  {inner}
                </Link>
              ) : (
                <a
                  key={key}
                  href={`mailto:${email}`}
                  className="bg-background p-8 group flex flex-col hover:bg-secondary transition-colors"
                >
                  {inner}
                </a>
              );
            })}
          </div>

          <div className="mt-16 reinforcement max-w-3xl">
            {lang === "es"
              ? "Cada vínculo bien atendido es un Kizuna que perdura. Le respondemos en menos de 48 horas hábiles."
              : "Every bond well tended is a Kizuna that lasts. We respond within 48 business hours."}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactAreas;
