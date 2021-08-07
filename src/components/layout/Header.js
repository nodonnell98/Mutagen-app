import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LoginLinks from '../authentication/LoginLinks'
import AuthenticationService from '../../services/authentication.service'

export default function Header() {

  const headerStyle = {
    background: '#17191c',
    color: '#EDF4ED',
    textAlign: 'center',
    padding: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // borderBottom: '2px solid #66FCF1',
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
    fontSize: '20px',
    width: 'auto'
  }


  const links = {
    flexGrow: 1,
    marginRight: '2%'
  }

  return (
    <div>
      <nav style={headerStyle}>
      <div className="flexBoxRow flexGrow1" style={{marginLeft: '2%'}}>
          <Link style={titleStyle} className="titleHover" to="/" name="Mutagen">Mutagen</Link>
        </div>
        <div style={links} className="flexBoxRow flexGrow1">
          <Link style={navLink} className="flexGrow2" to="/characters">My Characters</Link>
          <Link style={navLink} className="flexGrow1"to="/weapons">Armoury</Link>
          <Link style={navLink} className="flexGrow2"to="/coming_soon">Game Rules</Link>
          <LoginLinks className="flexGrow1"/>
        </div>
      </nav>
    </div>
  )
}
