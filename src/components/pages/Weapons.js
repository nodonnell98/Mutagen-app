import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import WeaponTable from '../WeaponComponents/WeaponTable'
import SearchBar from '../SearchBar';
import WeaponContainer from '../WeaponComponents/WeaponContainer';

class Weapons extends Component {
  state = {
    weapons: [],
    searchedWeapons: '',
    containerComponent: ''
  }

  componentDidMount() {
    axios
      .get('https://anomaly-api-staging.herokuapp.com/weapons')
      .then(res => this.setState({weapons: res.data}))
  }

  handleSearch = (e) => {
    this.setState({searchedWeapons: e.target.value})
  }

  handleButton = (e) => {
    this.setState({containerComponent: e.target.value})
  }

  setWeapon = (e) => {
    console.log(e.target.value)
  }

  render() {

    let searchedWeapons = this
      .state
      .weapons
      .filter((weapon) => {
        return weapon
          .name
          .toLowerCase()
          .includes(this.state.searchedWeapons.toLowerCase())
      })
    return (
      <div style={pageContainer}>
        <h1 style={pageHeader}>Welcome to the Armoury</h1>
        <SearchBar handleSearch={this.handleSearch}/>

        <div style={containerStyle}>
          <WeaponTable setWeapon={this.setWeapon} searchedWeapons={searchedWeapons}/>
          <div className="container" style={weaponContainerStyle}>
            <div className="btn-group" role="group" style={containerNav}>
              <button className="navBtn" value="add" onClick={this.handleButton}>Add</button>
              <button className="navBtn" value="weapon" onClick={this.handleButton}>Weapon</button>
            </div>
            <WeaponContainer component={this.state.containerComponent}/>
          </div>
        </div>

      </div>
    )
  }

}

const containerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly'
}

const pageHeader = {
  width: '100%',
  color: '#66FCF1'
}

const pageContainer = {
  width: '80%'
}

const weaponContainerStyle = {
  marginLeft: '1em',
  height: '500px',
  width: '40%',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '0'
}

const containerNav = {
  width: '100%',
  height: '10%',
  backgroundColor: 'transparent',
  borderBottom: '2px solid #66FCF1',
  marginBottom: '1em',
  display: 'flex'
}


export default Weapons;
