import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav style={headerStyle}>
          <div style={links}>
            <a style={navLink}>
              Characters</a>
            <Link style={navLink} to="/weapons">Weapons</Link>
            <a style={navLink}>
              Documentation</a>
          </div>
          <div style={links}>
            <Link style={titleStyle} to="/">Anomaly</Link>
          </div>
          <div style={links}>
            <a style={navLink}>
              Login | Register</a>
          </div>
        </nav>
      </div>
    )
  }
}

const headerStyle = {
  background: '#0D1821',
  color: '#EDF4ED',
  textAlign: 'center',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  borderBottom: '3px solid #ABD1B5',
  textDecoration: 'none'
}

const titleStyle = {
  margin: 0,
  marginLeft: '10px',
  fontSize: '60px',
  fontFamily: 'Staatliches',
  padding: 0,
  color: '#ABD1B5'
}

const navLink = {
  marginLeft: '1em',
  marginRight: '1em'
}

const links = {
  flex: 3
}
