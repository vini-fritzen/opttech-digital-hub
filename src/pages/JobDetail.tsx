import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarClock, MapPin, Coins } from 'lucide-react';

type Job = {
  id: string;
  titulo: string;
  descricao: string;
  tipo_trabalho: string;
  local: string;
  salario: number;
  empresa: string;
  contato: string;
  slug: string;
  created_at: string;
};

const JobDetail = () => {
  const { slug } = useParams();

  const { data: job, isLoading, error } = useQuery({
    queryKey: ['job', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('vagas')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data as Job;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar a vaga.</div>;
  }

  if (!job) {
    return <div>Vaga não encontrada.</div>;
  }
  
  // Corrigindo o variant do Badge para um valor permitido (secondary em vez de success)
  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{job.titulo}</CardTitle>
          <CardDescription>
            Vaga publicada em {format(new Date(job.created_at), 'dd/MM/yyyy', { locale: ptBR })}
          </CardDescription>
        </CardHeader>
        <CardContent className="leading-relaxed">
          <div className="flex items-center gap-2 mt-4">
            <Badge variant="secondary">{job.tipo_trabalho}</Badge>
            <Badge variant="secondary">{job.local}</Badge>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <CalendarClock className="h-4 w-4" />
            <span>{job.tipo_trabalho}</span>
            <MapPin className="h-4 w-4" />
            <span>{job.local}</span>
            <Coins className="h-4 w-4" />
            <span>Salário: R$ {job.salario}</span>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">Descrição da Vaga</h3>
            <p>{job.descricao}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">Empresa</h3>
            <p>{job.empresa}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">Contato</h3>
            <p>{job.contato}</p>
          </div>

          <Button className="mt-8" asChild>
            <a href="/trabalhe-conosco">Candidatar-se</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetail;
