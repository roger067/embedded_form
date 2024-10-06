import { Input, Select, Textarea } from "../ui";

import "./style.css";

interface PingbackFormProps {
  fields: [];
}

const PingbackForm = ({ fields }: PingbackFormProps) => {
  console.log(fields);

  return (
    <div className="flex flex-col gap-2">
      <Input />
      <Select />
      <Textarea />
    </div>
  );
};

export default PingbackForm;
