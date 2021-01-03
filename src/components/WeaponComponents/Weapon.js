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
            <h3> Range</h3>
            <p> {range}</p>
          </div>
          <div style={statItem}>
            <p>Noise: {noise}</p>
          </div>
          <div style={statItem}>
            <p>Quality: {quality}</p>
          </div>
        </div>
        <div style={statSection}>
          <div style={statItem}>
            <p>Damage Type: {damage_type}</p>
          </div>
          <div style={statItem}>
            <p>Damage: 3d{damage_dice}
              + {damage_modifier}</p>
          </div>
          <div style={statItem}>
            <p>Proficiency: {proficiency}</p>
          </div>
          <div style={statItem}>
            <p>Ammo: {ammo}</p>
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
  backgroundColor: '#0D1821',
  color: 'white',
  border: '4px solid #ABD1B5',
  margin: '1em',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly'
}

const weaponSectionOne = {
  flex: '1',
  flexBasis: 'column no-wrap'
}

const weaponSectionTwo = {
  flex: '10',
  display: 'flex',
  flexDirection: 'column'
}

const statSection = {
  flexBasis: '100%',
  flexDirection: 'row',
  display: 'flex'
}

const statItem = {
  flex: '1',
  padding: '5px',
  margin: '0',
  border: '1px solid black'
}

const descriptionStyle = {
  color: 'grey',
  fontStyle: 'italic',
  fontSize: 'small',
  paddingTop: '0'
}

Weapon.propTypes = {
  weapon: PropTypes.object.isRequired
}

export default Weapon