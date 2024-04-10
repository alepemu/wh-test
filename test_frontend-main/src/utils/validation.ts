import { UserFormFields } from "../types";

export default function validateUserForm(
  username?: string,
  password?: string,
  pwRepeat?: string
): UserFormFields {
  const validationErrors: UserFormFields = {};

  const usernameError = validateUsername(username);
  if (usernameError) validationErrors.username = usernameError;

  const passwordError = validatePassword(password);
  if (passwordError) validationErrors.password = passwordError;

  const passwordRepeatError = validatePasswordRepeat(password, pwRepeat);
  if (passwordRepeatError) validationErrors.pwRepeat = passwordRepeatError;

  return validationErrors;
}

function validateUsername(username?: string) {
  if (!username) return "El campo es obligatorio.";
  if (username.length < 6) return "Al menos 6 caracteres.";
  if (username.length > 24) return "No mas de 24 caracteres.";
  return undefined;
}

function validatePassword(password?: string) {
  if (!password) return "El campo es obligatorio.";
  else {
    if (password.length < 8) return "Al menos 8 caracteres.";
    if (password.length > 24) return "No mas de 24 caracteres.";
    const hasNumber = /[0-9]/.test(password);
    const hasUppercaseLetter = /[A-Z]/.test(password);
    if (!hasNumber || !hasUppercaseLetter) {
      return "Debe contener al menos un número y una letra mayúscula.";
    }
    return undefined;
  }
}

function validatePasswordRepeat(password?: string, pwRepeat?: string) {
  if (password !== pwRepeat) return "Las contraseñas no coinciden.";
  return undefined;
}
