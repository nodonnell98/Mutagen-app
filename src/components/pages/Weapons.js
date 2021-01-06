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
    containerComponent: '',
    selectedWeapon: ''
  }

  componentDidMount() {
    axios
      .get('https://anomaly-api-staging.herokuapp.com/weapons')
      .then(res => this.setState({weapons: res.data}))
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
        <h1 style={pageHeader}>Welcome to the Armoury</h1>
        <SearchBar handleSearch={this.handleSearch}/>

        <div style={containerStyle}>
          <WeaponTable setWeapon={this.setWeapon} searchedWeapons={searchedWeapons}/>
          <div className="container" style={weaponContainerStyle}>
            <div className="btn-group" role="group" style={containerNav}>
              <button className="navBtn" value="weapon" onClick={this.handleButton}>Weapon</button>
              {/* <div style={{flexGrow: "10"}}></div> */}
              <button className="navBtn" value="add" onClick={this.handleButton}>Add</button>
            </div>
            <WeaponContainer style={{flexGrow: '10%'}} weapon={this.state.selectedWeapon} component={this.state.containerComponent}/>
            <div className="btn-group" role="group" style={containerNav}>
              <button className="navBtn" value="edit">Edit</button>
              {/* <div style={{flexGrow: "10"}}></div> */}
              <button className="navBtn" value="weapon">Delete</button>
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
  color: '#66FCF1'
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
  marginBottom: '1em',
  display: 'flex'
}


export default Weapons;
