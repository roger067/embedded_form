# Pingback Form

**Pingback Form** is a Web Component that makes it easy to create forms for customer leads. It allows you to collect contact information simply and intuitively.

## Installation

You can install the library using npm:

```bash
npm install pingback-form
```

Alternatively, you can import it directly via CDN in your HTML code:

```html
<script src="https://unpkg.com/pingback-form@1.1.1/dist/pingback-form.js"></script>
```

## Example Usage

Here’s an example of how to use the `pingback-form` component in your HTML application:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/pingback-form@1.1.1/dist/pingback-form.js"></script>
  </head>
  <body>
    <h2>HTML Forms</h2>

    <pingback-form
      data-fields='[
        { "name": "name", "type": "text", "label": "Full Name", "required": true },
        { "name": "email", "type": "email", "label": "Email Address", "required": true },
        { "name": "phone", "type": "tel", "label": "Phone Number", "required": false, "mask": "99 99999-9999" },
        {
          "name": "role",
          "type": "select",
          "label": "Your Role",
          "options": ["Developer", "Designer", "Manager"],
          "placeholder": "Select a role",
          "required": true
        },
        { "name": "message", "type": "textarea", "label": "Message", "required": false }
      ]'
    ></pingback-form>
  </body>
</html>
```

## How It Works

The `pingback-form` component accepts a `data-fields` attribute, which should be a JSON string containing the configuration for the form fields. Each field should include the following properties:

- `name`: The name of the field.
- `type`: The type of the field (e.g., `text`, `email`, `tel`, `select`, `textarea`).
- `label`: The label of the field that will be displayed to the user.
- `required`: A boolean value indicating whether the field is mandatory.
- `mask` (optional): For fields that require specific formatting (e.g., phone numbers).
- `options` (optional): A list of options for fields of type `select`.
- `placeholder` (optional): A placeholder text for the field.
