import React from 'react';
import CharacterService from '../../services/character.service';

export default function Characters() {

  CharacterService.index().then(res => {
    console.log(res.data[0])
    })

  return (
    <div>Characters</div>
  )
}
