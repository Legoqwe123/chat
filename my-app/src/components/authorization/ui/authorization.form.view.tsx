import { TextField, Typography, Button } from "@material-ui/core";
import { FormikProps, Form } from "formik";

import { IStateForm } from "./authorization.form";
import classes from "../auth.module.sass";

export const AuthorizationFormView = ({
  values,
  handleChange,
  errors,
}: FormikProps<IStateForm>) => {
  return (
    <Form className={classes.form}>
      <Typography variant="h5" align="center" color="primary" paragraph>
        Sign in with email
      </Typography>

      <TextField
        variant="outlined"
        label="Email"
        name="email"
        className={classes.input}
        value={values.email}
        error={!!errors.email}
        helperText={errors.email}
        onChange={handleChange}
      ></TextField>
      <TextField
        variant="outlined"
        label="Password"
        name="password"
        value={values.password}
        error={!!errors.password}
        className={classes.input}
        helperText={errors.password}
        onChange={handleChange}
        type="password"
      ></TextField>

      <Button
        type="submit"
        variant="outlined"
        color="primary"
        className={classes.button}
      >
        signin
      </Button>
    </Form>
  );
};
