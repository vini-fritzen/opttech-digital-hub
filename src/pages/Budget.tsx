
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BudgetHero from "@/components/budget/BudgetHero";
import BudgetForm from "@/components/budget/BudgetForm";
import Benefits from "@/components/budget/Benefits";

const Budget = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <BudgetHero />
        
        {/* Form Section */}
        <BudgetForm />
        
        {/* Benefits */}
        <Benefits />
      </main>
      
      <Footer />
    </div>
  );
};

export default Budget;
