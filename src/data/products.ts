
interface Feature {
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  slug: string;
  features: Feature[];
  benefits: Benefit[];
}

export const products: Product[] = [
  {
    id: "01",
    title: "OptTech CRM",
    description: "Sistema de gestão de relacionamento com clientes.",
    fullDescription: "Uma solução completa para gerenciar o relacionamento com seus clientes, aumentar vendas e melhorar a satisfação do cliente.",
    icon: "/icons/crm.svg",
    slug: "opttech-crm",
    features: [
      {
        title: "Gestão de Leads",
        description: "Gerencie seus leads e oportunidades de vendas em um só lugar."
      },
      {
        title: "Automação de Marketing",
        description: "Automatize campanhas de marketing e acompanhe resultados."
      },
      {
        title: "Análise de Desempenho",
        description: "Relatórios detalhados sobre vendas e desempenho da equipe."
      },
      {
        title: "Integração",
        description: "Integração com e-mail, calendário e outras ferramentas."
      }
    ],
    benefits: [
      {
        title: "Aumento de Vendas",
        description: "Aumente suas vendas em até 30% com uma gestão eficiente de leads.",
        icon: "/icons/sales.svg"
      },
      {
        title: "Eficiência Operacional",
        description: "Reduza o tempo gasto em tarefas administrativas em até 40%.",
        icon: "/icons/efficiency.svg"
      },
      {
        title: "Melhor Experiência do Cliente",
        description: "Ofereça um atendimento personalizado e melhore a satisfação dos clientes.",
        icon: "/icons/customer.svg"
      },
      {
        title: "Decisões Baseadas em Dados",
        description: "Tome decisões estratégicas com base em relatórios e análises detalhadas.",
        icon: "/icons/data.svg"
      }
    ]
  },
  {
    id: "02",
    title: "OptTech ERP",
    description: "Sistema integrado de gestão empresarial.",
    fullDescription: "Uma plataforma completa para gerenciar todos os processos da sua empresa, desde finanças até recursos humanos.",
    icon: "/icons/erp.svg",
    slug: "opttech-erp",
    features: [
      {
        title: "Gestão Financeira",
        description: "Controle completo de receitas, despesas e fluxo de caixa."
      },
      {
        title: "Controle de Estoque",
        description: "Gestão de estoque em tempo real com alertas automáticos."
      },
      {
        title: "Recursos Humanos",
        description: "Gerenciamento de funcionários, folha de pagamento e benefícios."
      },
      {
        title: "Relatórios Gerenciais",
        description: "Dashboards personalizáveis e relatórios detalhados."
      }
    ],
    benefits: [
      {
        title: "Redução de Custos",
        description: "Reduza seus custos operacionais em até 25% com processos otimizados.",
        icon: "/icons/cost.svg"
      },
      {
        title: "Visão Integrada",
        description: "Tenha uma visão completa de todos os departamentos da sua empresa.",
        icon: "/icons/vision.svg"
      },
      {
        title: "Automação de Processos",
        description: "Automatize tarefas repetitivas e libere sua equipe para atividades estratégicas.",
        icon: "/icons/automation.svg"
      },
      {
        title: "Conformidade Fiscal",
        description: "Mantenha sua empresa em conformidade com as leis e regulamentações fiscais.",
        icon: "/icons/compliance.svg"
      }
    ]
  },
  {
    id: "03",
    title: "OptTech Mobile",
    description: "Aplicativos móveis personalizados para seu negócio.",
    fullDescription: "Desenvolvemos aplicativos móveis de alta qualidade para iOS e Android que atendem às necessidades específicas do seu negócio.",
    icon: "/icons/mobile.svg",
    slug: "opttech-mobile",
    features: [
      {
        title: "Design Personalizado",
        description: "Interfaces de usuário atraentes e intuitivas."
      },
      {
        title: "Desenvolvimento Multiplataforma",
        description: "Aplicativos para iOS e Android com uma única base de código."
      },
      {
        title: "Integração com Sistemas Existentes",
        description: "Conecte seu aplicativo aos sistemas que você já utiliza."
      },
      {
        title: "Manutenção e Suporte",
        description: "Suporte contínuo e atualizações para seu aplicativo."
      }
    ],
    benefits: [
      {
        title: "Alcance de Novos Clientes",
        description: "Expanda seu alcance e conquiste novos clientes através de dispositivos móveis.",
        icon: "/icons/reach.svg"
      },
      {
        title: "Engajamento do Cliente",
        description: "Aumente o engajamento dos clientes com uma experiência móvel de qualidade.",
        icon: "/icons/engagement.svg"
      },
      {
        title: "Vantagem Competitiva",
        description: "Destaque-se da concorrência com uma presença móvel profissional.",
        icon: "/icons/competitive.svg"
      },
      {
        title: "Aumento de Receita",
        description: "Crie novas oportunidades de receita através de vendas e serviços móveis.",
        icon: "/icons/revenue.svg"
      }
    ]
  },
  {
    id: "04",
    title: "OptTech Web",
    description: "Desenvolvimento de sites e aplicações web.",
    fullDescription: "Criamos sites e aplicações web modernas, responsivas e otimizadas para SEO que impulsionam o seu negócio online.",
    icon: "/icons/web.svg",
    slug: "opttech-web",
    features: [
      {
        title: "Design Responsivo",
        description: "Sites que funcionam perfeitamente em todos os dispositivos."
      },
      {
        title: "Otimização para SEO",
        description: "Melhore seu posicionamento nos motores de busca."
      },
      {
        title: "Integração com E-commerce",
        description: "Soluções completas para venda online de produtos e serviços."
      },
      {
        title: "Painel Administrativo",
        description: "Controle total do conteúdo do seu site através de um CMS intuitivo."
      }
    ],
    benefits: [
      {
        title: "Presença Online 24/7",
        description: "Esteja disponível para seus clientes a qualquer hora, em qualquer lugar.",
        icon: "/icons/online.svg"
      },
      {
        title: "Credibilidade e Profissionalismo",
        description: "Transmita confiança e profissionalismo com um site bem desenvolvido.",
        icon: "/icons/credibility.svg"
      },
      {
        title: "Geração de Leads",
        description: "Capture leads qualificados através do seu website.",
        icon: "/icons/leads.svg"
      },
      {
        title: "Expansão de Mercado",
        description: "Alcance novos mercados e clientes em diferentes regiões.",
        icon: "/icons/market.svg"
      }
    ]
  }
];
