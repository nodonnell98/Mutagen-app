import React from "react";
import TypedText from "../layout/TypedText";

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

  return (
    <div className="flexBoxRow" style={homeContainerStyle}>
      <img className="splash" src="/images/splash.jpg"></img>
      <div className="flexBoxColumn flexGrow1" style={textStyle}>
        <TypedText></TypedText>
        <p style={{textShadow: '1px 2px 4px #000000'}}>Explore this site and discover a new way of playing</p>
        <p style={{textShadow: '1px 2px 4px #000000'}}>Completely free, completely fun, completely future</p>
        <button className="primary-button fill">Learn more</button>
      </div>
      <div className="flexGrow1">
        {/* <img src="/images/stock.jpg" style={imgStyle} ></img> */}
      </div>
    </div>
  );
}
