import React from "react";

export default function CombatUI(props) {
  const character = props.character;

  const combatContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "20%",
    justifyContent: 'space-evenly',
    flex: '1'
  };

  const combatStatContainerStyle = {
    display: "flex",
    flexDirection: "row",
    marginTop: '5%'
  };

  const combatStatStyle = {
    flex: "1",
    flexDirection: "column"
  };

  return (
    <div style={combatContainerStyle}>
      <div className="container" style={combatStatContainerStyle}>
        <div style={combatStatStyle}>
          <h1 style={{ fontSize: "20px" }}>Dodge</h1>
          <p>{character.health}10</p>
        </div>
        <div style={combatStatStyle}>
          <h1 style={{ fontSize: "20px" }}>Might</h1>
          <p>{character.health}10</p>
        </div>
        <div style={combatStatStyle}>
          <h1 style={{ fontSize: "20px" }}>Strike</h1>
          <p>{character.health}10</p>
        </div>
      </div>
      <div className="container" style={combatStatContainerStyle}>
        <div style={combatStatStyle}>
          <h1 style={{ fontSize: "20px" }}>Health</h1>
          <p>{character.health}10</p>
        </div>
      </div>
    </div>
  );
}
