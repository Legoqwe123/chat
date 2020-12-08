import { Formik, FormikHelpers, FormikProps } from "formik";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";

import { AuthorizationFormView } from "./authorization.form.view";

import { useAuthContext } from "../../../context/auth.context";
import { SignInSchema } from "../../../validation-schema/sign-in.schema";
import { TFirebaseUser } from "../../../core/firebase";
import { Routes } from "../../../core/constants";

export interface IStateForm {
  password: string;
  email: string;
}

export const AuthorizationForm = observer(() => {
  const history = useHistory();
  const { signIn } = useAuthContext();

  const initialStateForm = {
    email: "",
    password: "",
  };

  const handleSubmitAsync = async (
    values: IStateForm,
    actions: FormikHelpers<IStateForm>
  ) => {
    try {
      const response = (await signIn(values)) as TFirebaseUser;

      if (response.user) {
        actions.resetForm();
        history.push(Routes.CHAT);
      }
    } catch (error) {
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialStateForm}
      onSubmit={handleSubmitAsync}
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={SignInSchema}
      component={(props: FormikProps<IStateForm>) => (
        <AuthorizationFormView {...props}></AuthorizationFormView>
      )}
    ></Formik>
  );
});
