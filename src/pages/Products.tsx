
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-opttech-blue to-opttech-lightBlue text-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nossos Produtos
              </h1>
              <p className="text-xl opacity-90">
                Conheça nossas soluções tecnológicas desenvolvidas para impulsionar o crescimento do seu negócio
              </p>
            </div>
          </div>
          {/* Wave Shape Divider */}
          <div className="relative h-16 mt-16">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto absolute bottom-0">
              <path 
                fill="#ffffff" 
                fillOpacity="1" 
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,128C960,160,1056,224,1152,224C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
        </section>
        
        {/* Products Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-opttech-blue mb-4">
                Soluções Completas para seu Negócio
              </h2>
              <p className="text-lg text-opttech-gray max-w-3xl">
                Nossas soluções são desenvolvidas com tecnologias modernas e foco nas necessidades específicas de cada cliente.
                Explore nosso catálogo de produtos e descubra qual solução é a ideal para sua empresa.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </section>
        
        {/* Custom Solutions Section */}
        <section className="py-16 bg-opttech-lightGray">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-opttech-blue mb-6">
                  Não encontrou o que procura?
                </h2>
                <p className="text-lg text-opttech-gray mb-4">
                  Além de nossas soluções prontas, também desenvolvemos produtos personalizados para atender às necessidades específicas da sua empresa.
                </p>
                <p className="text-lg text-opttech-gray mb-6">
                  Nossa equipe de especialistas trabalha em parceria com você para entender seus desafios e criar a solução tecnológica ideal para o seu negócio.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-opttech-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-opttech-gray">Análise detalhada das necessidades do seu negócio</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-opttech-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-opttech-gray">Desenvolvimento sob medida para seus processos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-opttech-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-opttech-gray">Integração com sistemas já existentes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-opttech-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-opttech-gray">Suporte e manutenção contínua</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="/custom-solution.jpg" 
                  alt="Soluções Personalizadas" 
                  className="rounded-lg shadow-lg w-full"
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

export default Products;
