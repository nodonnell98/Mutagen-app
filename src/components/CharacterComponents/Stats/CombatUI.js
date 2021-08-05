import React, { useEffect, useState, useCallback } from "react";
import classificationService from "../../../services/classification.service";

export default function CombatUI(props) {
  const character = props.character;
  const [classification, setClassification] = useState({
    strike_stat: 'strength',
    might_stat: 'strength',
    dodge_stat: 'strength'
  })


  const combatStatContainerStyle = {
    marginTop: '5%'
  };

  const retrieveClass = useCallback(() => {
    classificationService.get(character.classification_ids[0]).then((res) => {
      setClassification(res.data)
      console.log(character.traits[classification.strike_stat])
    })
  }, [setClassification])

   // Fetch list of characters on load
   useEffect(() => {
    retrieveClass();

  }, [retrieveClass]);


  return (
    <div className="flexBoxColumn flexGrow1 container">
      <div className="flexBoxRow flexGrow1" style={combatStatContainerStyle, {width:'100%', marginTop: '5%', borderBottom: '1px solid #66FCF1'}}>
        <div className="flexBoxColumn flexGrow1" >
          <h1 style={{ fontSize: "20px" }}>Dodge</h1>
          <p>{Math.floor(5 + (character.traits[classification.dodge_stat] / 5))}</p>
        </div>
        <div className="flexBoxColumn flexGrow1">
          <h1 style={{ fontSize: "20px" }}>Might</h1>
          <p>{Math.floor(character.traits[classification.might_stat] / 10)}</p>
        </div>
        <div className="flexBoxColumn flexGrow1">
          <h1 style={{ fontSize: "20px" }}>Strike</h1>
          <p>{Math.floor(character.traits[classification.strike_stat] / 10)}</p>
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
