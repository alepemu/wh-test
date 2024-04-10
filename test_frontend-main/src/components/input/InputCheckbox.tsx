import "../../styles/components/input.scss";

import type { InputCheckboxProps } from "../../types";

export default function InputCheckbox({
  id,
  label,
  checked,
  onChange,
}: InputCheckboxProps) {
  return (
    <div className="input-check">
      <input id={id} type="checkbox" checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
