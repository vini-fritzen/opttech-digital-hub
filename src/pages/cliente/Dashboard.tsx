
import React from 'react';
import ClientLayout from '@/components/layout/ClientLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const ClienteDashboard = () => {
  const { profile } = useAuth();

  return (
    <ClientLayout title="Dashboard">
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Bem-vindo(a), {profile?.full_name}</CardTitle>
            <CardDescription>
              Este é seu painel de controle pessoal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Aqui você pode acessar todos os documentos e informações relacionados aos seus aplicativos.
              Se precisar de ajuda, não hesite em entrar em contato conosco.
            </p>
            <Button className="flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              Ver Meus Documentos
            </Button>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Aplicativos</CardTitle>
              <CardDescription>Seus aplicativos cadastrados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  Aqui serão exibidos seus aplicativos e documentos.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Suporte</CardTitle>
              <CardDescription>Precisa de ajuda?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm">
                Se você tiver dúvidas sobre seus aplicativos ou precisar de suporte técnico, 
                entre em contato com nossa equipe.
              </p>
              <Button variant="outline" className="flex items-center">
                <ExternalLink className="mr-2 h-4 w-4" />
                Contatar Suporte
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </ClientLayout>
  );
};

export default ClienteDashboard;
