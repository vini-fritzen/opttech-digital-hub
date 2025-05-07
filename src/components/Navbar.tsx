
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

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
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo-opttech.png" 
            alt="OptTech Solutions" 
            className="h-10 md:h-12"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Produtos</NavLink>
          <NavLink to="/services">Serviços</NavLink>
          <NavLink to="/about">Sobre Nós</NavLink>
          <NavLink to="/contact">Contato</NavLink>
          <Button className="bg-opttech-blue hover:bg-opttech-darkBlue text-white">
            Orçamento
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/products" onClick={() => setIsMenuOpen(false)}>Produtos</MobileNavLink>
            <MobileNavLink to="/services" onClick={() => setIsMenuOpen(false)}>Serviços</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>Sobre Nós</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contato</MobileNavLink>
            <Button className="bg-opttech-blue hover:bg-opttech-darkBlue text-white w-full">
              Orçamento
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-opttech-gray hover:text-opttech-blue font-medium transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="text-opttech-gray hover:text-opttech-blue font-medium transition-colors py-2 block"
  >
    {children}
  </Link>
);

export default Navbar;
