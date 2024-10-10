import { render, screen } from "@testing-library/preact";

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
