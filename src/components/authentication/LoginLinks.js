import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../../services/authentication.service";

export default function LoginLinks() {
  const [error, setError] = useState("");

  function handleLogout() {
    AuthenticationService.logout()
      .then(() => {
        window.location.replace("/");
      })
      .catch((e) => {
        setError(e.response.data.errors);
        console.log(error)
      });
  }

  if (AuthenticationService.loggedIn() === true) {
    return (
      <div>
        {/* <a style={navLink} onClick={(e) => displayUser()}>Account</a> */}
        <button
          className="primary-button fill"
          onClick={(e) => handleLogout()}
        >
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <Link className="primary-button login-link fill" to="/login">
        Sign In
      </Link>
    );
  }
}
