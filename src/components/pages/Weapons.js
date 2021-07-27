import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import WeaponDataService from "../../services/weapon.service.js";
import WeaponTable from '../WeaponComponents/WeaponTable'
import SearchBar from '../SearchBar';
import WeaponContainer from '../WeaponComponents/WeaponContainer';

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

  deleteWeapon = (id) => {
    WeaponDataService.delete(id)
    this.fetchWeapons();
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
        <SearchBar handleSearch={this.handleSearch}/>

        <div style={containerStyle}>
          <div style={{flexBasis: '50%'}}>
          <WeaponTable setWeapon={this.setWeapon} searchedWeapons={searchedWeapons}/>
          </div>
          <div className="container" style={weaponContainerStyle}>
            <div className="btn-group" role="group" style={containerNav}>
              <button className="navBtn" value="weapon" onClick={this.handleButton}>Weapon</button>
              <button className="navBtn" value="add" onClick={this.handleButton}>Add</button>
            </div>
            <div style={{flexGrow: '10'}}>
              <WeaponContainer style={{ flexGrow: '10%', marginTop: '1em' }}
              weapon={this.state.selectedWeapon}
              component={this.state.containerComponent}
              fetchWeapons={this.fetchWeapons}
              deleteWeapon={this.deleteWeapon}/>
            </div>
            <div className="btn-group" role="group" style={containerNav}>
              <button className="navBtn" value="edit">Edit</button>
              <button className="navBtn" value="delete" onClick={() => this.deleteWeapon(this.state.selectedWeapon.id)}>Delete</button>
            </div>
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
  color: '#66FCF1',
  mnarginBottom: '0'
}

const pageContainer = {
  width: '80%'
}

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

export default Weapons;
