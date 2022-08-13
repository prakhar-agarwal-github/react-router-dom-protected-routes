import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../App";

const NavBar = () => {
  const history = useHistory();

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      history.push("/login");
    }

    history.push("/login");
  };

  return (
    <div style={{ marginBottom: "24px" }}>
      <div className="ui secondary pointing menu">
        <Link to="/home" className="item">
          Home
        </Link>
        <Link to="/settings" className="item">
          Settings
        </Link>

        <div className="right menu">
          <div
            className="ui item"
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          >
            {isLoggedIn ? "Log out" : "Log In"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
