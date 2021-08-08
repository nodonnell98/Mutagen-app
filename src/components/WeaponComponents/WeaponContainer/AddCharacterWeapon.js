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
      props.setModalIsOpenToFalse();
      window.location.reload();
    });
  };

  return (
    <button
      className="primary-button"
      value="edit"
      style={{width: '80%', alignSelf: 'center', marginTop: '1vh'}}
      onClick={() => weapon ? updateWeapon() : false}
    >
      Add Weapon
    </button>
  );
}
