import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const agents = [
  { n: "01", name: "Precios", desc: "Analiza precios históricos y márgenes óptimos." },
  { n: "02", name: "Mercado", desc: "Mapea demanda, tendencias y oportunidades." },
  { n: "03", name: "Pliegos", desc: "Lee bases técnicas y extrae requisitos clave." },
  { n: "04", name: "Competencia", desc: "Identifica competidores y su estrategia." },
  { n: "05", name: "Reglas", desc: "Verifica normativa y cumplimiento legal." },
  { n: "06", name: "Riesgo", desc: "Detecta riesgos contractuales y financieros." },
  { n: "07", name: "Temporal", desc: "Predice plazos y ventanas críticas." },
  { n: "08", name: "Geográfico", desc: "Optimiza cobertura territorial y logística." },
  { n: "09", name: "ESG", desc: "Evalúa criterios ambientales y sociales." },
  { n: "10", name: "Aprendizaje", desc: "Aprende de cada licitación pasada." },
  { n: "11", name: "SQL", desc: "Consulta datos abiertos en lenguaje natural." },
  { n: "12", name: "Predictivo", desc: "Anticipa adjudicaciones futuras." },
  { n: "13", name: "Simulación", desc: "Simula escenarios antes de ofertar." },
];

const principles = [
  { jp: "探究", romaji: "Tankyū", desc: "Búsqueda profunda. Pregunta hasta entender." },
  { jp: "簡素", romaji: "Kanso", desc: "Simplicidad. Eliminar lo innecesario." },
  { jp: "根回し", romaji: "Nemawashi", desc: "Preparación silenciosa antes de actuar." },
  { jp: "方針", romaji: "Hoshin", desc: "Brújula estratégica que guía cada decisión." },
  { jp: "現地現物", romaji: "Genchi Genbutsu", desc: "Ir a la fuente. Ver con tus ojos." },
  { jp: "反省", romaji: "Hansei", desc: "Reflexión honesta tras cada acción." },
  { jp: "守破離", romaji: "Shu-Ha-Ri", desc: "Aprender, romper, dominar." },
  { jp: "絆", romaji: "Kizuna", desc: "El vínculo humano-máquina inquebrantable." },
  { jp: "開示", romaji: "Kaiji", desc: "Transparencia total en cada paso." },
  { jp: "統治", romaji: "Tōchi", desc: "Gobernanza clara y responsable." },
  { jp: "公平", romaji: "Kōhei", desc: "Equidad como base del juego limpio." },
  { jp: "準拠", romaji: "Junkyo", desc: "Cumplimiento riguroso de las reglas." },
  { jp: "継続改善", romaji: "Keizoku Kaizen", desc: "Mejora continua, día a día." },
];

const decisions = [
  { n: "1", name: "Estratégica", q: "¿Dónde jugar?", body: "Define en qué categorías y compradores tienes ventaja real. Evita pelear donde no puedes ganar.", ej: "Concentrarse en Salud RM en vez de Obras nacional." },
  { n: "2", name: "Táctica", q: "¿Cómo competir?", body: "Define precio, alianzas y diferenciación por licitación.", ej: "Ofertar con socio logístico para cubrir 4 regiones." },
  { n: "3", name: "Operativa", q: "¿Cómo entregar?", body: "Plan de ejecución, plazos y recursos.", ej: "Cronograma de entrega quincenal con respaldo." },
  { n: "4", name: "Anticipación", q: "¿Qué viene?", body: "Predice publicaciones y adjudicaciones futuras.", ej: "Alerta 14 días antes de publicación esperada." },
  { n: "5", name: "Integridad", q: "¿Es limpio?", body: "Detecta riesgos de cumplimiento, conflictos y banderas rojas.", ej: "Bandera por concentración inusual de adjudicaciones." },
  { n: "6", name: "Aprendizaje", q: "¿Qué aprendí?", body: "Hansei tras cada resultado. Ajuste del modelo.", ej: "Re-calibración del rango de precio tras 5 derrotas." },
];

