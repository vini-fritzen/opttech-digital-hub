
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ArrowLeft, Upload, CheckCircle, Briefcase } from 'lucide-react';

// Schema para validação do formulário
const formSchema = z.object({
  nome: z.string().min(2, {
    message: 'Nome deve ter pelo menos 2 caracteres.',
  }),
  email: z.string().email({
    message: 'Email inválido.',
  }),
  telefone: z.string().min(10, {
    message: 'Telefone deve ter pelo menos 10 dígitos.',
  }),
  mensagem: z.string().optional(),
  arquivo: z.any()
    .refine((file) => file?.length > 0, 'O currículo é obrigatório.')
    .refine((file) => file?.[0]?.size <= 5000000, `Tamanho máximo de arquivo é 5MB.`)
    .refine(
      (file) => ['application/pdf'].includes(file?.[0]?.type),
      "Apenas arquivos PDF são aceitos."
    ),
});

type FormValues = z.infer<typeof formSchema>;

interface Vaga {
  id: string;
  cargo: string;
}

const JobApplication = () => {
  const [searchParams] = useSearchParams();
  const vagaId = searchParams.get('vaga');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [vaga, setVaga] = useState<Vaga | null>(null);
  
  // Inicializar o formulário
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      email: '',
      telefone: '',
      mensagem: '',
    },
  });

  // Buscar dados da vaga se o ID estiver presente
  useEffect(() => {
    const fetchVaga = async () => {
      if (!vagaId) return;
      
      try {
        const { data, error } = await supabase
          .from('vagas')
          .select('id, cargo')
          .eq('id', vagaId)
          .single();
        
        if (error) throw error;
        
        setVaga(data);
      } catch (err) {
        console.error('Erro ao buscar dados da vaga:', err);
      }
    };
    
    fetchVaga();
  }, [vagaId]);

  const onSubmit = async (values: FormValues) => {
    try {
      setIsSubmitting(true);
      
      // Upload do arquivo
      let arquivoUrl = null;
      
      if (values.arquivo?.[0]) {
        const file = values.arquivo[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
        const filePath = `${fileName}`;
        
        const { error: uploadError, data: uploadData } = await supabase.storage
          .from('curriculos')
          .upload(filePath, file);
        
        if (uploadError) throw uploadError;
        
        arquivoUrl = filePath;
      }
      
      // Inserir dados do currículo
      const { error } = await supabase
        .from('curriculos')
        .insert([
          {
            nome: values.nome,
            email: values.email,
            telefone: values.telefone,
            mensagem: values.mensagem || null,
            vaga_id: vagaId || null,
            arquivo_url: arquivoUrl,
          },
        ]);

      if (error) throw error;
      
      toast({
        title: 'Currículo enviado com sucesso!',
        description: 'Agradecemos seu interesse em trabalhar conosco.',
      });
      
      setIsSuccess(true);
      form.reset();
    } catch (error: any) {
      console.error('Erro ao enviar currículo:', error);
      toast({
        title: 'Erro ao enviar currículo',
        description: error.message || 'Por favor, tente novamente mais tarde.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <Link to="/vagas" className="flex items-center text-primary hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Vagas
      </Link>
      
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {vaga ? `Candidatura para ${vaga.cargo}` : 'Envie seu currículo'}
          </h1>
          <p className="text-lg text-gray-600">
            {vaga 
              ? 'Preencha o formulário abaixo para se candidatar a esta vaga.' 
              : 'Mesmo sem vagas abertas específicas, adoraríamos conhecer seu perfil.'}
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Briefcase className="mr-2 h-5 w-5" />
              {vaga ? `Vaga: ${vaga.cargo}` : 'Banco de Talentos'}
            </CardTitle>
            <CardDescription>
              Preencha todos os campos obrigatórios marcados com *
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Currículo Enviado!</h3>
                <p className="text-gray-500 mb-4">
                  Obrigado pelo interesse em trabalhar conosco. Analisaremos seu currículo e entraremos em contato caso seu perfil seja compatível com nossas necessidades.
                </p>
                <Button onClick={() => setIsSuccess(false)}>Enviar outro currículo</Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome completo *</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input placeholder="seu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="telefone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone *</FormLabel>
                          <FormControl>
                            <Input placeholder="(00) 00000-0000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="mensagem"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem (opcional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Conte-nos um pouco sobre você e sua experiência..." 
                            className="min-h-32" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="arquivo"
                    render={({ field: { value, onChange, ...fieldProps } }) => (
                      <FormItem>
                        <FormLabel>Currículo (PDF) *</FormLabel>
                        <FormControl>
                          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6 cursor-pointer hover:border-primary transition-colors">
                            <input
                              type="file"
                              id="arquivo"
                              accept=".pdf"
                              className="hidden"
                              onChange={(e) => onChange(e.target.files)}
                              {...fieldProps}
                            />
                            <label htmlFor="arquivo" className="cursor-pointer text-center">
                              <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                              <p className="text-sm font-medium">
                                {value?.[0]?.name || 'Clique para selecionar seu currículo'}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                Apenas arquivos PDF. Máximo 5MB.
                              </p>
                            </label>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                        Enviando...
                      </>
                    ) : (
                      'Enviar Candidatura'
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JobApplication;
