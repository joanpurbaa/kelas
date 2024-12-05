import { Button } from "@/app/components/ui/button";
import { useFormStatus } from "react-dom";

type FormButtonProps = {
  value: string;
};

const FormButton = ({ value }: FormButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      className="w-full text-xs md:text-base"
    >
      {pending ? value + "..." : value}
    </Button>
  );
};

export default FormButton;
