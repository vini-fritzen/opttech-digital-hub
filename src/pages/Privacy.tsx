
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-opttech-dark to-opttech-green py-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-opttech-highlight">
                Política de Privacidade
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Como tratamos e protegemos seus dados
              </p>
            </motion.div>
          </div>
          
          {/* Decorative Elements */}
          <motion.div 
            className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-opttech-orange/20 blur-2xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 8,
            }}
          />
          <motion.div 
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-opttech-lightGreen/10 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 10,
              delay: 2
            }}
          />
        </section>
        
        {/* Privacy Policy Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">1. Introdução</h2>
                  <p className="mb-6 text-gray-700">
                    A OptTech Solutions valoriza a privacidade de nossos usuários e clientes. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você utiliza nossos serviços, websites e aplicativos.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">2. Informações que Coletamos</h2>
                  <p className="mb-4 text-gray-700">
                    Podemos coletar os seguintes tipos de informações:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li className="mb-2">
                      <strong>Informações pessoais:</strong> Nome, endereço de e-mail, número de telefone, endereço postal, informações de pagamento e outras informações que você nos fornece.
                    </li>
                    <li className="mb-2">
                      <strong>Informações de uso:</strong> Como você interage com nossos serviços, incluindo páginas visitadas, tempo gasto em cada página, links clicados e ações realizadas.
                    </li>
                    <li className="mb-2">
                      <strong>Informações do dispositivo:</strong> Tipo de dispositivo, sistema operacional, navegador, endereço IP e identificadores de dispositivos.
                    </li>
                    <li>
                      <strong>Cookies e tecnologias similares:</strong> Utilizamos cookies e tecnologias semelhantes para coletar informações sobre sua interação com nossos serviços.
                    </li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">3. Como Usamos Suas Informações</h2>
                  <p className="mb-4 text-gray-700">
                    Utilizamos suas informações para os seguintes fins:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li className="mb-2">Fornecer, manter e melhorar nossos serviços;</li>
                    <li className="mb-2">Processar transações e enviar notificações relacionadas;</li>
                    <li className="mb-2">Personalizar sua experiência e oferecer conteúdo e funcionalidades relevantes;</li>
                    <li className="mb-2">Comunicar-nos com você sobre atualizações, ofertas e informações relevantes;</li>
                    <li className="mb-2">Analisar tendências de uso e melhorar a eficácia de nossos serviços;</li>
                    <li>Proteger contra atividades fraudulentas e não autorizadas.</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">4. Compartilhamento de Informações</h2>
                  <p className="mb-4 text-gray-700">
                    Podemos compartilhar suas informações com:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li className="mb-2">Prestadores de serviços que nos ajudam a operar nossos negócios;</li>
                    <li className="mb-2">Parceiros comerciais para oferecer produtos ou serviços conjuntos;</li>
                    <li className="mb-2">Quando exigido por lei ou para proteger nossos direitos legais;</li>
                    <li>Em caso de fusão, venda ou transferência de ativos da empresa.</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">5. Seus Direitos e Escolhas</h2>
                  <p className="mb-4 text-gray-700">
                    Você tem determinados direitos em relação às suas informações pessoais, incluindo:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li className="mb-2">Acesso às suas informações pessoais;</li>
                    <li className="mb-2">Correção de informações imprecisas;</li>
                    <li className="mb-2">Exclusão de suas informações pessoais;</li>
                    <li className="mb-2">Objeção ao processamento de suas informações;</li>
                    <li>Retirada de consentimento para uso futuro.</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">6. Segurança</h2>
                  <p className="mb-6 text-gray-700">
                    Implementamos medidas de segurança técnicas, administrativas e físicas para proteger suas informações pessoais contra acesso não autorizado, uso indevido, divulgação ou destruição.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">7. Alterações nesta Política</h2>
                  <p className="mb-6 text-gray-700">
                    Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente será postada em nosso website com a data de vigência.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">8. Contato</h2>
                  <p className="mb-6 text-gray-700">
                    Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco pelo e-mail contato@opttechsolutions.com.br ou pelo telefone (11) 1234-5678.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
