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
            <Link style={navLink} to="/weapons">Armoury</Link>
            <a style={navLink}>
              Documentation</a>
          </div>
          <div style={links}>
            <Link style={titleStyle} className="titleHover" to="/">Anomaly</Link>
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
  background: '#1F2833',
  color: '#EDF4ED',
  textAlign: 'center',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  // borderBottom: '3px solid #66FCF1',
  textDecoration: 'none'
}

const titleStyle = {
  margin: 0,
  marginLeft: '10px',
  fontSize: '60px',
  fontFamily: 'Staatliches',
  padding: 0,
  color: '#66FCF1'
}

const navLink = {
  marginLeft: '1em',
  marginRight: '1em'
}

const links = {
  flex: 3
}
