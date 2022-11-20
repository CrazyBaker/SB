import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "../App.tsx";

window.addEventListener("load", () => {
  //ReactDOM.hydrate(<Header />, document.getElementById("react_root"));
  //LS 2-2
  const root = ReactDOM.hydrateRoot(document.getElementById("react_root"), <App />);
});
