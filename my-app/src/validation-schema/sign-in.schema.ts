import * as yup from "yup";
import { validateMsg } from "../core/constants";
import { emptyStringToNull } from "../core/utils";

export const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .transform(emptyStringToNull)
    .email(validateMsg.email.notValid)
    .required(validateMsg.required),
  password: yup
    .string()
    .min(6, validateMsg.password.length(6))
    .required(validateMsg.required),
});
