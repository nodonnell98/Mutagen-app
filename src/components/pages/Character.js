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
    weapon_ids: [1],
    classification_ids: [1],
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
    e.preventDefault();
    setEdit((prevEdit) => !prevEdit);
    edit ? CharacterService.get(id) : CharacterService.update(id, character);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setEdit((prevEdit) => !prevEdit);
    CharacterService.get(id)
    window.location.reload();
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
  }, [setCharacter, setClassification, id]);

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
    color: "#71f1e8",
    fontSize: "20px",
  };

  const informationContainerStyle = {
    padding: "5%",
    paddingTop: "0%",
    marginLeft: "15vh",
  };

  const sectionStyle = {
    minHeight: "90vh",
    paddingTop: "10vh",
  };

  return (
    <div style={characterContainerStyle}>
      <img alt="a city skyline at night" className="splash blur" src="/images/city.jpg"></img>
      <div className="flexBoxColumn flexGrow1 side-nav glass slideLeft">
        <div className="flexBoxColumn flexGrow1">
          <h1
            className=""
            style={{
              color: "#71f1e8",
              fontSize: "20px",
              fontFamily: "Orbitron, sans-serif",
            }}
          >
            {character.name}
          </h1>
          <div className=" flexBoxColumn">
            <div className={edit ? '' : 'flexBoxColumn'}>
              <button
                style={buttonStyle}
                className="flexGrow1 textGlow"
                onClick={(e) => {
                  handleEditClick(e);
                }}
              >
                {edit ? "Edit" : "Save"}
              </button>
              <button
                style={buttonStyle}
                className="flexGrow1 textGlow "
                onClick={(e) => {
                  handleCancelClick(e);
                }}
              >
                {edit ? false : "Cancel"}
              </button>
            </div>
            <DeleteCharacter id={character.id}></DeleteCharacter>
          </div>
        </div>
        <div className="flexBoxColumn flexGrow3">
          <CharacterNavLinks></CharacterNavLinks>
        </div>
      </div>
      <div
        className="flexBoxColumn flexGrow3"
        style={informationContainerStyle}
      >
        <section
          className="flexGrow1"
          style={sectionStyle}
          id="overviewSection"
        >
          <CharacterStats
            character={character}
            edit={edit}
            setCharacter={setCharacter}
          ></CharacterStats>
        </section>
        <section
          className="flexGrow1"
          style={sectionStyle}
          id="inventorySection"
        >
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
