import './App.css';
import './stylesheets/weaponTable.css'
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Weapons from './components/pages/Weapons';
import Header from './components/layout/Header';
import CreateWeapon from './components/WeaponComponents/CreateWeapon';
import authenticationService from './services/authentication.service';
import LoginForm from './components/authentication/LoginForm'
import RegisterForm from './components/authentication/RegisterForm';
import Characters from './components/pages/Characters';
import Character from './components/pages/Character';
import Home from './components/pages/Home.js';
import Account from './components/pages/Account';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className='appContainer'>

            <Route exact path="/"><Home /></Route>
            <Route exact path="/account" ><Account /></Route>
            <Route exact path="/weapons">< Weapons /></Route>
            <Route exact path="/weapons/add" ><CreateWeapon /></Route>
            <Route exact path="/login" ><LoginForm /></Route>
            <Route exact path="/register" ><RegisterForm /></Route>
            <Route exact path="/characters" >{authenticationService.loggedIn() ? <Characters /> : <LoginForm />}</Route>
            <Route exact path="/character/:id" render={(props) =>  <Character id={props}/>}></Route>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
