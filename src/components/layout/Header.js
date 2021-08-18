import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LoginLinks from '../authentication/LoginLinks'
import AuthenticationService from '../../services/authentication.service'

export default function Header() {

  const headerStyle = {
    background: 'rgb(2,0,36)',
    background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.7525385154061625) 52%, rgba(0,0,0,0) 100%)',
    color: '#EDF4ED',
    textAlign: 'center',
    paddingTop: '1%',
    paddingLeft: '2em',
    paddingRight: '2em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // borderBottom: '2px solid #71f1e8',
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
    color: '#71f1e8'
  }

  const navLink = {
    marginLeft: '1em',
    marginRight: '1em',
    fontSize: '20px',
    width: 'auto',
    minWidth: '7em'
  }


  const links = {
    flexGrow: 1,
    marginRight: '2%',
    alignItems: 'center'
  }

  return (
    <div>
      <nav style={headerStyle}>
      <div className="flexBoxRow flexGrow1" style={{marginLeft: '2%'}}>
          <Link style={titleStyle} className="titleHover" to="/" name="Mutagen">Mutagen</Link>
        </div>
        <div style={links} className="flexBoxRow flexGrow1">
          <Link style={navLink} className="flexGrow2 headerLink" to="/characters">My Characters</Link>
          <Link style={navLink} className="flexGrow1 headerLink"to="/weapons">Armoury</Link>
          {AuthenticationService.loggedIn() ? <Link style={navLink} className="flexGrow2 headerLink"to="/account">Account</Link> : null}
          <LoginLinks className="flexGrow1"/>
        </div>
      </nav>
    </div>
  )
}
