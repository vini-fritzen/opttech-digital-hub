
import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireAdmin?: boolean;
  requireClient?: boolean;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ 
  children, 
  requireAuth = false,
  requireAdmin = false,
  requireClient = false
}) => {
  const { user, isAdmin, isClient, isLoading } = useAuth();
  const location = useLocation();

  // Se estiver carregando, mostrar um indicador de carregamento
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="ml-2 text-lg font-medium">Carregando...</p>
      </div>
    );
  }

  // Verificar se o usuário está autenticado
  if (requireAuth && !user) {
    // Redirecionar para login com o caminho original como state
    return <Navigate to="/auth/login" state={{ from: location.pathname }} replace />;
  }

  // Verificar se o usuário é administrador
  if (requireAdmin && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  // Verificar se o usuário é cliente
  if (requireClient && !isClient) {
    return <Navigate to="/" replace />;
  }

  // Se não precisar de autenticação ou o usuário estiver autenticado corretamente
  return <>{children}</>;
};

export default AuthGuard;
