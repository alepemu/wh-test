import "../../styles/components/input.scss";

import { useState, ChangeEvent } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import type { InputPasswordProps } from "../../types";
import { calculateStrength } from "../../utils/password";

export default function InputPassword({
  id,
  name,
  label,
  placeholder,
  error,
  showStrength = false,
}: InputPasswordProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [strength, setStrength] = useState("none");

  const EyeIcon = isVisible ? FaRegEyeSlash : FaRegEye;

  const updateStrength = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length === 0) setStrength("none");
    else setStrength(calculateStrength(value));
  };

  return (
    <div className="form-column">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={isVisible ? "text" : "password"}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          updateStrength(event);
        }}
        className={error ? "input-error-border" : ""}
        autoComplete="new-password"
      />
      {error && <div className="input-error">{error}</div>}
      {showStrength && (
        <div className="password-strength">
          <div className={`password-strength-bar ${strength}`}></div>
        </div>
      )}
      <div className="password-visibility">
        <EyeIcon onClick={() => setIsVisible(!isVisible)} />
      </div>
    </div>
  );
}
