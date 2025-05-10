
import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';
import { cleanupAuthState } from '@/utils/authUtils';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Verificar se há um redirecionamento
  const from = location.state?.from || '/';
  
  // Verificar se há uma mensagem na location state
  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      
      // Limpar a mensagem após 5 segundos
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      // Limpar estado de autenticação existente
      cleanupAuthState();
      
      // Tentar fazer sign out global (caso haja alguma sessão)
      try {
        await signIn('', '', true); // Parâmetro adicional para forçar logout
      } catch (err) {
        // Continuar mesmo se falhar
      }
      
      await signIn(email, password);
      
      toast({
        title: "Login realizado com sucesso",
        description: "Redirecionando para o painel...",
      });
      
      // Verificar se o usuário é admin ou cliente para redirecionar para o painel correto
      const profile = JSON.parse(localStorage.getItem('supabase.auth.token') || '{}')?.currentSession?.user?.user_metadata;
      
      if (profile?.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/cliente/dashboard');
      }
    } catch (err: any) {
      console.error("Erro de login:", err);
      
      // Mensagens de erro mais amigáveis
      let errorMessage = 'Falha no login. Verifique suas credenciais.';
      
      if (err.message.includes('Invalid login credentials')) {
        errorMessage = 'Email ou senha inválidos. Verifique e tente novamente.';
      } else if (err.message.includes('Email not confirmed')) {
        errorMessage = 'Email não confirmado. Verifique sua caixa de entrada.';
      }
      
      setError(errorMessage);
      
      toast({
        title: "Erro de autenticação",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-center text-2xl">Login</CardTitle>
          <CardDescription className="text-center">
            Faça login para acessar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          {successMessage && (
            <Alert className="mb-4 bg-green-50">
              <AlertDescription className="text-green-600">
                {successMessage}
              </AlertDescription>
            </Alert>
          )}
          
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <Alert className="bg-red-50">
                <AlertDescription className="text-red-600">
                  {error}
                </AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">Senha</label>
                <Link to="/auth/forgot-password" className="text-xs text-blue-600 hover:underline">
                  Esqueceu a senha?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Entrando...
                </>
              ) : (
                'Entrar'
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Não tem uma conta?{' '}
            <Link to="/auth/register" className="text-blue-600 hover:underline">
              Cadastrar
            </Link>
          </div>
          <Button variant="outline" className="w-full" onClick={() => navigate('/')}>
            Voltar para o site
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
