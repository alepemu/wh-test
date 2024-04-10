import { Dispatch, SetStateAction } from "react";

export type UserFormFields = {
  username?: string;
  password?: string;
  pwRepeat?: string;
  pwHint?: string;
};

export type userFormProps = {
  onBack: () => void;
  onNext: () => void;
};

export type InputCheckboxProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
};

export type InputProps = {
  id: string;
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  maxLength?: number;
  showCount?: boolean;
  info?: string;
};

export type InputPasswordProps = {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
  showStrength?: boolean;
};

export type StepContextProps = [number, Dispatch<SetStateAction<number>>];
