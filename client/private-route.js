import React from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import { useLocation } from "react-router-dom";
import { getSignInPagePath } from "paths";
import { TOKEN_KEY, getFromLocalStorage } from "utils/local-storage";

const PrivateRoute = ({
  component: Component,
  history,
  path,
  ...props
}) => {
  const location = useLocation();
  const [allowRender, setAllowRender] = React.useState(false);
  React.useEffect(() => {
    const token = getFromLocalStorage(TOKEN_KEY);
    if (!token && location.pathname === path) {
      window.location.href = getSignInPagePath();
    }
    setAllowRender(true);
  }, []);
  return allowRender ? (
    <Route {...props} path={path} exact component={Component} />
  ) : null;
};

export default withRouter(PrivateRoute);
