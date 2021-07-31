import React, { useState, useCallback, useEffect } from "react";
import Modal from "react-modal";
import WeaponTable from "../../WeaponComponents/WeaponTable";
import WeaponService from "../../../services/weapon.service";
import WeaponContainer from "../../WeaponComponents/WeaponContainer";

export default function AddWeaponModal(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [weapons, setWeapons] = useState([]);
  const [selectedWeapon, setSelectedWeapon] = useState();


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

  const setWeapon = (e) => {
    let weaponName = e.target.value

    let foundWeapon = weapons
      .find((weapon) => {
        return weapon
          .name
          .toLowerCase()
          .match(weaponName.toLowerCase())
      })

    setSelectedWeapon(foundWeapon)
  }

  const retrieveWeapons = useCallback(() => {
    WeaponService.index().then((response) => {
      setWeapons(response.data);
    });
  }, [setWeapons]);

  // Fetch list of Weapons on load
  useEffect(() => {
    retrieveWeapons();
  }, [retrieveWeapons]);

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
      height: '90%',
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
        <button style={buttonStyle} onClick={setModalIsOpenToFalse}>X</button>
        </div>

        <div className="flexBoxRow flexGrow3">
          <WeaponTable searchedWeapons={weapons} setWeapon={setWeapon}></WeaponTable>
          <WeaponContainer character={props.character} weapon={selectedWeapon} setModalIsOpenToFalse={setModalIsOpenToFalse}></WeaponContainer>
        </div>
      </Modal>
    </div>
  );
}
