
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Users } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ana Silva",
      role: "CEO & Fundadora",
      image: "/team-1.jpg"
    },
    {
      id: 2,
      name: "Roberto Almeida",
      role: "CTO",
      image: "/team-2.jpg"
    },
    {
      id: 3,
      name: "Carla Santos",
      role: "Diretora de Projeto",
      image: "/team-3.jpg"
    },
    {
      id: 4,
      name: "Marcelo Ferreira",
      role: "Líder de Desenvolvimento",
      image: "/team-4.jpg"
    }
  ];

  const values = [
    {
      title: "Inovação",
      description: "Buscamos constantemente novas soluções e tecnologias para superar desafios."
    },
    {
      title: "Excelência",
      description: "Comprometidos com a qualidade e os melhores resultados em cada projeto."
    },
    {
      title: "Colaboração",
      description: "Trabalhamos junto aos nossos clientes para criar soluções personalizadas."
    },
    {
      title: "Integridade",
      description: "Transparência e honestidade em todas as nossas relações profissionais."
    }
  ];

  const achievements = [
    { number: "200+", text: "Projetos Concluídos" },
    { number: "50+", text: "Clientes Satisfeitos" },
    { number: "15+", text: "Anos de Experiência" },
    { number: "30+", text: "Especialistas em TI" }
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
                Sobre Nós
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Conheça a história e os valores da OptTech Solutions
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
        
        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 rounded-lg bg-opttech-orange/10"></div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg bg-opttech-green/10"></div>
                    <div className="relative overflow-hidden rounded-lg shadow-xl">
                      <div className="aspect-w-16 aspect-h-10 bg-gray-200 overflow-hidden">
                        {/* Placeholder for office image */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                          <Users className="w-16 h-16 text-white/30" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-opttech-green">Nossa História</h2>
                  <div className="space-y-4 text-opttech-gray">
                    <p>
                      Fundada em 2008, a OptTech Solutions nasceu da visão de criar soluções tecnológicas que realmente fazem a diferença para as empresas brasileiras. Nossa jornada começou com uma pequena equipe de desenvolvedores apaixonados e cresceu para uma empresa completa de tecnologia.
                    </p>
                    <p>
                      Ao longo dos anos, temos trabalhado com empresas de diversos tamanhos e segmentos, sempre com foco em entender profundamente seus desafios e oferecer soluções personalizadas que geram resultados reais.
                    </p>
                    <p>
                      Hoje, somos reconhecidos pela qualidade do nosso trabalho e pelo compromisso com a inovação e excelência em cada projeto que realizamos.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold mb-4 text-opttech-green">Nossos Valores</h2>
                <p className="text-opttech-gray">
                  Os princípios que guiam nossas decisões e definem nossa cultura
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-8 h-8 rounded-full bg-opttech-orange/20 flex items-center justify-center">
                        <Check className="w-5 h-5 text-opttech-orange" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-opttech-green">{value.title}</h3>
                      <p className="text-opttech-gray">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Achievements */}
        <section className="py-16 bg-opttech-green text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-opttech-orange">{item.number}</div>
                  <div className="text-sm md:text-base text-gray-200">{item.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold mb-4 text-opttech-green">Nossa Equipe</h2>
                <p className="text-opttech-gray">
                  Conheça os profissionais por trás da OptTech Solutions
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-w-1 aspect-h-1 bg-gray-200 relative overflow-hidden">
                    {/* Placeholder for team member image */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                      <Users className="w-16 h-16 text-white/30" />
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-opttech-green">{member.name}</h3>
                    <p className="text-opttech-gray text-sm">{member.role}</p>
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

export default About;
