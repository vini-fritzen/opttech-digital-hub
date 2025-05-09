
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calendar, MapPin, Briefcase, Clock, Send } from 'lucide-react';

interface Vaga {
  id: string;
  cargo: string;
  descricao: string | null;
  requisitos: string | null;
  status: string;
  created_at: string;
}

const JobDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [vaga, setVaga] = useState<Vaga | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVaga = async () => {
      try {
        setIsLoading(true);
        
        const { data, error } = await supabase
          .from('vagas')
          .select('*')
          .eq('id', slug)
          .single();
        
        if (error) throw error;
        
        setVaga(data);
      } catch (err: any) {
        console.error('Erro ao buscar vaga:', err);
        setError('Vaga não encontrada ou indisponível.');
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchVaga();
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="container mx-auto py-20 px-4 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !vaga) {
    return (
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Ops! {error || 'Vaga não encontrada'}</h1>
          <p className="mb-6">A vaga que você está procurando não está disponível ou não existe.</p>
          <Button asChild>
            <Link to="/vagas" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Vagas
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  // Formatar a data de criação
  const dataPublicacao = new Date(vaga.created_at).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="container mx-auto py-20 px-4">
      <Link to="/vagas" className="flex items-center text-primary hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Vagas
      </Link>
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <h1 className="text-3xl font-bold">{vaga.cargo}</h1>
            <Badge variant={vaga.status === 'aberta' ? 'success' : 'secondary'}>
              {vaga.status === 'aberta' ? 'Vaga Aberta' : 'Encerrada'}
            </Badge>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Publicada em: {dataPublicacao}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              <span>Localização: São Paulo, SP</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Tipo: CLT</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>Carga Horária: 40h semanais</span>
            </div>
          </div>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Descrição da Vaga</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="whitespace-pre-line">{vaga.descricao || 'Descrição não disponível para esta vaga.'}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Requisitos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="whitespace-pre-line">{vaga.requisitos || 'Requisitos não especificados para esta vaga.'}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Benefícios</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Vale Refeição</li>
              <li>Vale Transporte</li>
              <li>Plano de Saúde</li>
              <li>Plano Odontológico</li>
              <li>Seguro de Vida</li>
              <li>Horário Flexível</li>
            </ul>
          </CardContent>
        </Card>
        
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link to={`/trabalhe-conosco?vaga=${vaga.id}`} className="flex items-center">
              <Send className="mr-2 h-5 w-5" />
              Candidatar-se a esta vaga
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
