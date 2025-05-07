
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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(10, { message: "Telefone deve ter pelo menos 10 dígitos" }),
  subject: z.string().min(5, { message: "Assunto deve ter pelo menos 5 caracteres" }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" })
});

type ContactFormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log(values);
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Telefone",
      details: ["(11) 1234-5678", "(11) 98765-4321"]
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: ["contato@opttechsolutions.com", "suporte@opttechsolutions.com"]
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Endereço",
      details: ["Av. Paulista, 1000", "São Paulo - SP, Brasil"]
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Horário de Funcionamento",
      details: ["Segunda - Sexta: 9h às 18h", "Sábado: 9h às 12h"]
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
                Entre em Contato
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Estamos prontos para ajudar. Entre em contato conosco!
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
        
        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="bg-white rounded-lg shadow-lg p-8 border border-gray-100"
                >
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">Envie uma Mensagem</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nome</FormLabel>
                              <FormControl>
                                <Input placeholder="Seu nome" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
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
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Assunto</FormLabel>
                              <FormControl>
                                <Input placeholder="Assunto da mensagem" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mensagem</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Sua mensagem..." 
                                className="min-h-32 resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-opttech-orange to-opttech-lightOrange hover:from-opttech-darkOrange hover:to-opttech-orange shadow-md hover:shadow-neon transition-all duration-300"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                      </Button>
                    </form>
                  </Form>
                </motion.div>
                
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">Informações de Contato</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                      >
                        <div className="flex items-center mb-3">
                          <div className="mr-3 w-10 h-10 rounded-full bg-opttech-orange/20 flex items-center justify-center text-opttech-orange">
                            {info.icon}
                          </div>
                          <h3 className="font-semibold text-opttech-green">{info.title}</h3>
                        </div>
                        <div className="space-y-1 pl-1">
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-opttech-gray">{detail}</p>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-8 bg-gray-100 rounded-lg overflow-hidden shadow-md h-64">
                    {/* Placeholder for map - In a real implementation, use Google Maps or another mapping solution */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <MapPin className="w-12 h-12 text-opttech-green/50" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold mb-4 text-opttech-green">Perguntas Frequentes</h2>
                <p className="text-opttech-gray">
                  Respostas para as dúvidas mais comuns
                </p>
              </motion.div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <FaqItem
                  question="Qual o prazo médio para desenvolvimento de um projeto?"
                  answer="O prazo varia de acordo com a complexidade do projeto. Projetos simples podem ser concluídos em algumas semanas, enquanto projetos mais complexos podem levar alguns meses. Fazemos uma estimativa detalhada no início do projeto."
                />
                <FaqItem
                  question="Como funciona o processo de orçamento?"
                  answer="Primeiro, realizamos uma reunião inicial para entender suas necessidades. Em seguida, elaboramos uma proposta detalhada com escopo, cronograma e valores. Após aprovação, iniciamos o desenvolvimento."
                />
                <FaqItem
                  question="Vocês oferecem suporte após a entrega do projeto?"
                  answer="Sim, oferecemos diferentes planos de suporte e manutenção para garantir que sua solução continue funcionando perfeitamente após a entrega."
                />
                <FaqItem
                  question="É possível fazer modificações durante o projeto?"
                  answer="Sim, trabalhamos com metodologias ágeis que permitem ajustes ao longo do desenvolvimento. Mudanças significativas no escopo podem impactar prazos e valores, mas sempre discutimos essas questões de forma transparente."
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border border-gray-200 rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-6 py-4 text-left flex justify-between items-center ${
          isOpen ? 'bg-opttech-green text-white' : 'bg-white text-opttech-green'
        }`}
      >
        <span className="font-medium">{question}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180 text-white' : 'text-opttech-orange'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 bg-white text-opttech-gray">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
