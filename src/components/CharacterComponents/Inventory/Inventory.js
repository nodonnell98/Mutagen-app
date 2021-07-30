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
        // Loop through each weapon, for each weapon make an array of the character ids
        let character_id_keys = Object.keys(weapon.character_ids)

        character_id_keys.map((id_key) => {
          // Loop through each id and check if the id matches the current character id, if it does push that weapon to the weapon array
          if (weapon.character_ids[id_key] == character.id) {
            character_weapons.push(weapon)
          }
        })
      })

      //set searched weapons as the weapon array aka all the weapons that match the character id
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
