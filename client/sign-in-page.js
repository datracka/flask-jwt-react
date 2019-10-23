import React from "react";
import { useLocation } from "react-router-dom";
import { toObject } from "utils/query-string-helpers";
import {
  TOKEN_KEY,
  saveInLocalStorage,
  getFromLocalStorage,
} from "utils/local-storage";
import {
  getProtectedPagePath,
  getLoginAction,
  getSignInPagePath,
} from "paths";

const SignInPage = () => {
  const location = useLocation();
  React.useEffect(() => {
    const params = toObject(location.search);
    const token = getFromLocalStorage(TOKEN_KEY);
    console.log("token: ", params.token || token);
    if (params.token || token) {
      saveInLocalStorage(TOKEN_KEY, params.token);
      // window.location.href = getProtectedPagePath();
    }
  }, []);
  const onClick = () => {
    console.log("login", getLoginAction());
    window.location.href = getLoginAction();
  };
  return (
    <React.Fragment>
      <button onClick={onClick}>
        <span>sign in using</span>
      </button>
    </React.Fragment>
  );
};

export default SignInPage;
