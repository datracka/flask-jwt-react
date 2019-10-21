import React from "react";
import { useHistory } from "react-router-dom";

const ProtectedPage = () => {
  const history = useHistory();
  console.log(history);
  return <div>Test Page</div>;
};

export default ProtectedPage;
