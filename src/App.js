import React, { useContext, useState } from "react";
import Login from "./components/Login";
import "./App.css";
import Settings from "./components/Settings";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export const AuthContext = React.createContext(null);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/settings">
              <Settings />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
};

const PrivateRoute = ({ children, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default App;
