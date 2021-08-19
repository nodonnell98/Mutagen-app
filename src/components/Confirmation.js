import React from 'react'
import CharacterService from '../services/character.service';

export default function Confirmation(props) {

  const buttonStyle = {
    background: "none",
    border: "none",
    fontSize: "30px",
    color: '#f17c7b'
  };

  const handleDelete = (e) => {
    CharacterService.delete(props.id)
    props.setModalIsOpenToFalse()
    window.location = '/characters';
  }


  return(
    <button style={buttonStyle}  className="textGlow" onClick={(e) => handleDelete()}>Delete</button>
  )
}
