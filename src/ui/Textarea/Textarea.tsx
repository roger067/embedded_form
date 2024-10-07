import "./style.css";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, ...textareaProps }) => (
  <div className="form-item">
    {label && <label>{label}</label>}
    <textarea {...textareaProps} />
  </div>
);

export default Textarea;
