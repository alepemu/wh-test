import { render, screen, fireEvent } from "@testing-library/react";

import { StepContext } from "../../../App";
import { StepContextProps } from "../../../types";

import UserAgreement from "./UserAgreement";

describe("UserAgreement", () => {
  const setStepMock = jest.fn();
  const stepContextValue: StepContextProps = [1, setStepMock];

  let checkBox: HTMLInputElement;
  let nextButton: HTMLButtonElement;

  beforeEach(() => {
    setStepMock.mockClear();
    render(
      <StepContext.Provider value={stepContextValue}>
        <UserAgreement />
      </StepContext.Provider>
    );
    checkBox = screen.getByRole("checkbox");
    nextButton = screen.getByRole("button", { name: "Next" });
  });

  test("renders title", () => {
    const title = screen.getByText("Test Frontend Wheel Hub");
    expect(title).toBeInTheDocument();
  });

  test("checkbox toggles when clicked", () => {
    fireEvent.click(checkBox);
    expect(checkBox.checked).toBe(true);
    fireEvent.click(checkBox);
    expect(checkBox.checked).toBe(false);
  });

  test("next button is disabled when checkbox is not checked", () => {
    expect(nextButton).toBeDisabled();
  });

  test("next button is enabled when checkbox is checked", () => {
    fireEvent.click(checkBox);
    expect(nextButton).toBeEnabled();
  });

  test("clicking next button updates step value", () => {
    fireEvent.click(checkBox);
    fireEvent.click(nextButton);
    expect(setStepMock).toHaveBeenCalledWith(2);
  });
});
