import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class AddWeapon extends Component {


    addWeapon = (weapon) => {
        axios.request({
            method: 'post',
            url: 'https://anomaly-api-staging.herokuapp.com/weapons',
            data: weapon
        }).then(response => {
          this.props.history.push('/weapons')
        }).catch(err => console.log(err))
        
    }
  onSubmit = (e) => {
      const newWeapon = {
          name: this.refs.name.value,
          type: this.refs.type.value,
          description: this.refs.description.value,
          quality: this.refs.quality.value,
          noise: this.refs.noise.value,
          range: this.refs.range.value,
          damage_type: this.refs.damage_type.value,
          ammo: this.refs.ammo.value,

      }
      this.addWeapon(newWeapon);
    e.preventDefault();
    
  }

  render() {
    return (
      <div
        onSubmit={this
        .onSubmit
        .bind(this)}>
        <form style={formStyle}>
          <div style={flexitem}>
            <label>Name:
            </label>
            <input style={inputStyle} type="text" autocomplete="off" ref="name" name="name" placeholder="Name"></input>
          </div>
          <div style={flexitem}>
            <label>Type</label>
            <select style={inputStyle} ref="type" name="type">
              <option value="Melee">Melee</option>
              <option value="Pistol">Pistol</option>
              <option value="Rifle">Rifle</option>
              <option value="Bow">Bow</option>
              <option value="Sniper">Sniper</option>
              <option value="Launcher">Launcher</option>
            </select>
          </div>
          <div style={flexitem}>
            <label>Description:
            </label>
            <input
              style={inputStyle}
              type="text"
              autocomplete="off" ref="description"
              name="description"
              placeholder="Description"></input>
          </div>
          <div style={flexitem}>
            <label>Range:
            </label>
            <input
              style={inputStyle}
              type="number"
              min="1"
              autocomplete="off" ref="range"
              name="range"
              placeholder="range"></input>
          </div>
          <div style={flexitem}>
            <label>Ammo:
            </label>
            <input style={inputStyle} type="number" autocomplete="off" ref="ammo" name="ammo" min="1"></input>
          </div>
          <div style={flexitem}>
            <label>Quality</label>
            <select style={inputStyle} ref="quality" name="quality">
              <option value="Basic">Basic</option>
              <option value="Refined">Refined</option>
              <option value="Superior">Superior</option>
              <option value="Mythic">Mythic</option>
            </select>
          </div>
          <div style={flexitem}>
            <label>Noise:
            </label>
            <select style={inputStyle} ref="noise" name="noise">
              <option value="Silent">Silent</option>
              <option value="Quiet">Quiet</option>
              <option value="Loud">Loud</option>
              <option value="Explosive">Explosive</option>
            </select>
          </div>
          <div style={flexitem}>
            <label>Damage Type:
            </label>
            <select style={inputStyle} ref="damage_type" name="damage_type">
              <option value="Kinetic">Kinetic</option>
              <option value="Cryo">Cryo</option>
              <option value="Incendiary">Incendiary</option>
              <option value="Shock">Shock</option>
            </select>
          </div>
          <input type="submit" value="Add"></input>
        </form>
      </div>
    )
  }
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const inputStyle = {
  margin: '10px',
  width: '60%',
  background: 'transparent',
  border: '2px solid #66FCF1',
  color: "#66FCF1",
  textAlign: "center"
}

const flexitem = {
  flex: '1',
  width: '100%',
  display: 'inline'
}

export default withRouter (AddWeapon);
