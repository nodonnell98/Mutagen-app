import React from 'react'
import AddWeaponModal from './AddWeaponModal';
import WeaponList from '../../WeaponComponents/WeaponList';

export default function Inventory(props) {
  const character = props.character

  return (
    <div className="container glass flexBoxColumn flexGrow1" style={{ marginTop: '1%', height: '700px'}}>
      <h1 className="flexGrow1" style={{alignSelf: 'flex-start'}}>Inventory</h1>
      <AddWeaponModal character={character} setCharacter={props.setCharacter}></AddWeaponModal>
      <WeaponList list="character_weapons" character={character}></WeaponList>
    </div>
  )
}
