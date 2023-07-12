import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import UserService from "./kk";
// import Keycloak from "keycloak-js";

// const k = new Keycloak({
//   url: "http://localhost:8085/auth",
//   realm: "master",
//   clientId: "EgorCreed",
// });

// const eventLogger = (event: unknown, error: unknown) => {
//   console.log("onKeycloakEvent", event, error);
// };

// const tokenLogger = (tokens: unknown) => {
//   console.log("onKeycloakTokens", tokens);
// };

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <ReactKeycloakProvider
      authClient={k}
      onEvent={eventLogger}
      onTokens={tokenLogger}
    > */}
    <App />
    {/* </ReactKeycloakProvider> */}
  </React.StrictMode>
);
UserService.initKeycloak(() => null);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
