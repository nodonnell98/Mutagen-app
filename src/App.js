import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Weapons from './components/pages/Weapons';
import Header from './components/layout/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route path="/weapons" component={Weapons}/>
        </div>
      </Router>
    )
  }
}

export default App;
