import { render, screen, fireEvent } from "@testing-library/preact";
import { mockFields } from "../mocks/data";

import PingbackForm from "./PingbackForm";

vi.mock("react-hook-form", () => ({
  useForm: () => ({
    register: vi.fn(),
    handleSubmit: (fn: Function) => () =>
      fn({
        name: "John Doe",
        contact: "Email",
        message: "Hello there",
      }),
    watch: vi.fn(),
    setValue: vi.fn(),
    formState: { errors: {} },
  }),
}));

vi.mock("use-mask-input", () => ({
  useHookFormMask: (register: unknown) => register,
}));

beforeAll(() => {
  vi.spyOn(window, "alert").mockImplementation(() => {});
});

test("renders form with text, select, and textarea fields", () => {
  render(<PingbackForm fields={mockFields} />);

  expect(screen.getByText("Name")).toBeInTheDocument();

  expect(screen.getByText("Contact Method")).toBeInTheDocument();

  expect(screen.getByText("Message")).toBeInTheDocument();
});

test("renders empty component if pass empty array", () => {
  render(<PingbackForm fields={[]} />);

  expect(screen.queryByText("Name")).not.toBeInTheDocument();

  expect(screen.queryByText("Contact Method")).not.toBeInTheDocument();

  expect(screen.queryByText("Message")).not.toBeInTheDocument();
});

test("submits form and calls alert when all fields are filled", () => {
  render(<PingbackForm fields={mockFields} />);

  const submitButton = screen.getByText("Submit");

  fireEvent.click(submitButton);
  fireEvent.submit(screen.getByRole("form"));

  expect(window.alert).toHaveBeenCalledWith(
    JSON.stringify({
      name: "John Doe",
      contact: "Email",
      message: "Hello there",
    })
  );
});
