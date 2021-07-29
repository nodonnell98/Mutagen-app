import React from "react";
import TraitCard from "../Traits/TraitCard"

export default function TraitCards(props) {
  const traits = props.traits;
  const character = props.character;

  return (
    <div className="flexBoxRow flexGrow2">
      {traits.map((trait) => {
        return (
          <TraitCard trait={trait} edit={props.edit} value={character.traits[trait]} character={character}></TraitCard>
        );
      })}
    </div>
  );
}
