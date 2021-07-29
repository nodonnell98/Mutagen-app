import React, { useState, useEffect, useCallback } from "react";
import CharacterService from "../../services/character.service";
import TraitCards from "../CharacterComponents/Traits/TraitCards";
import Skills from "../CharacterComponents/Skills";
import CombatUI from "../CharacterComponents/CombatUI";

export default function Character(props) {
  const [character, setCharacter] = useState([]);
  const [traits, setTraits] = useState([]);
  const [skills, setSkills] = useState([]);
  const id = props.id.match.params.id;

  const characterContainerStyle = {
    display: "flex",
    width: "100%",
    padding: "5%",
    paddingTop: "1%",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "flex-start",
  };

  const sectionStyle = {
      marginTop: '1%'
  };

  const retrieveCharacter = useCallback(() => {
    CharacterService.get(id).then((response) => {
      setCharacter(response.data);
      setTraits(Object.keys(response.data.traits));
      setSkills(Object.keys(response.data.skills));
    });
  }, [setCharacter, setTraits, setSkills]);

  // Fetch list of character on load
  useEffect(() => {
    retrieveCharacter();
  }, [retrieveCharacter]);

  return (
    <div style={characterContainerStyle}>
      <section style={sectionStyle, {borderBottom: '1px solid #66FCF1'}} className="flexBoxRow flexGrow1">
        <h1 style={{color: '#66FCF1'}}>{character.name} - CLASS</h1>
      </section>
      <section style={sectionStyle, {marginBottom: '2%'}} className="flexBoxRow flexGrow1">
        <TraitCards traits={traits} character={character}></TraitCards>
      </section>
      <section style={sectionStyle} className="flexBoxRow flexGrow1">
        <Skills skills={skills} character={character}></Skills>
        <span className="flexGrow1"></span>
        <CombatUI character={character}></CombatUI>

      </section>
    </div>
  );
}
