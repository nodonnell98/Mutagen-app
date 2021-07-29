import React, { useState, useEffect, useCallback } from "react";
import CharacterService from "../../services/character.service";
import TraitCards from "../CharacterComponents/Traits/TraitCards";
import Skills from "../CharacterComponents/Skills";

export default function Character(props) {
  const [character, setCharacter] = useState([]);
  const [traits, setTraits] = useState([]);
  const [skills, setSkills] = useState([]);
  const id = props.id.match.params.id;

  const characterContainerStyle = {
    display: 'flex',
    width: '100%',
    padding: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

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
      <TraitCards traits={traits} character={character}></TraitCards>
      <Skills skills={skills} character={character}></Skills>
    </div>
  );
}
