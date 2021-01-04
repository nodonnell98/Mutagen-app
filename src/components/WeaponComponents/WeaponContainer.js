import React, {Component} from 'react';
import Weapon from '../WeaponComponents/Weapon';
import WeaponTable from '../WeaponComponents/WeaponTable';

class WeaponContainer extends Component {

  render() {
    return (
      <WeaponTable weapons={this.props.searchedWeapons} />
      )
  }
}

export default WeaponContainer;