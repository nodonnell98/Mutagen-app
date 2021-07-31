import React from 'react'
import WeaponService from '../../../services/weapon.service'

export default function AddCharacterWeapon(props) {

  const character = props.character
  const weapon = props.weapon

  const updateWeapon = () => {
    // let newCharIds = weapon.character_ids.push[character.id]
    let params = {
      id: weapon.id,
      character_ids: [character.id]
    }
    WeaponService.update(weapon.id, params).then(() => {

    })

  }

  return (
    <div>
      <button className="navBtn" value="edit" onClick={() => updateWeapon() && props.setModalIsOpenToFalse}>Add</button>
    </div>
  )
}
