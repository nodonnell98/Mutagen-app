import React from 'react';
import TraitCards from "./Traits/TraitCards";
import Skills from "./Skills";
import CombatUI from "./CombatUI";
import CharacterNotes from "./CharacterNotes";

export default function CharacterStats(props) {
  const character = props.character
  const edit = props.edit

  const sectionStyle = {
    marginTop: "1%",
  };
  return (
    <div>
      <section
        style={(sectionStyle, { marginBottom: "2%" })}
        className="flexBoxRow flexGrow1"
      >
        <TraitCards
          edit={edit}
          character={character}
          setCharacter={props.setCharacter}
        ></TraitCards>
      </section>
      <section style={sectionStyle} className="flexBoxRow flexGrow1">
        <CharacterNotes character={character} edit={edit} setCharacter={props.setCharacter} className="flexGrow1"></CharacterNotes>
        <Skills character={character}></Skills>
        <CombatUI character={character}></CombatUI>
      </section>
    </div>
  )
}
