import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../../services/authentication.service";

export default function LoginLinks() {
  const [error, setError] = useState("");

  const navLink = {
    marginLeft: "1em",
    marginRight: "1em",
  };

  const links = {
    flex: 3,
  };

  function handleLogout() {
    AuthenticationService.logout()
      .then(() => {
        window.location.replace("/");
      })
      .catch((e) => {
        // setError(e.response.data.errors);
      });
  }

  if (AuthenticationService.loggedIn() == true) {
    return (
      <div>
        {/* <a style={navLink} onClick={(e) => displayUser()}>Account</a> */}
        <a style={navLink} onClick={(e) => handleLogout()}>
          Logout
        </a>
      </div>
    );
  } else {
    return (
      <div style={links}>
        <Link style={navLink} to="/login">
          Login
        </Link>
        |
        <Link style={navLink} to="/register">
          Register
        </Link>
      </div>
    );
  }
}
