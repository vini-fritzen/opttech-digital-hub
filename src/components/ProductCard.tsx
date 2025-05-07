
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

const ProductCard = ({ id, title, description, icon, slug }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden h-full flex flex-col bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 backdrop-blur-sm shadow-md hover:shadow-neon transition-all duration-300">
        <CardHeader className="pb-4 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-opttech-lightOrange/10 to-transparent rounded-full -mr-16 -mt-16"></div>
          <div className="w-16 h-16 mb-4 rounded-lg bg-gradient-to-br from-opttech-green to-opttech-lightGreen flex items-center justify-center shadow-md transform hover:rotate-3 transition-transform duration-300">
            <img src={icon} alt={title} className="w-8 h-8" />
          </div>
          <CardTitle className="text-xl font-bold text-opttech-green bg-clip-text text-transparent bg-gradient-to-r from-opttech-green to-opttech-lightGreen">{title}</CardTitle>
          <CardDescription className="text-opttech-gray">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="h-40 bg-gray-900 rounded-md mb-4 overflow-hidden relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img 
              src={`/product-${id}.jpg`} 
              alt={title} 
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 border border-opttech-lightOrange/20 rounded-md"></div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full bg-gradient-to-r from-opttech-orange to-opttech-lightOrange hover:from-opttech-darkOrange hover:to-opttech-orange shadow-md hover:shadow-neon transition-all duration-300 group">
            <Link to={`/product/${slug}`} className="flex items-center justify-center">
              Saiba mais
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
