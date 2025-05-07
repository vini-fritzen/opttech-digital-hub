
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-8"
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Produtos</NavLink>
          <NavLink to="/services">Serviços</NavLink>
          <NavLink to="/about">Sobre Nós</NavLink>
          <NavLink to="/contact">Contato</NavLink>
          <Button className="bg-gradient-to-r from-opttech-orange to-opttech-lightOrange hover:from-opttech-darkOrange hover:to-opttech-orange text-white shadow-md hover:shadow-neon transition-all duration-300">
            Orçamento
          </Button>
        </motion.nav>
        
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
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/products" onClick={() => setIsMenuOpen(false)}>Produtos</MobileNavLink>
              <MobileNavLink to="/services" onClick={() => setIsMenuOpen(false)}>Serviços</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>Sobre Nós</MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contato</MobileNavLink>
              <Button className="bg-gradient-to-r from-opttech-orange to-opttech-lightOrange hover:from-opttech-darkOrange hover:to-opttech-orange text-white w-full shadow-md transition-all duration-300">
                Orçamento
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-opttech-gray hover:text-opttech-green font-medium transition-all duration-300 relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-opttech-orange transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const MobileNavLink = ({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="text-opttech-gray hover:text-opttech-green font-medium transition-colors py-2 block border-b border-gray-100 hover:pl-2 transition-all duration-300"
  >
    {children}
  </Link>
);

export default Navbar;
