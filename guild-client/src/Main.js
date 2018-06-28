import React, { Component } from 'react';
import Home from './Home';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      name: '',
    }

    this.renderGame = this.renderGame.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleNameSubmit() {
    if (this.state.name !== '') {
      this.setState({
        playing: true
      });
    } else {
      window.alert('Please name your Guild!');
    }
  }

  renderGame() {
    if (!this.state.playing) {
      return (
        <div id="newdiv">
          <br />
          <h2>Welcome to Guild of Heroes!</h2>
          <br />
          <p>
            Your journey begins as a lowly mercenary, a blade-for-hire...
          </p>
          <p>
            You dream of one day owning the most successful freelancing guild in the land...
          </p>
          <p>
            Build a name for your enterprise and enlist the aid of champions to fight for your cause!
          </p>
          <br />
          <label>Name your Guild: &nbsp;&nbsp;
            <input
              id="setname"
              type="text"
              onChange={this.handleNameChange}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              id="startbtn"
              type="submit"
              onClick={this.handleNameSubmit}
            >
              Begin your adventure!
            </button>
          </label>
        </div>
      )
    } else {
      return <Home name={this.state.name} />
    }
  }

  render() {
    return (
      <div>
        {this.renderGame()}
      </div>
    );
  }
}

export default Main;
