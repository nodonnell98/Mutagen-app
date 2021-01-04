import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import WeaponContainer from '../WeaponComponents/WeaponContainer';
import SearchBar from '../SearchBar';
import AddWeapon from '../WeaponComponents/AddWeapon';


class Weapons extends Component {
  state = {
    weapons: [],
    searchedWeapons: ''
  }

  componentDidMount() {
    axios
      .get('https://anomaly-api-staging.herokuapp.com/weapons')
      .then(res => this.setState({weapons: res.data}))
  }

  handleSearch = (e) => {
    console.log(e.target.value)
    this.setState({searchedWeapons: e.target.value})
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
          <h1 style={pageHeader}>Armoury</h1>
          <div style={{
            display: 'inline'
          }}>
            <SearchBar handleSearch={this.handleSearch}/>
            <Link to="/weapons/add">Add</Link>
          </div>

          <div style={weaponContainerStyle}>
            <WeaponContainer searchedWeapons={searchedWeapons}/>
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
  color: '#66FCF1'
}

const pageContainer = {
  width: '80%'
}

export default Weapons;
