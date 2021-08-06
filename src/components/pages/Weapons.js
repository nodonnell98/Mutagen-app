import React, { Component } from "react";
import WeaponList from "../WeaponComponents/WeaponList.js";

class Weapons extends Component {
  render() {
    return (
      <div style={pageContainer}>
        <h2 style={pageHeader}>Welcome to the Armoury</h2>
        <WeaponList></WeaponList>
      </div>
    );
  }
}

const pageHeader = {
  width: "100%",
  color: "#66FCF1",
  mnarginBottom: "0",
};

const pageContainer = {
  width: "80%",
};

export default Weapons;
