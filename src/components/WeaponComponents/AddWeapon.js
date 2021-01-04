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
            this.props.history.push('/weapons');
        }).catch(err => console.log(err))
        
    }
  onSubmit = (e) => {
      const newWeapon = {
          name: this.refs.name.value,
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
        style={formContainer}
        className="input"
        onSubmit={this
        .onSubmit
        .bind(this)}>
        <form style={formStyle}>
          <div style={flexitem}>
            <label>Name:
            </label>
            <input style={inputStyle} type="text" ref="name" name="name" placeholder="Name"></input>
          </div>

          <div style={flexitem}>
            <label>Description:
            </label>
            <input
              style={inputStyle}
              type="text"
              ref="description"
              name="description"
              placeholder="Description"></input>
          </div>
          <div style={flexitem}>
            <label>Range:
            </label>
            <input
              style={inputStyle}
              type="text"
              ref="range"
              name="range"
              placeholder="range"></input>
          </div>
          <div style={flexitem}>
            <label>Ammo:
            </label>
            <input style={inputStyle} type="number" ref="ammo" name="ammo" min="1"></input>
          </div>
          <div style={flexitem}>
            <label>Quality</label>
            <select style={inputStyle} ref="quality" name="quality">
              <option value="stock">Stock</option>
              <option value="high-end">High-End</option>
              <option value="elite">Elite</option>
              <option value="mythic">Mythic</option>
            </select>
          </div>
          <div style={flexitem}>
            <label>Noise Classification:
            </label>
            <select style={inputStyle} ref="noise" name="noise">
              <option value="silent">Silent</option>
              <option value="quiet">Quiet</option>
              <option value="loud">Loud</option>
              <option value="Explosive">Explosive</option>
            </select>
          </div>
          <div style={flexitem}>
            <label>Damage Type:
            </label>
            <select style={inputStyle} ref="damage_type" name="damage_type">
              <option value="kinetic">Kinetic</option>
              <option value="cryo">Cryo</option>
              <option value="incendiary">Incendiary</option>
              <option value="shock">Shock</option>
            </select>
          </div>
          <input type="submit" value="Add"></input>
        </form>
      </div>
    )
  }
}

const formContainer = {
  backgroundColor: '#2a615e',
  width: '80%',
  border: '3px solid #66FCF1',
  color: '#66FCF1'

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
  width: '60%',
  display: 'inline'
}

export default withRouter (AddWeapon);
