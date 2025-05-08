
import { motion } from "framer-motion";

type BenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

const BenefitCard = ({ icon, title, description, index }: BenefitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div 
          className="w-16 h-16 rounded-full bg-opttech-green/10 flex items-center justify-center mb-4"
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "rgba(255, 128, 0, 0.15)", 
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold mb-3 text-opttech-green">{title}</h3>
        <p className="text-opttech-gray">{description}</p>
      </div>
    </motion.div>
  );
};

export default BenefitCard;
