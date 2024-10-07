import { render } from "preact";
import PingbackForm from "./components/PingbackForm";

render(
  <PingbackForm
    fields={[
      { name: "name", type: "text", label: "Full Name", required: true },
      { name: "email", type: "text", label: "Email Address", required: true },
      { name: "phone", type: "text", label: "Phone Number", required: false },
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
