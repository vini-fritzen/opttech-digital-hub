
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, File, LogOut, User } from 'lucide-react';
import { cleanupAuthState } from '@/utils/authUtils';
import { toast } from '@/components/ui/use-toast';

type ClientLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ClientLayout: React.FC<ClientLayoutProps> = ({ children, title }) => {
  const { signOut, profile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    try {
      // Limpar tokens de autenticação
      cleanupAuthState();
      
      // Fazer logout
      await signOut();
      
      toast({
        title: "Logout realizado",
        description: "Você foi desconectado com sucesso.",
      });
      
      // Redirecionar para home
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao fazer logout.",
        variant: "destructive",
      });
    }
  };
  
  // Verificar qual rota está ativa
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden w-64 flex-shrink-0 bg-white shadow-md md:block">
        <div className="flex h-16 items-center justify-center border-b">
          <h1 className="text-xl font-bold text-primary">Área do Cliente</h1>
        </div>
        <div className="p-4 border-b">
          <p className="text-sm text-gray-500">Bem-vindo(a),</p>
          <p className="font-medium">{profile?.full_name}</p>
        </div>
        <nav className="flex flex-col p-4">
          <Link
            to="/cliente/dashboard"
            className={`mb-2 flex items-center rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 ${
              isActive('/cliente/dashboard') ? 'bg-gray-100 font-medium' : ''
            }`}
          >
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          <Link
            to="/cliente/documentos"
            className={`mb-2 flex items-center rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 ${
              isActive('/cliente/documentos') ? 'bg-gray-100 font-medium' : ''
            }`}
          >
            <File className="mr-3 h-5 w-5" />
            Meus Documentos
          </Link>
          <Link
            to="/cliente/perfil"
            className={`mb-2 flex items-center rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 ${
              isActive('/cliente/perfil') ? 'bg-gray-100 font-medium' : ''
            }`}
          >
            <User className="mr-3 h-5 w-5" />
            Meu Perfil
          </Link>
          
          <Button 
            variant="ghost"
            className="mt-auto flex items-center justify-start rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={handleSignOut}
          >
            <LogOut className="mr-3 h-5 w-5" />
            Sair
          </Button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="bg-white p-4 shadow-sm">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex items-center gap-4">
              <Link 
                to="/cliente/perfil"
                className="text-sm text-gray-600 hover:text-primary hidden sm:block"
              >
                {profile?.full_name}
              </Link>
              <Button variant="ghost" onClick={handleSignOut} className="flex items-center">
                <LogOut className="mr-2 h-5 w-5" />
                Sair
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">
          <div className="container mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default ClientLayout;
