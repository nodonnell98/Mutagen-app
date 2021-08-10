import React, { Component } from "react";
import WeaponList from "../WeaponComponents/WeaponList.js";

class Weapons extends Component {
  render() {
    return (
      <div style={pageContainer}>
        <img className="splash blur" src="/images/cards.jpg"></img>
        <h2 style={pageHeader}>Welcome to the Armoury</h2>
        <WeaponList></WeaponList>
      </div>
    );
  }
}

const pageHeader = {
  width: "100%",
  color: "#71f1e8",
  mnarginBottom: "0",
};

const pageContainer = {
  width: "80%",
  marginTop: '10vh'
};

export default Weapons;
