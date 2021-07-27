import React, {Component} from 'react';
import AddWeapon from './AddWeapon';
import Weapon from './Weapon'

class WeaponContainer extends Component {

  render() {
    if (this.props.component === 'add') {
      return (<AddWeapon fetchWeapons={this.props.fetchWeapons}/>)
    } else if (this.props.component === 'weapon') {
      if (this.props.weapon === '') {
        return (
          <div>
            <p>Select a weapon</p>
          </div>
        )
      } else {
        return (
          <div>
            <Weapon weapon={this.props.weapon}/>
          </div>
        )
      }
    } else {
      return (
        <div>
          <p>Hello</p>
        </div>
      )
    }

  }
}

export default WeaponContainer;
