import React from "react";
import TraitCard from "./TraitCard"

export default function TraitCards(props) {
  const character = props.character;
  const traits = Object.keys(character.traits)

  return (
    <div className="flexBoxRow flexGrow2 fadeIn">
      {traits.map((trait, i) => {
        return (
          <TraitCard key={i} setCharacter={props.setCharacter} trait={trait} edit={props.edit} value={character.traits[trait]} character={character}></TraitCard>
        );
      })}
    </div>
  );
}
