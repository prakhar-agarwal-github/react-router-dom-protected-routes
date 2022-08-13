import React, { useContext } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { AuthContext } from "../App";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);
  };

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  console.log(isLoggedIn);

  const { state } = useLocation();

  if (isLoggedIn) {
    return <Redirect to={state?.from || "/home"} />;
  }

  return (
    <div style={{ width: "30%", margin: "0 auto" }}>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Username</label>
          <input type="text" name="user-name" placeholder="Enter username" />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter password" />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
