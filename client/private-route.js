import React from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import { getSignInPagePath } from "paths";

const PrivateRoute = ({
  component: Component,
  history,
  ...props
}) => {
  const [allowRender, setAllowRender] = React.useState(false);
  React.useEffect(() => {
    if (true) {
      // nothing
    }
    setAllowRender(true);
  }, []);
  return allowRender ? (
    <Route {...props} component={Component} />
  ) : null;
};

export default withRouter(PrivateRoute);
