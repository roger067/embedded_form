import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input, Select, Textarea } from "../ui";

import "./style.css";
import { useHookFormMask } from "use-mask-input";

type Inputs = {
  [key: string]: string;
};

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
  const { register, handleSubmit, watch, setValue } = useForm();
  const registerWithMask = useHookFormMask(register);

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        {fields.map((field) => {
          if (field.type === "text")
            return (
              <Input
                label={field.label}
                {...registerWithMask(field.name, [field.mask || ""], {
                  required: field.required,
                })}
              />
            );
          if (field.type === "select")
            return (
              <Select
                label={field.label}
                options={field.options || []}
                onChangeValue={(value) => setValue(field.name, value)}
                placeholder={field.placeholder}
                value={watch(field.name) || ""}
                {...register(field.name, { required: field.required })}
              />
            );

          return (
            <Textarea
              label={field.label}
              {...register(field.name, { required: true })}
            />
          );
        })}
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default PingbackForm;
