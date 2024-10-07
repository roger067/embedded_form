import { Button, Input, Select, Textarea } from "../ui";

import "./style.css";

type Field = {
  name: string;
  type: "text" | "select" | "textarea";
  label: string;
  options?: string[];
  required?: boolean;
  mask?: string;
  placeholder?: string;
};

interface PingbackFormProps {
  fields: Field[];
}

const PingbackForm = ({ fields }: PingbackFormProps) => {
  return (
    <form>
      <div className="form-group">
        {fields.map((field) => {
          if (field.type === "text") return <Input label={field.label} />;
          if (field.type === "select")
            return (
              <Select
                label={field.label}
                options={field.options || []}
                onChangeValue={() => {}}
                placeholder={field.placeholder}
                value=""
              />
            );

          return <Textarea label={field.label} />;
        })}
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default PingbackForm;
