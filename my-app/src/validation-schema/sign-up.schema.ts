/* eslint-disable */
import * as yup from "yup";

import { emptyStringToNull } from "../core/utils";
import { validateMsg } from "../core/constants";

export const SignUpValidationSchema = yup.object({
  name: yup
    .string()
    .transform(emptyStringToNull)
    .required(validateMsg.required),
  email: yup
    .string()
    .transform(emptyStringToNull)
    .email(validateMsg.email.notValid)
    .required(validateMsg.required),
  password: yup
    .string()
    .transform(emptyStringToNull)
    .min(6, validateMsg.password.length(6))
    .required(validateMsg.required),
  sex: yup.string().transform(emptyStringToNull),
  onAcceptPolitic: yup.boolean().oneOf([true], validateMsg.required),
});