const flow = [
  { n: "1", title: "Tú", body: "Entras con tu pregunta o licitación." },
  { n: "2", title: "Sala Matrix", body: "Ves a todos los agentes trabajar." },
  { n: "3", title: "Manager Agent", body: "Coordina y delega tareas." },
  { n: "4", title: "13 Workers", body: "Especialistas trabajan en paralelo." },
  { n: "5", title: "Resultado + 7 Decisiones", body: "Veredicto experto: SÍ / NO / AJUSTES." },
];

const testimonials = [
  { quote: "Aumentamos nuestra tasa de éxito del 23% al 78% en 3 meses. SATORI cambió nuestra forma de competir.", who: "Constructora ABC", role: "Proveedor categoría obras públicas" },
  { quote: "Una sola persona en mi empresa hace ahora lo que antes requería un equipo de 5. OPOC es real.", who: "Servicios Tecnológicos M.", role: "Proveedor TI · Región Metropolitana" },
  { quote: "Ver a los agentes razonar en la sala Matrix me dio confianza. Ya no es una caja negra.", who: "Consultora del Sur", role: "Proveedor servicios profesionales" },
];

const stats = [
  { n: "78%", l: "Aumento promedio en tasa de éxito" },
  { n: "13", l: "Agentes IA especialistas" },
  { n: "120K+", l: "Proveedores en el mercado objetivo" },
  { n: "24h", l: "Tu primer análisis gratuito" },
];

