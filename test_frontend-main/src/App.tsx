import { useState, createContext } from "react";

import UserWizard from "./pages/UserWizard";

import type { StepContextProps } from "./types";

export const StepContext = createContext<StepContextProps>([
  1,
  // eslint-disable-next-line
  () => {},
]);

export default function App() {
  const currentStepState = useState(1);
  return (
    <>
      <StepContext.Provider value={currentStepState}>
        <UserWizard />
      </StepContext.Provider>
    </>
  );
}
