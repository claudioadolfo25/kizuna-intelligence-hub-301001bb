import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const mikoExamples = [
  { q: "¿A qué precio debo ofertar?", a: "→ El Manager analiza precios históricos y te da el rango óptimo." },
  { q: "¿Quiénes son mis competidores?", a: "→ El Manager identifica a los proveedores que más ganan en tu rubro." },
  { q: "¿Voy a ganar esta licitación?", a: "→ El Manager evalúa probabilidad de éxito y te dice SÍ/NO." },
  { q: "¿Qué oportunidades hay esta semana?", a: "→ El Manager anticipa licitaciones por publicarse." },
  { q: "Perdí. ¿Qué hice mal?", a: "→ Miko te guía en el proceso Hansei para aprender del error." },
  { q: "Muéstrame mis últimas consultas", a: "→ Lista tu historial de decisiones." },
  { q: "¿En qué nivel estoy?", a: "→ Te muestra tu progreso en Shu-Ha-Ri." },
  { q: "Avísame solo de licitaciones de insumos médicos", a: "→ Configura alertas personalizadas." },
];

const managerExamples = [
  { q: "Analiza el mercado de insumos médicos en mi región", a: "→ Coordina a Precios, Mercado y Geográfico para un análisis completo." },
  { q: "Simula una oferta con precio más bajo", a: "→ Activa al agente Simulación para calcular nueva probabilidad." },
  { q: "¿Conviene expandirme a otra región?", a: "→ Genera la Decisión 1 (Estratégica) con análisis geográfico." },
  { q: "¿Cómo puedo mejorar mi tasa de éxito?", a: "→ Genera recomendaciones personalizadas basadas en tu desempeño." },
];

const journey = [
  { stage: "Llegas confundido", emotion: "Incertidumbre", body: "Miko te saluda con calma. El Manager ya está listo." },
  { stage: "Haces tu primera consulta", emotion: "Nervios, expectativa", body: "Miko confirma. El Manager activa a los agentes." },
  { stage: "Recibes tu Decisión 7", emotion: "Alivio, claridad", body: "Miko te la entrega. El Manager piensa en la siguiente." },
  { stage: "Ganas una licitación", emotion: "Satisfacción, orgullo", body: "Miko te felicita. El Manager registra el acierto." },
  { stage: "Pierdes una licitación", emotion: "Frustración, duda", body: "Miko te guía en Hansei. El Manager aprende del error." },
  { stage: "Subes de nivel", emotion: "Logro, motivación", body: "Miko celebra contigo. El Manager desbloquea funciones." },
];

const reinforcements = [
  "Has dado el primer paso. Miko ya está contigo.",
  "El Manager ha recibido tu consulta. En segundos tendrás tu respuesta.",
  "Tienes tu Decisión 7. Clara. Accionable. Ahora solo queda actuar.",
  "No perdiste. Aprendiste. Miko te guía. El Manager mejora.",
  "Has alcanzado un nuevo nivel. Miko está orgullosa. El Manager te desbloquea nuevas capacidades.",
];

