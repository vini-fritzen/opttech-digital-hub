
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/badge';
import { UserCircle, Users, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { user, isAdmin, isClient, profile } = useAuth();

  return (
    <div className="absolute top-0 right-0 p-4 z-50 flex gap-2">
      {user ? (
        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm">
          <Badge variant="outline" className="px-3 py-1">
            {isAdmin ? 'Administrador' : isClient ? 'Cliente' : 'Usuário'}
          </Badge>
          {isAdmin && (
            <Button variant="ghost" size="sm" asChild className="flex items-center gap-1">
              <Link to="/admin/dashboard">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline ml-1">Painel Admin</span>
              </Link>
            </Button>
          )}
          {isClient && (
            <Button variant="ghost" size="sm" asChild className="flex items-center gap-1">
              <Link to="/cliente/dashboard">
                <UserCircle className="h-4 w-4" />
                <span className="hidden sm:inline ml-1">Área Cliente</span>
              </Link>
            </Button>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm">
          <Button variant="outline" size="sm" asChild>
            <Link to="/admin/login" className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Admin</span>
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/auth/login" className="flex items-center gap-1">
              <LogIn className="h-4 w-4" />
              <span className="hidden sm:inline">Cliente</span>
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
