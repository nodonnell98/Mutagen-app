import React, { useState } from "react";
import Modal from "react-modal";
import WeaponList from "../../WeaponComponents/WeaponList";

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
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#2a615e",
      width: "80%",
      height: "90%",
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "column",
      border: "3px solid #66FCF1",
    },
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    color: "#66FCF1",
    fontSize: "20px",
  };

  return (
    <div className="flexGrow1">
      <button
        className="flexGrow1 containerDark"
        onClick={(e) => {
          handleDeleteClick(e);
        }}
      >
        Add Weapon
      </button>
      <Modal style={modalStyle} isOpen={modalIsOpen}>
        <div className="flexGrow1 flexBoxRow">
          <h1
            className="flexGrow1"
            style={{ borderBottom: "1px solid #66FCF1", color: "#66FCF1" }}
          >
            Add Weapon
          </h1>
          <button style={buttonStyle} className="textGlow" onClick={setModalIsOpenToFalse}>
            X
          </button>
        </div>
        <WeaponList
          character={props.character}
          setModalIsOpenToFalse={setModalIsOpenToFalse}
          addCharacter={true}
        ></WeaponList>
      </Modal>
    </div>
  );
}
