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
  pattern?: {
    value: RegExp;
    message: string;
  };
};

interface PingbackFormProps {
  fields: Field[];
}

const PingbackForm = ({ fields }: PingbackFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const registerWithMask = useHookFormMask(register);

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        {fields.map((field) => {
          const requiredMessage = field.required
            ? "This field is required"
            : "";

          if (field.type === "text")
            return (
              <Input
                label={field.label}
                error={errors[field.name]?.message as string}
                {...registerWithMask(field.name, [field.mask || ""], {
                  required: requiredMessage,
                  pattern: field.pattern,
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
                error={errors[field.name]?.message as string}
                {...register(field.name, { required: requiredMessage })}
              />
            );

          return (
            <Textarea
              label={field.label}
              error={errors[field.name]?.message as string}
              {...register(field.name, { required: requiredMessage })}
            />
          );
        })}
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default PingbackForm;
