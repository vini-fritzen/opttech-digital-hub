
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Products = () => {
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-opttech-dark via-opttech-darkBlue to-opttech-blue text-white pt-32 pb-16 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-opttech-lightBlue rounded-full filter blur-3xl opacity-20 animate-pulse-glow"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-opttech-accent rounded-full filter blur-3xl opacity-15 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-opttech-highlight rounded-full filter blur-3xl opacity-10 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRoLTJWMTZoMnYxOHptNCAwSDI4di0yaDEydjJ6Ii8+PHBhdGggZD0iTTIwIDMyaDM0VjE4SDIwdjE0ek0yMCAxNmgydjJoLTJ6TTM0IDE2aDJ2MmgtMnpNMzAgMTRoMnYyaC0yek0yNCAxNmgydjJoLTJ6TTM4IDE2aDJ2MmgtMnpNMzQgMzZoMnYyaC0yek0yMCAzNmgydjJoLTJ6TTI0IDM2aDJ2MmgtMnpNMzAgMzhoMnYyaC0yek0zOCAzNmgydjJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-100"
              >
                Nossos Produtos
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl opacity-90"
              >
                Conheça nossas soluções tecnológicas desenvolvidas para impulsionar o crescimento do seu negócio
              </motion.p>
            </div>
          </div>
          
          {/* Wave Shape Divider */}
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-16 mt-16"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto absolute bottom-0">
              <path 
                fill="#ffffff" 
                fillOpacity="1" 
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,128C960,160,1056,224,1152,224C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </motion.div>
        </section>
        
        {/* Products Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Subtle pattern background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDUzQTAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aC0yVjE2aDJ2MTh6bTQgMEgyOHYtMmgxMnYyeiIvPjxwYXRoIGQ9Ik0yMCAzMmgzNFYxOEgyMHYxNHpNMjAgMTZoMnYyaC0yek0zNCAxNmgydjJoLTJ6TTMwIDE0aDJ2MmgtMnpNMjQgMTZoMnYyaC0yek0zOCAxNmgydjJoLTJ6TTM0IDM2aDJ2MmgtMnpNMjAgMzZoMnYyaC0yek0yNCAzNmgydjJoLTJ6TTMwIDM4aDJ2MmgtMnpNMzggMzZoMnYyaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-opttech-blue to-opttech-lightBlue mb-6 text-center"
              >
                Soluções Completas para seu Negócio
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-opttech-gray max-w-3xl mx-auto text-center"
              >
                Nossas soluções são desenvolvidas com tecnologias modernas e foco nas necessidades específicas de cada cliente.
                Explore nosso catálogo de produtos e descubra qual solução é a ideal para sua empresa.
              </motion.p>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {products.map((product) => (
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
          </div>
        </section>
        
        {/* Custom Solutions Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-opttech-lightBlue/30 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-opttech-blue to-opttech-lightBlue mb-6">
                  Não encontrou o que procura?
                </h2>
                <p className="text-lg text-opttech-gray mb-6">
                  Além de nossas soluções prontas, também desenvolvemos produtos personalizados para atender às necessidades específicas da sua empresa.
                </p>
                <p className="text-lg text-opttech-gray mb-8">
                  Nossa equipe de especialistas trabalha em parceria com você para entender seus desafios e criar a solução tecnológica ideal para o seu negócio.
                </p>
                <ul className="space-y-6 mb-10">
                  {[
                    { text: "Análise detalhada das necessidades do seu negócio" },
                    { text: "Desenvolvimento sob medida para seus processos" },
                    { text: "Integração com sistemas já existentes" },
                    { text: "Suporte e manutenção contínua" }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-start"
                    >
                      <div className="mr-4 flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-opttech-blue to-opttech-lightBlue flex items-center justify-center shadow-md">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      </div>
                      <span className="text-opttech-gray">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button size="lg" className="bg-gradient-to-r from-opttech-blue to-opttech-lightBlue hover:from-opttech-darkBlue hover:to-opttech-blue text-white shadow-md hover:shadow-neon transition-all duration-300 group">
                  <span>Solicite um Orçamento</span>
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Button>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-opttech-blue to-opttech-lightBlue rounded-lg blur-md opacity-30"></div>
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src="/custom-solution.jpg" 
                      alt="Soluções Personalizadas" 
                      className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-opttech-darkBlue/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Soluções Sob Medida</h3>
                        <p className="text-white/90">Tecnologia personalizada para o seu negócio</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-radial from-opttech-lightBlue/20 to-transparent rounded-full z-10"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-radial from-opttech-blue/20 to-transparent rounded-full z-10"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
