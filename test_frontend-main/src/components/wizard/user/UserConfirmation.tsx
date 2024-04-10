import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { StepContext } from "../../../App";

import successImg from "../../../assets/img/success.png";

export default function userConfirmation() {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [_, setStep] = useContext(StepContext);
  const { t } = useTranslation("confirmation");

  return (
    <div className="user-confirmation">
      <div className="confirmation-content">
        <div className="confirmation-image">
          <img src={successImg} alt="success" />
        </div>
        <div className="confirmation-text">
          <h5 className="bold">{t("content-title")}</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            condimentum tortor urna, vitae feugiat ligula tempor ut. Suspendisse
            pharetra ornare urna, id lacinia est consectetur ac. In suscipit
            nisi quis lacus pulvinar fermentum. Sed pellentesque dignissim
            eleifend.
          </p>
        </div>
      </div>

      <hr />

      <div className="bottom-navigation">
        <a onClick={() => setStep(1)} role="link">
          {t("back")}
        </a>
        ;{" "}
        <a onClick={() => setStep(1)} className="bold" role="link">
          {t("back-to-start")}{" "}
        </a>
      </div>
    </div>
  );
}
