import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Weapon extends Component {

  getRarityColour = () => {
    let colour = '';
    switch (this.props.weapon.quality) {
      case 'Average':
        colour = 'rgba(11,156,49)';
        break;

      case 'Rare':
        colour = 'rgba(0, 133, 255)';
        break;

      case 'Mythic':
        colour = 'rgba(255, 153, 0)';
        break;
    }
    console.log(colour)
    return colour
  }

  getDamageType = () => {
    let src = '';
    switch (this.props.weapon.damage_type) {
      case 'cryo':
        src = '/images/weaponIcons/cold.png';
        break;

      case 'kinetic':
        src = '/images/weaponIcons/kinetic.png';
        break;

      case 'Incendiary':
        src = '/images/weaponIcons/fire.png';
        break;
    }
    return src
  }

  weaponName = () => {
    console.log(this.getRarityColour())
    return {
      padding: '1em',
      display: 'flex',
      margin: '0',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      flex: 8
    }
  }

  render() {
    const {
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
        <div style={this.weaponName()}>
          
          <div style={statItem}>
          <h1 style={{color: this.getRarityColour()}}>{name}</h1>
          <img src={this.getDamageType()} style={weaponIcon}/></div>
          <div style={statItem}>
              <div style={weaponInfo}></div>
            <img src="/images/weaponIcons/aim.png" style={weaponIcon}/>
            <p>
              {range}</p>
          </div>
          <div style={statItem}>
            <img src="/images/weaponIcons/ear.png" style={weaponIcon}/>
            <p>{noise}</p>
          </div>
          <div style={statItem}>
            <img src="/images/weaponIcons/dice.png" style={weaponIcon}/>
            <p>3d{damage_dice}
              + {damage_modifier}</p>
          </div>
          <div style={statItem}>
            <img src="/images/weaponIcons/bullets.png" style={weaponIcon}/>
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

const statItem = {
  padding: '2px',
  margin: '0',
  flex: '1'
}

const descriptionStyle = {
  color: 'grey',
  fontStyle: 'italic',
  fontSize: 'small',
  paddingTop: '0',
  background: 'black',
  color: 'white',
  margin: '0',
  padding: '1em'
}

const weaponInfo = {
    flex: 2
}

const weaponIcon = {
  height: '40px'
}

Weapon.propTypes = {
  weapon: PropTypes.object.isRequired
}

export default Weapon