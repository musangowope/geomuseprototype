import React, { Component } from 'react';
import './App.css';
import './animate.css'
import HomePage from './components/HomepageComponents/HomePage'

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      const { isAuthenticated } = this.props.auth;
      return (
      <div className="App">
          <HomePage auth={this.props.auth}/>
      </div>
    );
  }
}

export default App;
