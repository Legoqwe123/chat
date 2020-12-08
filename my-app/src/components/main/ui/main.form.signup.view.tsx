import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  FormLabel,
  Checkbox,
  Button,
  Typography,
  FormHelperText,
} from "@material-ui/core";
import { Form, FormikProps } from "formik";
import React from "react";

import { IStateForm } from "./main.form.signUp";
import classes from "../main.module.sass";

export const FormSignUpView = ({
  handleChange,
  values,
  errors,
}: FormikProps<IStateForm>): React.ReactElement => {
  return (
    <Form className={classes.form}>
      <Typography variant="h5" align="center" color="primary" paragraph>
        Welcome to our app
      </Typography>
      <TextField
        variant="outlined"
        label="Nickname"
        name="name"
        className={classes["input-label"]}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        value={values.name}
      ></TextField>
      <TextField
        variant="outlined"
        label="Password"
        name="password"
        className={classes["input-label"]}
        onChange={handleChange}
        type="password"
        error={!!errors.password}
        helperText={errors.password}
        value={values.password}
      ></TextField>
      <TextField
        variant="outlined"
        label="Email"
        name="email"
        className={classes["input-label"]}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        value={values.email}
      ></TextField>
      <FormLabel className={classes["radio-group"]}> Select sex</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={values.sex}
        onChange={handleChange}
      >
        <Box display="flex">
          <FormControlLabel
            value="female"
            control={<Radio color="primary" />}
            label="Female"
            name="sex"
          />
          <FormControlLabel
            value="male"
            control={<Radio color="primary" />}
            label="Male"
            name="sex"
          />
        </Box>
      </RadioGroup>
      <FormControlLabel
        control={
          <Checkbox
            name="onAcceptPolitic"
            onChange={handleChange}
            checked={values.onAcceptPolitic}
            color="primary"
          />
        }
        label="You agree with policy our website"
      />
      <FormHelperText error={!!errors.onAcceptPolitic}>
        {errors.onAcceptPolitic}
      </FormHelperText>
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        className={classes.button}
      >
        signUp
      </Button>
    </Form>
  );
};
