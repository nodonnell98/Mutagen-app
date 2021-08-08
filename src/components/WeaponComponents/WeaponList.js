import React, { useState, useCallback, useEffect } from "react";
import WeaponTable from "./WeaponTable";
import WeaponContainer from "./WeaponContainer/WeaponContainer";
import SearchBar from "../SearchBar";
import WeaponService from "../../services/weapon.service";
import { propTypes } from "react-bootstrap/esm/Image";

export default function WeaponList(props) {
  const character = props.character;
  const [weapons, setWeapons] = useState([]);
  const [selectedWeapon, setSelectedWeapon] = useState();
  const [searchedWeapons, setSearchedWeapons] = useState([]);

  const retrieveWeapons = useCallback((character) => {
    if (props.list == "character_weapons") {
      WeaponService.index().then((response) => {
        let character_weapons = [];

        response.data.map((weapon) => {
          // Loop through each weapon, for each weapon make an array of the character ids
          let character_id_keys = Object.keys(weapon.character_ids);
          character_id_keys.map((id_key) => {
            // Loop through each id and check if the id matches the current character id, if it does push that weapon to the weapon array
            if (weapon.character_ids[id_key] == character.id) {
              character_weapons.push(weapon);

            }
          });
        });
        //set searched weapons as the weapon array aka all the weapons that match the character id
         setWeapons(character_weapons);
      });
    } else
      WeaponService.index().then((response) => {
        setWeapons(response.data);
      });
  }, [setWeapons]);

  const setWeapon = (e) => {
    let weaponName = e.target.value;

    let foundWeapon = weapons.find((weapon) => {
      return weapon.name.toLowerCase().match(weaponName.toLowerCase());
    });

    try {
      props.setWeaponToAdd(foundWeapon)
    }
    catch {
      console.log('error')
    }

    setSelectedWeapon(foundWeapon);
  };

  const handleSearch = (e) => {
    setSearchedWeapons(e.target.value);
  };

  let foundWeapons = weapons.filter((weapon) => {
    return weapon.name.toLowerCase().includes(searchedWeapons);
  });

  // Fetch list of Weapons on load
  useEffect(() => {
    retrieveWeapons(character);
  }, [retrieveWeapons, character]);

  return (
    <div class="flexBoxColumn flexGrow2">
      <SearchBar handleSearch={handleSearch} />
      <div class="flexBoxRow flexGrow1">
        <WeaponTable setWeapon={setWeapon} searchedWeapons={foundWeapons} />
        <WeaponContainer
          retrieveCharacterWeapons={retrieveWeapons}
          character={character}
          weapon={selectedWeapon}
          addCharacter={props.addCharacter}
          setModalIsOpenToFalse={props.setModalIsOpenToFalse}
        ></WeaponContainer>
      </div>
    </div>
  );
}
