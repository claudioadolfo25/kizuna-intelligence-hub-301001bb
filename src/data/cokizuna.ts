// Co-Kizuna shared content data — principles, decisions, instruments, dimensions, roadmap.
// Bilingual entries: { es, en } where applicable.

export type Principle = {
  index: number;
  name: string;
  jp: string;
  essence: { es: string; en: string };
  application: { es: string; en: string };
  anti: { es: string; en: string };
};

export const principles: Principle[] = [
  {
    index: 0,
    name: "Búsqueda profunda",
    jp: "Tankyū",
    essence: {
      es: "No te detengas hasta llegar a la raíz del dato.",
      en: "Don't stop until you reach the root of the data.",
    },
    application: {
      es: "Cada conclusión nace de una verificación documental, no de una métrica suelta.",
      en: "Every conclusion is born from documentary verification, not a loose metric.",
    },
    anti: {
      es: "Aceptar el primer dato disponible como verdad operativa.",
      en: "Accepting the first available data point as operational truth.",
    },
  },
  {
    index: 1,
    name: "Simplicidad analítica",
    jp: "Kanso",
    essence: {
      es: "Una página por decisión.",
      en: "One page per decision.",
    },
    application: {
      es: "Reducimos la complejidad sin esconderla. Lo esencial, visible.",
      en: "We reduce complexity without hiding it. The essential is visible.",
    },
    anti: {
      es: "Informes interminables que ocultan lo importante.",
      en: "Endless reports that hide what matters.",
    },
  },
  {
    index: 2,
    name: "Preparación del terreno",
    jp: "Nemawashi",
    essence: {
      es: "Construye redes antes de necesitarlas.",
      en: "Build networks before you need them.",
    },
    application: {
      es: "El alineamiento previo es parte del análisis, no un costo administrativo.",
      en: "Prior alignment is part of analysis, not an administrative cost.",
    },
    anti: {
      es: "Sorprender con conclusiones sin preparar a los actores.",
      en: "Surprising stakeholders with conclusions without prior groundwork.",
    },
  },
  {
    index: 3,
    name: "Brújula estratégica",
    jp: "Hoshin",
    essence: {
      es: "Toda inteligencia responde a una decisión.",
      en: "All intelligence answers a decision.",
    },
    application: {
      es: "Si un análisis no cambia una acción, no se produce.",
      en: "If an analysis doesn't change an action, it isn't produced.",
    },
    anti: {
      es: "Analítica decorativa que nadie usa.",
      en: "Decorative analytics that nobody uses.",
    },
  },
  {
    index: 4,
    name: "Ir a la fuente",
    jp: "Genchi Genbutsu",
    essence: {
      es: "Verifica el documento original.",
      en: "Verify the original document.",
    },
    application: {
      es: "Cada cifra cita su pliego, su acta, su contrato.",
      en: "Every figure cites its tender, minute or contract.",
    },
    anti: {
      es: "Confiar en agregadores sin trazabilidad.",
      en: "Trusting aggregators without traceability.",
    },
  },
  {
    index: 5,
    name: "Reflexión obligada",
    jp: "Hansei",
    essence: {
      es: "Revisión crítica posterior a cada análisis.",
      en: "Critical review after every analysis.",
    },
    application: {
      es: "Documentamos qué falló, qué acertó, qué se aprende.",
      en: "We document what failed, what worked, what we learn.",
    },
    anti: {
      es: "Celebrar los aciertos y olvidar los errores.",
      en: "Celebrating wins and forgetting losses.",
    },
  },
  {
    index: 6,
    name: "Tres etapas del dominio",
    jp: "Shu-Ha-Ri",
    essence: {
      es: "Aprende, adapta, supera.",
      en: "Learn, adapt, surpass.",
    },
    application: {
      es: "El cliente avanza desde plantillas hasta su propia metodología.",
      en: "The client advances from templates to their own methodology.",
    },
    anti: {
      es: "Mantener al usuario eternamente dependiente.",
      en: "Keeping the user eternally dependent.",
    },
  },
  {
    index: 7,
    name: "El vínculo como activo",
    jp: "Kizuna",
    essence: {
      es: "La confianza vale más que los datos.",
      en: "Trust is worth more than data.",
    },
    application: {
      es: "Cada interacción suma o resta a la confianza acumulada.",
      en: "Every interaction adds to or subtracts from accumulated trust.",
    },
    anti: {
      es: "Optimizar transacciones a costa de la relación.",
      en: "Optimising transactions at the cost of the relationship.",
    },
  },
  {
    index: 8,
    name: "Transparencia algorítmica",
    jp: "Kaiji",
    essence: {
      es: "Explica cómo y por qué cada conclusión.",
      en: "Explain how and why every conclusion.",
    },
    application: {
      es: "El cliente puede auditar la lógica detrás de cada alerta.",
      en: "The client can audit the logic behind every alert.",
    },
    anti: {
      es: "Cajas negras con resultados sin justificación.",
      en: "Black boxes producing results without justification.",
    },
  },
  {
    index: 9,
    name: "Gobernanza de datos",
    jp: "Tōchi",
    essence: {
      es: "Dueño claro, trazabilidad, auditoría.",
      en: "Clear ownership, traceability, audit.",
    },
    application: {
      es: "Cada dato tiene origen, responsable y vigencia.",
      en: "Every datum has source, owner and validity.",
    },
    anti: {
      es: "Datos huérfanos sin custodio.",
      en: "Orphan data without custodian.",
    },
  },
  {
    index: 10,
    name: "Equidad",
    jp: "Kōhei",
    essence: {
      es: "No discriminar por tamaño, ubicación ni recursos.",
      en: "No discrimination by size, location or resources.",
    },
    application: {
      es: "El método sirve igual a una MIPYME que a una multinacional.",
      en: "The method serves an SME the same as a multinational.",
    },
    anti: {
      es: "Inteligencia exclusiva para los más grandes.",
      en: "Intelligence exclusive to the largest.",
    },
  },
  {
    index: 11,
    name: "Cumplimiento normativo",
    jp: "Junkyo",
    essence: {
      es: "Opera siempre dentro del marco legal.",
      en: "Always operate within the legal framework.",
    },
    application: {
      es: "Toda recomendación verifica el cumplimiento aplicable.",
      en: "Every recommendation verifies applicable compliance.",
    },
    anti: {
      es: "Ventajas obtenidas en zonas grises.",
      en: "Advantages obtained in grey zones.",
    },
  },
  {
    index: 12,
    name: "Mejora continua validada",
    jp: "Keizoku kaizen",
    essence: {
      es: "Aprender y validar con métricas.",
      en: "Learn and validate with metrics.",
    },
    application: {
      es: "Cada ciclo entrega un informe de mejora demostrable.",
      en: "Every cycle delivers a demonstrable improvement report.",
    },
    anti: {
      es: "Llamar mejora a un cambio sin medirlo.",
      en: "Calling change improvement without measuring it.",
    },
  },
];

