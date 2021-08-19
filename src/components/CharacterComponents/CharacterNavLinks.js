import React from "react";

export default function CharacterNavLinks(props) {
  const navLinkStyle = {
    color: "#71f1e8",
    marginRight: "10%",
    cursor: "pointer",
    fontSize: "20px",
    maxHeight: '50px'
  };

  return (
    <div className="flexBoxColumn flexGrow1" style={{justifyContent: 'flex-start', borderTop: '1px solid #71f1e8', paddingTop: '20px'}}>
      <a
        className="flexGrow1 textGlow"
        style={navLinkStyle}
        href="#overviewSection"
      >
        Overview
      </a>
      <a
        className="flexGrow1 textGlow"
        style={navLinkStyle}
        href="#inventorySection"
      >
        Inventory
      </a>
      <a
        className="flexGrow1 textGlow"
        style={navLinkStyle}
        href="#classSection"
      >
        Class
      </a>
    </div>
  );
}
