import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Weapon extends Component {

  render() {
    const {
      _id,
      name,
      description,
      range,
      noise,
      quality,
      damage_dice,
      damage_modifier,
      proficiency,
      ammo,
      damage_type
    } = this.props.weapon
    return (
      <div style={weaponContainer}>
        <div style={statSection}>
          <div style={statItem}>
            <h1>{name}</h1>
          </div>
          <div style={statItem}>
            <h3>Range</h3>
            <p>
              {range}</p>
          </div>
          <div style={statItem}>
            <h3>Noise</h3>
            <p>{noise}</p>
          </div>
          <div style={statItem}>
            <h3>Quality</h3>
            <p>{quality}</p>
          </div>
       
          <div style={statItem}>
            <h3>Damage Type</h3>
            <p>{damage_type}</p>
          </div>
          <div style={statItem}>
            <h3>Damage</h3>
            <p>3d{damage_dice}
              + {damage_modifier}</p>
          </div>
          <div style={statItem}>
            <h3>Proficiency</h3>
            <p>{proficiency}</p>
          </div>
          <div style={statItem}>
            <h3>Ammo</h3>
            <p>{ammo}</p>
          </div>

        </div>
        <p style={descriptionStyle}>"{description}"</p>
      </div>
    )
  }
}

const weaponContainer = {
  width: '100%',
  height: 'auto',
  backgroundColor: 'white',
  color: 'black',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '1em',
  boxShadow: '0px 1px 10px 1px rgba(0,0,0,0.6)'
}

const statSection = {
  flexBasis: '100%',
  flexDirection: 'row',
  display: 'flex'
}

const statItem = {
  flex: '1',
  padding: '2px',
  margin: '0',
//   border: '1px solid black'
}

const descriptionStyle = {
  color: 'grey',
  fontStyle: 'italic',
  fontSize: 'small',
  paddingTop: '0',
  background: 'black',
  color: 'white',
  marginBottom: '0',
  padding: '1em',
  boxShadow: '0 4px 12px 0 rgba(0,0,0,0.2)'
}

Weapon.propTypes = {
  weapon: PropTypes.object.isRequired
}

export default Weapon