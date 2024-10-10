import { render, screen, fireEvent } from "@testing-library/preact";

import Select from "./Select";

test("renders with label and placeholder", () => {
  render(
    <Select
      label="Select an option"
      onChangeValue={vi.fn()}
      options={["Option 1", "Option 2"]}
      value=""
    />
  );

  expect(screen.getByText("Select an option")).toBeInTheDocument();
  expect(screen.getByText("Select an item")).toBeInTheDocument();
});

test("opens and closes dropdown when button is clicked", () => {
  render(
    <Select
      label="Select an option"
      onChangeValue={vi.fn()}
      options={["Option 1", "Option 2"]}
      value=""
    />
  );

  const dropdown = screen.queryByRole("listbox");
  expect(dropdown).toHaveClass("dropdown-closed");
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(screen.getByText("Option 1")).toBeInTheDocument();
  expect(screen.getByText("Option 2")).toBeInTheDocument();

  fireEvent.click(button);
  expect(dropdown).toHaveClass("dropdown-closed");
});

test("calls onChangeValue when option is selected", () => {
  const handleChange = vi.fn();

  render(
    <Select
      label="Select an option"
      onChangeValue={handleChange}
      options={["Option 1", "Option 2"]}
      value=""
    />
  );

  fireEvent.click(screen.getByRole("button"));

  fireEvent.click(screen.getByText("Option 1"));

  expect(handleChange).toHaveBeenCalledWith("Option 1");
});

test("displays error message when error prop is passed", () => {
  render(
    <Select
      label="Select an option"
      onChangeValue={vi.fn()}
      options={["Option 1", "Option 2"]}
      value=""
      error="This is an error"
    />
  );

  expect(screen.getByText("This is an error")).toBeInTheDocument();
});
