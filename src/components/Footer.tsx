
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-opttech-gray text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/logo-opttech-white.png" alt="OptTech Solutions" className="h-10 mb-4" />
            <p className="mb-4 text-gray-300">
              Desenvolvemos soluções tecnológicas inovadoras para transformar o seu negócio.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://twitter.com" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.047 10.047 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482 13.981 13.981 0 01-10.15-5.147 4.926 4.926 0 001.525 6.574 4.9 4.9 0 01-2.23-.616v.061a4.923 4.923 0 003.946 4.827 4.904 4.904 0 01-2.224.085 4.92 4.92 0 004.6 3.417A9.863 9.863 0 010 19.54a13.936 13.936 0 007.548 2.212c9.057 0 14.011-7.5 14.011-14 0-.214-.005-.428-.014-.64a10.039 10.039 0 002.455-2.55z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://linkedin.com" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://instagram.com" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </SocialLink>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/products">Produtos</FooterLink>
              <FooterLink to="/services">Serviços</FooterLink>
              <FooterLink to="/about">Sobre Nós</FooterLink>
              <FooterLink to="/contact">Contato</FooterLink>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <FooterLink to="/services/development">Desenvolvimento de Software</FooterLink>
              <FooterLink to="/services/mobile">Aplicativos Mobile</FooterLink>
              <FooterLink to="/services/web">Desenvolvimento Web</FooterLink>
              <FooterLink to="/services/consulting">Consultoria TI</FooterLink>
            </ul>
          </div>
          
          {/* Contact & Careers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <address className="not-italic">
              <p className="mb-2">Endereço: Rua Exemplo, 123</p>
              <p className="mb-2">São Paulo, SP</p>
              <p className="mb-2">Email: contato@opttechsolutions.com.br</p>
              <p className="mb-6">Telefone: (11) 1234-5678</p>
            </address>
            
            {/* Work with us section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Carreira</h3>
              <Link to="/careers" className="inline-flex items-center text-opttech-orange hover:text-opttech-lightOrange transition-colors">
                <Briefcase className="w-5 h-5 mr-2" />
                Trabalhe Conosco
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} OptTech Solutions. Todos os direitos reservados.</p>
            <div className="mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-white mr-4">Política de Privacidade</Link>
              <Link to="/terms" className="text-gray-300 hover:text-white">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: any }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition-colors"
    {...props}
  >
    {children}
  </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link to={to} className="text-gray-300 hover:text-white transition-colors">
      {children}
    </Link>
  </li>
);

// Add Briefcase icon import at the top
import { Briefcase } from "lucide-react";

export default Footer;
