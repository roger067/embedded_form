import { render } from "preact";
import PingbackForm from "./components/PingbackForm";

render(
  <PingbackForm
    fields={[
      { name: "name", type: "text", label: "Full Name", required: true },
      {
        name: "email",
        type: "text",
        label: "Email Address",
        required: true,
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "invalid email address",
        },
      },
      {
        name: "phone",
        type: "text",
        label: "Phone Number",
        required: false,
        mask: "99 9999-9999",
      },
      {
        name: "role",
        type: "select",
        label: "Your Role",
        options: ["Developer", "Designer", "Manager"],
        placeholder: "Select a role",
        required: true,
      },
      { name: "message", type: "textarea", label: "Message", required: false },
    ]}
  />,
  document.getElementById("app")!
);
