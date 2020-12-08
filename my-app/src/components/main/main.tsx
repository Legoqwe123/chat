import { Box } from "@material-ui/core";
import { observer } from "mobx-react";

import { FormSignUp } from "./ui/main.form.signUp";

export const Main = observer(
  (): React.ReactElement => {
    return (
      <Box display="flex" height="80vh" alignItems="center">
        <FormSignUp />
      </Box>
    );
  }
);
