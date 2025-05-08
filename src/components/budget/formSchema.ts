
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  company: z.string().min(2, { message: "Nome da empresa deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(10, { message: "Telefone deve ter pelo menos 10 dígitos" }),
  projectType: z.string({
    required_error: "Por favor selecione um tipo de projeto",
  }),
  budget: z.string({
    required_error: "Por favor selecione um orçamento",
  }),
  timeline: z.string({
    required_error: "Por favor selecione um prazo",
  }),
  services: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Selecione pelo menos um serviço",
  }),
  description: z.string().min(20, { message: "Descrição deve ter pelo menos 20 caracteres" }),
});

export type BudgetFormValues = z.infer<typeof formSchema>;

export const projectTypes = [
  { value: "new", label: "Novo Projeto" },
  { value: "enhancement", label: "Aprimoramento de Projeto Existente" },
  { value: "maintenance", label: "Manutenção" },
];

export const budgetRanges = [
  { value: "under-10k", label: "Menos de R$ 10.000" },
  { value: "10k-30k", label: "R$ 10.000 - R$ 30.000" },
  { value: "30k-50k", label: "R$ 30.000 - R$ 50.000" },
  { value: "50k-100k", label: "R$ 50.000 - R$ 100.000" },
  { value: "over-100k", label: "Mais de R$ 100.000" },
];

export const timelineOptions = [
  { value: "urgent", label: "Urgente (< 1 mês)" },
  { value: "short", label: "Curto prazo (1-3 meses)" },
  { value: "medium", label: "Médio prazo (3-6 meses)" },
  { value: "long", label: "Longo prazo (6+ meses)" },
  { value: "flexible", label: "Flexível" },
];

export const services = [
  { id: "web", label: "Desenvolvimento Web" },
  { id: "mobile", label: "Aplicativos Mobile" },
  { id: "software", label: "Software Personalizado" },
  { id: "cloud", label: "Soluções em Cloud" },
  { id: "data", label: "Análise de Dados" },
  { id: "consulting", label: "Consultoria em TI" },
];
