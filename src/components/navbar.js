import React from "react";
import { Link, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import { signout, isAuthenticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#1448a3" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = ({ history }) => (
  <nav className="navbar navbar-expand-lg  ">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link
          style={currentTab(history, "/add")}
          className="nav-link"
          to="/add"
        >
          Add Recipe
        </Link>
      </li>
    </ul>
  </nav>
);

export default withRouter(Menu);
