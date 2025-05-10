import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { supabase } from '@/integrations/supabase/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from '@/components/ui/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Pencil,
  Trash2,
  Search,
  Plus,
  Image,
  Loader2,
} from 'lucide-react';

// Esquema para validação do formulário de produto
const productSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  descricao: z.string().optional(),
  categoria: z.string().optional(),
  ativo: z.boolean().default(true),
  imagem: z.any().optional(),
});

type Product = {
  id: string;
  nome: string;
  descricao: string | null;
  categoria: string | null;
  ativo: boolean;
  imagem: string | null;
  created_at: string;
  updated_at: string;
};

type ProductFormValues = z.infer<typeof productSchema>;

// Componente para exibir um item por vez com paginação
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

const AdminProducts = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  
  const queryClient = useQueryClient();
  
  // Buscar produtos
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('produtos')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      return data as Product[];
    },
  });
  
  // Filtrar produtos com base no termo de busca
  const filteredProducts = products?.filter(
    (product) =>
      product.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.categoria && product.categoria.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  // Exibir produtos com paginação
  const paginatedProducts = filteredProducts?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  
  // Formulário para criar/editar produto
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      nome: '',
      descricao: '',
      categoria: '',
      ativo: true,
    },
  });
  
  // Reset do formulário quando o produto em edição muda
  useEffect(() => {
    if (editingProduct) {
      form.reset({
        nome: editingProduct.nome,
        descricao: editingProduct.descricao || '',
        categoria: editingProduct.categoria || '',
        ativo: editingProduct.ativo,
      });
    } else {
      form.reset({
        nome: '',
        descricao: '',
        categoria: '',
        ativo: true,
      });
    }
  }, [editingProduct, form]);
  
  // Mutation para criar/atualizar produto
  const productMutation = useMutation({
    mutationFn: async (values: ProductFormValues) => {
      const formData = new FormData();
      let imagePath = editingProduct?.imagem || null;
      
      // Upload de imagem se fornecida
      if (values.imagem && values.imagem[0]) {
        const file = values.imagem[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `produtos/${fileName}`;
        
        const { error: uploadError } = await supabase.storage
          .from('public')
          .upload(filePath, file);
          
        if (uploadError) throw uploadError;
        
        imagePath = filePath;
      }
      
      if (editingProduct) {
        // Atualizando produto existente
        const { error } = await supabase
          .from('produtos')
          .update({
            nome: values.nome,
            descricao: values.descricao,
            categoria: values.categoria,
            ativo: values.ativo,
            imagem: imagePath,
          })
          .eq('id', editingProduct.id);
          
        if (error) throw error;
      } else {
        // Criando novo produto
        const { error } = await supabase.from('produtos').insert([
          {
            nome: values.nome,
            descricao: values.descricao,
            categoria: values.categoria,
            ativo: values.ativo,
            imagem: imagePath,
          },
        ]);
        
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      setIsDialogOpen(false);
      setEditingProduct(null);
      toast({
        title: editingProduct ? 'Produto atualizado' : 'Produto criado',
        description: editingProduct
          ? 'O produto foi atualizado com sucesso.'
          : 'O produto foi criado com sucesso.',
      });
    },
    onError: (error: any) => {
      console.error('Erro ao salvar produto:', error);
      toast({
        title: 'Erro',
        description: `Ocorreu um erro ao ${
          editingProduct ? 'atualizar' : 'criar'
        } o produto: ${error.message}`,
        variant: 'destructive',
      });
    },
  });
  
  // Mutation para excluir produto
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('produtos').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast({
        title: 'Produto excluído',
        description: 'O produto foi excluído com sucesso.',
      });
    },
    onError: (error: any) => {
      console.error('Erro ao excluir produto:', error);
      toast({
        title: 'Erro',
        description: `Ocorreu um erro ao excluir o produto: ${error.message}`,
        variant: 'destructive',
      });
    },
  });
  
  // Handler para salvar produto
  const onSubmit = (values: ProductFormValues) => {
    productMutation.mutate(values);
  };
  
  // Handler para excluir produto
  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      deleteMutation.mutate(id);
    }
  };
  
  // Handler para abrir modal de edição
  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsDialogOpen(true);
  };
  
  // Handler para criar novo produto
  const handleCreate = () => {
    setEditingProduct(null);
    setIsDialogOpen(true);
  };

  return (
    <AdminLayout title="Produtos">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="relative w-72">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar produtos..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset para primeira página ao buscar
              }}
            />
          </div>
          <Button onClick={handleCreate}>
            <Plus className="mr-2 h-4 w-4" />
            Novo Produto
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Produtos</CardTitle>
            <CardDescription>
              Gerencie seus produtos. Você pode criar, editar, ativar/desativar e excluir produtos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : error ? (
              <div className="bg-red-50 p-4 rounded-md text-red-600">
                Erro ao carregar produtos: {(error as Error).message}
              </div>
            ) : paginatedProducts && paginatedProducts.length > 0 ? (
              <>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.nome}</TableCell>
                        <TableCell>{product.categoria || '-'}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              product.ativo
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {product.ativo ? 'Ativo' : 'Inativo'}
                          </span>
                        </TableCell>
                        <TableCell className="text-right space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(product)}
                          >
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Editar</span>
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => handleDelete(product.id)}
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
                  totalItems={filteredProducts?.length || 0}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
                />
              </>
            ) : (
              <div className="text-center py-8 text-gray-500">
                {searchTerm
                  ? 'Nenhum produto encontrado para esta busca.'
                  : 'Nenhum produto cadastrado. Clique em "Novo Produto" para adicionar.'}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingProduct ? 'Editar Produto' : 'Novo Produto'}
            </DialogTitle>
            <DialogDescription>
              Preencha os campos abaixo para {editingProduct ? 'editar o' : 'criar um novo'} produto.
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome do produto" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="descricao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descrição do produto"
                        {...field}
                        value={field.value || ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="categoria"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Categoria do produto"
                        {...field}
                        value={field.value || ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="imagem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imagem</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-4">
                        {editingProduct?.imagem && (
                          <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                            <img
                              src={`https://vlbfvnbltbupfnufkrjt.supabase.co/storage/v1/object/public/public/${editingProduct.imagem}`}
                              alt={editingProduct.nome}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg";
                              }}
                            />
                          </div>
                        )}
                        <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer hover:bg-gray-50 transition">
                          <Image className="h-5 w-5" />
                          <span>
                            {editingProduct?.imagem
                              ? 'Alterar imagem'
                              : 'Selecionar imagem'}
                          </span>
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => {
                              field.onChange(e.target.files);
                            }}
                          />
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="ativo"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Ativo</FormLabel>
                      <CardDescription>
                        Produtos ativos são exibidos no site.
                      </CardDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button variant="outline" type="button" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={productMutation.isPending}>
                  {productMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Salvando...
                    </>
                  ) : (
                    'Salvar'
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminProducts;
