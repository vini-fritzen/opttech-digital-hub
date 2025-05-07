
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-opttech-dark via-opttech-darkBlue to-opttech-blue text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-opttech-lightBlue rounded-full filter blur-3xl animate-pulse-glow"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-opttech-accent rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-opttech-highlight rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Tech pattern grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRoLTJWMTZoMnYxOHptNCAwSDI4di0yaDEydjJ6Ii8+PHBhdGggZD0iTTIwIDMyaDM0VjE4SDIwdjE0ek0yMCAxNmgydjJoLTJ6TTM0IDE2aDJ2MmgtMnpNMzAgMTRoMnYyaC0yek0yNCAxNmgydjJoLTJ6TTM4IDE2aDJ2MmgtMnpNMzQgMzZoMnYyaC0yek0yMCAzNmgydjJoLTJ6TTI0IDM2aDJ2MmgtMnpNMzAgMzhoMnYyaC0yek0zOCAzNmgydjJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-24 md:pt-40 md:pb-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-100"
          >
            Transformando ideias em soluções digitais
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 opacity-90"
          >
            Desenvolvemos aplicativos e soluções tecnológicas que impulsionam o crescimento do seu negócio
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button asChild size="lg" className="bg-white text-opttech-blue hover:bg-gray-100 hover:shadow-neon transition-all duration-300 backdrop-blur-sm bg-opacity-90">
              <Link to="/products">Nossos Produtos</Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:shadow-glow transition-all duration-300">
              <Link to="/contact">Fale Conosco</Link>
            </Button>
          </motion.div>
          
          {/* Floating Tech Icons */}
          <div className="mt-16 relative h-24 hidden md:block">
            <motion.img 
              src="/icons/app-icon.svg" 
              alt="App Icon" 
              className="absolute left-1/4 w-12 h-12 animate-float"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              style={{ animationDelay: '0.5s' }}
            />
            <motion.img 
              src="/icons/web-icon.svg" 
              alt="Web Icon" 
              className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 animate-float" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ animationDelay: '0.3s' }}
            />
            <motion.img 
              src="/icons/data-icon.svg" 
              alt="Data Icon" 
              className="absolute right-1/4 w-12 h-12 animate-float"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              style={{ animationDelay: '0.7s' }}
            />
          </div>
        </div>
      </div>
      
      {/* Wave Shape Divider - Updated with a more modern wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,88C96,80,192,64,288,64C384,64,480,80,576,80C672,80,768,64,864,58.7C960,53,1056,59,1152,58.7C1248,59,1344,53,1392,50.7L1440,48L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
