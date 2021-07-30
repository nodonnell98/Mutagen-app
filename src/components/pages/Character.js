import React, { useState, useEffect, useCallback } from "react";
import CharacterService from "../../services/character.service";

import DeleteCharacter from "../CharacterComponents/DeleteCharacter";

import CharacterNavLinks from "../CharacterComponents/CharacterNavLinks";
import CharacterStats from "../CharacterComponents/Stats/CharacterStats";

export default function Character(props) {
  const [character, setCharacter] = useState({
    id: 0,
    name: "Name",
    description: "Description",
    health: 0,
    dodge: 0,
    might: 0,
    strike: 0,
    speed: 0,
    flying_speed: 0,
    mutation_points: 0,
    traits: {
      strength: 20,
      discipline: 20,
      constitution: 20,
      intelligence: 20,
      sense: 20,
      will: 20,
      charm: 20,
    },
    skills: {
      strength: {
        athletics: 0,
        intimidation: 0,
        force: 0,
      },
      discipline: {
        acrobatice: 0,
        precision: 0,
        stealth: 0,
      },
      constitution: {
        endurance: 0,
        resistance: 0,
      },
      intelligence: {
        tech: 0,
        science: 0,
        investigation: 0,
      },
      sense: {
        perception: 0,
        insight: 0,
      },
      charm: {
        persuasion: 0,
        deception: 0,
        intimidation: 0,
      },
      weapons: {
        melee: 0,
        short_range: 0,
        medium_range: 0,
        long_range: 0,
      },
      strength: 20,
      discipline: 20,
      constitution: 20,
      intelligence: 20,
      sense: 20,
      will: 20,
      charm: 20,
    },
  });

  const [edit, setEdit] = useState(true);
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
    marginTop: "1%",
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    color: "#66FCF1",
    fontSize: "20px",
  };

  const handleEditClick = (e) => {
    let i;
    e.preventDefault();
    setEdit((prevEdit) => !prevEdit);
    edit ? i++ : CharacterService.update(id, character);
  };



  const retrieveCharacter = useCallback(() => {
    CharacterService.get(id).then((response) => {
      setCharacter(response.data);
      console.log(response.data);
    });
  }, [setCharacter]);

  // Fetch list of characters on load
  useEffect(() => {
    retrieveCharacter();
  }, [retrieveCharacter]);

  return (
    <div style={characterContainerStyle}>
      <section
        className="flexBoxRow flexGrow1"
        style={
          (sectionStyle,
          { borderBottom: "1px solid #66FCF1", alignItems: "center" })
        }
      >
        <h1 className="flexGrow1" style={{ color: "#66FCF1" }}>
          {character.name}
        </h1>
        <span className="flexGrow1"></span>
        <CharacterNavLinks></CharacterNavLinks>
        <span className="flexGrow3"></span>
        <div className="flexGrow1 flexBoxRow">
          <button
            style={buttonStyle}
            className="flexGrow1"
            onClick={(e) => {
              handleEditClick(e);
            }}
          >
            {edit ? "Edit" : "Save"}
          </button>
          <DeleteCharacter id={character.id}></DeleteCharacter>
        </div>
      </section>
      <CharacterStats character={character} edit={edit} setCharacter={setCharacter}></CharacterStats>
    </div>
  );
}
