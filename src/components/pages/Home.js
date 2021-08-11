import React, {useState} from "react";
import TypedText from "../layout/TypedText";
import { Link } from "react-router-dom";
import AuthenticationService from "../../services/authentication.service";

export default function Home() {
  const textStyle = {
    color: "#71f1e8",
    position: "absolute",
    top: "30%",
    left: "10%",
    fontSize: "20px",
    fontFamily: "Orbitron, sans-serif",
    alignItems: "flex-start"
  };

  const buttonStyle = {
    backgroundColor: "#71f1e8",
    border: "none",
    padding: "10px",
    borderRadius: "40px",
    paddingLeft: "20px",
    paddingRight: "20px",
  };

  const homeContainerStyle = {
    width: '100vh',
    height: '100vh',
  }

  const [buttonTxt, setButtonTxt] = useState(false)

  return (
    <div className="flexBoxRow" style={homeContainerStyle}>
      <img className="splash" src="/images/splash.jpg"></img>
      <div className="flexBoxColumn flexGrow1" style={textStyle}>
        <TypedText></TypedText>
        <p style={{textShadow: '1px 2px 4px #000000'}}>Explore this site and discover a new way of playing</p>
        <p style={{textShadow: '1px 2px 4px #000000'}}>Completely free, completely fun, completely future</p>
        {AuthenticationService.loggedIn() ? null: <Link className="primary-button fill" to="/register">Register</Link> }
      </div>
      <div className="flexGrow1">
      </div>
    </div>
  );
}