const Satori = () => {
  return (
    <div>
      <SEO
        title="SATORI · Centro de Razonamiento, Certeza y Dominio"
        description="SATORI: 13 agentes IA especialistas en compras públicas chilenas, basados en la metodología Co-Kizuna. Salas Matrix, humano en el loop, OPOC."
      />

      {/* HERO */}
      <section className="relative pt-24 pb-28 overflow-hidden">
        <span className="kanji-mark absolute -right-10 top-10 text-[28rem] leading-none select-none hidden md:block">悟</span>
        <div className="container relative">
          <p className="eyebrow mb-6">悟り · Co-Kizuna · Metodología SATORI</p>
          <h1 className="display text-5xl md:text-7xl lg:text-8xl mb-8">
            SATORI<span className="text-seal">·</span>
          </h1>
          <p className="font-display text-2xl md:text-3xl max-w-4xl text-foreground/90 leading-snug mb-6">
            El primer Centro de Razonamiento, Certeza y Dominio.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10">
            Tu equipo de 13 agentes IA especialistas en compras públicas. Basado en la metodología Co-Kizuna, con supervisión humana en tiempo real.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contacto/formulario?actor=provider&source=satori"
              className="text-xs uppercase tracking-[0.22em] bg-foreground text-background px-6 py-4 hover:bg-seal transition-colors"
            >
              Comenzar mi viaje al Satori
            </Link>
            <a
              href="#agentes"
              className="text-xs uppercase tracking-[0.22em] border border-foreground/30 px-6 py-4 hover:border-seal hover:text-seal transition-colors"
            >
              Conocer los 13 agentes
            </a>
          </div>
          <p className="reinforcement mt-10 max-w-2xl text-sm">
            ✅ Al hacer clic, emites tu primera conducta exitosa. El refuerzo: un análisis gratuito.
          </p>
          <p className="mt-12 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Acerca el cursor a cualquier agente o principio y emergerá su descripción.
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 border-t border-foreground/10 relative">
        <span className="kanji-mark absolute -left-8 top-10 text-[20rem] leading-none hidden md:block">問</span>
        <div className="container relative">
          <p className="eyebrow mb-6">問題 · El problema</p>
          <h2 className="display text-3xl md:text-5xl max-w-3xl mb-6">
            El 95% de los proveedores compite en desventaja.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Asimetría de inteligencia en el mercado de compras públicas chileno. 120,000 proveedores. Solo unos pocos tienen los datos.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { p: "5%", t: "Grandes proveedores", d: "Dominan el mercado" },
              { p: "45%", t: "Venden algo", d: "Quieren más" },
              { p: "25%", t: "Nuevos", d: "Quieren entrar" },
              { p: "25%", t: "Inactivos", d: "No logran vender" },
            ].map((s) => (
              <div key={s.t} className="border border-foreground/10 p-6">
                <p className="font-display text-4xl text-seal mb-2">{s.p}</p>
                <p className="text-sm font-medium">{s.t}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="reinforcement mt-10 max-w-2xl text-sm">
            Identificar el problema ya es un avance. Tú estás del lado correcto.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-24 border-t border-foreground/10 relative">
        <span className="kanji-mark absolute -right-8 top-10 text-[20rem] leading-none hidden md:block">解</span>
        <div className="container relative">
          <p className="eyebrow mb-6">解決 · La solución</p>
          <h2 className="display text-3xl md:text-5xl max-w-3xl mb-6">SATORI + Co-Kizuna</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Multiagente, transparente, humano en el loop. SATORI es el centro; la metodología Co-Kizuna el marco donde 13 agentes trabajan para ti.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Salas Matrix visibles", d: "Ves a todos los agentes trabajar en tiempo real. Total transparencia." },
              { t: "Humano en el loop", d: "Intervienes cuando quieras. Escribes @agente y rediriges la conversación." },
              { t: "Manager + 13 Workers", d: "Un agente gestor coordina 13 especialistas. Tú decides la dirección." },
            ].map((c) => (
              <div key={c.t} className="border border-foreground/10 p-6">
                <h3 className="font-display text-xl mb-3">{c.t}</h3>
                <p className="text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 border border-foreground/15 p-8 max-w-2xl">
            <p className="eyebrow mb-3">OPC model · 1∞</p>
            <h3 className="font-display text-2xl mb-2">Una Persona, Una Empresa.</h3>
            <p className="text-sm text-muted-foreground">
              Con SATORI, una sola persona puede operar como una empresa completa. Escala sin crecer tu equipo.
              <span className="block mt-3 text-foreground/80 font-medium">
                Una OPC con metodología Zentei vence a una firma de 50 personas sin método. Esa es la asimetría 1∞.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* AGENTS */}
      <section id="agentes" className="py-24 border-t border-foreground/10 relative">
        <span className="kanji-mark absolute -left-8 top-10 text-[20rem] leading-none hidden md:block">十三</span>
        <div className="container relative">
          <p className="eyebrow mb-6">十三 · Los 13 especialistas</p>
          <h2 className="display text-3xl md:text-5xl max-w-3xl mb-12">Un equipo IA a tu servicio.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {agents.map((a) => (
              <div
                key={a.n}
                className="border border-foreground/10 p-5 group hover:border-seal transition-colors"
              >
                <p className="text-xs text-muted-foreground">#{a.n}</p>
                <p className="font-display text-xl mt-1 group-hover:text-seal transition-colors">{a.name}</p>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <p className="reinforcement mt-10 max-w-2xl text-sm">
            Has conocido a tus 13 aliados. Cada uno está listo para reforzar tus decisiones.
          </p>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="py-24 border-t border-foreground/10 relative">
        <span className="kanji-mark absolute -right-8 top-10 text-[18rem] leading-none hidden md:block">原則</span>
        <div className="container relative">
          <p className="eyebrow mb-6">十三原則 · Metodología Co-Kizuna</p>
          <h2 className="display text-3xl md:text-5xl max-w-3xl mb-12">13 principios para el dominio.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {principles.map((p) => (
              <div key={p.romaji} className="border border-foreground/10 p-5 group hover:border-seal transition-colors">
                <p className="font-jp text-3xl text-seal">{p.jp}</p>
                <p className="font-display text-lg mt-2">{p.romaji}</p>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 DECISIONS */}
      <section className="py-24 border-t border-foreground/10 relative">
        <span className="kanji-mark absolute -left-8 top-10 text-[18rem] leading-none hidden md:block">七</span>
        <div className="container relative">
          <p className="eyebrow mb-6">七つの決定 · Las 7 decisiones</p>
          <h2 className="display text-3xl md:text-5xl max-w-3xl mb-6">De los datos a la conclusión.</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Seis decisiones en paralelo convergen en una séptima: el veredicto del experto.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {decisions.map((d) => (
              <div key={d.n} className="border border-foreground/10 p-6">
                <p className="text-xs text-muted-foreground">決定 · {d.n}</p>
                <p className="font-display text-xl mt-1">{d.name} — {d.q}</p>
                <p className="text-sm text-muted-foreground mt-3">{d.body}</p>
                <p className="text-xs italic text-foreground/60 mt-3">Ej: {d.ej}</p>
              </div>
            ))}
          </div>
          <div className="border-2 border-seal p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-seal">決定 · 7 · 専門家</p>
            <p className="font-display text-2xl md:text-3xl mt-2">EXPERTO — La conclusión final.</p>
            <p className="text-muted-foreground mt-3 mb-5">La séptima decisión condensa todo en un veredicto claro:</p>
            <div className="flex flex-wrap gap-3">
              {["SÍ", "NO", "CON AJUSTES"].map((v) => (
                <span key={v} className="text-xs uppercase tracking-[0.22em] border border-foreground/30 px-4 py-2">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="py-24 border-t border-foreground/10 relative">
        <span className="kanji-mark absolute -right-8 top-10 text-[18rem] leading-none hidden md:block">構造</span>
        <div className="container relative">
          <p className="eyebrow mb-6">構造 · Arquitectura Co-Kizuna</p>
          <h2 className="display text-3xl md:text-5xl max-w-3xl mb-6">Cómo funciona.</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Entras a una sala Matrix. Ves a todos los agentes. Puedes intervenir en cualquier momento escribiendo @agente-nombre.
          </p>
          <ol className="grid md:grid-cols-5 gap-3">
            {flow.map((f) => (
              <li key={f.n} className="border border-foreground/10 p-5">
                <p className="text-xs text-muted-foreground">段階 {f.n}</p>
                <p className="font-display text-lg mt-1">{f.title}</p>
                <p className="text-xs text-muted-foreground mt-3">{f.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 border-t border-foreground/10 relative">
        <span className="kanji-mark absolute -left-8 top-10 text-[18rem] leading-none hidden md:block">証</span>
        <div className="container relative">
          <p className="eyebrow mb-6">証言 · Refuerzo social</p>
          <h2 className="display text-3xl md:text-5xl max-w-3xl mb-4">Proveedores que ya dominan.</h2>
          <p className="text-sm text-seal mb-10">🏆 Otro proveedor alcanzó el dominio. Tú puedes ser el próximo.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((t) => (
              <blockquote key={t.who} className="border-l-2 border-seal pl-6">
                <p className="font-display text-foreground/90 italic">"{t.quote}"</p>
                <footer className="mt-4 text-xs">
                  <p className="font-medium">{t.who}</p>
                  <p className="text-muted-foreground">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.l} className="border-t border-foreground/15 pt-4">
                <p className="font-display text-4xl text-seal">{s.n}</p>
                <p className="text-xs text-muted-foreground mt-2">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-foreground/10 relative">
        <span className="kanji-mark absolute -right-8 top-10 text-[20rem] leading-none hidden md:block">始</span>
        <div className="container relative max-w-2xl">
          <p className="eyebrow mb-6">始まり · Comienza ahora</p>
          <h2 className="display text-3xl md:text-5xl mb-4">Solicita tu acceso a SATORI.</h2>
          <p className="text-muted-foreground mb-8">
            Al enviar, recibirás tu primer análisis gratuito de oportunidad en 24 horas. El refuerzo es inmediato.
          </p>
          <Link
            to="/contacto/formulario?actor=provider&source=satori"
            className="inline-block text-xs uppercase tracking-[0.22em] bg-foreground text-background px-8 py-4 hover:bg-seal transition-colors"
          >
            Solicitar acceso a SATORI
          </Link>
          <p className="text-xs text-muted-foreground mt-4">Sin compromiso · Tu análisis es gratuito.</p>
          <div className="mt-16 flex items-center gap-4">
            <span className="font-jp text-5xl text-seal">悟</span>
            <div>
              <p className="font-display text-xl">SATORI</p>
              <p className="text-xs text-muted-foreground">por Co-Kizuna</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 max-w-md">
            Centro de Razonamiento, Certeza y Dominio. Multiagente IA con supervisión humana en tiempo real, basado en la metodología Co-Kizuna.
          </p>
          <Link to="/satori/miko-manager" className="inline-block mt-8 text-xs uppercase tracking-[0.22em] border-b border-foreground/40 pb-0.5 hover:border-seal hover:text-seal transition-colors">
            Conocer a Miko & el Manager →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Satori;
