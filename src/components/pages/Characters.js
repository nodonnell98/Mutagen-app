import React, { useState, useEffect, useCallback } from "react";
import CharacterService from "../../services/character.service";
import ClassificationService from "../../services/classification.service";
import CharacterCard from "../CharacterComponents/CharacterCard";
import {Link} from 'react-router-dom';
import { Card } from "react-bootstrap";
import CharacterForm from "../CharacterComponents/CharacterForm";
import '../../App.css'

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [classification_id, setClassificationId] = useState()
  const [classifications, setClassifications] = useState([])

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

  const retrieveCharactersInformation = useCallback(() => {
    CharacterService.index().then((response) => {
      setCharacters(response.data);
      ClassificationService.index().then((response) => {
        setClassifications(response.data);
      });
    });
  }, [setCharacters, setClassifications]);

  // Fetch list of characters on load
  useEffect(() => {
    retrieveCharactersInformation();
  }, [retrieveCharactersInformation]);


  return (
    <div style={containerStyle}>
       <div style={cardContainerStyle} >
        <Card style={cardStyle} class="noHover"><CharacterForm classification_id={classification_id} classifications={classifications} setClassificationId={setClassificationId}></CharacterForm></Card>
      </div>
      {characters.map((char, i) => {
         return (<div style={cardContainerStyle} >
          <Link to={"/character/" + char.id}><CharacterCard style={cardStyle} key={i} character={char} classifications={classifications} cardStyle={cardStyle} className="cardHover"></CharacterCard></ Link>
        </div>)
      })}

    </div>
  );
}
