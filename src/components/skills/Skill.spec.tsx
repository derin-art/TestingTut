import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./Skill";

describe.only("Components Render", () => {
  const skill = ["cooking", "fishing", "playing guitar"];
  test("List Render properly", () => {
    render(<Skills skills={skill}></Skills>);
    const skills = screen.getByRole("list");
    expect(skills).toBeInTheDocument();
  });

  test("renders list of Skills", () => {
    render(<Skills skills={skill}></Skills>);
    const listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).toHaveLength(3);
    listItemElement.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  it("Login button works correctly", () => {
    render(<Skills skills={skill}></Skills>);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });

    expect(loginButton).toBeInTheDocument();
  });

  test("Start Learning button is not rendered", () => {
    render(<Skills skills={skill}></Skills>);
    const startLearningButton = screen.queryByRole("button", {
      name: /Start/,
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("Start Learning button is eventually displayed", async () => {
    const view = render(<Skills skills={skill}></Skills>);
    logRoles(view.container);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: /Start/,
      },
      { timeout: 3000 }
    );
    screen.debug();
    expect(startLearningButton).toBeInTheDocument();
  });
});
