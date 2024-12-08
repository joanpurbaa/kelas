import { Button } from "@/app/components/ui/button";
import { useFormStatus } from "react-dom";

type FormButtonProps = {
  value: string;
};

const FormButton = ({ value }: FormButtonProps) => {
  const { pending } = true;

  return (
    <Button
      disabled={pending}
      type="submit"
      className="w-full bg-sky-400 hover:bg-sky-500 text-xs md:text-base"
    >
      {pending ? value + "..." : value}
    </Button>
  );
};

export default FormButton;
