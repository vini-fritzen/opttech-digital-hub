
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Package, 
  Briefcase, 
  FileText, 
  MessageSquare, 
  Users, 
  File, 
  LogOut 
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden w-64 flex-shrink-0 bg-white shadow-md md:block">
        <div className="flex h-16 items-center justify-center border-b">
          <h1 className="text-xl font-bold text-primary">Painel Admin</h1>
        </div>
        <nav className="flex flex-col p-4">
          <Link
            to="/admin/dashboard"
            className="mb-2 flex items-center rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          <Link
            to="/admin/products"
            className="mb-2 flex items-center rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <Package className="mr-3 h-5 w-5" />
            Produtos
          </Link>
          <Link
            to="/admin/services"
            className="mb-2 flex items-center rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <Briefcase className="mr-3 h-5 w-5" />
            Serviços
          </Link>
          <Link
            to="/admin/jobs"
            className="mb-2 flex items-center rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <FileText className="mr-3 h-5 w-5" />
            Vagas
          </Link>
          <Link
            to="/admin/resumes"
            className="mb-2 flex items-center rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <File className="mr-3 h-5 w-5" />
            Currículos
          </Link>
          <Link
            to="/admin/quotes"
            className="mb-2 flex items-center rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <MessageSquare className="mr-3 h-5 w-5" />
            Orçamentos
          </Link>
          <Link
            to="/admin/contacts"
            className="mb-2 flex items-center rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <MessageSquare className="mr-3 h-5 w-5" />
            Contatos
          </Link>
          <Link
            to="/admin/clients"
            className="mb-2 flex items-center rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <Users className="mr-3 h-5 w-5" />
            Clientes
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
            <Button variant="ghost" onClick={handleSignOut} className="flex items-center">
              <LogOut className="mr-2 h-5 w-5" />
              Sair
            </Button>
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

export default AdminLayout;
