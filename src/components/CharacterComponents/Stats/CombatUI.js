import React from "react";

export default function CombatUI(props) {
  const character = props.character;

  const combatStatContainerStyle = {
    marginTop: '5%'
  };

  console.log(character.traits)
  console.log(character.classification_ids[0])


  return (
    <div className="flexBoxColumn flexGrow1 container">
      <div className="flexBoxRow flexGrow1" style={combatStatContainerStyle, {width:'100%', marginTop: '5%', borderBottom: '1px solid #66FCF1'}}>
        <div className="flexBoxColumn flexGrow1" >
          <h1 style={{ fontSize: "20px" }}>Dodge</h1>
          <p>{Math.floor(character.traits.strength / 5)}</p>
        </div>
        <div className="flexBoxColumn flexGrow1">
          <h1 style={{ fontSize: "20px" }}>Might</h1>
          <p>{Math.floor(character.traits.strength / 10)}</p>
        </div>
        <div className="flexBoxColumn flexGrow1">
          <h1 style={{ fontSize: "20px" }}>Strike</h1>
          <p>{Math.floor(character.traits.discipline / 5)}</p>
        </div>
      </div>
      <div className="flexGrow1 " style={combatStatContainerStyle}>
        <div className="flexBoxColumn flexGrow1">
          <h1 style={{ fontSize: "20px" }}>Health</h1>
          <p>{Math.floor(character.traits.constitution / 10) + 10}</p>
        </div>
      </div>
    </div>
  );
}
