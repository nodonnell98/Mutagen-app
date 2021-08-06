import React, { useState, useEffect, useCallback } from "react";
import CharacterService from "../../services/character.service";
import DeleteCharacter from "../CharacterComponents/DeleteCharacter";
import CharacterNavLinks from "../CharacterComponents/CharacterNavLinks";
import CharacterStats from "../CharacterComponents/Stats/CharacterStats";
import Inventory from "../CharacterComponents/Inventory/Inventory";
import Class from "../CharacterComponents/Class/Class";
import ClassificationService from "../../services/classification.service";

export default function Character(props) {
  const [character, setCharacter] = useState({
    weapon_ids: [],
    classification_ids: [],
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
    },
  });

  const [classification, setClassification] = useState("");

  const [edit, setEdit] = useState(true);
  const id = props.id.match.params.id;

  const handleEditClick = (e) => {
    let i;
    e.preventDefault();
    setEdit((prevEdit) => !prevEdit);
    edit ? i++ : CharacterService.update(id, character);
  };

  const retrieveCharacterInformation = useCallback(() => {
    CharacterService.get(id).then((response) => {
      setCharacter(response.data);
      ClassificationService.get(response.data.classification_ids[0]).then(
        (response) => {
          setClassification(response.data);
        }
      );
    });
  }, [setCharacter, setClassification]);

  // Fetch list of characters on load
  useEffect(() => {
    retrieveCharacterInformation();
  }, [retrieveCharacterInformation]);

  const characterContainerStyle = {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    flexWrap: "noWrap",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    color: "#66FCF1",
    fontSize: "20px",
  };

  const characterSideNavStyle = {
    maxWidth: '20vh',
    backgroundColor: 'tranparent',
    borderRight: '1px solid #66FCF1',
    height: '90vh',
    padding: '2%',
    boxShadow: '20px -1px 11px -12px rgba(0,0,0,0.75)',
    position: 'fixed',
    marginTop: '5vh'
  }

  const informationContainerStyle = {
    padding: '5%',
    paddingTop: '0%',
    marginLeft: '15vh'
  }

  const sectionStyle= {
    minHeight: '90vh',
    paddingTop: '10vh'
  }


  return (
    <div style={characterContainerStyle}>
      <div className="flexBoxColumn flexGrow1" style={characterSideNavStyle}>
        <h1 className="flexGrow1" style={{ color: "#66FCF1", fontSize: '20px' }}>
          {character.name}
        </h1>
        <CharacterNavLinks></CharacterNavLinks>
        <span className="flexGrow3" style={{ borderTop: '1px solid #66FCF1'}}></span>
        <div className="flexGrow1 flexBoxRow">
          <button
            style={buttonStyle}
            className="flexGrow1 textGlow"
            onClick={(e) => {
              handleEditClick(e);
            }}
          >
            {edit ? "Edit" : "Save"}
          </button>
          <DeleteCharacter id={character.id}></DeleteCharacter>
        </div>
      </div>
      <div className="flexBoxColumn flexGrow3" style={informationContainerStyle}>
        <section className="flexGrow1" style={sectionStyle} id="overviewSection">
          <CharacterStats
            character={character}
            edit={edit}
            setCharacter={setCharacter}
          ></CharacterStats>
       </section>
       <section className="flexGrow1" style={sectionStyle} id="inventorySection">
          <Inventory
            character={character}
            edit={edit}
            setCharacter={setCharacter}
          ></Inventory>
        </section>
      <section className="flexGrow1" style={sectionStyle} id="classSection">
          <Class character={character} classification={classification}></Class>
      </section>
      </div>
    </div>
  );
}
