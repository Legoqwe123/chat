import { observer } from "mobx-react";
import React, { FC, Fragment } from "react";
import { Redirect } from "react-router-dom";

import { useAuthContext } from "../context/auth.context";

export const withAuth = (WrappedComponent: FC): FC =>
  observer((props) => {
    const { isAuth } = useAuthContext();

    return (
      <Fragment>
        {isAuth !== null &&
          (isAuth ? <WrappedComponent {...props} /> : <Redirect to="/" />)}
      </Fragment>
    );
  });
