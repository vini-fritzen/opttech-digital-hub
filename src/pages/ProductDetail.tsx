
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Mail } from 'lucide-react';

interface Produto {
  id: string;
  nome: string;
  descricao: string | null;
  imagem: string | null;
  categoria: string | null;
}

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [produto, setProduto] = useState<Produto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        setIsLoading(true);
        
        const { data, error } = await supabase
          .from('produtos')
          .select('*')
          .eq('id', slug)
          .single();
        
        if (error) throw error;
        
        setProduto(data);
      } catch (err: any) {
        console.error('Erro ao buscar produto:', err);
        setError('Produto não encontrado ou indisponível.');
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchProduto();
    }
  }, [slug]);

  // Placeholder para imagem quando não houver
  const placeholderImage = "https://picsum.photos/800/400?random=product";

  if (isLoading) {
    return (
      <div className="container mx-auto py-20 px-4 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !produto) {
    return (
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Ops! {error || 'Produto não encontrado'}</h1>
          <p className="mb-6">O produto que você está procurando não está disponível ou não existe.</p>
          <Button asChild>
            <Link to="/produtos" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Produtos
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-20 px-4">
      <Link to="/produtos" className="flex items-center text-primary hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Produtos
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img 
            src={produto.imagem || placeholderImage} 
            alt={produto.nome} 
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-2">{produto.nome}</h1>
          
          {produto.categoria && (
            <Badge variant="outline" className="mb-4">{produto.categoria}</Badge>
          )}
          
          <div className="prose max-w-none mb-6">
            <p>{produto.descricao || 'Sem descrição disponível para este produto.'}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1">
              <Link to="/orcamento" className="flex items-center justify-center">
                <Mail className="mr-2 h-4 w-4" /> Solicitar Orçamento
              </Link>
            </Button>
            <Button variant="outline" asChild className="flex-1">
              <Link to="/contato" className="flex items-center justify-center">
                <ExternalLink className="mr-2 h-4 w-4" /> Mais Informações
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Especificações Técnicas</h2>
        
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-500">
              Informações técnicas detalhadas sobre este produto serão adicionadas em breve.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
