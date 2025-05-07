
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  isHovered: boolean;
}

const ServiceCard = ({ title, description, icon, features, isHovered }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 backdrop-blur-sm shadow-md hover:shadow-neon transition-all duration-300">
      <CardHeader className="pb-4 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-opttech-lightOrange/10 to-transparent rounded-full -mr-16 -mt-16"></div>
        <div className="w-16 h-16 mb-4 rounded-lg bg-gradient-to-br from-opttech-green to-opttech-lightGreen flex items-center justify-center shadow-md transform group-hover:rotate-3 transition-transform duration-300">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-opttech-green bg-clip-text text-transparent bg-gradient-to-r from-opttech-green to-opttech-lightGreen">{title}</CardTitle>
        <CardDescription className="text-opttech-gray">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <motion.ul 
          className="space-y-2 mt-2"
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="mr-2 mt-1">
                <svg className="w-4 h-4 text-opttech-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-opttech-gray">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
