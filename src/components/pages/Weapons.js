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
      <div style={pageContainer}>
        <h1 style={pageHeader}>Weapons</h1>
        <div style={weaponContainerStyle}>
          <WeaponContainer weapons={this.state.weapons}/>
        </div>

      </div>
    )
  }

}

const weaponContainerStyle = {
  width: '100%'
}

const pageHeader = {
  width: '100%',
  color: '#ABD1B5'
}

const pageContainer = {
  width: '80%'
}

export default Weapons;
