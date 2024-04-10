import "../../../styles/components/form.scss";

import { useState, useContext, FormEvent } from "react";
import { useTranslation } from "react-i18next";

import { FaChevronRight } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa6";

import { StepContext } from "../../../App";

import { UserFormFields } from "../../../types";

import UserFormTitle from "./UserFormTitle";
import Input from "../../input/Input";
import InputPassword from "../../input/InputPassword";

import { submitUser } from "../../../services/submitUser";

const UserForm = () => {
  const [step, setStep] = useContext(StepContext);
  const [errors, setErrors] = useState<UserFormFields>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation("form");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    const result = await submitUser(event, setErrors);
    if (result === "success") setStep(step + 1);
    setIsSubmitting(false);
  };

  return (
    <div className="user-form">
      <UserFormTitle title="Test Frontend Wheel Hub" />

      <form onSubmit={handleSubmit}>
        <Input
          id="username"
          name="username"
          label={t("username-label")}
          placeholder={t("username-placeholder")}
          error={errors.username}
        />

        <div className="form-field">
          <InputPassword
            id="password"
            name="password"
            label={t("password-label")}
            placeholder={t("password-placeholder")}
            error={errors.password}
            showStrength
          />
          <InputPassword
            id="password-repeat"
            name="pwRepeat"
            label={t("password-confirmation-label")}
            placeholder={t("password-confirmation-placeholder")}
            error={errors.pwRepeat}
          />
        </div>

        <p>{t("password-hint-info")}</p>

        <Input
          id="password-hint"
          name="pwHint"
          label={t("password-hint-label")}
          placeholder={t("password-hint-placeholder")}
          maxLength={60}
          showCount
          info="Optional password hint to help you remember."
        />

        <hr />

        <div className="bottom-navigation">
          <a onClick={() => setStep(step - 1)} role="link">
            {t("back")}
          </a>
          <button type="submit" role="button">
            {t("next")}
            {isSubmitting ? (
              <FaSpinner className="animate-spinning" />
            ) : (
              <FaChevronRight />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
