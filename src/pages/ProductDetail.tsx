
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-16 flex-grow">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-opttech-blue mb-6">Produto não encontrado</h1>
            <p className="mb-8">O produto que você está procurando não foi encontrado.</p>
            <Button asChild>
              <Link to="/products">Ver todos os produtos</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-opttech-dark via-opttech-darkBlue to-opttech-blue text-white pt-32 pb-16 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-opttech-lightBlue rounded-full filter blur-3xl opacity-20 animate-pulse-glow"></div>
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-opttech-accent rounded-full filter blur-3xl opacity-10 animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRoLTJWMTZoMnYxOHptNCAwSDI4di0yaDEydjJ6Ii8+PHBhdGggZD0iTTIwIDMyaDM0VjE4SDIwdjE0ek0yMCAxNmgydjJoLTJ6TTM0IDE2aDJ2MmgtMnpNMzAgMTRoMnYyaC0yek0yNCAxNmgydjJoLTJ6TTM4IDE2aDJ2MmgtMnpNMzQgMzZoMnYyaC0yek0yMCAzNmgydjJoLTJ6TTI0IDM2aDJ2MmgtMnpNMzAgMzhoMnYyaC0yek0zOCAzNmgydjJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/products" 
                className="inline-flex items-center text-white/80 hover:text-white mb-6 group transition-all duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
                Voltar para Produtos
              </Link>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                {product.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl opacity-90 mb-8"
              >
                {product.fullDescription}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="bg-white text-opttech-blue hover:bg-gray-100 hover:shadow-neon transition-all duration-300 group">
                  <span>Solicitar Demonstração</span>
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 hover:shadow-glow transition-all duration-300">
                  Ver Documentação
                </Button>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-br from-opttech-blue to-opttech-lightBlue opacity-30 blur-3xl"
          />
        </div>
        
        {/* Product Details */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200/50"
              >
                <div className="md:flex">
                  <div className="md:w-1/2 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-opttech-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                      <p className="text-white text-lg font-medium">{product.title} - Interface de usuário</p>
                    </div>
                    <img 
                      src={`/product-${product.id}-detail.jpg`} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 border border-opttech-lightBlue/20"></div>
                  </div>
                  <div className="p-8 md:w-1/2">
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-opttech-blue to-opttech-lightBlue mb-6">Detalhes do Produto</h2>
                    <div className="space-y-6">
                      {product.features.map((feature, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex"
                        >
                          <div className="mr-4 flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-opttech-blue/20 to-opttech-lightBlue/20 flex items-center justify-center shadow-inner">
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5 text-opttech-blue" 
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                              >
                                <path 
                                  fillRule="evenodd" 
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                  clipRule="evenodd" 
                                />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-opttech-blue">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="bg-gray-50 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDUzQTAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC0yVjE2aDJ2MTh6bTQgMEgyOHYtMmgxMnYyeiIvPjxwYXRoIGQ9Ik0yMCAzMmgzNFYxOEgyMHYxNHpNMjAgMTZoMnYyaC0yek0zNCAxNmgydjJoLTJ6TTMwIDE0aDJ2MmgtMnpNMjQgMTZoMnYyaC0yek0zOCAxNmgydjJoLTJ6TTM0IDM2aDJ2MmgtMnpNMjAgMzZoMnYyaC0yek0yNCAzNmgydjJoLTJ6TTMwIDM4aDJ2MmgtMnpNMzggMzZoMnYyaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="container mx-auto px-4 relative z-10"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-opttech-blue to-opttech-lightBlue mb-12 text-center">
                Benefícios do {product.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {product.benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/50 hover:border-opttech-lightBlue/30 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-opttech-blue/10 to-opttech-lightBlue/20 flex items-center justify-center mb-4 group-hover:shadow-neon transition-all duration-300 transform group-hover:rotate-3">
                      <img src={benefit.icon} alt="" className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-opttech-blue mb-3">{benefit.title}</h3>
                    <p className="text-opttech-gray">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* CTA Section */}
        <div className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-opttech-lightBlue/30 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-opttech-blue mb-6"
              >
                Pronto para transformar seu negócio?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-opttech-gray mb-10"
              >
                Entre em contato conosco hoje e descubra como o {product.title} pode impulsionar sua empresa.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Button size="lg" className="bg-gradient-to-r from-opttech-blue to-opttech-lightBlue hover:from-opttech-darkBlue hover:to-opttech-blue shadow-md hover:shadow-neon transition-all duration-300 group">
                  <span>Entre em Contato</span>
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-opttech-blue text-opttech-blue hover:bg-opttech-blue/5 transition-all duration-300">
                  <Link to="/products">Ver Outros Produtos</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
