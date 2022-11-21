import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test.skip("renders correctly", () => {
    render(<Greet></Greet>);
    const testElement = screen.getByText("Hello");
    expect(testElement).toBeInTheDocument();
  });

  test("renders Hello with name when name is passedd", () => {
    render(<Greet name="Derin"></Greet>);
    const nameWithHelloElement = screen.getByText("Hello Derin Hey");
    expect(nameWithHelloElement).toBeInTheDocument();
  });
});
