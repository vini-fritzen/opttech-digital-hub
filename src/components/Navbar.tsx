
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MainNav from "./MainNav";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <motion.img 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src="/lovable-uploads/82d68fb6-8871-4967-bc00-d7eaeadd201c.png" 
            alt="OptTech Solutions" 
            className="h-10 md:h-12"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <MainNav />
        </div>
        
        {/* Mobile Menu Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden"
        >
          <Button 
            variant="ghost" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-opttech-green" />
            ) : (
              <Menu className="h-6 w-6 text-opttech-green" />
            )}
          </Button>
        </motion.div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md w-full py-4 px-4 shadow-md"
          >
            <nav className="flex flex-col space-y-4 container mx-auto">
              <Link to="/" className="py-2 px-4 hover:bg-gray-100 rounded-md">Home</Link>
              <Link to="/produtos" className="py-2 px-4 hover:bg-gray-100 rounded-md">Produtos</Link>
              <Link to="/servicos" className="py-2 px-4 hover:bg-gray-100 rounded-md">Serviços</Link>
              <Link to="/vagas" className="py-2 px-4 hover:bg-gray-100 rounded-md">Vagas</Link>
              <Link to="/contato" className="py-2 px-4 hover:bg-gray-100 rounded-md">Contato</Link>
              <Link to="/orcamento" className="py-2 px-4 hover:bg-gray-100 rounded-md">Orçamento</Link>
              <div className="border-t pt-4 mt-2">
                <p className="px-4 py-1 text-sm font-medium text-gray-500">Acesso:</p>
                <Link to="/auth/login" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md">
                  <LogIn className="mr-2 h-4 w-4" />
                  Área do Cliente
                </Link>
                <Link to="/admin/login" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md">
                  <Users className="mr-2 h-4 w-4" />
                  Acesso Administrativo
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Importando ícones para o menu mobile
import { LogIn, Users } from 'lucide-react';

export default Navbar;
