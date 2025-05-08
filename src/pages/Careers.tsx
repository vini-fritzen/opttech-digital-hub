
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, ChevronRight, Users, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Careers = () => {
  // Sample job listings
  const jobListings = [
    {
      id: 1,
      title: "Desenvolvedor Front-end React",
      department: "Desenvolvimento",
      type: "Full-time",
      location: "São Paulo, SP",
      description: "Estamos procurando um desenvolvedor Front-end React apaixonado por criar interfaces de usuário intuitivas e responsivas."
    },
    {
      id: 2,
      title: "Desenvolvedor Back-end Node.js",
      department: "Desenvolvimento",
      type: "Full-time",
      location: "São Paulo, SP",
      description: "Procuramos um desenvolvedor Back-end com experiência em Node.js para criar APIs robustas e escaláveis."
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      type: "Full-time",
      location: "Remoto",
      description: "Buscamos um designer de UX/UI criativo para projetar experiências de usuário incríveis para nossos produtos digitais."
    },
    {
      id: 4,
      title: "Analista de Qualidade (QA)",
      department: "Qualidade",
      type: "Full-time",
      location: "São Paulo, SP",
      description: "Estamos contratando um analista de QA meticuloso para garantir a qualidade de nossos produtos de software."
    },
    {
      id: 5,
      title: "Gerente de Projetos",
      department: "Gerenciamento",
      type: "Full-time",
      location: "São Paulo, SP",
      description: "Procuramos um gerente de projetos experiente para liderar nossas equipes de desenvolvimento de software."
    },
  ];

  // Benefits
  const benefits = [
    {
      icon: <Briefcase className="w-12 h-12 text-opttech-orange" />,
      title: "Ambiente de trabalho flexível",
      description: "Horários flexíveis e opções de trabalho remoto para equilíbrio entre vida pessoal e profissional."
    },
    {
      icon: <Users className="w-12 h-12 text-opttech-orange" />,
      title: "Equipe colaborativa",
      description: "Trabalhe com profissionais talentosos em um ambiente que valoriza a colaboração e inovação."
    },
    {
      icon: <Clock className="w-12 h-12 text-opttech-orange" />,
      title: "Desenvolvimento contínuo",
      description: "Oportunidades de aprendizado constante com acesso a cursos e eventos do setor."
    },
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
                Trabalhe Conosco
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Junte-se à nossa equipe e faça parte de projetos incríveis
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
        
        {/* Why Join Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold mb-4 text-opttech-green">Por que trabalhar na OptTech</h2>
                <p className="text-opttech-gray">
                  Na OptTech, acreditamos que pessoas são nosso maior diferencial. 
                  Buscamos profissionais apaixonados e talentosos para fazer parte do nosso time.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-opttech-green/10 flex items-center justify-center mb-6">
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
        
        {/* Current Openings */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold mb-4 text-opttech-green">Vagas Abertas</h2>
                <p className="text-opttech-gray">
                  Confira nossas oportunidades atuais e encontre a vaga ideal para você
                </p>
              </motion.div>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {jobListings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg mb-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-opttech-green mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mb-3">
                        <span className="text-sm text-gray-600 flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" /> {job.department}
                        </span>
                        <span className="text-sm text-gray-600 flex items-center">
                          <Clock className="w-4 h-4 mr-1" /> {job.type}
                        </span>
                        <span className="text-sm text-gray-600 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" /> {job.location}
                        </span>
                      </div>
                      <p className="text-gray-700">{job.description}</p>
                    </div>
                    <div className="flex items-center">
                      <Link
                        to={`/careers/${job.id}`}
                        className="inline-flex items-center text-white bg-opttech-green hover:bg-opttech-darkGreen px-4 py-2 rounded transition-colors duration-200"
                      >
                        Ver vaga <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Application Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <h2 className="text-3xl font-bold mb-4 text-opttech-green">Nosso Processo de Seleção</h2>
                  <p className="text-opttech-gray">
                    Conheça as etapas do nosso processo seletivo
                  </p>
                </motion.div>
              </div>
              
              <div className="space-y-12">
                {[
                  { 
                    title: "1. Candidatura", 
                    description: "Envie seu currículo através do formulário específico da vaga que deseja se candidatar." 
                  },
                  { 
                    title: "2. Triagem Curricular", 
                    description: "Nossa equipe de recrutamento analisará seu currículo e verificará se seu perfil está alinhado com a vaga." 
                  },
                  { 
                    title: "3. Entrevista Inicial", 
                    description: "Se seu perfil estiver alinhado, entraremos em contato para uma primeira conversa, geralmente por telefone ou videoconferência." 
                  },
                  { 
                    title: "4. Teste Técnico", 
                    description: "Para avaliar suas habilidades técnicas, você poderá ser convidado a realizar um teste prático relacionado à vaga." 
                  },
                  { 
                    title: "5. Entrevista Final", 
                    description: "Nesta etapa, você conversará com gestores e possivelmente futuros colegas de equipe." 
                  },
                  { 
                    title: "6. Proposta", 
                    description: "Se você for o candidato selecionado, receberá uma proposta formal para se juntar à nossa equipe!" 
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    {index < 5 && (
                      <div className="absolute left-2.5 top-0 w-1 h-full bg-gradient-to-b from-opttech-green to-opttech-orange"></div>
                    )}
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-opttech-green flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    <h3 className="text-xl font-bold text-opttech-green mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-opttech-green py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-opttech-dark to-opttech-green rounded-2xl p-8 relative overflow-hidden shadow-glow">
              <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
              <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Não encontrou a vaga ideal?
                </h3>
                <p className="text-gray-200 mb-8">
                  Envie seu currículo para o nosso banco de talentos e entraremos em contato quando surgir uma oportunidade compatível com o seu perfil.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <a 
                    href="mailto:carreiras@opttechsolutions.com.br" 
                    className="inline-block px-8 py-4 bg-opttech-orange hover:bg-opttech-darkOrange text-white font-medium rounded-lg shadow-lg hover:shadow-neon transition-all duration-300"
                  >
                    Enviar Currículo
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

export default Careers;
