
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Briefcase, Clock, MapPin, Users, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const JobDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  
  // Mock job data - in a real app, this would come from an API based on the slug
  const jobDetails = {
    id: 1,
    title: "Desenvolvedor Front-end React",
    department: "Desenvolvimento",
    type: "Full-time",
    location: "São Paulo, SP",
    salary: "R$ 6.000 - R$ 10.000",
    postedDate: "15 de abril, 2025",
    description: "Estamos procurando um desenvolvedor Front-end React apaixonado por criar interfaces de usuário intuitivas e responsivas.",
    responsibilities: [
      "Desenvolver interfaces de usuário responsivas e acessíveis",
      "Trabalhar com APIs RESTful e GraphQL",
      "Colaborar com designers para implementar UI/UX de alta qualidade",
      "Realizar testes e debug de aplicações web",
      "Otimizar aplicações para máxima velocidade e escalabilidade",
    ],
    requirements: [
      "Experiência comprovada com React.js e seu ecossistema",
      "Sólido conhecimento de HTML5, CSS3 e JavaScript moderno (ES6+)",
      "Familiaridade com ferramentas de build como Webpack, Vite ou similares",
      "Conhecimento de design responsivo e princípios de acessibilidade",
      "Experiência com Git e metodologias ágeis",
    ],
    desirable: [
      "Conhecimento em TypeScript",
      "Experiência com Next.js ou outros frameworks React",
      "Familiaridade com bibliotecas de teste como Jest e React Testing Library",
      "Conhecimento básico de UX/UI design",
    ],
    benefits: [
      "Plano de saúde",
      "Vale-refeição",
      "Vale-transporte",
      "Gympass",
      "Horário flexível",
      "Trabalho remoto ou híbrido",
      "Ambiente descontraído",
      "Oportunidades de crescimento",
    ]
  };

  const handleApply = () => {
    toast({
      title: "Candidatura enviada!",
      description: "Recebemos sua candidatura e entraremos em contato em breve.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-opttech-dark to-opttech-green py-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/careers" className="inline-flex items-center text-white mb-6 hover:text-opttech-highlight transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para vagas
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{jobDetails.title}</h1>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="inline-flex items-center px-3 py-1.5 bg-white/10 rounded-full text-sm">
                    <Briefcase className="w-4 h-4 mr-1.5" /> {jobDetails.department}
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 bg-white/10 rounded-full text-sm">
                    <Clock className="w-4 h-4 mr-1.5" /> {jobDetails.type}
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 bg-white/10 rounded-full text-sm">
                    <MapPin className="w-4 h-4 mr-1.5" /> {jobDetails.location}
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 bg-opttech-orange/20 rounded-full text-sm">
                    <Users className="w-4 h-4 mr-1.5" /> Publicada em {jobDetails.postedDate}
                  </span>
                </div>
              </motion.div>
            </div>
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
        </section>
        
        {/* Job Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold text-opttech-green mb-4">Descrição da Vaga</h2>
                    <div className="prose text-opttech-gray">
                      <p className="mb-4">{jobDetails.description}</p>
                      <p>O salário oferecido é de {jobDetails.salary}, compatível com o mercado e de acordo com a experiência do candidato.</p>
                    </div>
                  </motion.div>
                  
                  {/* Responsibilities */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-opttech-green mb-4">Responsabilidades</h2>
                    <ul className="space-y-2">
                      {jobDetails.responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-opttech-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-opttech-gray">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  {/* Requirements */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h2 className="text-2xl font-bold text-opttech-green mb-4">Requisitos</h2>
                    <ul className="space-y-2">
                      {jobDetails.requirements.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-opttech-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-opttech-gray">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  {/* Desirable */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold text-opttech-green mb-4">Diferenciais</h2>
                    <ul className="space-y-2">
                      {jobDetails.desirable.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-opttech-orange mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-opttech-gray">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
                
                {/* Sidebar */}
                <div className="md:col-span-1">
                  <div className="sticky top-24">
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-6">
                      <h3 className="text-lg font-semibold mb-4 text-opttech-green">Benefícios</h3>
                      <ul className="space-y-2">
                        {jobDetails.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-opttech-orange mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-opttech-gray">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button
                      onClick={handleApply}
                      className="w-full bg-opttech-green hover:bg-opttech-darkGreen text-white font-medium py-2.5 px-4 rounded transition-colors duration-300"
                    >
                      Candidatar-se à vaga
                    </Button>
                    
                    <p className="text-center text-sm text-gray-500 mt-3">
                      Ou envie seu currículo para<br />
                      <a href="mailto:carreiras@opttechsolutions.com.br" className="text-opttech-green hover:text-opttech-darkGreen">
                        carreiras@opttechsolutions.com.br
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Similar Jobs */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-opttech-green mb-6">Vagas Similares</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      id: 2,
                      title: "Desenvolvedor Back-end Node.js",
                      department: "Desenvolvimento",
                      location: "São Paulo, SP"
                    },
                    {
                      id: 3,
                      title: "Desenvolvedor Full-Stack",
                      department: "Desenvolvimento",
                      location: "Remoto"
                    },
                    {
                      id: 5,
                      title: "Desenvolvedor Mobile React Native",
                      department: "Desenvolvimento",
                      location: "São Paulo, SP"
                    }
                  ].map((job) => (
                    <Link 
                      key={job.id}
                      to={`/careers/${job.id}`}
                      className="bg-white p-4 rounded-lg border border-gray-200 hover:border-opttech-green hover:shadow-md transition-all duration-200"
                    >
                      <h3 className="font-semibold text-opttech-green mb-2">{job.title}</h3>
                      <div className="flex flex-col text-sm text-gray-600">
                        <span className="flex items-center mb-1">
                          <Briefcase className="w-3.5 h-3.5 mr-1.5" /> {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-3.5 h-3.5 mr-1.5" /> {job.location}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobDetail;
