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
      {/* <div className="flexGrow1" role="group" style={containerNav}>
        <button style={{cursor: 'default'}}className="navBtn">Weapon</button>
      </div>
      <div className="flexGrow1 flexBoxColumn" style={{ flexGrow: "5", alignItems: 'center' }}>
        {weapon ? <Weapon weapon={weapon}></Weapon> : "Select a weapon"}
      </div>
      <div className="flexGrow1" role="group" style={containerNav}>
        { props.addCharacter ? <AddCharacterWeapon
          retrieveCharacterWeapons={props.retrieveCharacterWeapons}
          character={props.character}
          setModalIsOpenToFalse={props.setModalIsOpenToFalse}
          weapon={props.weapon}
        ></AddCharacterWeapon> : false}

      </div> */}
    </div>
  );
}
