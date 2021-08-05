import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import WeaponDataService from "../../services/weapon.service.js";
import WeaponTable from '../WeaponComponents/WeaponTable'
import SearchBar from '../SearchBar';
import WeaponList from '../WeaponComponents/WeaponList.js';

class Weapons extends Component {
  state = {
    weapons: [],
    searchedWeapons: '',
    containerComponent: '',
    selectedWeapon: ''
  }

  componentDidMount() {
    this.fetchWeapons()
  }

  fetchWeapons = () => {
    WeaponDataService
    .index()
    .then(res => {
      this.setState({weapons: res.data})})
  }

  update = () => {
    this.setState({containerComponent: ''})
  }

  handleSearch = (e) => {
    this.setState({searchedWeapons: e.target.value})
  }

  handleButton = (e) => {
    this.setState({containerComponent: e.target.value})
  }

  setWeapon = (e) => {
    let weaponName = e.target.value

    let foundWeapon = this
      .state
      .weapons
      .find((weapon) => {
        return weapon
          .name
          .toLowerCase()
          .match(weaponName.toLowerCase())
      })

    this.setState({selectedWeapon: foundWeapon})
    this.setState({containerComponent: 'weapon'})
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
        <h2 style={pageHeader}>Welcome to the Armoury</h2>
        <WeaponList></WeaponList>
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
  color: '#66FCF1',
  mnarginBottom: '0'
}

const pageContainer = {
  width: '80%'
}

export default Weapons;
