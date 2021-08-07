import React from "react";

export default function Weapon(props) {
  const getRarityColour = () => {
    let colour = "";
    switch (props.weapon.quality) {
      case "Basic":
        colour = "#00ffff";
        break;

      case "Refined":
        colour = "#00ff00";
        break;

      case "Superior":
        colour = "#e600e6";
        break;

      case "Mythic":
        colour = "#ffcc00";
        break;
    }
    return colour;
  };

  const getWeaponType = () => {
    let src = "";
    switch (props.weapon.weapon_type) {
      case "Melee":
        src = "/images/weaponImg/knife.png";
        break;

      case "Short Range":
        src = "/images/weaponImg/revolver-2.png";
        break;

      case "Medium Range":
        src = "/images/weaponImg/knife.png";
        break;

      case "Long Range":
        src = "/images/weaponImg/knife.png";
        break;
    }
    return src;
  };

  const weaponContainer = {
    width: "100%",
    height: "auto",
    color: "#66FCF1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: "1em",
    fontSize: "20px",
    padding: "0",
  };

  const statItem = {
    padding: "0.5em",
    margin: "0",
    flex: "1",
  };

  const descriptionStyle = {
    fontStyle: "italic",
    fontSize: "15px",
    paddingTop: "0",
    background: "#224e4c",
    color: "#66FCF1",
    margin: "0",
    padding: "1em",
    flexGrow: "3",
  };

  const weaponInfo = {
    flex: 2,
  };

  const weaponIcon = {
    height: "40px",
    paddingBottom: "5px",
  };

  const weapon = props.weapon;

  return (
    <div className="flexBoxColumn" style={{ textAlign: "center" }}>
      <div className="containerDark flexGrow1" style={{paddingTop: '20px'}}>
      <img
        src={getWeaponType()}
        style={{ maxWidth: '80%',
          maxHeight:'80%' }}
      />
      </div>

      <h1 className="flexGrow1">{weapon.name}</h1>
      <p>{weapon.weapon_type}</p>
      <div className="flexBoxRow flexGrow1">
        <div style={statItem}>
          <p>AIM</p>
          <p>{weapon.proficiency}</p>
        </div>
        <div style={statItem}>
          <p>DICE</p>
          <p>{weapon.dice_qty + "d" + weapon.dice_type}</p>
        </div>
        <div style={statItem}>
          <p>AMMO</p>
          <p>{weapon.ammo}</p>
        </div>
        <div style={statItem}>
          <p>TYPE</p>
          <p>{weapon.damage_type}</p>
        </div>
        <div style={statItem}>
          <p>RANGE</p>
          <p>{weapon.range}</p>
        </div>
      </div>
      <p style={descriptionStyle}>{weapon.description}</p>
    </div>
  );
}
