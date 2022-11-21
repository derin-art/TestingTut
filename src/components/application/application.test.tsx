import Application from "./application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
  test("Test if Application Component renders", () => {
    render(<Application></Application>);
    const textBox = screen.getAllByRole("textbox");
    const element = screen.getByRole("combobox");
    const paragraph = screen.getByText((par) => {
      return par.startsWith("All");
    });
    const checkboxElement = screen.getByRole("checkbox");
    const submitButton = screen.getByRole("button");
    const titEl = screen.getByTitle("close");
    const textAra = screen.getByTestId("selectEl1");
    const imageEl = screen.getAllByAltText("a person with a laptop");
    const element2 = screen.getByLabelText("Name", { selector: "input" });

    textBox.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    expect(titEl).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(imageEl[0]).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
    expect(element).toBeInTheDocument();
    expect(textAra).toBeInTheDocument();
    expect(checkboxElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
