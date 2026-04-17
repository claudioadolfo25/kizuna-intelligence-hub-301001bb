import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const NotFound = () => (
  <>
    <SEO title="404 · Co-Kizuna" description="Página no encontrada." />
    <section className="min-h-[70vh] flex items-center">
      <div className="container text-center">
        <p className="font-jp text-6xl text-seal">絆</p>
        <p className="eyebrow mt-8">404</p>
        <h1 className="display mt-4 text-4xl md:text-6xl">La página no existe.</h1>
        <p className="mt-6 text-foreground/70">Pero el camino sí. Volvamos al inicio.</p>
        <Link to="/" className="mt-10 inline-block text-sm uppercase tracking-[0.18em] border-b border-foreground/40 pb-1 hover:border-seal hover:text-seal transition-colors">
          Inicio · Home
        </Link>
      </div>
    </section>
  </>
);

export default NotFound;