export const dimensions: { es: string; en: string }[] = [
  { es: "Integridad estructural", en: "Structural integrity" },
  { es: "Transparencia real", en: "Real transparency" },
  { es: "Eficiencia operativa", en: "Operational efficiency" },
  { es: "Competencia efectiva", en: "Effective competition" },
  { es: "Equidad de acceso", en: "Equity of access" },
  { es: "Trazabilidad forense", en: "Forensic traceability" },
  { es: "Madurez del ecosistema", en: "Ecosystem maturity" },
  { es: "Sostenibilidad ESG", en: "ESG sustainability" },
  { es: "Innovación tecnológica", en: "Technological innovation" },
  { es: "Gestión de riesgos", en: "Risk management" },
  { es: "Confianza pública", en: "Public trust" },
];

export type Decision = {
  category: { es: string; en: string };
  level: { es: string; en: string };
  horizon: { es: string; en: string };
  question: { es: string; en: string };
  actor: { es: string; en: string };
  body: { es: string; en: string };
};

export const decisions: Decision[] = [
  {
    category: { es: "Estratégica", en: "Strategic" },
    level: { es: "Clásico", en: "Classic" },
    horizon: { es: "12–36 meses", en: "12–36 months" },
    question: { es: "¿Dónde jugar?", en: "Where to play?" },
    actor: { es: "Directorio, CPO", en: "Board, CPO" },
    body: {
      es: "Análisis de concentración, márgenes y barreras para elegir mercados de largo plazo.",
      en: "Concentration, margin and barrier analysis to choose long-term markets.",
    },
  },
  {
    category: { es: "Táctica", en: "Tactical" },
    level: { es: "Clásico", en: "Classic" },
    horizon: { es: "3–12 meses", en: "3–12 months" },
    question: { es: "¿Cómo optimizar?", en: "How to optimize?" },
    actor: { es: "Gerentes", en: "Managers" },
    body: {
      es: "Historial de precios ganadores, márgenes por rubro y posicionamiento competitivo.",
      en: "Winning price history, sector margins and competitive positioning.",
    },
  },
  {
    category: { es: "Operativa", en: "Operational" },
    level: { es: "Clásico", en: "Classic" },
    horizon: { es: "Días–semanas", en: "Days–weeks" },
    question: { es: "¿Qué hago hoy?", en: "What do I do today?" },
    actor: { es: "Analistas", en: "Analysts" },
    body: {
      es: "Alertas filtradas y ranking de oportunidad para la jornada.",
      en: "Filtered alerts and opportunity ranking for the day.",
    },
  },
  {
    category: { es: "Anticipación", en: "Anticipation" },
    level: { es: "Co-Kizuna", en: "Co-Kizuna" },
    horizon: { es: "Variable", en: "Variable" },
    question: { es: "¿Qué va a pasar?", en: "What will happen?" },
    actor: { es: "Early movers", en: "Early movers" },
    body: {
      es: "Patrones estacionales, ciclos de renovación y señales tempranas del mercado.",
      en: "Seasonal patterns, renewal cycles and early market signals.",
    },
  },
  {
    category: { es: "Integridad", en: "Integrity" },
    level: { es: "Co-Kizuna", en: "Co-Kizuna" },
    horizon: { es: "Inmediato", en: "Immediate" },
    question: { es: "¿Esto es limpio?", en: "Is this clean?" },
    actor: { es: "Auditores", en: "Auditors" },
    body: {
      es: "Detección de parámetros a medida y sesgos de evaluador.",
      en: "Detection of tailored parameters and evaluator bias.",
    },
  },
  {
    category: { es: "Aprendizaje", en: "Learning" },
    level: { es: "Co-Kizuna", en: "Co-Kizuna" },
    horizon: { es: "Continuo", en: "Continuous" },
    question: { es: "¿Qué aprendimos?", en: "What did we learn?" },
    actor: { es: "Organizaciones", en: "Organizations" },
    body: {
      es: "Registro Hansei y métricas de acierto, error y mejora.",
      en: "Hansei log and metrics of hits, misses and improvement.",
    },
  },
];

