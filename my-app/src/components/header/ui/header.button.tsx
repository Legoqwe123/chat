import { FC } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react";

import { useAuthContext } from "../../../context/auth.context";
import { Routes } from "../../../core/constants";

export const HeaderButton: FC = observer(() => {
  const { isAuth, signOut } = useAuthContext();
  const history = useHistory();

  return (isAuth !== null &&
    (isAuth ? (
      <Button color="inherit" onClick={signOut}>
        Logout
      </Button>
    ) : (
      <>
        <Button color="inherit" onClick={() => history.push(Routes.LOGIN)}>
          Login
        </Button>
        <Button color="inherit" onClick={() => history.push(Routes.MAIN)}>
          SignUp
        </Button>
      </>
    ))) as React.ReactElement;
});
