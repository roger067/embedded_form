import { forwardRef } from "preact/compat";
import { InputHTMLAttributes } from "preact/compat";
import "./style.css";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "max" | "min"> {
  label?: string;
  error?: string;
  max?: string | number;
  min?: string | number;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...inputProps }, ref) => (
    <div className="form-item">
      <div className="label-item">
        {label && <label>{label}</label>}
        <span className="error-message">{error}</span>
      </div>
      <input ref={ref} {...inputProps} />
    </div>
  )
);

export default Input;
