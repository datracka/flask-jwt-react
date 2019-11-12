import React from "react";
import { useHistory } from "react-router-dom";

const ProtectedPage = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div>Protected Page</div>
      <div>
        <a href="#">click to query API</a>
      </div>
    </React.Fragment>
  );
};

export default ProtectedPage;
