import { Box } from "@material-ui/core";
import { AuthorizationForm } from "./ui/authorization.form";

export const Authorization = (): React.ReactElement => {
  return (
    <Box display="flex" height="80vh" alignItems="center">
      <AuthorizationForm></AuthorizationForm>
    </Box>
  );
};
