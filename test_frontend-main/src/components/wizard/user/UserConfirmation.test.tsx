import { render, screen, fireEvent } from "@testing-library/react";

import { StepContext } from "../../../App";
import { StepContextProps } from "../../../types";

import UserConfirmation from "./UserConfirmation";

describe("UserConfirmation", () => {
  const setStepMock = jest.fn();
  const stepContextValue: StepContextProps = [3, setStepMock];

  beforeEach(() => {
    setStepMock.mockClear();
    render(
      <StepContext.Provider value={stepContextValue}>
        <UserConfirmation />
      </StepContext.Provider>
    );
  });

  test("renders UserConfirmation text", () => {
    const text = screen.getByText("The account was created successfully!");
    expect(text).toBeInTheDocument();
  });

  test("clicking back link updates step value", () => {
    const backLink = screen.getByRole("link", { name: "Back" });
    fireEvent.click(backLink);
    expect(setStepMock).toHaveBeenCalledWith(1);
  });

  test("clicking second back link updates step value", () => {
    const backLink = screen.getByRole("link", { name: "Back to start" });
    fireEvent.click(backLink);
    expect(setStepMock).toHaveBeenCalledWith(1);
  });
});
