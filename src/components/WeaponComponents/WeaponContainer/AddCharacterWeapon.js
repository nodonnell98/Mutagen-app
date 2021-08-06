import React from "react";
import WeaponService from "../../../services/weapon.service";

export default function AddCharacterWeapon(props) {
  const character = props.character;
  const weapon = props.weapon;

  const updateWeapon = () => {
    let newCharIds = weapon.character_ids;
    newCharIds.push(character.id);
    let params = {
      weapon: {
        dice_type: 8,
        character_ids: newCharIds,
      },
    };
    WeaponService.update(weapon.id, params).then((res) => {
      props.retrieveCharacterWeapons();
      props.setModalIsOpenToFalse();
    });
  };

  return (
    <button
      className="navBtn navBtnHover"
      value="edit"
      onClick={() => updateWeapon()}
    >
      Add Weapon
    </button>
  );
}
