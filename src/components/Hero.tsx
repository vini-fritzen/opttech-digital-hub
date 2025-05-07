
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-opttech-darkBlue to-opttech-blue text-white overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzAgMGMxNi41NyAwIDMwIDEzLjQzIDMwIDMwUzQ2LjU3IDYwIDMwIDYwIDAgNDYuNTcgMCAzMCAxMy40MyAwIDMwIDB6bTAgMS41QzE0LjI2IDEuNSAxLjUgMTQuMjYgMS41IDMwYzAgMTUuNzQgMTIuNzYgMjguNSAyOC41IDI4LjUgMTUuNzQgMCAyOC41LTEyLjc2IDI4LjUtMjguNSAwLTE1Ljc0LTEyLjc2LTI4LjUtMjguNS0yOC41eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      
      <div className="container mx-auto px-4 pt-32 pb-24 md:pt-48 md:pb-40 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transformando ideias em soluções digitais
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Desenvolvemos aplicativos e soluções tecnológicas que impulsionam o crescimento do seu negócio
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-opttech-blue hover:bg-gray-100">
              <Link to="/products">Nossos Produtos</Link>
            </Button>
            <Button asChild size="lg" className="bg-opttech-lightBlue text-white hover:bg-blue-400">
              <Link to="/contact">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,64C672,53,768,75,864,85.3C960,96,1056,96,1152,85.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
