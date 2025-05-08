
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
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
                Termos de Uso
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Condições para utilização dos nossos serviços
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
        
        {/* Terms of Use Content */}
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
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">1. Aceitação dos Termos</h2>
                  <p className="mb-6 text-gray-700">
                    Ao acessar ou utilizar os serviços da OptTech Solutions, incluindo nosso site, aplicativos, software e outros produtos e serviços (coletivamente, os "Serviços"), você concorda em ficar vinculado por estes Termos de Uso. Se você não concordar com estes termos, não deve acessar ou utilizar nossos Serviços.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">2. Alterações nos Termos</h2>
                  <p className="mb-6 text-gray-700">
                    Podemos modificar estes Termos de Uso a qualquer momento, a nosso exclusivo critério. Se fizermos alterações, publicaremos os termos atualizados em nosso site e atualizaremos a data de "Última Atualização" no topo desta página. Recomendamos que você revise periodicamente os Termos para se manter informado sobre nossas políticas. O uso continuado dos Serviços após a publicação de Termos modificados constitui sua aceitação desses termos.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">3. Uso dos Serviços</h2>
                  <p className="mb-4 text-gray-700">
                    Você concorda em usar os Serviços apenas para fins legais e de acordo com estes Termos. Você não deve:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li className="mb-2">Violar quaisquer leis ou regulamentos aplicáveis;</li>
                    <li className="mb-2">Interferir ou interromper a integridade ou o desempenho dos Serviços;</li>
                    <li className="mb-2">Tentar obter acesso não autorizado aos Serviços ou sistemas ou redes relacionados;</li>
                    <li className="mb-2">Utilizar os Serviços para distribuir malware, spyware ou outro código malicioso;</li>
                    <li className="mb-2">Coletar ou armazenar dados pessoais de outros usuários sem sua permissão;</li>
                    <li>Usar os Serviços para qualquer finalidade fraudulenta ou enganosa.</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">4. Contas de Usuário</h2>
                  <p className="mb-6 text-gray-700">
                    Alguns de nossos Serviços podem exigir que você crie uma conta. Você é responsável por manter a confidencialidade de suas credenciais de conta e por todas as atividades que ocorrem em sua conta. Notifique-nos imediatamente se suspeitar de qualquer uso não autorizado de sua conta. Reservamo-nos o direito de encerrar contas ou recusar serviços a qualquer pessoa por qualquer motivo, a nosso critério.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">5. Propriedade Intelectual</h2>
                  <p className="mb-6 text-gray-700">
                    Os Serviços e seu conteúdo original, recursos e funcionalidades são e permanecerão propriedade exclusiva da OptTech Solutions e de seus licenciadores. Os Serviços são protegidos por direitos autorais, marcas registradas, patentes, segredos comerciais e outras leis de propriedade intelectual. Nosso nome, logotipo e nomes de produtos relacionados são marcas comerciais da OptTech Solutions, e não podem ser copiados, imitados ou usados, no todo ou em parte, sem nossa permissão prévia por escrito.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">6. Conteúdo do Usuário</h2>
                  <p className="mb-6 text-gray-700">
                    Nossos Serviços podem permitir que você envie, armazene ou compartilhe conteúdo. Você mantém seus direitos sobre qualquer conteúdo que envia, mas concede à OptTech Solutions uma licença mundial, não exclusiva, isenta de royalties, sublicenciável e transferível para usar, reproduzir, modificar, adaptar, publicar, traduzir, criar obras derivadas, distribuir e exibir esse conteúdo em conexão com os Serviços.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">7. Isenção de Garantias</h2>
                  <p className="mb-6 text-gray-700">
                    OS SERVIÇOS SÃO FORNECIDOS "COMO ESTÃO" E "CONFORME DISPONÍVEIS", SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS. OPTTECH SOLUTIONS EXPRESSAMENTE RENUNCIA A TODAS AS GARANTIAS DE QUALQUER TIPO, SEJA EXPRESSA OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO A, GARANTIAS IMPLÍCITAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UMA FINALIDADE ESPECÍFICA, NÃO VIOLAÇÃO E QUAISQUER GARANTIAS DECORRENTES DE NEGOCIAÇÕES OU USO COMERCIAL.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">8. Limitação de Responsabilidade</h2>
                  <p className="mb-6 text-gray-700">
                    EM NENHUM CASO A OPTTECH SOLUTIONS, SEUS DIRETORES, FUNCIONÁRIOS, PARCEIROS, AGENTES, FORNECEDORES OU AFILIADOS SERÃO RESPONSÁVEIS POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS, INCLUINDO, SEM LIMITAÇÃO, PERDA DE LUCROS, DADOS, USO, REPUTAÇÃO OU OUTRAS PERDAS INTANGÍVEIS, RESULTANTES DO SEU ACESSO OU USO OU INCAPACIDADE DE ACESSAR OU USAR OS SERVIÇOS.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">9. Lei Aplicável</h2>
                  <p className="mb-6 text-gray-700">
                    Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem levar em conta seus princípios de conflito de leis. Qualquer disputa decorrente ou relacionada a estes Termos ou ao seu uso dos Serviços será submetida à jurisdição exclusiva dos tribunais localizados em São Paulo, Brasil.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-6 text-opttech-green">10. Contato</h2>
                  <p className="mb-6 text-gray-700">
                    Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco pelo e-mail contato@opttechsolutions.com.br ou pelo telefone (11) 1234-5678.
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

export default Terms;
