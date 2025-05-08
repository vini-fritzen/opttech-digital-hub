
import { motion } from "framer-motion";

const BudgetHero = () => {
  return (
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
            Solicite um Orçamento
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Preencha o formulário abaixo e receba uma proposta personalizada para o seu projeto
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
  );
};

export default BudgetHero;
