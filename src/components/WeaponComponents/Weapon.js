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
        <h2>{name}</h2>
        <p>Range: {range}</p>
        <p>Noise: {noise}</p>
        <p>Quality: {quality}</p>
        <p>Damage: 3d{damage_dice} + {damage_modifier}</p>
        <p>Proficiency: {proficiency}</p>
        <p>Ammo: {ammo}</p>
        <p>Damage Type: {damage_type}</p>
        <p style={descriptionStyle}>{description}</p>
      </div>
    )
  }
}

const weaponContainer = {
  width: '100%',
  height: 'auto',
  backgroundColor: '#F1EDEE',
  color: 'black',
  border: '2px solid black',
  margin: '1em'
}

const descriptionStyle = {
    color: 'grey',
    fontStyle: 'italic',
    fontSize: 'small',
    borderTop: '1px solid grey',
    paddingTop: '5px'
}

Weapon.propTypes = {
  weapon: PropTypes.object.isRequired
}

export default Weapon