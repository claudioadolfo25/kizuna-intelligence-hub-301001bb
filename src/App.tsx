import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import { ThemeProvider } from "./components/ThemeProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import Methodology from "./pages/Methodology";
import Principles from "./pages/Principles";
import Decisions from "./pages/Decisions";
import Instruments from "./pages/Instruments";
import DecisionCanvas from "./pages/DecisionCanvas";
import Tools from "./pages/Tools";
import ToolDetail from "./pages/ToolDetail";
import Solutions from "./pages/Solutions";
import Impact from "./pages/Impact";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import ContactAreas from "./pages/ContactAreas";
import NotFound from "./pages/NotFound";
import Satori from "./pages/Satori";
import MikoManager from "./pages/MikoManager";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/metodologia" element={<Methodology />} />
              <Route path="/metodologia/principios" element={<Principles />} />
              <Route path="/metodologia/decisiones" element={<Decisions />} />
              <Route path="/instrumentos" element={<Instruments />} />
              <Route path="/instrumentos/decision-canvas" element={<DecisionCanvas />} />
              <Route path="/herramientas" element={<Tools />} />
              <Route path="/herramientas/:slug" element={<ToolDetail />} />
              <Route path="/soluciones" element={<Solutions />} />
              <Route path="/impacto" element={<Impact />} />
              <Route path="/recursos" element={<Resources />} />
              <Route path="/contacto" element={<ContactAreas />} />
              <Route path="/contacto/formulario" element={<Contact />} />
              <Route path="/satori" element={<Satori />} />
              <Route path="/satori/miko-manager" element={<MikoManager />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
