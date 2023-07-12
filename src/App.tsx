import React, { useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useKeycloak } from "@react-keycloak/web";

function App() {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  const login = useCallback(() => {
    keycloak?.login();
  }, [keycloak]);

  const logout = useCallback(() => {
    keycloak?.logout();
  }, [keycloak]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{isLoggedIn ? "Авторизован" : "Сижу на перевернутом стуле"}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {!isLoggedIn && <button onClick={login}>Войти в историю</button>}
        {isLoggedIn && <button onClick={logout}>Выйти как разбийник</button>}
      </header>
    </div>
  );
}

export default App;
