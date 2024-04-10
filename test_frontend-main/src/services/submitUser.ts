import { Dispatch, FormEvent, SetStateAction } from "react";
import axios from "axios";

import { UserFormFields } from "../types";
import validateUserForm from "../utils/validation";

type SetErrorsFunction = Dispatch<SetStateAction<UserFormFields>>;

export const submitUser = async (
  event: FormEvent<HTMLFormElement>,
  setErrors: SetErrorsFunction
) => {
  event.preventDefault();
  setErrors({});

  const formData = new FormData(event.currentTarget);
  const { username, password, pwRepeat, pwHint } = Object.fromEntries(
    formData
  ) as UserFormFields;

  const validationErrors: UserFormFields = validateUserForm(
    username,
    password,
    pwRepeat
  );

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return null;
  }

  const url = "http://localhost:8080/create";
  const body = { username, password, pwHint };

  try {
    const response = await axios.post(url, body);
    if (response.status === 201) return "success";
  } catch (error) {
    console.error(error);
    alert("Error creating user");
  }
  return null;
};
