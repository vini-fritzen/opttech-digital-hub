
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { BudgetFormValues } from "./formSchema";

interface ProjectDescriptionStepProps {
  form: UseFormReturn<BudgetFormValues>;
}

const ProjectDescriptionStep = ({ form }: ProjectDescriptionStepProps) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-opttech-green">Descrição do Projeto</h2>
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Descreva seu projeto</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Descreva em detalhes as necessidades do seu projeto, funcionalidades desejadas e qualquer outra informação relevante..." 
                className="min-h-40 resize-none" 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default ProjectDescriptionStep;
