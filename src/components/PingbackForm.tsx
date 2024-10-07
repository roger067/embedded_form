import { Input, Select, Textarea } from "../ui";

import "./style.css";

type Field = {
  name: string;
  type: string;
  label: string;
  options?: string[];
  required?: boolean;
  mask?: string;
};

interface PingbackFormProps {
  fields: Field[];
}

const PingbackForm = ({ fields }: PingbackFormProps) => {
  return (
    <div className="form-group">
      {fields.map((field) => (
        <Input label={field.label} />
      ))}
    </div>
  );
};

export default PingbackForm;
