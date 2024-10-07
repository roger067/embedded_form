import { forwardRef } from "preact/compat";
import { InputHTMLAttributes } from "preact/compat";
import "./style.css";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "max" | "min"> {
  label?: string;
  max?: string | number;
  min?: string | number;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...inputProps }, ref) => (
    <div className="form-item">
      {label && <label>{label}</label>}
      <input ref={ref} {...inputProps} />
    </div>
  )
);

export default Input;
