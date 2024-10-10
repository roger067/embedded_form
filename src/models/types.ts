export type Inputs = {
  [key: string]: string;
};

export type Field = {
  name: string;
  type: "text" | "tel" | "email" | "select" | "textarea";
  label: string;
  options?: string[];
  required?: boolean;
  mask?: string;
  placeholder?: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
};
