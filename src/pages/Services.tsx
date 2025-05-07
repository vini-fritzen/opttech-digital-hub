
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Briefcase, Code, Smartphone, Database, Cloud, LineChart } from "lucide-react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const services = [
    {
      id: 1,
      title: "Desenvolvimento de Software",
      description: "Soluções personalizadas para atender às necessidades específicas do seu negócio.",
      icon: <Code className="w-12 h-12 text-white" />,
      features: ["Sistemas de gestão empresarial", "Integração de APIs", "Automação de processos"]
    },
    {
      id: 2,
      title: "Aplicativos Mobile",
      description: "Aplicativos modernos e responsivos para iOS e Android.",
      icon: <Smartphone className="w-12 h-12 text-white" />,
      features: ["Design intuitivo", "Funcionalidades offline", "Integração com outros sistemas"]
    },
    {
      id: 3,
      title: "Banco de Dados",
      description: "Design e implementação de estruturas de dados eficientes e seguras.",
      icon: <Database className="w-12 h-12 text-white" />,
      features: ["Modelagem de dados", "Otimização de consultas", "Migração de dados"]
    },
    {
      id: 4,
      title: "Cloud Computing",
      description: "Soluções em nuvem escaláveis e confiáveis.",
      icon: <Cloud className="w-12 h-12 text-white" />,
      features: ["Infraestrutura como serviço", "Plataforma como serviço", "Backup e recuperação"]
    },
    {
      id: 5,
      title: "Análise de Dados",
      description: "Transforme dados em insights valiosos para seu negócio.",
      icon: <LineChart className="w-12 h-12 text-white" />,
      features: ["Business Intelligence", "Dashboard interativos", "Previsão de tendências"]
    },
    {
      id: 6,
      title: "Consultoria em TI",
      description: "Orientação especializada para otimizar seus processos tecnológicos.",
      icon: <Briefcase className="w-12 h-12 text-white" />,
      features: ["Avaliação de infraestrutura", "Planejamento estratégico", "Governança de TI"]
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
                Nossos Serviços
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Soluções tecnológicas inovadoras para impulsionar o crescimento do seu negócio
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
        
        {/* Services Grid */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <ServiceCard 
                    title={service.title}
                    description={service.description}
                    features={service.features}
                    icon={service.icon}
                    isHovered={hoveredIndex === index}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-opttech-green py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-opttech-dark to-opttech-green rounded-2xl p-8 relative overflow-hidden shadow-glow">
              <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Pronto para transformar seu negócio?
                  </h3>
                  <p className="text-gray-200">
                    Entre em contato para discutir como podemos ajudar a alcançar seus objetivos
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href="/budget" 
                    className="inline-block px-8 py-4 bg-opttech-orange hover:bg-opttech-darkOrange text-white font-medium rounded-lg shadow-lg hover:shadow-neon transition-all duration-300"
                  >
                    Solicitar Orçamento
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
