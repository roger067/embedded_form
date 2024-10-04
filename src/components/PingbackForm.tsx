import { Input, Select, Textarea } from "../ui";

interface PingbackFormProps {
  fields: [];
}

const PingbackForm = ({ fields }: PingbackFormProps) => (
  <div>
    <Input />
    <Select />
    <Textarea />
  </div>
);

export default PingbackForm;