export type Instrument = {
  slug: string;
  title: { es: string; en: string };
  purpose: { es: string; en: string };
  audience: { es: string; en: string };
  body: { es: string; en: string };
};

export const instruments: Instrument[] = [
  {
    slug: "decision-canvas",
    title: { es: "Decision Canvas", en: "Decision Canvas" },
    purpose: {
      es: "Estructurar cualquier decisión en nueve pasos.",
      en: "Structure any decision in nine steps.",
    },
    audience: { es: "Todos los proveedores", en: "All suppliers" },
    body: {
      es: "Una página, nueve bloques, dieciocho minutos. Una decisión mejor documentada.",
      en: "One page, nine blocks, eighteen minutes. A better-documented decision.",
    },
  },
  {
    slug: "matriz-priorizacion",
    title: { es: "Matriz de Priorización", en: "Prioritization Matrix" },
    purpose: { es: "Elegir dónde enfocar recursos limitados.", en: "Choose where to focus limited resources." },
    audience: { es: "Gerentes, CPO", en: "Managers, CPO" },
    body: {
      es: "Cuadrantes de impacto y esfuerzo. Lo importante, primero.",
      en: "Impact and effort quadrants. The important, first.",
    },
  },
  {
    slug: "simulador-skinner",
    title: { es: "Simulador Skinner", en: "Skinner Simulator" },
    purpose: { es: "Probar estrategias sin riesgo.", en: "Test strategies without risk." },
    audience: { es: "Proveedores avanzados", en: "Advanced suppliers" },
    body: {
      es: "Ajuste precio, equipo, plazos y garantías. Vea probabilidad y margen.",
      en: "Adjust price, team, deadlines and guarantees. See probability and margin.",
    },
  },
  {
    slug: "radar-competencia",
    title: { es: "Radar de Competencia", en: "Competition Radar" },
    purpose: { es: "Identificar brechas y ventajas.", en: "Identify gaps and advantages." },
    audience: { es: "Proveedores", en: "Suppliers" },
    body: {
      es: "Cinco dimensiones para medir su posición relativa en el mercado.",
      en: "Five dimensions to measure your relative market position.",
    },
  },
  {
    slug: "early-warning",
    title: { es: "Early Warning System", en: "Early Warning System" },
    purpose: { es: "Anticipar cambios del mercado.", en: "Anticipate market changes." },
    audience: { es: "Todos", en: "Everyone" },
    body: {
      es: "Alertas proactivas: nuevos competidores, precios, vencimientos, pliegos.",
      en: "Proactive alerts: new competitors, prices, expirations, tenders.",
    },
  },
  {
    slug: "checklist-oferta",
    title: { es: "Checklist de Preparación", en: "Bid Preparation Checklist" },
    purpose: { es: "No olvidar requisitos críticos.", en: "Don't forget critical requirements." },
    audience: { es: "Proveedores", en: "Suppliers" },
    body: {
      es: "Generación dinámica por licitación. Marque, verifique, confíe.",
      en: "Dynamic generation per tender. Check, verify, trust.",
    },
  },
  {
    slug: "salud-ecosistema",
    title: { es: "Reporte de Salud del Ecosistema", en: "Ecosystem Health Report" },
    purpose: { es: "Evaluar el mercado antes de entrar.", en: "Assess the market before entering." },
    audience: { es: "Decisores estratégicos", en: "Strategic decision-makers" },
    body: {
      es: "Trimestral. Mide competencia, transparencia, eficiencia y riesgos.",
      en: "Quarterly. Measures competition, transparency, efficiency and risk.",
    },
  },
];

