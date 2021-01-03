import React, {Component} from 'react';
import axios from 'axios';
import Weapon from '../WeaponComponents/Weapon';

class WeaponContainer extends Component {

  render() {
    return (
      this.props.weapons.map((weapon) => {
      return (
          <Weapon key={weapon._id} weapon={weapon}/>
      )
    }))
  }

}

export default WeaponContainer;