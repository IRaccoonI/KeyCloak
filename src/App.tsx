import { useEffect, useState } from "react";
import "./App.css";
import UserService from "./kk";

function App() {
  const [, setKek] = useState(false);
  useEffect(() => {
    const i = setInterval(() => {
      setKek((k) => !k);
    }, 1000);

    return () => clearInterval(i);
  }, [setKek]);

  console.log(UserService.getToken());
  console.log(UserService.getUsername());

  return null;
  // if (!UserService.isLoggedIn()) return <Welcome />;

  // return <div>U'r {UserService.getUsername()}</div>;
}

const Welcome = () => (
  <div className="jumbotron">
    <h1>Hello Anonymous!</h1>
    <p className="lead">Please authenticate yourself!</p>
    <p>
      <button
        className="btn btn-lg btn-warning"
        onClick={() => UserService.doLogin()}
      >
        Login
      </button>
    </p>
  </div>
);

export default App;
