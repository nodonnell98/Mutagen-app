import React, { useState, useEffect, useCallback } from "react";
import CharacterService from "../../services/character.service";
import CharacterCard from "../CharacterComponents/CharacterCard";
import {Link} from 'react-router-dom';
import { Card } from "react-bootstrap";
import CharacterForm from "../CharacterComponents/CharacterForm";
import '../../App.css'

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    listStyle: "none",
    width: "100%",
    margin: "5%",
    justifyContent: "center",
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
    width: "20em",
    boxShadow: "-1px 0px 18px 0px rgb(18,94,100)", //rgb(62,170,184)
    cursor: "pointer",
    transition: '0.3s'
  }

  const retrieveCharacters = useCallback(() => {
    CharacterService.index().then((response) => {
      console.log(response.data)
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
          <Link to={"/character/" + char.id}><CharacterCard class="card" style={cardStyle} key={i} character={char} cardStyle={cardStyle}></CharacterCard></ Link>
        </div>)
      })}
      <div style={cardContainerStyle} >
        <Card style={cardStyle}><CharacterForm></CharacterForm></Card>
      </div>
    </div>
  );
}
