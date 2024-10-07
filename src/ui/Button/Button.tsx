import { ReactNode } from "preact/compat";
import "./style.css";

interface ButtonProps {
  children?: ReactNode;
}

const Button = ({ children }: ButtonProps) => (
  <button className="btn">{children}</button>
);

export default Button;
