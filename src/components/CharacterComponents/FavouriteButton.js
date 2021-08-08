import React from 'react';
import CharacterService from '../../services/character.service'

export default function FavouriteButton(props) {

  const character = props.character

  const toggleFavourite = () => {
    let toggle = !character.favourite

    let params = {
      character: {
        favourite: toggle
      }
    }
    CharacterService.update(character.id, params).then((res) => {
      console.log(res.data)
    })
  }

  return (
    <button onClick={() => toggleFavourite()}>Toggle Favourite</button>
  )
}
