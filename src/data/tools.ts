// Co-Kizuna Tools — productos reales conectados a la metodología.
// Cada herramienta declara qué decisiones y principios implementa.

export type ToolStatus = "active" | "beta" | "soon";

export type Tool = {
  slug: string;
  name: string;
  tagline: { es: string; en: string };
  status: ToolStatus;
  audience: { es: string; en: string };
  // Co-Kizuna decision categories this tool serves (matches decisions[].category.es)
  decisions: string[];
  // Principles by jp name (matches principles[].jp)
  principles: string[];
  // Dimensions by es name (matches dimensions[].es)
  dimensions?: string[];
  what: { es: string; en: string };
  why: { es: string; en: string };
  features: { es: string[]; en: string[] };
  phase: 1 | 2 | 3;
};

export const tools: Tool[] = [
  {
    slug: "quivercl",
    name: "QuiverCL",
    tagline: {
      es: "Inteligencia de precios y ciclos de compra.",
      en: "Price and procurement-cycle intelligence.",
    },
    status: "active",
    audience: { es: "Proveedores del Estado", en: "State suppliers" },
    decisions: ["Táctica", "Operativa"],
    principles: ["Tankyū", "Kanso", "Genchi Genbutsu"],
    dimensions: ["Eficiencia operativa", "Competencia efectiva"],
    phase: 1,
    what: {
      es: "Motor de análisis sobre precios históricos, productos, organismos y ciclos de compra del mercado público.",
      en: "Analysis engine over historical prices, products, agencies and procurement cycles in the public market.",
    },
    why: {
      es: "Para responder ¿a qué precio ofertar? con evidencia documental, no con intuición.",
      en: "To answer what price to bid with documentary evidence, not intuition.",
    },
    features: {
      es: [
        "Histórico de precios por producto y organismo",
        "Resumen de productos, rubros y ciclos",
        "Comparación con la mediana del mercado",
        "Trazabilidad por pliego (Genchi Genbutsu)",
      ],
      en: [
        "Price history by product and agency",
        "Summary of products, sectors and cycles",
        "Comparison with the market median",
        "Tender-level traceability (Genchi Genbutsu)",
      ],
    },
  },
  {
    slug: "gaiacl",
    name: "GaiaCL",
    tagline: {
      es: "Agente de inteligencia predictiva.",
      en: "Predictive intelligence agent.",
    },
    status: "beta",
    audience: { es: "Proveedores estratégicos", en: "Strategic suppliers" },
    decisions: ["Anticipación", "Estratégica"],
    principles: ["Kaiji", "Hoshin", "Tankyū"],
    dimensions: ["Madurez del ecosistema", "Confianza pública"],
    phase: 1,
    what: {
      es: "Agente que detecta señales tempranas, ciclos de renovación y patrones estacionales en compras públicas.",
      en: "Agent that detects early signals, renewal cycles and seasonal patterns in public procurement.",
    },
    why: {
      es: "Para responder ¿qué va a pasar? antes de que la oportunidad sea visible para todos.",
      en: "To answer what will happen before the opportunity is visible to everyone.",
    },
    features: {
      es: [
        "Predicción de ventanas de licitación",
        "Lógica explicable, no caja negra (Kaiji)",
        "Alertas accionables, no notificaciones decorativas",
        "Aprende del comportamiento del usuario (Shu-Ha-Ri)",
      ],
      en: [
        "Tender-window prediction",
        "Explainable logic, no black box (Kaiji)",
        "Actionable alerts, not decorative notifications",
        "Learns from user behaviour (Shu-Ha-Ri)",
      ],
    },
  },
  {
    slug: "workshopcl",
    name: "WorkshopCL",
    tagline: {
      es: "Simulación y preparación de oferta.",
      en: "Bid simulation and preparation.",
    },
    status: "soon",
    audience: { es: "Equipos de licitaciones", en: "Bid teams" },
    decisions: ["Operativa", "Aprendizaje"],
    principles: ["Kanso", "Hansei", "Shu-Ha-Ri"],
    dimensions: ["Eficiencia operativa", "Equidad de acceso"],
    phase: 1,
    what: {
      es: "Entorno de simulación que aloja el Decision Canvas, el Simulador Skinner y la bitácora Hansei.",
      en: "Simulation environment hosting the Decision Canvas, the Skinner Simulator and the Hansei log.",
    },
    why: {
      es: "Para que cada oferta se ensaye antes de enviarse y cada resultado deje aprendizaje.",
      en: "So every bid is rehearsed before submission and every outcome leaves learning behind.",
    },
    features: {
      es: [
        "Decision Canvas integrado",
        "Simulador de precio, equipo y plazos",
        "Bitácora Hansei post-licitación",
        "Plantillas Shu para principiantes, Ha para expertos",
      ],
      en: [
        "Integrated Decision Canvas",
        "Price, team and deadline simulator",
        "Post-tender Hansei log",
        "Shu templates for beginners, Ha for experts",
      ],
    },
  },
  {
    slug: "contourcl",
    name: "ContourCL",
    tagline: {
      es: "Mapeo de mercado y brechas regionales.",
      en: "Market mapping and regional gaps.",
    },
    status: "soon",
    audience: { es: "Decisores estratégicos", en: "Strategic decision-makers" },
    decisions: ["Estratégica", "Integridad"],
    principles: ["Kōhei", "Kaiji", "Tōchi"],
    dimensions: ["Equidad de acceso", "Integridad estructural", "Transparencia real"],
    phase: 2,
    what: {
      es: "Cartografía del ecosistema de compras: concentración geográfica, brechas de acceso y zonas de baja competencia.",
      en: "Procurement-ecosystem cartography: geographic concentration, access gaps and low-competition zones.",
    },
    why: {
      es: "Para responder ¿dónde jugar? y ¿dónde el mercado está mal repartido?",
      en: "To answer where to play and where the market is unevenly distributed.",
    },
    features: {
      es: [
        "Mapas de concentración por rubro y región",
        "Detector de zonas con un único proveedor",
        "Indicador de equidad MIPYME vs grandes",
        "Indicios de parámetros a medida (Integridad)",
      ],
      en: [
        "Concentration maps by sector and region",
        "Single-supplier-zone detector",
        "SME-vs-large equity indicator",
        "Tailored-parameter signals (Integrity)",
      ],
    },
  },
];

export const toolStatusLabel = (status: ToolStatus, lang: "es" | "en") => {
  const map = {
    active: { es: "Activo", en: "Active" },
    beta: { es: "BETA", en: "BETA" },
    soon: { es: "Próximamente", en: "Coming soon" },
  } as const;
  return map[status][lang];
};

// Reverse lookup helpers
export const toolsByPrinciple = (jp: string) => tools.filter((t) => t.principles.includes(jp));
export const toolsByDecision = (categoryEs: string) => tools.filter((t) => t.decisions.includes(categoryEs));
