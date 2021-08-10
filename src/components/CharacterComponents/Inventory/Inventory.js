import React, { useState, useCallback, useEffect } from 'react'
import AddWeaponModal from './AddWeaponModal';
import WeaponList from '../../WeaponComponents/WeaponList';

export default function Inventory(props) {
  const character = props.character

  return (
    <div class="container glass flexBoxColumn flexGrow1" style={{ marginTop: '1%', height: '700px'}}>
      <h1 className="flexGrow1" style={{alignSelf: 'flex-start'}}>Inventory</h1>
      <AddWeaponModal character={character}></AddWeaponModal>
      <WeaponList list="character_weapons" character={character}></WeaponList>
    </div>
  )
}
