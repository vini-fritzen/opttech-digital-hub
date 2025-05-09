import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Hero />
        
        {/* Products Section */}
        <section className="py-24 bg-white relative" id="produtos">
          {/* Subtle background patterns */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDUzQTAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aC0yVjE2aDJ2MTh6bTQgMEgyOHYtMmgxMnYyeiIvPjxwYXRoIGQ9Ik0yMCAzMmgzNFYxOEgyMHYxNHpNMjAgMTZoMnYyaC0yek0zNCAxNmgydjJoLTJ6TTMwIDE0aDJ2MmgtMnpNMjQgMTZoMnYyaC0yek0zOCAxNmgydjJoLTJ6TTM0IDM2aDJ2MmgtMnpNMjAgMzZoMnYyaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-opttech-blue to-opttech-lightBlue mb-6"
              >
                Nossos Produtos
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-opttech-gray max-w-3xl mx-auto"
              >
                Desenvolvemos soluções completas para impulsionar o crescimento do seu negócio.
                Conheça nossos produtos e descubra como podemos ajudar sua empresa.
              </motion.p>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {products.slice(0, 4).map((product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  icon={product.icon}
                  slug={product.slug}
                />
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-opttech-blue to-opttech-lightBlue hover:from-opttech-darkBlue hover:to-opttech-blue shadow-md hover:shadow-neon transition-all duration-300 group">
                <Link to="/products" className="flex items-center">
                  Ver Todos os Produtos
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-opttech-lightBlue/30 to-transparent"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-opttech-blue rounded-full filter blur-3xl opacity-5"></div>
            <div className="absolute right-1/4 top-1/4 w-80 h-80 bg-opttech-lightBlue rounded-full filter blur-3xl opacity-5"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-opttech-blue to-opttech-lightBlue rounded-lg blur-md opacity-30"></div>
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src="/about-image.jpg" 
                      alt="OptTech Solutions" 
                      className="w-full rounded-lg shadow-lg transform transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-radial from-opttech-lightBlue/20 to-transparent rounded-full z-10"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-radial from-opttech-blue/20 to-transparent rounded-full z-10"></div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-opttech-blue to-opttech-lightBlue mb-6">
                  Quem Somos
                </h2>
                <p className="text-lg text-opttech-gray mb-6">
                  A OptTech Solutions é uma empresa de tecnologia especializada no desenvolvimento de software,
                  aplicativos móveis e soluções web para empresas de todos os portes.
                </p>
                <p className="text-lg text-opttech-gray mb-8">
                  Nosso compromisso é fornecer soluções tecnológicas de alta qualidade que ajudam nossos clientes 
                  a otimizar processos, aumentar a eficiência e alcançar seus objetivos de negócio.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-10">
                  {[
                    { title: "Inovação", desc: "Soluções inovadoras para seu negócio" },
                    { title: "Qualidade", desc: "Produtos de alta qualidade" },
                    { title: "Suporte", desc: "Suporte técnico especializado" },
                    { title: "Experiência", desc: "Anos de experiência no mercado" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-start group"
                    >
                      <div className="mr-3 flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-opttech-blue/10 to-opttech-lightBlue/20 flex items-center justify-center group-hover:shadow-neon transition-all duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-opttech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-opttech-blue">{item.title}</h3>
                        <p className="text-sm text-opttech-gray">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <Button asChild className="bg-gradient-to-r from-opttech-blue to-opttech-lightBlue hover:from-opttech-darkBlue hover:to-opttech-blue shadow-md hover:shadow-neon transition-all duration-300 group">
                  <Link to="/about" className="flex items-center">
                    <span>Conheça Nossa História</span>
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-opttech-lightBlue/30 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-opttech-blue to-opttech-lightBlue mb-6"
              >
                Nossos Serviços
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-opttech-gray max-w-3xl mx-auto"
              >
                Oferecemos uma ampla gama de serviços de tecnologia para ajudar sua empresa a alcançar todo o seu potencial.
              </motion.p>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Desenvolvimento de Software",
                  description: "Criamos softwares personalizados que atendem às necessidades específicas do seu negócio.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )
                },
                {
                  title: "Aplicativos Mobile",
                  description: "Desenvolvemos aplicativos móveis para iOS e Android com foco na experiência do usuário.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: "Desenvolvimento Web",
                  description: "Criamos sites e aplicações web modernas, responsivas e otimizadas para SEO.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )
                },
                {
                  title: "Consultoria em TI",
                  description: "Oferecemos consultoria especializada para ajudar sua empresa a tomar as melhores decisões tecnológicas.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "Inteligência Artificial",
                  description: "Implementamos soluções de IA e machine learning para otimizar processos e análise de dados.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                },
                {
                  title: "Suporte Técnico",
                  description: "Fornecemos suporte técnico contínuo para garantir o funcionamento ideal de seus sistemas.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                }
              ].map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  index={index}
                />
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-opttech-blue to-opttech-lightBlue hover:from-opttech-darkBlue hover:to-opttech-blue shadow-md hover:shadow-neon transition-all duration-300 group">
                <Link to="/services" className="flex items-center">
                  <span>Todos os Serviços</span>
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-opttech-dark via-opttech-darkBlue to-opttech-blue text-white relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-opttech-lightBlue rounded-full filter blur-3xl opacity-20 animate-pulse-glow"></div>
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-opttech-accent rounded-full filter blur-3xl opacity-10 animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRoLTJWMTZoMnYxOHptNCAwSDI4di0yaDEydjJ6Ii8+PHBhdGggZD0iTTIwIDMyaDM0VjE4SDIwdjE0ek0yMCAxNmgydjJoLTJ6TTM0IDE2aDJ2MmgtMnpNMzAgMTRoMnYyaC0yek0yNCAxNmgydjJoLTJ6TTM4IDE2aDJ2MmgtMnpNMzQgMzZoMnYyaC0yek0yMCAzNmgydjJoLTJ6TTI0IDM2aDJ2MmgtMnpNMzAgMzhoMnYyaC0yek0zOCAzNmgydjJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-100"
              >
                Pronto para transformar seu negócio?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl opacity-90 mb-10"
              >
                Entre em contato conosco e descubra como nossas soluções tecnológicas podem impulsionar o crescimento da sua empresa.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button asChild size="lg" className="bg-white text-opttech-blue hover:bg-gray-100 hover:shadow-neon transition-all duration-300 backdrop-blur-sm bg-opacity-90 group">
                  <Link to="/contact" className="flex items-center">
                    <span>Fale Conosco</span>
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </Button>
              </motion.div>
              
              {/* Floating elements */}
              <div className="mt-16 relative h-20 hidden md:block">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="absolute left-1/4 transform -translate-x-1/2 bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-neon animate-float"
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Suporte 24/7</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-neon animate-float"
                  style={{ animationDelay: '0.5s' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">Inovação Constante</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute left-3/4 transform -translate-x-1/2 bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-neon animate-float"
                  style={{ animationDelay: '0.3s' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm">Tecnologia de Ponta</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-opttech-lightBlue/30 group"
  >
    <div className="text-opttech-blue mb-5 w-14 h-14 rounded-xl bg-gradient-to-br from-opttech-blue/10 to-opttech-lightBlue/20 flex items-center justify-center group-hover:shadow-neon transition-all duration-300 transform group-hover:rotate-3">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-opttech-blue to-opttech-lightBlue mb-3">{title}</h3>
    <p className="text-opttech-gray">{description}</p>
  </motion.div>
);

export default Index;