export type RoadmapStage = {
  region: string;
  status: "active" | "inDevelopment" | "planned" | "vision";
  description: { es: string; en: string };
};

export const roadmap: RoadmapStage[] = [
  {
    region: "Chile",
    status: "active",
    description: { es: "Origen y laboratorio fundacional.", en: "Origin and founding laboratory." },
  },
  {
    region: "Latinoamérica",
    status: "inDevelopment",
    description: { es: "Expansión regional en curso.", en: "Regional expansion in progress." },
  },
  {
    region: "Europa",
    status: "planned",
    description: { es: "Validación en mercado OCDE.", en: "Validation in OECD market." },
  },
  {
    region: "Global",
    status: "vision",
    description: { es: "La metodología de referencia.", en: "The reference methodology." },
  },
];

export const objectives: { es: string; en: string }[] = [
  { es: "Referencia global · presencia en 10+ países en cinco años", en: "Global reference · presence in 10+ countries in five years" },
  { es: "Democratización con valor · ROI demostrable por caso", en: "Democratization with value · demonstrable ROI per case" },
  { es: "Doble cara del mercado · proveedores y compradores", en: "Two-sided market · suppliers and buyers" },
  { es: "Expansión internacional · cinco países para 2028", en: "International expansion · five countries by 2028" },
  { es: "Mejora continua validada · informe anual de métricas", en: "Validated continuous improvement · annual metrics report" },
  { es: "Comunidad Kizuna · red global de clientes referentes", en: "Kizuna community · global network of reference clients" },
];

export const faqs: { q: { es: string; en: string }; a: { es: string; en: string } }[] = [
  {
    q: { es: "¿Co-Kizuna es un software o una metodología?", en: "Is Co-Kizuna software or a methodology?" },
    a: { es: "Co-Kizuna es una metodología de inteligencia. El software es el vehículo.", en: "Co-Kizuna is an intelligence methodology. The software is the vehicle." },
  },
  {
    q: { es: "¿Cuánto cuesta?", en: "How much does it cost?" },
    a: {
      es: "Co-Kizuna es un servicio de pago con diferentes niveles. Solicite una demo para una propuesta personalizada.",
      en: "Co-Kizuna is a paid service with different tiers. Request a demo for a personalized proposal.",
    },
  },
  {
    q: { es: "¿Necesito ser experto en datos para usarlo?", en: "Do I need to be a data expert to use it?" },
    a: {
      es: "No. El principio Kanso garantiza simplicidad. Los niveles Shu-Ha-Ri lo acompañan en su evolución.",
      en: "No. The Kanso principle ensures simplicity. The Shu-Ha-Ri levels accompany you as you evolve.",
    },
  },
  {
    q: { es: "¿En qué países está disponible?", en: "In which countries is it available?" },
    a: {
      es: "Actualmente en Chile. Próximamente en mercados de Latinoamérica y Europa.",
      en: "Currently in Chile. Coming soon to Latin American and European markets.",
    },
  },
  {
    q: { es: "¿Puedo probarlo antes de comprar?", en: "Can I try it before buying?" },
    a: { es: "Sí. Solicite una demostración personalizada.", en: "Yes. Request a personalized demonstration." },
  },
];

export const glossary: { term: string; def: { es: string; en: string } }[] = [
  { term: "Kizuna 絆", def: { es: "Vínculo duradero construido sobre confianza.", en: "Lasting bond built on trust." } },
  { term: "Tankyū", def: { es: "Búsqueda profunda hasta la raíz del dato.", en: "Deep search to the root of the data." } },
  { term: "Kanso", def: { es: "Simplicidad analítica: una página por decisión.", en: "Analytic simplicity: one page per decision." } },
  { term: "Hansei", def: { es: "Reflexión crítica obligatoria tras cada análisis.", en: "Mandatory critical reflection after each analysis." } },
  { term: "Hoshin", def: { es: "Brújula estratégica: toda inteligencia responde a una decisión.", en: "Strategic compass: all intelligence answers a decision." } },
  { term: "Kaiji", def: { es: "Transparencia algorítmica.", en: "Algorithmic transparency." } },
  { term: "Shu-Ha-Ri", def: { es: "Tres etapas del dominio: aprender, adaptar, superar.", en: "Three stages of mastery: learn, adapt, surpass." } },
];
