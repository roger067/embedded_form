import { forwardRef } from "preact/compat";
import "./style.css";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, ...textareaProps }, ref) => (
    <div className="form-item">
      <div className="label-item">
        {label && <label>{label}</label>}
        <span className="error-message">{error}</span>
      </div>
      <textarea ref={ref} {...textareaProps} />
    </div>
  )
);

export default Textarea;
