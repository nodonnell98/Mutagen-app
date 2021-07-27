import './App.css';
import './stylesheets/weaponTable.css'
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Weapons from './components/pages/Weapons';
import Header from './components/layout/Header';
import AddWeapon from './components/WeaponComponents/AddWeapon';
import Login from './components/authentication/Login'
import Register from './components/authentication/Register'
import ComingSoon from './components/pages/ComingSoon';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className='appContainer'>
          <Route exact path="/"><img style={{width: '102%', marginTop: '0%'}}src='./images/landing.png'></img></Route>
          <Route exact path="/weapons">< Weapons /></Route>
          <Route exact path="/weapons/add" ><AddWeapon /></Route>
          <Route exact path="/login" ><Login /></Route>
          <Route exact path="/register" ><Register /></Route>
          <Route exact path="/coming_soon" ><ComingSoon /></Route>
            </div>
        </div>
      </Router>
    )
  }
}

export default App;
