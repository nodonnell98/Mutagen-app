import React, { useState } from "react";
import Modal from "react-modal";
import WeaponList from "../../WeaponComponents/WeaponList";

import AddCharacterWeapon from "../../WeaponComponents/WeaponContainer/AddCharacterWeapon";

export default function AddWeaponModal(props) {
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

  const modalStyle = {
    color: "66FCF1",
    content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#2a615e",
      width: "85%",
      height: "85%",
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "column",
      border: "3px solid #71f1e8",
    },
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    color: "#71f1e8",
    fontSize: "20px",
  };

  const addButton = {
    backgroundColor: "#71f1e8",
    color: '#1d232b',
    border: "none",
    padding: "10px",
    borderRadius: "40px",
    paddingLeft: "20px",
    paddingRight: "20px"
  }

  const [weapon, setWeapon] = useState();

  return (
    <div className="flexGrow1">
      <button
        className="flexGrow1 primary-button fill"
        onClick={(e) => {
          handleDeleteClick(e);
        }}

      >
        Add Weapon
      </button>
      <Modal style={modalStyle} isOpen={modalIsOpen} >
        <div className="flexGrow1 flexBoxRow">
          <h1
            className="flexGrow1"
            style={{ borderBottom: "1px solid #71f1e8", color: "#71f1e8" }}
          >
            Add Weapon
          </h1>
          <button style={buttonStyle} className="textGlow" onClick={setModalIsOpenToFalse}>
            Close
          </button>
        </div>
        <WeaponList
          character={props.character}
          setModalIsOpenToFalse={setModalIsOpenToFalse}
          addCharacter={true}
          setWeaponToAdd={setWeapon}
        ></WeaponList>
        <AddCharacterWeapon
          character={props.character}
          setModalIsOpenToFalse={setModalIsOpenToFalse}
          weapon={weapon}
        ></AddCharacterWeapon>
      </Modal>
    </div>
  );
}
