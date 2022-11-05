import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet renders correctly", () => {
  render(<Greet></Greet>);
  const testElement = screen.getByText("Hello");
  expect(testElement).toBeInTheDocument();
});

test("Greet renders hello with name when name is passedd", () => {
  render(<Greet name="Derin"></Greet>);
  const nameWithHelloElement = screen.getByText("Hello Derin");
  expect(nameWithHelloElement).toBeInTheDocument();
});
