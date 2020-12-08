import React, { FC } from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import event from "@testing-library/user-event";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import { Header } from "./header";

import { AuthContext } from "../../context/auth.context";
import { authStore } from "../../store/auth.store";
import { getUrlPath } from "../../core/utils";
import { Routes } from "../../core/constants";

const LocationPathName = withRouter(
  ({ location }): React.ReactElement => (
    <div data-testid="location-pathname">{location.pathname}</div>
  )
);

describe("Test to header", () => {
  const body = { email: "sdasd@mail.ru", password: "540040" };

  beforeEach(() => {
    render(
      <Router>
        <AuthContext.Provider value={authStore}>
          <Header />
          <LocationPathName />
        </AuthContext.Provider>
      </Router>
    );
  });

  test("Check to right render", async () => {
    await screen.findByText("SignUp");
    await screen.findByText("Login");
  });

  test("Check to change button at auth", async () => {
    await authStore.signIn(body);

    await screen.findByText("Logout");
  });

  test("Check to logout button", async () => {
    event.click(await screen.findByText("Logout"));

    await screen.findByText("SignUp");
    await screen.findByText("Login");
  });

  test("Check to navigation signUp", async () => {
    const signUp = await screen.findByText("SignUp");

    event.click(signUp);

    expect(screen.getByTestId("location-pathname")).toHaveTextContent(
      Routes.MAIN
    );
  });

  test("Cech to navigation login", async () => {
    const login = await screen.findByText("Login");

    event.click(login);

    expect(screen.getByTestId("location-pathname")).toHaveTextContent(
      Routes.LOGIN
    );
  });
});
