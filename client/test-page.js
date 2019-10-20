import React from "react";
import { useHistory } from "react-router-dom";

const TestPage = () => {
  const history = useHistory();
  console.log(history);
  return <div>Test Page</div>;
};

export default TestPage;
