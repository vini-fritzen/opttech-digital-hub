
// Utility para limpar todos os tokens de autenticação
export const cleanupAuthState = () => {
  // Remover tokens padrão
  localStorage.removeItem('supabase.auth.token');
  
  // Remover todas as chaves de autenticação do Supabase do localStorage
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
      localStorage.removeItem(key);
    }
  });
  
  // Remover do sessionStorage se estiver em uso
  Object.keys(sessionStorage || {}).forEach((key) => {
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
      sessionStorage.removeItem(key);
    }
  });
};

// Função para validação de senha
export const validatePassword = (password: string): { valid: boolean; message: string } => {
  if (password.length < 6) {
    return { valid: false, message: 'A senha deve ter pelo menos 6 caracteres' };
  }
  
  // Verificar força da senha (pode ser expandido com mais critérios)
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  
  if (!(hasUpperCase && hasLowerCase && hasNumbers)) {
    return { 
      valid: false, 
      message: 'A senha deve conter letras maiúsculas, minúsculas e números' 
    };
  }
  
  return { valid: true, message: 'Senha válida' };
};
