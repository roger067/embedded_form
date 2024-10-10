import { Field } from "../models/types";

export const mockFields: Field[] = [
  {
    name: "name",
    type: "text",
    label: "Name",
    required: true,
  },
  {
    name: "contact",
    type: "select",
    label: "Contact Method",
    options: ["Email", "Phone"],
    required: true,
  },
  {
    name: "message",
    type: "textarea",
    label: "Message",
  },
];
