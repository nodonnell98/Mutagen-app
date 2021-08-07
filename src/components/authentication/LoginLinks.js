import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../../services/authentication.service";

export default function LoginLinks() {
  const [error, setError] = useState("");

  const navLink = {
    marginLeft: "1em",
    marginRight: "1em",
    borderBackground: '#66FCF1'
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
        <a className="primary-button" onClick={(e) => handleLogout()}>
          Logout
        </a>
      </div>
    );
  } else {
    return (

        <Link className="primary-button" to="/login">
          Sign In
        </Link>

    );
  }
}
