import './App.css';
import './stylesheets/weaponTable.css'
import React, {Component, lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import authenticationService from './services/authentication.service';

class App extends Component {
  render() {
    const Weapons = lazy(() => import('./components/pages/Weapons'));
    const Header = lazy(() => import('./components/layout/Header'));
    const CreateWeapon = lazy(() => import('./components/WeaponComponents/CreateWeapon'));
    const LoginForm  = lazy(() => import('./components/authentication/LoginForm'));
    const RegisterForm = lazy(() => import('./components/authentication/RegisterForm'));
    const Characters = lazy(() => import('./components/pages/Characters'));
    const Character = lazy(() => import('./components/pages/Character'));
    const Home = lazy(() => import('./components/pages/Home.js'));
    const Account = lazy(() => import('./components/pages/Account'));

    const renderLoader = () => <p>Loading</p>;

    return (
      <Suspense fallback={renderLoader()}>
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
      </Suspense>
    )
  }
}

export default App;
