
import React, { useState, useEffect } from 'react';
import ClientLayout from '@/components/layout/ClientLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface Document {
  id: string;
  nome_app: string;
  arquivo_url: string | null;
  link: string | null;
}

const ClienteDocuments = () => {
  const { user } = useAuth();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from('documentos_app')
          .select('*')
          .eq('cliente_id', user.id);
          
        if (error) throw error;
        setDocuments(data || []);
      } catch (error) {
        console.error('Erro ao buscar documentos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, [user]);

  const handleDownload = async (fileUrl: string) => {
    if (!fileUrl) return;
    
    try {
      const { data, error } = await supabase.storage.from('documentos').download(fileUrl);
      if (error) throw error;
      
      // Create download link
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileUrl.split('/').pop() || 'documento';
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
      a.remove();
    } catch (error) {
      console.error('Erro ao baixar arquivo:', error);
    }
  };

  return (
    <ClientLayout title="Meus Documentos">
      <div className="grid gap-6">
        <h1 className="text-2xl font-bold">Documentos dos Aplicativos</h1>
        
        {loading ? (
          <div className="flex justify-center p-6">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
          </div>
        ) : documents.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {documents.map((doc) => (
              <Card key={doc.id}>
                <CardHeader>
                  <CardTitle>{doc.nome_app}</CardTitle>
                  <CardDescription>Documentação do aplicativo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {doc.arquivo_url && (
                    <Button 
                      variant="outline"
                      className="w-full flex items-center justify-center"
                      onClick={() => handleDownload(doc.arquivo_url!)}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Baixar Documentação
                    </Button>
                  )}
                  
                  {doc.link && (
                    <Button 
                      variant="outline"
                      className="w-full flex items-center justify-center"
                      onClick={() => window.open(doc.link!, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Acessar Link
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-6 text-center">
              <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-medium mb-2">Nenhum documento encontrado</h3>
              <p className="text-gray-500 mb-4">
                Você ainda não possui documentos associados aos seus aplicativos.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </ClientLayout>
  );
};

export default ClienteDocuments;
