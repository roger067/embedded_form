export const patterns: {
  [key in "email" | "tel"]: { value: RegExp; message: string };
} = {
  email: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "invalid email address",
  },
  tel: {
    value: /^\+?[\d\s-]{7,15}$/,
    message: "invalid phone number",
  },
};
