
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Search, Briefcase, Clock } from 'lucide-react';

// Interface para as vagas
interface Vaga {
  id: string;
  cargo: string;
  descricao: string | null;
  requisitos: string | null;
  status: string;
}

const Careers = () => {
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [busca, setBusca] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Buscar vagas do Supabase
  const fetchVagas = async () => {
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase
        .from('vagas')
        .select('*')
        .eq('status', 'aberta');
      
      if (error) throw error;
      
      setVagas(data || []);
    } catch (err: any) {
      console.error('Erro ao buscar vagas:', err);
      setError('Não foi possível carregar as vagas. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  // Efeito para buscar vagas quando a página carrega
  useEffect(() => {
    fetchVagas();
  }, []);
  
  // Filtrar vagas com base na busca
  const vagasFiltradas = vagas.filter(vaga => 
    vaga.cargo.toLowerCase().includes(busca.toLowerCase()) || 
    (vaga.descricao && vaga.descricao.toLowerCase().includes(busca.toLowerCase())) ||
    (vaga.requisitos && vaga.requisitos.toLowerCase().includes(busca.toLowerCase()))
  );

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Trabalhe Conosco</h1>
        <p className="text-lg text-gray-600 mb-8">
          Confira nossas vagas em aberto e faça parte da nossa equipe.
        </p>
        
        {/* Barra de pesquisa */}
        <div className="flex w-full max-w-lg mx-auto mb-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar vagas..."
              className="w-full pl-10"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : error ? (
        <div className="text-center py-10">
          <p className="text-red-500">{error}</p>
          <Button 
            variant="outline" 
            onClick={() => fetchVagas()} 
            className="mt-4"
          >
            Tentar novamente
          </Button>
        </div>
      ) : vagasFiltradas.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">Nenhuma vaga disponível no momento.</p>
          <p className="mt-4">
            Mesmo assim, você pode enviar seu currículo para o nosso banco de talentos.
          </p>
          <Button asChild className="mt-4">
            <Link to="/trabalhe-conosco">
              Enviar Currículo
            </Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vagasFiltradas.map((vaga) => (
            <Card key={vaga.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center">
                    <Briefcase className="mr-2 h-5 w-5" />
                    {vaga.cargo}
                  </CardTitle>
                  <Badge variant="secondary">Aberta</Badge>
                </div>
                <CardDescription className="flex items-center mt-2">
                  <Clock className="mr-2 h-4 w-4" />
                  Enviado recentemente
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  {vaga.descricao && (
                    <div>
                      <h3 className="font-medium mb-1">Descrição:</h3>
                      <p className="text-sm text-gray-600 line-clamp-3">{vaga.descricao}</p>
                    </div>
                  )}
                  {vaga.requisitos && (
                    <div>
                      <h3 className="font-medium mb-1">Requisitos:</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{vaga.requisitos}</p>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link to={`/vaga/${vaga.id}`}>
                    Ver Detalhes
                  </Link>
                </Button>
                <Button asChild>
                  <Link to={`/trabalhe-conosco?vaga=${vaga.id}`} className="flex items-center">
                    Candidatar-se <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Careers;
