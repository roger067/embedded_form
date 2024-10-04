import { render } from "preact";
import PingbackForm from "../components/PingbackForm";

class PingbackWC extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = "";
    }
  }

  render() {
    const fieldsAttr = this.getAttribute("data-fields");
    const fields = fieldsAttr ? JSON.parse(fieldsAttr) : [];

    const mountPoint = document.createElement("div");
    this.shadowRoot?.appendChild(mountPoint);

    render(<PingbackForm fields={fields} />, mountPoint);
  }
}

customElements.define("pingback-form", PingbackWC);
