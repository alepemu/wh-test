import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { StepContext } from "../../../App";

import { FaChevronRight } from "react-icons/fa";

import logoGreen from "../../../assets/img/Logotipo-Vertical-Verde-Alta.png";

import UserFormTitle from "./UserFormTitle";
import InputCheckbox from "../../input/InputCheckbox";

export default function UserAgreement() {
  const [step, setStep] = useContext(StepContext);
  const [hasAgreed, setHasAgreed] = useState(false);
  const { t } = useTranslation("agreement");

  return (
    <div className="user-agreement">
      <UserFormTitle title="Test Frontend Wheel Hub" />

      <div className="logo-wrapper">
        <img src={logoGreen} alt="logo" />
      </div>
      <h5 className="bold">{t("content-title")}</h5>
      <p>{t("step-1")}</p>
      <p>{t("step-2")}</p>
      <p>{t("step-3")}</p>

      <InputCheckbox
        id="agreement"
        label={t("agreement")}
        checked={hasAgreed}
        onChange={() => setHasAgreed(!hasAgreed)}
      />

      <hr />

      <div className="bottom-navigation" style={{ justifyContent: "end" }}>
        <button
          disabled={!hasAgreed}
          onClick={() => setStep(step + 1)}
          role="button"
        >
          {t("next")}
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
