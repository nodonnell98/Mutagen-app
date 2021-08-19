import React from "react";

export default function Weapon(props) {

  const getRarityColour = () => {
    let colour = "";
    switch (props.weapon.quality) {
      case "Basic":
        colour = "#00ffff";
        break;

      case "Refined":
        colour = "#a1fc66";
        break;

      case "Superior":
        colour = "#cbb5ff";
        break;

      case "Mythic":
        colour = "#fcc966";
        break;

      default: colour = "#00ffff";
    }
    let color = {
      color: colour
    }
    return color
  };

  const getWeaponType = () => {
    let src = "";
    switch (props.weapon.weapon_type) {
      case "Melee":
        src = "/images/weaponImg/knife.png";
        break;

      case "Short Range":
        src = "/images/weaponImg/revolver3.png";
        break;

      case "Medium Range":
        src = "/images/weaponImg/bat.png";
        break;

      case "Long Range":
        src = "/images/weaponImg/sniper.png";
        break;

      default:  src = "/images/weaponImg/knife.png";
    }
    return src;
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
    color: "#71f1e8",
    margin: "0",
    padding: "1em",
    flexGrow: "3",
  };

  const weapon = props.weapon;

  return (
    <div className="flexBoxColumn" style={{ textAlign: "center" }}>
      <div className="containerDark flexGrow1" style={{paddingTop: '20px'}}>
      <img
        src={getWeaponType()}
        alt="weapon art"
        style={{ maxWidth: '80%',
          maxHeight:'80%' }}
      />
      </div>

      <h1 className="flexGrow1" style={getRarityColour()}>{weapon.name}</h1>
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
