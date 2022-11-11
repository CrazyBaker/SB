import * as React from "react";
import * as ReactDom from "react-dom";
import { Header } from "./Header";

window.addEventListener("load", () => {
  ReactDOM.render(<Header />, document.getElementById("react_root"));
});
