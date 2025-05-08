
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type SubmissionSuccessProps = {
  onReset: () => void;
};

const SubmissionSuccess = ({ onReset }: SubmissionSuccessProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white shadow-lg rounded-xl p-12 text-center border border-gray-100"
    >
      <div className="w-20 h-20 bg-opttech-green/10 rounded-full mx-auto flex items-center justify-center mb-6">
        <CheckCircle className="w-10 h-10 text-opttech-green" />
      </div>
      <h2 className="text-3xl font-bold text-opttech-green mb-4">Solicitação Enviada!</h2>
      <p className="text-lg text-gray-600 mb-8">
        Recebemos sua solicitação de orçamento. Nossa equipe irá analisá-la e entraremos em contato em breve.
      </p>
      <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-lg border border-gray-200 mb-8">
        <p className="text-sm text-gray-500">
          Um e-mail de confirmação foi enviado para o endereço fornecido com os detalhes da sua solicitação.
        </p>
      </div>
      <Button
        onClick={onReset}
        className="bg-opttech-green hover:bg-opttech-darkGreen text-white px-8"
      >
        Solicitar Novo Orçamento
      </Button>
    </motion.div>
  );
};

export default SubmissionSuccess;
