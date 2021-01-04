import './App.css';
import './stylesheets/weaponTable.css'
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Weapons from './components/pages/Weapons';
import Header from './components/layout/Header';
import AddWeapon from './components/WeaponComponents/AddWeapon';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className='container'>
          <Route
              exact
              path="/weapons"
              render={props => (
              <React.Fragment>
                <Weapons />
              </React.Fragment>
            )}></Route>
            <Route
              exact
              path="/weapons/add"
              render={props => (
              <React.Fragment>
                <AddWeapon />
              </React.Fragment>
            )}></Route>
            </div>
        </div>
      </Router>
    )
  }
}

export default App;
