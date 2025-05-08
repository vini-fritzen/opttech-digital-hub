
import { CheckCircle } from "lucide-react";

interface FormProgressProps {
  step: number;
  totalSteps: number;
}

const FormProgress = ({ step, totalSteps }: FormProgressProps) => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step > index + 1 ? 'bg-opttech-orange text-white' : 
              step === index + 1 ? 'bg-opttech-green text-white' : 
              'bg-gray-200 text-gray-500'
            }`}>
              {step > index + 1 ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                index + 1
              )}
            </div>
            <span className={`text-xs mt-2 ${
              step >= index + 1 ? 'text-opttech-green' : 'text-gray-500'
            }`}>
              {index === 0 ? "Informações" : 
               index === 1 ? "Detalhes" : "Descrição"}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-opttech-green to-opttech-orange transition-all duration-500"
          style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default FormProgress;
