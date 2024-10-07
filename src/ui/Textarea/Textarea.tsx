import { forwardRef } from "preact/compat";
import "./style.css";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, ...textareaProps }, ref) => (
    <div className="form-item">
      {label && <label>{label}</label>}
      <textarea ref={ref} {...textareaProps} />
    </div>
  )
);

export default Textarea;
