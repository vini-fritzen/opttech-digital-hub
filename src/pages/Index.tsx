
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        
        {/* Products Section */}
        <section className="py-16 bg-white" id="produtos">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-opttech-blue mb-4">
                Nossos Produtos
              </h2>
              <p className="text-lg text-opttech-gray max-w-3xl mx-auto">
                Desenvolvemos soluções completas para impulsionar o crescimento do seu negócio.
                Conheça nossos produtos e descubra como podemos ajudar sua empresa.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-opttech-blue hover:bg-opttech-darkBlue">
                <Link to="/products">Ver Todos os Produtos</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 bg-opttech-lightGray">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img 
                  src="/about-image.jpg" 
                  alt="OptTech Solutions" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-opttech-blue mb-6">
                  Quem Somos
                </h2>
                <p className="text-lg text-opttech-gray mb-4">
                  A OptTech Solutions é uma empresa de tecnologia especializada no desenvolvimento de software,
                  aplicativos móveis e soluções web para empresas de todos os portes.
                </p>
                <p className="text-lg text-opttech-gray mb-6">
                  Nosso compromisso é fornecer soluções tecnológicas de alta qualidade que ajudam nossos clientes 
                  a otimizar processos, aumentar a eficiência e alcançar seus objetivos de negócio.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <div className="mr-3 text-opttech-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Inovação</h3>
                      <p className="text-sm text-opttech-gray">Soluções inovadoras para seu negócio</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-opttech-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Qualidade</h3>
                      <p className="text-sm text-opttech-gray">Produtos de alta qualidade</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-opttech-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Suporte</h3>
                      <p className="text-sm text-opttech-gray">Suporte técnico especializado</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-opttech-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Experiência</h3>
                      <p className="text-sm text-opttech-gray">Anos de experiência no mercado</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="bg-opttech-blue hover:bg-opttech-darkBlue">
                  <Link to="/about">Conheça Nossa História</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-opttech-blue mb-4">
                Nossos Serviços
              </h2>
              <p className="text-lg text-opttech-gray max-w-3xl mx-auto">
                Oferecemos uma ampla gama de serviços de tecnologia para ajudar sua empresa a alcançar todo o seu potencial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                title="Desenvolvimento de Software"
                description="Criamos softwares personalizados que atendem às necessidades específicas do seu negócio."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                }
              />
              
              <ServiceCard 
                title="Aplicativos Mobile"
                description="Desenvolvemos aplicativos móveis para iOS e Android com foco na experiência do usuário."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                }
              />
              
              <ServiceCard 
                title="Desenvolvimento Web"
                description="Criamos sites e aplicações web modernas, responsivas e otimizadas para SEO."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                }
              />
              
              <ServiceCard 
                title="Consultoria em TI"
                description="Oferecemos consultoria especializada para ajudar sua empresa a tomar as melhores decisões tecnológicas."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                }
              />
              
              <ServiceCard 
                title="Inteligência Artificial"
                description="Implementamos soluções de IA e machine learning para otimizar processos e análise de dados."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                }
              />
              
              <ServiceCard 
                title="Suporte Técnico"
                description="Fornecemos suporte técnico contínuo para garantir o funcionamento ideal de seus sistemas."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                }
              />
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-opttech-blue hover:bg-opttech-darkBlue">
                <Link to="/services">Todos os Serviços</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-opttech-blue to-opttech-lightBlue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para transformar seu negócio?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Entre em contato conosco e descubra como nossas soluções tecnológicas podem impulsionar o crescimento da sua empresa.
              </p>
              <Button asChild size="lg" className="bg-white text-opttech-blue hover:bg-gray-100">
                <Link to="/contact">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="bg-opttech-lightGray p-8 rounded-lg hover:shadow-lg transition-shadow">
    <div className="text-opttech-blue mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-opttech-blue mb-2">{title}</h3>
    <p className="text-opttech-gray">{description}</p>
  </div>
);

export default Index;
