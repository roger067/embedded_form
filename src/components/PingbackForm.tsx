import { Input, Select, Textarea } from '../ui';

interface PingbackFormProps {
  fields: [];
}

const PingbackForm = ({ fields }: PingbackFormProps) => {
  console.log(fields);

  return (
    <div>
      <Input />
      <Select />
      <Textarea />
    </div>
  );
};

export default PingbackForm;
