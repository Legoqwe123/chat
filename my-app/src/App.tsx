import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProtectedChatPage from "./pages/chat.page";

import { Main } from "./components/main/main";
import { AuthContext } from "./context/auth.context";
import { Header } from "./components/header/header";
import { authStore } from "./store/auth.store";
import { Authorization } from "./components/authorization/authorization";
import { Routes } from "./core/constants";

export const App = (): React.ReactElement => {
  return (
    <AuthContext.Provider value={authStore}>
      <Router>
        <Header />
        <Switch>
          <Route exact path={Routes.MAIN}>
            <Main />
          </Route>
          <Route path={Routes.LOGIN}>
            <Authorization />
          </Route>
          <Route path={Routes.CHAT}>
            <ProtectedChatPage />
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};
