import React from "react";

export default function CombatUI(props) {
  const character = props.character;

  const combatContainerStyle = {
    display: "flex",
    flexDirection: "row",
    width: "30%",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexGrow: '1'
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
      <div className="container" style={combatStatContainerStyle, {width: '60%'}}>
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
      <div className="container" style={combatStatContainerStyle, {width: '30%'}}>
        <div style={combatStatStyle}>
          <h1 style={{ fontSize: "20px" }}>Health</h1>
          <p>{character.health}10</p>
        </div>
      </div>
    </div>
  );
}
