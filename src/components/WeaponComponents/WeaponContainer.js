import React, {Component} from 'react';
import Weapon from './Weapon';
import AddCharacterWeapon from '../CharacterComponents/Inventory/AddCharacterWeapon';

export default function WeaponContainer(props) {

  const weapon = props.weapon

  const weaponContainerStyle = {
    marginLeft: '1em',
    height: '550px',
    width: '40%',
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'column',
    padding: '0'
  }

  const containerNav = {
    width: '100%',
    height: '10%',
    backgroundColor: 'transparent',
    borderBottom: '2px solid #66FCF1',
    display: 'flex',
    flexBasis: '10%'
  }
//

  return(
          <div className="container" style={weaponContainerStyle}>
            <div className="btn-group" role="group" style={containerNav}>
              <button className="navBtn" value="weapon">Weapon</button>
            </div>
            <div style={{flexGrow: '10'}}>
              { weapon ? <Weapon weapon={weapon}></Weapon> : 'Select a weapon' }
            </div>
            <div className="btn-group" role="group" style={containerNav}>
              <AddCharacterWeapon character={props.character} weapon={props.weapon}></AddCharacterWeapon>
            </div>
          </div>
  )
}

