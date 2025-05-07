
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

const ProductCard = ({ id, title, description, icon, slug }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="w-16 h-16 mb-4 rounded-lg bg-opttech-lightBlue bg-opacity-10 flex items-center justify-center">
          <img src={icon} alt={title} className="w-8 h-8" />
        </div>
        <CardTitle className="text-xl text-opttech-blue">{title}</CardTitle>
        <CardDescription className="text-opttech-gray">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="h-40 bg-gray-100 rounded-md mb-4 overflow-hidden">
          <img 
            src={`/product-${id}.jpg`} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-opttech-blue hover:bg-opttech-darkBlue">
          <Link to={`/product/${slug}`}>
            Saiba mais
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
