import React, { useState, useCallback, useEffect } from 'react'
import WeaponTable from '../../WeaponComponents/WeaponTable';
import WeaponService from '../../../services/weapon.service';

export default function Inventory(props) {
  const character = props.character
  const [searchedWeapons, setSearchedWeapons] = useState([])

  const retrieveWeapons = useCallback(() => {
    WeaponService.index().then((response) => {
      let character_weapons = [];
      response.data.map((weapon) => {
        let character_id_keys = Object.keys(weapon.character_ids)
        console.log('char_id_keys', character_id_keys)

        character_id_keys.map((id_key) => {
          console.log('weapon.character_ids[id_key] == character.id', weapon.character_ids[id_key] == character.id)
          if (weapon.character_ids[id_key] == character.id) {
            character_weapons.push(weapon)
          }
        })
      })
      console.log('char_weap_array', character_weapons)
      setSearchedWeapons(character_weapons);
    });
  }, [setSearchedWeapons]);

  // Fetch list of Weapons on load
  useEffect(() => {
    retrieveWeapons();
  }, [retrieveWeapons]);

  return (
    <div class="container flexBoxColumn flexGrow1" style={{ marginTop: '1%', height: '90%'}}>
      <WeaponTable searchedWeapons={searchedWeapons}></WeaponTable>
    </div>
  )
}
