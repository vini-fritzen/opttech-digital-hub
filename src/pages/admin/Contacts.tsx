
import React, { useState } from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { supabase } from '@/integrations/supabase/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from '@/components/ui/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
  Loader2,
  Search,
  Eye,
  Trash2,
  Check,
  X,
  Mail,
} from 'lucide-react';

type Contact = {
  id: string;
  nome: string;
  email: string;
  mensagem: string;
  lido: boolean;
  created_at: string;
};

const AdminContacts = () => {
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  
  const queryClient = useQueryClient();
  
  // Buscar contatos
  const {
    data: contacts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['contacts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contatos')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      return data as Contact[];
    },
  });
  
  // Filtrar contatos com base no termo de busca
  const filteredContacts = contacts?.filter(
    (contact) =>
      contact.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.mensagem.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Exibir contatos com paginação
  const paginatedContacts = filteredContacts?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  
  // Mutation para marcar contato como lido
  const markAsReadMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('contatos')
        .update({ lido: true })
        .eq('id', id);
        
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      toast({
        title: 'Mensagem marcada como lida',
        description: 'A mensagem foi marcada como lida com sucesso.',
      });
    },
    onError: (error: any) => {
      console.error('Erro ao marcar mensagem como lida:', error);
      toast({
        title: 'Erro',
        description: `Ocorreu um erro ao marcar a mensagem como lida: ${error.message}`,
        variant: 'destructive',
      });
    },
  });
  
  // Mutation para excluir contato
  const deleteContactMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('contatos').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      toast({
        title: 'Mensagem excluída',
        description: 'A mensagem foi excluída com sucesso.',
      });
    },
    onError: (error: any) => {
      console.error('Erro ao excluir mensagem:', error);
      toast({
        title: 'Erro',
        description: `Ocorreu um erro ao excluir a mensagem: ${error.message}`,
        variant: 'destructive',
      });
    },
  });
  
  // Handler para visualizar contato
  const handleView = (contact: Contact) => {
    setSelectedContact(contact);
    setIsViewDialogOpen(true);
    
    // Se o contato ainda não foi lido, marcá-lo como lido
    if (!contact.lido) {
      markAsReadMutation.mutate(contact.id);
    }
  };
  
  // Handler para excluir contato
  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir esta mensagem?')) {
      deleteContactMutation.mutate(id);
    }
  };
  
  // Função para formatar data
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "dd 'de' MMMM 'de' yyyy, HH:mm", { locale: ptBR });
  };
  
  // Componente para exibir a paginação
  function Pagination({ totalItems, pageSize, currentPage, onPageChange }: {
    totalItems: number;
    pageSize: number;
    currentPage: number;
    onPageChange: (page: number) => void;
  }) {
    const totalPages = Math.ceil(totalItems / pageSize);
    
    if (totalPages <= 1) return null;
    
    return (
      <div className="flex justify-center space-x-2 my-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </Button>
        
        <div className="flex items-center space-x-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(page)}
              className="w-8 h-8 p-0"
            >
              {page}
            </Button>
          ))}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próximo
        </Button>
      </div>
    );
  }

  return (
    <AdminLayout title="Contatos">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="relative w-72">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar contatos..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset para primeira página ao buscar
              }}
            />
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Mensagens de Contato</CardTitle>
            <CardDescription>
              Visualize e gerencie as mensagens recebidas pelo formulário de contato.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : error ? (
              <div className="bg-red-50 p-4 rounded-md text-red-600">
                Erro ao carregar contatos: {(error as Error).message}
              </div>
            ) : paginatedContacts && paginatedContacts.length > 0 ? (
              <>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedContacts.map((contact) => (
                      <TableRow key={contact.id} className={!contact.lido ? 'bg-blue-50' : ''}>
                        <TableCell className="font-medium">{contact.nome}</TableCell>
                        <TableCell>{contact.email}</TableCell>
                        <TableCell>
                          {format(new Date(contact.created_at), 'dd/MM/yyyy')}
                        </TableCell>
                        <TableCell>
                          <Badge variant={contact.lido ? 'outline' : 'default'}>
                            {contact.lido ? 'Lido' : 'Não lido'}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleView(contact)}
                          >
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">Ver</span>
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => handleDelete(contact.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Excluir</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                <Pagination
                  totalItems={filteredContacts?.length || 0}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
                />
              </>
            ) : (
              <div className="text-center py-8 text-gray-500">
                {searchTerm
                  ? 'Nenhuma mensagem encontrada para esta busca.'
                  : 'Nenhuma mensagem de contato recebida.'}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Mensagem de Contato</DialogTitle>
            <DialogDescription>
              Visualizando mensagem recebida
            </DialogDescription>
          </DialogHeader>
          
          {selectedContact && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Nome</h4>
                  <p className="mt-1 font-medium">{selectedContact.nome}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Email</h4>
                  <p className="mt-1">{selectedContact.email}</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500">Data</h4>
                <p className="mt-1">{formatDate(selectedContact.created_at)}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500">Mensagem</h4>
                <div className="mt-1 p-3 border rounded-md bg-gray-50">
                  <p className="whitespace-pre-line">{selectedContact.mensagem}</p>
                </div>
              </div>
              
              <div className="flex justify-between space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => setIsViewDialogOpen(false)}
                >
                  <X className="mr-2 h-4 w-4" />
                  Fechar
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => {
                    // Criar mailto link
                    const mailto = `mailto:${selectedContact.email}?subject=Resposta: Contato pelo Site&body=Olá ${selectedContact.nome},\n\n`;
                    window.location.href = mailto;
                  }}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Responder por Email
                </Button>
                
                <Button
                  variant="default"
                  size="sm"
                  className="flex-1"
                  onClick={() => {
                    markAsReadMutation.mutate(selectedContact.id);
                    setIsViewDialogOpen(false);
                  }}
                  disabled={selectedContact.lido}
                >
                  <Check className="mr-2 h-4 w-4" />
                  {selectedContact.lido ? 'Já lido' : 'Marcar como lido'}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminContacts;
