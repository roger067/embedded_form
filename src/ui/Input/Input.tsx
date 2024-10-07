import { InputHTMLAttributes } from "preact/compat";
import "./style.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, ...inputProps }: InputProps) => (
  <div className="form-item">
    {label && <label>{label}</label>}
    <input {...inputProps} />
  </div>
);

export default Input;
