import React, {Component} from 'react';
import axios from 'axios';

class Weapons extends Component {
    state = {
        weapons: []
      }
    
      componentDidMount() {
        axios
          .get('https://anomaly-api-staging.herokuapp.com/weapons')
          .then(res => this.setState({weapons: res.data}))
      }

      render() {
        console.log(this.state.weapons)
        return (
            <React.Fragment>
                <h1>Weapons</h1>
                <p>This is a todo list app</p>         
            </React.Fragment>
        )
      }
   
}

export default Weapons;
