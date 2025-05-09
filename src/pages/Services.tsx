
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Search, Filter, Briefcase } from 'lucide-react';

// Interface para os serviços
interface Servico {
  id: string;
  nome: string;
  descricao: string | null;
  imagem: string | null;
  categoria: string | null;
}

const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaParam = searchParams.get('categoria');
  
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>(categoriaParam || 'todos');
  const [busca, setBusca] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Buscar serviços do Supabase
  const fetchServicos = async () => {
    try {
      setIsLoading(true);
      
      // Construir consulta base
      let query = supabase
        .from('servicos')
        .select('*')
        .eq('ativo', true);
      
      // Filtrar por categoria se não for 'todos'
      if (categoriaAtiva !== 'todos') {
        query = query.eq('categoria', categoriaAtiva);
      }
      
      // Executar consulta
      const { data, error } = await query;
      
      if (error) throw error;
      
      setServicos(data || []);
      
      // Extrair categorias únicas
      if (categoriaAtiva === 'todos') {
        const todasCategorias = [...new Set(data?.map(item => item.categoria).filter(Boolean))];
        setCategorias(['todos', ...todasCategorias]);
      }
    } catch (err: any) {
      console.error('Erro ao buscar serviços:', err);
      setError('Não foi possível carregar os serviços. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  // Efeito para buscar serviços quando a página carrega ou quando muda a categoria
  useEffect(() => {
    fetchServicos();
    
    // Atualizar parâmetros da URL se a categoria não for 'todos'
    if (categoriaAtiva !== 'todos') {
      setSearchParams({ categoria: categoriaAtiva });
    } else {
      setSearchParams({});
    }
  }, [categoriaAtiva]);
  
  // Filtrar serviços com base na busca
  const servicosFiltrados = servicos.filter(servico => 
    servico.nome.toLowerCase().includes(busca.toLowerCase()) || 
    (servico.descricao && servico.descricao.toLowerCase().includes(busca.toLowerCase()))
  );

  // Placeholder para imagem quando não houver
  const placeholderImage = "https://picsum.photos/400/300?random=";

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h1>
        <p className="text-lg text-gray-600 mb-8">
          Conheça nossa linha completa de serviços e soluções para o seu negócio.
        </p>
        
        {/* Barra de pesquisa */}
        <div className="flex w-full max-w-lg mx-auto mb-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar serviços..."
              className="w-full pl-10"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Tabs para categorias */}
      {categorias.length > 1 && (
        <Tabs defaultValue={categoriaAtiva} className="w-full mb-8" onValueChange={setCategoriaAtiva}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <Filter className="mr-2 h-5 w-5" /> Categorias
            </h2>
            <TabsList>
              {categorias.map((categoria) => (
                <TabsTrigger key={categoria} value={categoria}>
                  {categoria === 'todos' ? 'Todos' : categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
      )}

      {isLoading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : error ? (
        <div className="text-center py-10">
          <p className="text-red-500">{error}</p>
          <Button 
            variant="outline" 
            onClick={() => fetchServicos()} 
            className="mt-4"
          >
            Tentar novamente
          </Button>
        </div>
      ) : servicosFiltrados.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">Nenhum serviço encontrado.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicosFiltrados.map((servico) => (
            <Card key={servico.id} className="overflow-hidden h-full flex flex-col">
              <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                {servico.imagem ? (
                  <img 
                    src={servico.imagem || `${placeholderImage}${servico.id}`} 
                    alt={servico.nome} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                ) : (
                  <Briefcase className="h-20 w-20 text-gray-300" />
                )}
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{servico.nome}</CardTitle>
                  {servico.categoria && (
                    <Badge variant="outline">{servico.categoria}</Badge>
                  )}
                </div>
                <CardDescription className="line-clamp-2">{servico.descricao || 'Sem descrição disponível'}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* Conteúdo adicional pode ser adicionado aqui */}
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to={`/orcamento?servico=${servico.nome}`} className="flex items-center justify-center">
                    Solicitar Orçamento <ArrowRight className="ml-2 h-4 w-4" />
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

export default Services;
