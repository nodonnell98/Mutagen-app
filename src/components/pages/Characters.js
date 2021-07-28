import React, {useState, useEffect, useCallback} from 'react';
import CharacterService from '../../services/character.service';
import CharacterCard from '../CharacterComponents/CharacterCard';
import { Card } from 'react-bootstrap';

export default function Characters() {

  const[characters, setCharacters] = useState("");

  const CardContainer = {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    margin: '5%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }

  const cardStyle = {
    flex: '1',
    margin: '1em',
    width: '100px',
    height: '100%',
    alignItems: 'center'
  }

  const addCharacterStyle = {
    paddingTop: '40%'
  }

  const retrieveCharacters = useCallback(
    () => {
      CharacterService.index().then((response) => {
        setCharacters(response.data);
        mapCharacters(characters)
      });
    },
    [setCharacters]
  );

  // Fetch list of characters on load
  useEffect(() => {
    retrieveCharacters();
  }, [retrieveCharacters]);

  function mapCharacters(characters) {
    console.log(characters)
    for(let i = 0; i < characters.length; i++) {
      console.log(characters[i])
    }
  }

  return (
    <div style={CardContainer}>
      { characters != 'undefined' ? characters.forEach(char => {
        <CharacterCard style={cardStyle} characters={char}></CharacterCard>
      }) : <Card style={cardStyle}>Fucky you</Card>
    }

       <Card style={cardStyle}>Add Character</Card>
    </div>

  )
}
