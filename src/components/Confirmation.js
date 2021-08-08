import React from 'react'
import CharacterService from '../services/character.service';

export default function Confirmation(props) {

  const buttonStyle = {
    background: "none",
    border: "none",
    color: "#71f1e8",
    fontSize: "20px",
  };

  const handleDelete = (e) => {
    CharacterService.delete(props.id)
    props.setModalIsOpenToFalse()
    window.location = '/characters';
  }


  return(
    <button style={{ flexGrow: '3'}, buttonStyle} onClick={(e) => handleDelete()}>Delete</button>
  )
}