const MikoManager = () => {
  return (
    <div>
      <SEO
        title="MIKO + El Manager · Asistentes de SATORI"
        description="Miko te recibe. El Manager actúa. Juntos, tu equipo de acompañamiento permanente en SATORI por Co-Kizuna."
      />

      {/* HERO */}
      <section className="relative pt-24 pb-24 overflow-hidden">
        <span className="kanji-mark absolute -right-10 top-10 text-[28rem] leading-none hidden md:block">巫女</span>
        <div className="container relative">
          <Link to="/satori" className="text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-seal transition-colors">
            ← Volver a SATORI
          </Link>
          <p className="eyebrow mt-8 mb-6">巫女 · Los asistentes de SATORI</p>
          <h1 className="display text-5xl md:text-7xl mb-6">MIKO + El Agente Manager.</h1>
          <p className="font-display text-xl md:text-2xl text-foreground/90 max-w-3xl leading-snug">
            Tu equipo de acompañamiento permanente en el camino al dominio. Miko te recibe. El Manager actúa. Juntos, te acompañan.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 border-t border-foreground/10 relative">
        <span className="kanji-mark absolute -left-8 top-10 text-[18rem] leading-none hidden md:block">紹</span>
        <div className="container relative">
          <p className="eyebrow mb-6">紹介 · Quiénes son</p>
          <h2 className="display text-3xl md:text-5xl mb-12 max-w-3xl">Conoce a tu equipo de acompañamiento.</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* MIKO */}
            <article className="border border-foreground/10 p-8">
              <p className="font-jp text-5xl text-seal mb-3">巫女</p>
              <p className="font-display text-3xl">MIKO</p>
              <p className="text-sm text-muted-foreground mb-6">La asistente personal</p>
              <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                En la tradición japonesa, Miko es la doncella sagrada que guía, protege y conecta con la verdad. En SATORI, es tu asistente IA de acompañamiento permanente.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Cercana", "Empática", "Siempre presente"].map((t) => (
                  <span key={t} className="text-xs uppercase tracking-[0.18em] border border-foreground/20 px-3 py-1">{t}</span>
                ))}
              </div>
              <p className="reinforcement text-sm">
                "Miko no te deja solo. Ella está contigo en cada paso. Pregúntale cualquier cosa. Ella siempre responde."
              </p>
            </article>

            {/* MANAGER */}
            <article className="border border-foreground/10 p-8">
              <p className="font-jp text-5xl text-seal mb-3">統</p>
              <p className="font-display text-3xl">EL MANAGER</p>
              <p className="text-sm text-muted-foreground mb-6">El estratega</p>
              <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                Es el coordinador general de los 13 agentes especialistas. No trabaja solo. Orquesta a todo el equipo para entregarte la mejor respuesta.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Analítico", "Preciso", "Decisivo"].map((t) => (
                  <span key={t} className="text-xs uppercase tracking-[0.18em] border border-foreground/20 px-3 py-1">{t}</span>
                ))}
              </div>
              <p className="reinforcement text-sm">
                "El Manager no adivina. Coordina a 13 especialistas para darte la mejor respuesta. Siempre."
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="py-24 border-t border-foreground/10 relative">
        <span className="kanji-mark absolute -right-8 top-10 text-[18rem] leading-none hidden md:block">協力</span>
        <div className="container relative max-w-3xl">
          <p className="eyebrow mb-6">協力 · Cómo trabajan juntos</p>
          <h2 className="display text-3xl md:text-5xl mb-6">El flujo del acompañamiento.</h2>
          <p className="text-muted-foreground mb-12">Una consulta tuya activa una orquesta de inteligencia. Así se ve.</p>

          <ol className="space-y-6">
            <li className="border-l-2 border-seal pl-6 py-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">1 · Tú · Proveedor</p>
              <p className="font-display text-lg mt-2">"¿A qué precio debo ofertar para ganar la licitación del MINSAL?"</p>
            </li>
            <li className="border-l-2 border-foreground/30 pl-6 py-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">2 · MIKO · Asistente personal</p>
              <p className="font-display text-lg mt-2">"Entendido. Voy a ayudarte. Ahora mismo hablo con el Manager."</p>
              <p className="text-xs text-muted-foreground mt-2">Has hecho una consulta clara. Miko ya está en ello.</p>
            </li>
            <li className="border-l-2 border-foreground/30 pl-6 py-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">3 · Manager · Estratega</p>
              <p className="font-display text-lg mt-2">"Recibido. Convocando a los agentes necesarios."</p>
              <ul className="text-sm text-muted-foreground mt-3 space-y-1">
                <li>@AgentePrecios → ¿Cuál es el rango óptimo?</li>
                <li>@AgenteMercado → ¿Quiénes son los competidores?</li>
                <li>@AgentePliegos → ¿Hay cláusulas riesgosas?</li>
                <li>@AgenteTemporal → ¿Cuál es la ventana de oportunidad?</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">El Manager ya orquesta a los especialistas. En segundos tendrás tu respuesta.</p>
            </li>
            <li className="border-l-2 border-foreground/30 pl-6 py-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">4 · MIKO · Entrega la respuesta</p>
              <p className="font-display text-lg mt-2">"Listo. El Manager y su equipo han analizado los datos."</p>
            </li>
            <li className="border-l-2 border-seal pl-6 py-2">
              <p className="text-xs uppercase tracking-[0.2em] text-seal">DECISIÓN 7 · EXPERTO</p>
              <p className="font-display text-2xl mt-2">✅ SÍ, CON AJUSTES</p>
              <p className="text-sm text-muted-foreground mt-2">
                Ajusta tu precio a $1.450.000. Tu probabilidad de éxito subirá del 32% al 78%.
              </p>
              <p className="text-xs text-muted-foreground mt-3">Tienes tu decisión. Clara. Accionable. Ahora solo queda actuar.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 border-t border-foreground/10 relative">
        <span className="kanji-mark absolute -left-8 top-10 text-[18rem] leading-none hidden md:block">機能</span>
        <div className="container relative">
          <p className="eyebrow mb-6">機能 · Lo que puedes hacer</p>
          <h2 className="display text-3xl md:text-5xl mb-12 max-w-3xl">Conversaciones que se vuelven decisiones.</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="font-display text-2xl mb-6">Con MIKO</p>
              <ul className="space-y-5">
                {mikoExamples.map((e) => (
                  <li key={e.q} className="border-t border-foreground/10 pt-4">
                    <p className="text-sm font-medium">{e.q}</p>
                    <p className="text-xs text-muted-foreground mt-1">{e.a}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display text-2xl mb-6">Con el MANAGER (vía Miko)</p>
              <ul className="space-y-5">
                {managerExamples.map((e) => (
                  <li key={e.q} className="border-t border-foreground/10 pt-4">
                    <p className="text-sm font-medium">{e.q}</p>
                    <p className="text-xs text-muted-foreground mt-1">{e.a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-24 border-t border-foreground/10 relative">
        <span className="kanji-mark absolute -right-8 top-10 text-[18rem] leading-none hidden md:block">体験</span>
        <div className="container relative">
          <p className="eyebrow mb-6">体験 · La experiencia</p>
          <h2 className="display text-3xl md:text-5xl mb-12 max-w-3xl">Cómo se siente trabajar con ellos.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {journey.map((j) => (
              <div key={j.stage} className="border border-foreground/10 p-6">
                <p className="font-display text-lg">{j.stage}</p>
                <p className="text-xs text-seal uppercase tracking-[0.18em] mt-1">→ {j.emotion}</p>
                <p className="text-sm text-muted-foreground mt-3">{j.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REINFORCEMENT */}
      <section className="py-24 border-t border-foreground/10 relative">
        <span className="kanji-mark absolute -left-8 top-10 text-[18rem] leading-none hidden md:block">強</span>
        <div className="container relative max-w-3xl">
          <p className="eyebrow mb-6">強化 · Refuerzo positivo</p>
          <h2 className="display text-3xl md:text-5xl mb-10">Cada acción tiene su refuerzo.</h2>
          <ul className="space-y-4">
            {reinforcements.map((r, i) => (
              <li key={i} className="reinforcement text-base">{r}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-foreground/10 relative">
        <span className="kanji-mark absolute -right-8 top-10 text-[20rem] leading-none hidden md:block">絆</span>
        <div className="container relative max-w-2xl">
          <p className="eyebrow mb-6">絆 · Kizuna</p>
          <h2 className="display text-4xl md:text-6xl mb-6">No estás solo.</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Miko te escucha. El Manager actúa. Los 13 agentes trabajan. Todo el equipo está para ti.
          </p>
          <Link
            to="/contacto/formulario?actor=provider&source=miko-manager"
            className="inline-block text-xs uppercase tracking-[0.22em] bg-foreground text-background px-8 py-4 hover:bg-seal transition-colors"
          >
            Comenzar mi viaje al Satori
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MikoManager;
