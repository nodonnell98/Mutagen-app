import React from "react";
import TraitCard from "../Traits/TraitCard"

export default function TraitCards(props) {
  const character = props.character;
  const traits = Object.keys(character.traits)

  return (
    <div className="flexBoxRow flexGrow2">
      {traits.map((trait) => {
        return (
          <TraitCard setCharacter={props.setCharacter} trait={trait} edit={props.edit} value={character.traits[trait]} character={character}></TraitCard>
        );
      })}
    </div>
  );
}
