import "../../styles/components/input.scss";

import { useState, ChangeEvent } from "react";
import { FaInfoCircle } from "react-icons/fa";

import type { InputProps } from "../../types";

export default function Input({
  id,
  name,
  type = "text",
  label,
  placeholder,
  error,
  maxLength,
  showCount,
  info,
}: InputProps) {
  const [count, setCount] = useState(0);

  return (
    <div className="form-column">
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
          {info && <FaInfoCircle className="input-info" title={info} />}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setCount(event.target.value.length)
        }
        placeholder={placeholder}
        autoComplete="off"
        className={error ? "input-error-border" : ""}
        maxLength={maxLength}
      />
      {error && <div className="input-error">{error}</div>}
      {showCount && (
        <div className="input-count">
          {count}/{maxLength}
        </div>
      )}
    </div>
  );
}
