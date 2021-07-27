import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Weapon extends Component {

  getRarityColour = () => {
    let colour = '';
    switch (this.props.weapon.quality) {
      case 'Basic':
        colour = '#00ffff';
        break;

      case 'Refined':
        colour = '#00ff00';
        break;

      case 'Superior':
        colour = '#e600e6';
        break;

      case 'Mythic':
        colour = '#ffcc00';
        break;
    }
    return colour
  }

  getDamageType = () => {
    let src = '';
    switch (this.props.weapon.damage_type) {
      case 'Cryo':
        src = '/images/weaponIcons/cold.png';
        break;

      case 'Kinetic':
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
      quality,
      dice_type,
      dice_qty,
      damage_modifier,
      proficiency,
      ammo,
      damage_type
    } = this.props.weapon
    return (
      <div style={weaponContainer}>
        <div style={{flexBasis: '50%', flexGrow: 1}}>
        <div style={statItem}>
          <p style={{
            color: this.getRarityColour()
          }}>{name}</p>
        </div>
        <div style={statItem}>
          <img src={this.getDamageType()} style={weaponIcon}/>
        </div>
        <div style={this.weaponName()}>

          <div style={statItem}>
            <div style={weaponInfo}></div>
            <img src="/images/weaponIcons/aim.png" style={weaponIcon}/>
            <p>
              {range}</p>
          </div>
          <div style={statItem}>
            <img src="/images/weaponIcons/dice.png" style={weaponIcon}/>
            <p>{dice_qty}d{dice_type}
              + {proficiency}</p>
          </div>
          <div style={statItem}>
            <img src="/images/weaponIcons/bullets.png" style={weaponIcon}/>
            <p>{ammo}</p>
          </div>
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
  color: '#66FCF1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '1em',
  fontSize: '20px',
  padding: '0'
}

const statItem = {
  padding: '0.5em',
  margin: '0',
  flex: '1'
}

const descriptionStyle = {
  fontStyle: 'italic',
  fontSize: 'small',
  paddingTop: '0',
  background: '#224e4c',
  color: '#66FCF1',
  margin: '0',
  padding: '1em',
  flexGrow: '3'
}

const weaponInfo = {
  flex: 2
}

const weaponIcon = {
  height: '30px'
}

Weapon.propTypes = {
  weapon: PropTypes.object.isRequired
}

export default Weapon
