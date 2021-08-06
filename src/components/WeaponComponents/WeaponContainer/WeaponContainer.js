import React, { Component } from "react";
import Weapon from "../Weapon";
import AddCharacterWeapon from "./AddCharacterWeapon";

export default function WeaponContainer(props) {
  const weapon = props.weapon;

  const weaponContainerStyle = {
    marginLeft: "1em",
    height: "475px",
    width: "40%",
    display: "flex",
    justifyContent: "start",
    flexDirection: "column",
    padding: "0",
  };

  const containerNav = {
    width: "100%",
    height: "10%",
    backgroundColor: "transparent",
    borderBottom: "2px solid #66FCF1",
    display: "flex",
    flexBasis: "10%",
  };
  //

  return (
    <div className="container flexBoxColumn" style={weaponContainerStyle}>
      <div className="flexGrow1" role="group" style={containerNav}>
        <button style={{cursor: 'default'}}className="navBtn">Weapon</button>
      </div>
      <div className="flexGrow1 flexBoxColumn" style={{ flexGrow: "10", alignItems: 'center' }}>
        {weapon ? <Weapon weapon={weapon}></Weapon> : "Select a weapon"}
      </div>
      <div className="flexGrow1" role="group" style={containerNav}>
        { props.addCharacter ? <AddCharacterWeapon
          retrieveCharacterWeapons={props.retrieveCharacterWeapons}
          character={props.character}
          setModalIsOpenToFalse={props.setModalIsOpenToFalse}
          weapon={props.weapon}
        ></AddCharacterWeapon> : false}

      </div>
    </div>
  );
}
