import React from "react";
import TraitCard from "../Traits/TraitCard"

export default function TraitCards(props) {
  const traits = props.traits;
  const character = props.character;

  const traitContainerStyle = {
    flexGrow: '2',
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: 'no-wrap'
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
