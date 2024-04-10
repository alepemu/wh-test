import "../styles/wizard.scss";

import { useContext } from "react";

import { StepContext } from "../App";

import StepsHeader from "../components/wizard/StepsHeader";
import LanguageSwitch from "../components/wizard/LanguageSwitch";
import UserAgreement from "../components/wizard/user/UserAgreement";
import UserForm from "../components/wizard/user/UserForm";
import UserConfirmation from "../components/wizard/user/UserConfirmation";

export default function UserWizard() {
  const [step] = useContext(StepContext);

  return (
    <>
      <StepsHeader steps={3} current={step} />
      <LanguageSwitch />

      <div className="main-container">
        {step === 1 && <UserAgreement />}
        {step === 2 && <UserForm />}
        {step === 3 && <UserConfirmation />}
      </div>
    </>
  );
}
