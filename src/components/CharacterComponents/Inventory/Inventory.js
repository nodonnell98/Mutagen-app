import React, { useState, useCallback, useEffect } from 'react'
import WeaponTable from '../../WeaponComponents/WeaponTable';
import WeaponService from '../../../services/weapon.service';
import SearchBar from '../../SearchBar';
import AddWeaponModal from './AddWeaponModal';

export default function Inventory(props) {
  const character = props.character
  const [Weapons, setWeapons] = useState([])

  const retrieveCharacterWeapons = useCallback(() => {
    WeaponService.index().then((response) => {
      let character_weapons = [];
      console.log(response.data)

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
      setWeapons(character_weapons);
    });
  }, [setWeapons]);

  // Fetch list of Weapons on load
  useEffect(() => {
    retrieveCharacterWeapons();
  }, [retrieveCharacterWeapons]);

  const handleSearch = (e) => {

  }

  return (
    <div class="container flexBoxColumn flexGrow1" style={{ marginTop: '1%', height: '700px'}}>
      <h1 className="flexGrow1" style={{alignSelf: 'flex-start'}}>Inventory</h1>
      <AddWeaponModal character={character} retrieveCharacterWeapons={retrieveCharacterWeapons}></AddWeaponModal>
      <SearchBar handleSearch={handleSearch}></SearchBar>
      <WeaponTable searchedWeapons={Weapons} className="flexGrow1" isCharacter={true}  pageSize={5}></WeaponTable>
    </div>
  )
}
