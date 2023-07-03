// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import "./css/App.css";
import "./css/StarWarsButtons.css"

import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(<App />, document.getElementById("root"));
