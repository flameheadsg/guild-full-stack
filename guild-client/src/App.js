import React, { Component } from 'react';
import './App.css';
import Torch from './Torch';
import Main from './Main';

class App extends Component {

  render() {
    return (
      <div className="App" id="app">
        <div className="col-0 col-md-2 container-fluid">
          <Torch />
        </div>
        <div className="col-12 col-md-8 container-fluid appdiv">
          <Main />
        </div>
        <div className="col-0 col-md-2 container-fluid">
          <Torch />
        </div>
      </div>
    );
  }
}

export default App;
