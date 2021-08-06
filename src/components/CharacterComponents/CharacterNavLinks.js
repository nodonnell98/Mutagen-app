import React, { useEffect, useCallback } from "react";
import $ from "jquery";

export default function CharacterNavLinks(props) {
  const navLinkStyle = {
    color: "#66FCF1",
    marginRight: "10%",
    cursor: "pointer",
    fontSize: "20px",
  };

  return (
    <div className="flexBoxColumn flexGrow1">
      <a
        className="flexGrow1 textGlow grad"
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
