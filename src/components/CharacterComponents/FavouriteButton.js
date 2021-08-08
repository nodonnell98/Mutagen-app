import React from 'react';
import CharacterService from '../../services/character.service'

export default function FavouriteButton(props) {

  const character = props.character

  const toggleFavourite = (e, retrieve) => {

    e.preventDefault();
    let toggle = !character.favourite

    let params = {
      character: {
        favourite: toggle
      }
    }
    CharacterService.update(character.id, params).then((res) => {
      retrieve()
    })
  }

  return (
    <button className={character.favourite ?  "primary-button fill" : "primary-button no-fill"} onClick={(e) => toggleFavourite(e, props.retrieveCharactersInformation)}>Favourite</button>
  )
}
