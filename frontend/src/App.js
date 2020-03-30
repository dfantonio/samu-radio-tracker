import React from "react";

import { ApplyProvider } from "./HigherOrder";
import Routes from "./routes";

const App = () => {
  return <Routes />;
};

export default ApplyProvider(App);
