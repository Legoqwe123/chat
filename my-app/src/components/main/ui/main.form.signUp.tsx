import { Formik, FormikHelpers, FormikProps } from "formik";
import axios from "axios";

import { FormSignUpView } from "./main.form.signup.view";

import { getUrlPath } from "../../../core/utils";
import { SignUpValidationSchema } from "../../../validation-schema/sign-up.schema";

export interface IStateForm {
  sex: "male" | "female";
  name: string;
  email: string;
  password: string;
  onAcceptPolitic: boolean;
}

export const FormSignUp = (): React.ReactElement => {
  const initialStateForm: IStateForm = {
    sex: "female",
    name: "",
    email: "",
    password: "",
    onAcceptPolitic: false,
  };

  const handleSumbitAsync = async (
    values: IStateForm,
    actions: FormikHelpers<IStateForm>
  ) => {
    try {
      const { data, status } = await axios.post(
        getUrlPath("api/registartion"),
        values
      );

      if (data && status === 200) {
        actions.resetForm();
      }
    } catch (error) {
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialStateForm}
      onSubmit={handleSumbitAsync}
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={SignUpValidationSchema}
      component={(props: FormikProps<IStateForm>) => (
        <FormSignUpView {...props} />
      )}
    ></Formik>
  );
};
