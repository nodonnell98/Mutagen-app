import React, { useState, useEffect, useCallback } from "react";
import CharacterService from "../../services/character.service";
import CharacterCard from "../CharacterComponents/CharacterCard";
import { Card } from "react-bootstrap";
import '../../App.css'

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    listStyle: "none",
    width: "80%",
    margin: "5%",
    justifyContent: "flex-start",
    alignItems: "center",
  };

  const cardContainerStyle = {
    display: "flex",
    margin: "1em",
    alignItems: "center",
  };

  const cardStyle = {
    height: "20em",
    backgroundColor: "#2a615e",
    border: "3px solid #66FCF1",
    color: "#66FCF1",
    borderRadius: "10px",
    width: "20em"
  }

  const retrieveCharacters = useCallback(() => {
    CharacterService.index().then((response) => {
      setCharacters(response.data);
    });
  }, [setCharacters]);

  // Fetch list of characters on load
  useEffect(() => {
    retrieveCharacters();
  }, [retrieveCharacters]);

  return (
    <div style={containerStyle}>
      {characters.map((char, i) => {
         return (<div style={cardContainerStyle} >
          <CharacterCard style={cardStyle} key={i} character={char} cardStyle={cardStyle}></CharacterCard>
        </div>)
      })}
      <div style={cardContainerStyle} >
        <Card style={cardStyle}>Add Character</Card>
      </div>
    </div>
  );
}
