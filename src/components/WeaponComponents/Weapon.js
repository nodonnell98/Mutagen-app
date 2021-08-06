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

  const getDamageType = () => {
    let src = "";
    switch (props.weapon.damage_type) {
      case "Cryo":
        src = "/images/weaponImg/knife.png";
        break;

      case "Kinetic":
        src = "/images/weaponImg/knife.png";
        break;

      case "Incendiary":
        src = "/images/weaponIcons/fire.png";
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
    fontSize: "small",
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

  const imgContainerStyle = {};

  const weaponName = () => {
    return {
      padding: "1em",
      display: "flex",
      margin: "0",
      alignItems: "center",
      justifyContent: "center",
      color: "black",
      flex: 8,
    };
  };

  const weapon = props.weapon;

  return (
    <div className="flexBoxColumn">
      <img
        src={getDamageType()}
        className="containerDark flexGrow1"
        style={{ transform: "scale(0.8)" }}
      />
      <h1 className="flexGrow1">{weapon.name}</h1>
      <p>{weapon.weapon_type}</p>
      <div className="flexBoxRow flexGrow1">
        <div style={statItem}>
          <p>AIM</p>
          <p>{weapon.proficiency}</p>
        </div>
        <div style={statItem}>
          <p>DICE</p>
          <p>{weapon.dice_qty + 'd' + weapon.dice_type}</p>
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
    // <div style={weaponContainer}>
    //   <div style={{ flexBasis: "50%", flexGrow: 1 }}>
    //     <div style={statItem}>
    //       <p
    //         style={{
    //           color: getRarityColour(),
    //         }}
    //       >
    //         {name}
    //       </p>
    //     </div>
    //     <div style={statItem}>
    //       <img src={getDamageType()} style={weaponKnife} />
    //     </div>
    //     <div style={weaponName()}>
    //       <div style={statItem}>
    //         <div style={weaponInfo}></div>
    //         <img src="/images/weaponIcons/aim.png" style={weaponIcon} />
    //         <p>{range}</p>
    //       </div>
    //       <div style={statItem}>
    //         <img src="/images/weaponIcons/dice.png" style={weaponIcon} />
    //         <p>
    //           {dice_qty}d{dice_type}+ {proficiency}
    //         </p>
    //       </div>
    //       <div style={statItem}>
    //         <img src="/images/weaponIcons/bullets.png" style={weaponIcon} />
    //         <p>{ammo}</p>
    //       </div>
    //     </div>
    //   </div>
    //   <p style={descriptionStyle}>"{description}"</p>
    // </div>
  );
}
