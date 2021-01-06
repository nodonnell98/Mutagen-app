import React, {Component} from 'react';
import AddWeapon from './AddWeapon';
import Weapon from './Weapon'

class WeaponContainer extends Component {

 

  render() {
    if(this.props.component === 'add') {
      return (<AddWeapon/>)
    }
    else if(this.props.component === 'weapon'){
      return (
        <div>
          <p>Weapon</p>
        </div>
      )
    }
    else {
      return (
        <div>
          <p>Hello</p>
        </div>
      )
    }
    
  }
}

export default WeaponContainer;