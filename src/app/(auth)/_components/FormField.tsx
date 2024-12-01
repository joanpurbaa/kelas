import { Input } from "@/components/ui/input";

type FormFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormField = ({ id, label, placeholder, onChange }: FormFieldProps) => {
  return (
    <>
      <label className="text-xs md:text-base" htmlFor={id}>
        {label}
      </label>
      <Input
        className="text-xs md:text-base"
        onChange={onChange}
        id={id}
        placeholder={placeholder}
      />
    </>
  );
};

export default FormField;
