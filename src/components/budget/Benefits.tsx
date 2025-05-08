
import { motion } from "framer-motion";
import { Briefcase, DollarSign, CheckCircle, Clock } from "lucide-react";
import BenefitCard from "./BenefitCard";

const Benefits = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-10 h-10 text-opttech-orange" />,
      title: "Preços Transparentes",
      description: "Sem surpresas ou custos ocultos. Nosso orçamento é detalhado e claro."
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-opttech-orange" />,
      title: "Qualidade Garantida",
      description: "Comprometimento com excelência em todos os projetos que realizamos."
    },
    {
      icon: <Clock className="w-10 h-10 text-opttech-orange" />,
      title: "Prazos Respeitados",
      description: "Entregamos no prazo acordado, mantendo você informado em cada etapa."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-opttech-orange" />,
      title: "Experiência Comprovada",
      description: "Anos de experiência em diversos segmentos e tecnologias."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-opttech-green">Por que Escolher a OptTech</h2>
            <p className="text-opttech-gray">
              Trabalhamos para entregar as melhores soluções, com qualidade e dentro do prazo
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              index={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
