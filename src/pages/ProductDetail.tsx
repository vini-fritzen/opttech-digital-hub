
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-opttech-blue mb-6">Produto não encontrado</h1>
          <p className="mb-8">O produto que você está procurando não foi encontrado.</p>
          <Button asChild>
            <Link to="/products">Ver todos os produtos</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-opttech-blue to-opttech-lightBlue text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/products" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{product.title}</h1>
            <p className="text-xl opacity-90 mb-8">{product.fullDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-opttech-blue hover:bg-gray-100">
                Solicitar Demonstração
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                Ver Documentação
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Details */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={`/product-${product.id}-detail.jpg`} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <h2 className="text-2xl font-bold text-opttech-blue mb-4">Detalhes do Produto</h2>
                  <div className="space-y-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4 flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-opttech-lightBlue bg-opacity-10 flex items-center justify-center">
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
                          <h3 className="font-medium text-opttech-gray">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="bg-opttech-lightGray py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-opttech-blue mb-12 text-center">
              Benefícios do {product.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {product.benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-opttech-blue bg-opacity-10 flex items-center justify-center mb-4">
                    <img src={benefit.icon} alt="" className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-opttech-blue mb-2">{benefit.title}</h3>
                  <p className="text-opttech-gray">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-opttech-blue mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-lg text-opttech-gray mb-8">
              Entre em contato conosco hoje e descubra como o {product.title} pode impulsionar sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-opttech-blue hover:bg-opttech-darkBlue">
                Entre em Contato
              </Button>
              <Button variant="outline" size="lg" className="border-opttech-blue text-opttech-blue hover:bg-opttech-blue hover:text-white">
                Ver Outros Produtos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
