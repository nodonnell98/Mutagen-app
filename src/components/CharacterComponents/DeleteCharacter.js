import React, { useState } from "react";
import Modal from 'react-modal';
import Confirmation from "../Confirmation";

export default function DeleteCharacter(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };
  const handleDeleteClick = (e) => {
    e.preventDefault();
    setModalIsOpenToTrue();
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    color: "#71f1e8",
    fontSize: "30px",
  };

  const modalStyle = {
    color: '66FCF1',
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom : 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#2a615e',
      width: '30em',
      display: 'flex',
      justifyContent: 'space-evenly',
      flexDirection: 'column',
      border: '3px solid #71f1e8'
    }
  };

  return (
    <div className= "flexGrow1">
      <button
        className="primary-link textGlow flexGrow1"
        onClick={(e) => {
          handleDeleteClick(e);
        }}
      >
        Delete
      </button>
      <Modal style={modalStyle} isOpen={modalIsOpen}>
        <h1 className="flexGrow1" style={{borderBottom: '1px solid #71f1e8', color: '#71f1e8', marginBottom: '1em', fontSize: '40px'}}>Are you sure you want to delete this character?</h1>
        <div className="flexBoxRow flexGrow1">
        <button className="textGlow" style={{marginRight: '10%', flexGrow: '1', fontSize: '50px'}, buttonStyle}onClick={setModalIsOpenToFalse}>Cancel</button>
        <span class="flexGrow1"></span>
        <Confirmation
          style={{ flexGrow: '3'}}
          id={props.id}
          setModalIsOpenToFalse={setModalIsOpenToFalse}
        />
        </div>
      </Modal>
    </div>
  );
}
