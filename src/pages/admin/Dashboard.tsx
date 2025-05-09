
import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Briefcase, FileText, Users, MessageSquare } from 'lucide-react';

const AdminDashboard = () => {
  // Placeholder para os dados que serão carregados do Supabase
  const stats = [
    { title: 'Produtos', value: '24', icon: Package, color: 'bg-blue-500' },
    { title: 'Serviços', value: '12', icon: Briefcase, color: 'bg-green-500' },
    { title: 'Vagas Ativas', value: '8', icon: FileText, color: 'bg-yellow-500' },
    { title: 'Clientes', value: '126', icon: Users, color: 'bg-purple-500' },
    { title: 'Mensagens', value: '32', icon: MessageSquare, color: 'bg-red-500' },
  ];

  return (
    <AdminLayout title="Dashboard">
      <div className="grid gap-6">
        <h2 className="text-2xl font-bold">Visão Geral</h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`p-2 rounded-md ${stat.color}`}>
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Atividade Recente</CardTitle>
              <CardDescription>Últimas interações na plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    <div className="flex-grow">
                      <p className="text-sm">
                        {['Novo orçamento recebido', 'Currículo enviado', 'Nova mensagem', 'Produto atualizado', 'Cliente cadastrado'][i % 5]}
                      </p>
                      <p className="text-xs text-gray-500">
                        há {i + 1} {i === 0 ? 'hora' : 'horas'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Acesso Rápido</CardTitle>
              <CardDescription>Links úteis para gerenciamento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <a href="/admin/products" className="block p-2 rounded-md hover:bg-gray-100">
                  Gerenciar Produtos
                </a>
                <a href="/admin/services" className="block p-2 rounded-md hover:bg-gray-100">
                  Gerenciar Serviços
                </a>
                <a href="/admin/jobs" className="block p-2 rounded-md hover:bg-gray-100">
                  Gerenciar Vagas
                </a>
                <a href="/admin/quotes" className="block p-2 rounded-md hover:bg-gray-100">
                  Ver Orçamentos
                </a>
                <a href="/admin/resumes" className="block p-2 rounded-md hover:bg-gray-100">
                  Ver Currículos
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
