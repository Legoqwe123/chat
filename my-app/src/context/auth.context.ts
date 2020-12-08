import React, { Context, useContext } from "react";

import { IAuth } from "../store/auth.store";

export const AuthContext = React.createContext({});

export const useAuthContext = (): IAuth =>
  useContext((AuthContext as unknown) as Context<IAuth>);
