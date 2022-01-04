import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "./style.css";

function logout(e) {
  e.preventDefault();
  Auth.logout();
}

function Nav() {
  return (
    <ul className="nav-bar">
      <li>
        <Link to="/about" className="nav-link">
          ABOUT
        </Link>
        <Link to="/trade" className="nav-link">
          TRADE
        </Link>
        <a
          href="https://www.gofundme.com/f/utahpermaculture"
          className="nav-link"
        >
          DONATE
        </a>
        {Auth.loggedIn() ? (
          <>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            <a href="/" className="nav-link" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              LOGIN
            </Link>
          </>
        )}
      </li>
    </ul>
  );
}

export default Nav;
