import React from "react";

export default function Home() {
  const textStyle = {
    color: "#66FCF1",
    position: "absolute",
    top: "30%",
    left: "10%",
    fontSize: "20px",
    fontFamily: "Orbitron, sans-serif",
    alignItems: "flex-start"
  };

  const buttonStyle = {
    backgroundColor: "#66FCF1",
    border: "none",
    padding: "10px",
    borderRadius: "40px",
    paddingLeft: "20px",
    paddingRight: "20px",
  };

  const homeContainerStyle = {
    width: '100vh',
    height: '100vh'
  }

  return (
    <div className="flexBoxRow" style={homeContainerStyle}>
      <div className="flexBoxColumn flexGrow1" style={textStyle}>
        <h1 className="flexGrow1">The TTRPG of the</h1>
        <h1 className="flexGrow1" style={{fontWeight: 'bold'}}>FUTURE</h1>
        <p>A game like you have never experienced before</p>
        <p>Enjoy the award winning game: Mutagen</p>
        <button style={buttonStyle}>Learn more</button>
      </div>
      <div className="flexGrow1">
        {/* <img src="/images/stock.jpg" style={imgStyle} ></img> */}
      </div>
    </div>
  );
}
