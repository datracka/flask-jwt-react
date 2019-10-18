import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getSignInPagePath } from "paths";
import SignInPage from "./sign-in-page";

export default () => {
  return (
    <Router>
      <Route
        path={getSignInPagePath()}
        exact
        component={SignInPage}
      />
    </Router>
  );
};
