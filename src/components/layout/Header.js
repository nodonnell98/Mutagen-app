import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LoginLinks from '../authentication/LoginLinks'
import AuthenticationService from '../../services/authentication.service'

export default function Header() {

  const headerStyle = {
    background: '#1F2833',
    color: '#EDF4ED',
    textAlign: 'center',
    padding: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // borderBottom: '3px solid #66FCF1',
    textDecoration: 'none',
    height: '10vh',
    position: 'fixed',
    width: '100%',
    zIndex: '100'
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
    marginRight: '1em',
    fontSize: '20px'
  }

  const links = {
    flex: 3
  }

  return (
    <div>
      <nav style={headerStyle}>
      <div style={links}>
          <Link style={titleStyle} className="titleHover" to="/" name="Mutagen">Mutagen</Link>
        </div>
        <div style={links}>
          <Link style={navLink} to="/characters">My Characters</Link>
          <Link style={navLink} to="/weapons">Armoury</Link>
          <Link style={navLink} to="/coming_soon">Game Rules</Link>
        </div>
        <div style={links}>
          <LoginLinks />
        </div>
      </nav>
    </div>
  )
}
