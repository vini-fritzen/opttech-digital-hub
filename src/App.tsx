
import "./App.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import AuthGuard from "@/components/auth/AuthGuard";

// Páginas públicas
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Budget from "./pages/Budget";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import NotFound from "./pages/NotFound";

// Páginas de autenticação
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Páginas de administração
import AdminDashboard from "./pages/admin/Dashboard";

// Páginas de cliente
import ClienteDashboard from "./pages/cliente/Dashboard";
import ClienteDocuments from "./pages/cliente/Documents";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Páginas Públicas */}
            <Route path="/" element={<Index />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/produto/:slug" element={<ProductDetail />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/orcamento" element={<Budget />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/vagas" element={<Careers />} />
            <Route path="/vaga/:slug" element={<JobDetail />} />
            <Route path="/trabalhe-conosco" element={<Careers />} />

            {/* Autenticação */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />

            {/* Painel Admin */}
            <Route
              path="/admin/dashboard"
              element={
                <AuthGuard requireAuth requireAdmin>
                  <AdminDashboard />
                </AuthGuard>
              }
            />

            {/* Painel Cliente */}
            <Route
              path="/cliente/dashboard"
              element={
                <AuthGuard requireAuth requireClient>
                  <ClienteDashboard />
                </AuthGuard>
              }
            />
            
            <Route
              path="/cliente/documentos"
              element={
                <AuthGuard requireAuth requireClient>
                  <ClienteDocuments />
                </AuthGuard>
              }
            />

            {/* Rota 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
