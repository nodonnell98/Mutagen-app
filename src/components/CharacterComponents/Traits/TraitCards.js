import React from "react";
import TraitCard from "../Traits/TraitCard"

export default function TraitCards(props) {
  const traits = props.traits;
  const character = props.character;

  const traitContainerStyle = {
    width: "50%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: 'wrap'
  };

  return (
    <div style={traitContainerStyle}>
      {traits.map((trait) => {
        return (
          <TraitCard trait={trait} value={character.traits[trait]}></TraitCard>
        );
      })}
    </div>
  );
}
