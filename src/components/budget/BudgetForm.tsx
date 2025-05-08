
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formSchema, BudgetFormValues } from "./formSchema";
import FormProgress from "./FormProgress";
import ContactInfoStep from "./ContactInfoStep";
import ProjectDetailsStep from "./ProjectDetailsStep";
import ProjectDescriptionStep from "./ProjectDescriptionStep";
import SubmissionSuccess from "./SubmissionSuccess";

const BudgetForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalSteps = 3;
  
  const form = useForm<BudgetFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      services: [],
      description: "",
    }
  });

  const nextStep = () => {
    let fieldsToValidate: (keyof BudgetFormValues)[] = [];
    
    if (step === 1) {
      fieldsToValidate = ["name", "company", "email", "phone"];
    } else if (step === 2) {
      fieldsToValidate = ["projectType", "budget", "timeline", "services"];
    }
    
    const formValues = form.getValues();
    const isValid = fieldsToValidate.every(field => {
      if (field === "services") {
        return formValues[field] && formValues[field].length > 0;
      }
      return formValues[field] && formValues[field].length > 0;
    });
    
    if (isValid) {
      setStep(prev => Math.min(prev + 1, totalSteps));
    } else {
      fieldsToValidate.forEach(field => {
        form.trigger(field);
      });
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const onSubmit = async (values: BudgetFormValues) => {
    console.log("Budget form submitted with values:", values);
    setIsSubmitting(true);
    
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log submitted data
      console.log("Budget request submitted:", values);
      
      toast({
        title: "Solicitação de orçamento enviada!",
        description: "Entraremos em contato em breve com a sua proposta.",
      });
      
      setSubmitted(true);
      form.reset();
      setIsSubmitting(false);
      setStep(1);
    } catch (error) {
      console.error("Error submitting budget request:", error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Houve um problema ao processar sua solicitação. Tente novamente mais tarde.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    form.reset();
    setStep(1);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {submitted ? (
            <SubmissionSuccess onReset={resetForm} />
          ) : (
            <>
              <FormProgress step={step} totalSteps={totalSteps} />
              
              <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Step 1: Basic Information */}
                    {step === 1 && <ContactInfoStep form={form} />}

                    {/* Step 2: Project Details */}
                    {step === 2 && <ProjectDetailsStep form={form} />}

                    {/* Step 3: Project Description */}
                    {step === 3 && <ProjectDescriptionStep form={form} />}

                    <div className="flex justify-between mt-10">
                      {step > 1 ? (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={prevStep}
                          className="border-opttech-green text-opttech-green hover:bg-opttech-green/10"
                        >
                          Voltar
                        </Button>
                      ) : (
                        <div></div>
                      )}
                      
                      {step < totalSteps ? (
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="bg-gradient-to-r from-opttech-green to-opttech-lightGreen hover:from-opttech-darkGreen hover:to-opttech-green shadow-md transition-all duration-300"
                        >
                          Próximo
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-gradient-to-r from-opttech-orange to-opttech-lightOrange hover:from-opttech-darkOrange hover:to-opttech-orange shadow-md hover:shadow-neon transition-all duration-300 relative overflow-hidden group"
                        >
                          <span className="relative z-10">
                            {isSubmitting ? "Enviando..." : "Solicitar Orçamento"}
                          </span>
                          <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                        </Button>
                      )}
                    </div>
                  </form>
                </Form>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BudgetForm;
