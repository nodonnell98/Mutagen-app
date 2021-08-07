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

  //

  return (
    <div className="container flexBoxColumn" style={weaponContainerStyle}>
      {weapon ? <Weapon weapon={weapon}></Weapon> : "Select a weapon"}
      { props.addCharacter ? <AddCharacterWeapon
          retrieveCharacterWeapons={props.retrieveCharacterWeapons}
          character={props.character}
          setModalIsOpenToFalse={props.setModalIsOpenToFalse}
          weapon={props.weapon}
        ></AddCharacterWeapon> : false}
    </div>
  );
}
