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
    console.log("delete");
    e.preventDefault();
    setModalIsOpenToTrue();
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    color: "#66FCF1",
    fontSize: "20px",
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
      width: '300px',
      display: 'flex',
      justifyContent: 'space-evenly',
      flexDirection: 'column',
      border: '3px solid #66FCF1'

    }
  };

  return (
    <div className= "flexGrow1">
      <button
        style={buttonStyle}
        className="flexGrow1"
        onClick={(e) => {
          handleDeleteClick(e);
        }}
      >
        Delete
      </button>
      <Modal style={modalStyle} isOpen={modalIsOpen}>
        <h1 className="flexGrow1" style={{borderBottom: '1px solid #66FCF1', color: '#66FCF1'}}>Are you sure?</h1>
        <div className="flexBoxRow flexGrow1">
        <button style={{marginRight: '10%', flexGrow: '1'}, buttonStyle}onClick={setModalIsOpenToFalse}>x</button>
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
