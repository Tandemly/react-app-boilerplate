// @flow
import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

import "./styles/index.scss";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
