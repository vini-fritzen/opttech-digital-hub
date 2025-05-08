
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Briefcase, DollarSign, CheckCircle, Clock } from "lucide-react";

const formSchema = z.object({
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

type BudgetFormValues = z.infer<typeof formSchema>;

const Budget = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalSteps = 3;
  
  const form = useForm<BudgetFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      services: [],
      description: "",
    }
  });

  const services = [
    { id: "web", label: "Desenvolvimento Web" },
    { id: "mobile", label: "Aplicativos Mobile" },
    { id: "software", label: "Software Personalizado" },
    { id: "cloud", label: "Soluções em Cloud" },
    { id: "data", label: "Análise de Dados" },
    { id: "consulting", label: "Consultoria em TI" },
  ];
  
  const projectTypes = [
    { value: "new", label: "Novo Projeto" },
    { value: "enhancement", label: "Aprimoramento de Projeto Existente" },
    { value: "maintenance", label: "Manutenção" },
  ];
  
  const budgetRanges = [
    { value: "under-10k", label: "Menos de R$ 10.000" },
    { value: "10k-30k", label: "R$ 10.000 - R$ 30.000" },
    { value: "30k-50k", label: "R$ 30.000 - R$ 50.000" },
    { value: "50k-100k", label: "R$ 50.000 - R$ 100.000" },
    { value: "over-100k", label: "Mais de R$ 100.000" },
  ];
  
  const timelineOptions = [
    { value: "urgent", label: "Urgente (< 1 mês)" },
    { value: "short", label: "Curto prazo (1-3 meses)" },
    { value: "medium", label: "Médio prazo (3-6 meses)" },
    { value: "long", label: "Longo prazo (6+ meses)" },
    { value: "flexible", label: "Flexível" },
  ];

  const nextStep = () => {
    let fieldsToValidate: (keyof BudgetFormValues)[] = [];
    
    if (step === 1) {
      fieldsToValidate = ["name", "company", "email", "phone"];
    } else if (step === 2) {
      fieldsToValidate = ["projectType", "budget", "timeline", "services"];
    }
    
    const formValues = form.getValues();
    const isValid = fieldsToValidate.every(field => {
      if (field === "services") {
        return formValues[field] && formValues[field].length > 0;
      }
      return formValues[field] && formValues[field].length > 0;
    });
    
    if (isValid) {
      setStep(prev => Math.min(prev + 1, totalSteps));
    } else {
      fieldsToValidate.forEach(field => {
        form.trigger(field);
      });
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const onSubmit = async (values: BudgetFormValues) => {
    console.log("Budget form submitted with values:", values);
    setIsSubmitting(true);
    
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log submitted data
      console.log("Budget request submitted:", values);
      
      toast({
        title: "Solicitação de orçamento enviada!",
        description: "Entraremos em contato em breve com a sua proposta.",
      });
      
      setSubmitted(true);
      form.reset();
      setIsSubmitting(false);
      setStep(1);
    } catch (error) {
      console.error("Error submitting budget request:", error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Houve um problema ao processar sua solicitação. Tente novamente mais tarde.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <DollarSign className="w-10 h-10 text-opttech-orange" />,
      title: "Preços Transparentes",
      description: "Sem surpresas ou custos ocultos. Nosso orçamento é detalhado e claro."
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-opttech-orange" />,
      title: "Qualidade Garantida",
      description: "Comprometimento com excelência em todos os projetos que realizamos."
    },
    {
      icon: <Clock className="w-10 h-10 text-opttech-orange" />,
      title: "Prazos Respeitados",
      description: "Entregamos no prazo acordado, mantendo você informado em cada etapa."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-opttech-orange" />,
      title: "Experiência Comprovada",
      description: "Anos de experiência em diversos segmentos e tecnologias."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-opttech-dark to-opttech-green py-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-opttech-highlight">
                Solicite um Orçamento
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Preencha o formulário abaixo e receba uma proposta personalizada para o seu projeto
              </p>
            </motion.div>
          </div>
          
          {/* Decorative Elements */}
          <motion.div 
            className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-opttech-orange/20 blur-2xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 8,
            }}
          />
          <motion.div 
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-opttech-lightGreen/10 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 10,
              delay: 2
            }}
          />
        </section>
        
        {/* Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white shadow-lg rounded-xl p-12 text-center border border-gray-100"
                >
                  <div className="w-20 h-20 bg-opttech-green/10 rounded-full mx-auto flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-opttech-green" />
                  </div>
                  <h2 className="text-3xl font-bold text-opttech-green mb-4">Solicitação Enviada!</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Recebemos sua solicitação de orçamento. Nossa equipe irá analisá-la e entraremos em contato em breve.
                  </p>
                  <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-lg border border-gray-200 mb-8">
                    <p className="text-sm text-gray-500">
                      Um e-mail de confirmação foi enviado para o endereço fornecido com os detalhes da sua solicitação.
                    </p>
                  </div>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="bg-opttech-green hover:bg-opttech-darkGreen text-white px-8"
                  >
                    Solicitar Novo Orçamento
                  </Button>
                </motion.div>
              ) : (
                <>
                  {/* Progress Bar */}
                  <div className="mb-12">
                    <div className="flex justify-between items-center mb-2">
                      {Array.from({ length: totalSteps }).map((_, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step > index + 1 ? 'bg-opttech-orange text-white' : 
                            step === index + 1 ? 'bg-opttech-green text-white' : 
                            'bg-gray-200 text-gray-500'
                          }`}>
                            {step > index + 1 ? (
                              <CheckCircle className="w-5 h-5" />
                            ) : (
                              index + 1
                            )}
                          </div>
                          <span className={`text-xs mt-2 ${
                            step >= index + 1 ? 'text-opttech-green' : 'text-gray-500'
                          }`}>
                            {index === 0 ? "Informações" : 
                             index === 1 ? "Detalhes" : "Descrição"}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-opttech-green to-opttech-orange transition-all duration-500"
                        style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Step 1: Basic Information */}
                        {step === 1 && (
                          <>
                            <h2 className="text-2xl font-bold mb-6 text-opttech-green">Informações de Contato</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Nome Completo</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Seu nome" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Empresa</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Nome da empresa" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                      <Input type="email" placeholder="seu@email.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Telefone</FormLabel>
                                    <FormControl>
                                      <Input placeholder="(11) 98765-4321" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </>
                        )}

                        {/* Step 2: Project Details */}
                        {step === 2 && (
                          <>
                            <h2 className="text-2xl font-bold mb-6 text-opttech-green">Detalhes do Projeto</h2>
                            <div className="space-y-6">
                              <FormField
                                control={form.control}
                                name="projectType"
                                render={({ field }) => (
                                  <FormItem className="space-y-3">
                                    <FormLabel>Tipo de Projeto</FormLabel>
                                    <FormControl>
                                      <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                      >
                                        {projectTypes.map((type) => (
                                          <FormItem
                                            key={type.value}
                                            className="flex items-center space-x-3 space-y-0 border border-gray-200 rounded-lg p-4 hover:border-opttech-orange/50 transition-colors"
                                          >
                                            <FormControl>
                                              <RadioGroupItem value={type.value} />
                                            </FormControl>
                                            <FormLabel className="font-normal cursor-pointer">{type.label}</FormLabel>
                                          </FormItem>
                                        ))}
                                      </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                  control={form.control}
                                  name="budget"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Orçamento Estimado</FormLabel>
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Selecione um orçamento" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          {budgetRanges.map((range) => (
                                            <SelectItem key={range.value} value={range.value}>
                                              {range.label}
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                                <FormField
                                  control={form.control}
                                  name="timeline"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Prazo Desejado</FormLabel>
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Selecione um prazo" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          {timelineOptions.map((option) => (
                                            <SelectItem key={option.value} value={option.value}>
                                              {option.label}
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>

                              <FormField
                                control={form.control}
                                name="services"
                                render={() => (
                                  <FormItem>
                                    <div className="mb-4">
                                      <FormLabel>Serviços Necessários</FormLabel>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                      {services.map((service) => (
                                        <FormField
                                          key={service.id}
                                          control={form.control}
                                          name="services"
                                          render={({ field }) => {
                                            return (
                                              <FormItem
                                                key={service.id}
                                                className="flex flex-row items-start space-x-3 space-y-0 border border-gray-200 rounded-md p-3 hover:border-opttech-orange/50 transition-colors"
                                              >
                                                <FormControl>
                                                  <Checkbox
                                                    checked={field.value?.includes(service.id)}
                                                    onCheckedChange={(checked) => {
                                                      return checked
                                                        ? field.onChange([...field.value, service.id])
                                                        : field.onChange(
                                                            field.value?.filter(
                                                              (value) => value !== service.id
                                                            )
                                                          )
                                                    }}
                                                  />
                                                </FormControl>
                                                <FormLabel className="font-normal cursor-pointer">
                                                  {service.label}
                                                </FormLabel>
                                              </FormItem>
                                            )
                                          }}
                                        />
                                      ))}
                                    </div>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </>
                        )}

                        {/* Step 3: Project Description */}
                        {step === 3 && (
                          <>
                            <h2 className="text-2xl font-bold mb-6 text-opttech-green">Descrição do Projeto</h2>
                            <FormField
                              control={form.control}
                              name="description"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Descreva seu projeto</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder="Descreva em detalhes as necessidades do seu projeto, funcionalidades desejadas e qualquer outra informação relevante..." 
                                      className="min-h-40 resize-none" 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </>
                        )}

                        <div className="flex justify-between mt-10">
                          {step > 1 ? (
                            <Button
                              type="button"
                              variant="outline"
                              onClick={prevStep}
                              className="border-opttech-green text-opttech-green hover:bg-opttech-green/10"
                            >
                              Voltar
                            </Button>
                          ) : (
                            <div></div>
                          )}
                          
                          {step < totalSteps ? (
                            <Button
                              type="button"
                              onClick={nextStep}
                              className="bg-gradient-to-r from-opttech-green to-opttech-lightGreen hover:from-opttech-darkGreen hover:to-opttech-green shadow-md transition-all duration-300"
                            >
                              Próximo
                            </Button>
                          ) : (
                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              className="bg-gradient-to-r from-opttech-orange to-opttech-lightOrange hover:from-opttech-darkOrange hover:to-opttech-orange shadow-md hover:shadow-neon transition-all duration-300 relative overflow-hidden group"
                            >
                              <span className="relative z-10">
                                {isSubmitting ? "Enviando..." : "Solicitar Orçamento"}
                              </span>
                              <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                            </Button>
                          )}
                        </div>
                      </form>
                    </Form>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold mb-4 text-opttech-green">Por que Escolher a OptTech</h2>
                <p className="text-opttech-gray">
                  Trabalhamos para entregar as melhores soluções, com qualidade e dentro do prazo
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-opttech-green/10 flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-opttech-green">{benefit.title}</h3>
                    <p className="text-opttech-gray">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Budget;
