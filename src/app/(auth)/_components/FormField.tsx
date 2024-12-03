import { Input } from "@/app/components/ui/input";

type FormFieldProps = {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormField = ({ id, label, placeholder, value, onChange }: FormFieldProps) => {
  return (
    <>
      <label className="text-xs md:text-base" htmlFor={id}>
        {label}
      </label>
      <Input
        className="text-xs md:text-base"
        onChange={onChange}
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default FormField;
