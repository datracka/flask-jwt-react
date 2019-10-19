import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getSignInPagePath, getTestPath } from "paths";
import SignInPage from "./sign-in-page";
import TestPage from "./test-page";

export default () => {
  return (
    <Router>
      <Route
        path={getSignInPagePath()}
        exact
        component={SignInPage}
      />
      <Route path={getTestPath()} exact component={TestPage} />
    </Router>
  );
};
