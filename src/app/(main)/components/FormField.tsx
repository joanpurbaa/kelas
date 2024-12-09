import { Input } from "@/app/components/ui/input";

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
        className="text-xs md:text-base mt-2"
        onChange={onChange}
        id={id}
        name={id}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default FormField;
