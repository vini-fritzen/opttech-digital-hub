
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BudgetHero from "@/components/budget/BudgetHero";
import BudgetForm from "@/components/budget/BudgetForm";
import Benefits from "@/components/budget/Benefits";
import { motion } from "framer-motion";

const Budget = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <BudgetHero />
        
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BudgetForm />
        </motion.div>
        
        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Benefits />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Budget;
