import React from "react";

export default function CombatUI(props) {
  const character = props.character;

  const combatStatContainerStyle = {
    marginTop: '5%'
  };

  return (
    <div className="flexBoxRow flexGrow1">
      <div className="container flexBoxRow" style={combatStatContainerStyle, {width: '60%'}}>
        <div className="flexBoxColumn flexGrow1" >
          <h1 style={{ fontSize: "20px" }}>Dodge</h1>
          <p>{character.health}10</p>
        </div>
        <div className="flexBoxColumn flexGrow1">
          <h1 style={{ fontSize: "20px" }}>Might</h1>
          <p>{character.health}10</p>
        </div>
        <div className="flexBoxColumn flexGrow1">
          <h1 style={{ fontSize: "20px" }}>Strike</h1>
          <p>{character.health}10</p>
        </div>
      </div>
      <div className="container" style={combatStatContainerStyle, {width: '30%'}}>
        <div className="flexBoxColumn flexGrow1">
          <h1 style={{ fontSize: "20px" }}>Health</h1>
          <p>{character.health}10</p>
        </div>
      </div>
    </div>
  );
}
