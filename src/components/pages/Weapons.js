import React, {Component} from 'react';
import axios from 'axios';
import WeaponContainer from '../WeaponComponents/WeaponContainer';
import Weapon from '../WeaponComponents/Weapon';

class Weapons extends Component {
  state = {
    weapons: []
  }

  componentDidMount() {
    axios
      .get('https://anomaly-api-staging.herokuapp.com/weapons')
      .then(res => this.setState({weapons: res.data}))
  }

  render() {
    return (
      <div>
        <h1 style={pageHeader}>Weapons</h1>
        <div style={weaponContainerStyle}>
          <WeaponContainer weapons={this.state.weapons}/>
        </div>

      </div>
    )
  }

}

const weaponContainerStyle = {
  width: '100%',
  display: 'flex'
}

const pageHeader = {
  width: '100%'
}

export default Weapons;
