import { useHookFormMask } from "use-mask-input";
import { SubmitHandler, useForm } from "react-hook-form";

import { patterns } from "./utils";
import { Field, Inputs } from "../models/types";
import { Button, Input, Select, Textarea } from "../ui";

import "./style.css";

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

  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} role="form">
      <div className="form-group">
        {fields.map((field) => {
          const requiredMessage = field.required
            ? "This field is required"
            : "";

          const errorMessage = errors[field.name]?.message as string;

          const pattern =
            field.pattern || patterns[field.type as keyof typeof patterns];

          if (field.type === "textarea")
            return (
              <Textarea
                label={field.label}
                error={errorMessage}
                {...register(field.name, { required: requiredMessage })}
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
                error={errorMessage}
                {...register(field.name, { required: requiredMessage })}
              />
            );

          return (
            <Input
              label={field.label}
              error={errorMessage}
              {...registerWithMask(field.name, [field.mask || ""], {
                required: requiredMessage,
                pattern,
              })}
            />
          );
        })}
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default PingbackForm;
