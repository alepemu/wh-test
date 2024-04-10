import { render, screen, fireEvent } from "@testing-library/react";

import { StepContext } from "../../../App";
import { StepContextProps } from "../../../types";

import UserForm from "./UserForm";
import { act } from "react-dom/test-utils";

describe("UserForm", () => {
  const setStepMock = jest.fn();
  const stepContextValue: StepContextProps = [2, setStepMock];

  let backLink: HTMLElement;
  let nextButton: HTMLElement;
  let usernameInput: HTMLElement;
  let passwordInput: HTMLElement;
  let passwordRepeatInput: HTMLElement;

  beforeEach(() => {
    setStepMock.mockClear();
    render(
      <StepContext.Provider value={stepContextValue}>
        <UserForm />
      </StepContext.Provider>
    );
    backLink = screen.getByRole("link", { name: "Back" });
    nextButton = screen.getByRole("button", { name: "Next" });
    usernameInput = screen.getByLabelText("Create your username");
    passwordInput = screen.getByLabelText("Create your password");
    passwordRepeatInput = screen.getByLabelText("Repeat your password");
  });

  test("renders title", () => {
    const title = screen.getByText("Test Frontend Wheel Hub");
    expect(title).toBeInTheDocument();
  });

  test("clicking back link updates step value", () => {
    fireEvent.click(backLink);
    expect(setStepMock).toHaveBeenCalledWith(1);
  });

  test("clicking next button with empty inputs gets warnings", async () => {
    await act(async () => fireEvent.click(nextButton));
    const warnings = screen.getAllByText("El campo es obligatorio.");
    expect(warnings[0]).toBeInTheDocument();
    expect(warnings[1]).toBeInTheDocument();
  });

  test("clicking next button with short username gets warning", async () => {
    fireEvent.change(usernameInput, { target: { value: "Tom" } });
    await act(async () => fireEvent.click(nextButton));
    const warning = screen.getByText("Al menos 6 caracteres.");
    expect(warning).toBeInTheDocument();
  });

  test("clicking next button with unsafe password gets warning", async () => {
    fireEvent.change(passwordInput, { target: { value: "password" } });
    await act(async () => fireEvent.click(nextButton));
    const warning = screen.getByText(
      "Debe contener al menos un número y una letra mayúscula."
    );
    expect(warning).toBeInTheDocument();
  });

  test("clicking next button with different passwords gets warning", async () => {
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(passwordRepeatInput, {
      target: { value: "passwordXYZ" },
    });
    await act(async () => fireEvent.click(nextButton));
    const warning = screen.getByText("Las contraseñas no coinciden.");
    expect(warning).toBeInTheDocument();
  });
});
