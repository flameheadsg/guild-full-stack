import React, { Component } from 'react';
import Home from './Home';
import axios from 'axios';
var sha256 = require('js-sha256');

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      name: '',
      password: '',
      pass2: '',
      gold: 0,
      goldRange: 4,
      gps: 0,
      members1: 0,
      members2: 0,
      members3: 0,
      members4: 0,
      members5: 0,
      members1c: 100,
      members2c: 1000,
      members3c: 25000,
      members4c: 500000,
      members5c: 10000000,
      sp1: true,
      sp2: false,
      sp3: false
    }

    this.renderGame = this.renderGame.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.fetchGuild = this.fetchGuild.bind(this);
    this.createGuild = this.createGuild.bind(this);
    this.exit = this.exit.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.confirmPass = this.confirmPass.bind(this);
  }

  handlePass(e) {
    this.setState({
      password: e.target.value
    });
  }

  confirmPass(e) {
    this.setState({
      pass2: e.target.value
    });
  }

  exit() {
    this.setState({
      playing: false,
      name: '',
      password: '',
      gold: 0,
      goldRange: 4,
      gps: 0,
      members1: 0,
      members2: 0,
      members3: 0,
      members4: 0,
      members5: 0,
      members1c: 100,
      members2c: 1000,
      members3c: 25000,
      members4c: 500000,
      members5c: 10000000,
      sp1: true,
      sp2: false,
      sp3: false
    });
  }

  async fetchGuild() {
      let APIURL = '/api/' + this.state.name;
      let hashedPass = sha256(this.state.password);
      let res = await axios.get(APIURL);
      if(!res.data[0]) {
        window.alert('Sorry, we could not find a Guild with that name!');
      } else {
        if (res.data[0].password !== hashedPass) {
        window.alert('Sorry, we could not find a matching Guild with that name and password.');
        } else {
        this.setState({
          name: res.data[0].name,
          gold: res.data[0].gold,
          goldRange: res.data[0].goldRange,
          gps: res.data[0].gps,
          members1: res.data[0].members1,
          members2: res.data[0].members2,
          members3: res.data[0].members3,
          members4: res.data[0].members4,
          members5: res.data[0].members5,
          members1c: res.data[0].members1c,
          members2c: res.data[0].members2c,
          members3c: res.data[0].members3c,
          members4c: res.data[0].members4c,
          members5c: res.data[0].members5c,
          sp1: res.data[0].sp1,
          sp2: res.data[0].sp2,
          sp3: res.data[0].sp3,
          playing: true
        });
      }
    }
  }

  async createGuild() {
    if (this.state.password === this.state.pass2) {
      let APIURL = '/api/' + this.state.name;
      let res = await axios.get(APIURL);
      if(res.data[0]) {
        window.alert('Sorry, a Guild already exists with that name!');
      } else {
        let APIURL = '/api/' + this.state.name;
        let hashedPass = sha256(this.state.password);
        await axios.post(APIURL, {
          name: this.state.name,
          password: hashedPass,
          gold: 0,
          goldRange: 4,
          gps: 0,
          members1: 0,
          members2: 0,
          members3: 0,
          members4: 0,
          members5: 0,
          members1c: 100,
          members2c: 1000,
          members3c: 25000,
          members4c: 500000,
          members5c: 10000000,
          sp1: true,
          sp2: false,
          sp3: false
        });
        this.setState({
          name: this.state.name,
          playing: true
        });
      }
    } else {
      window.alert('Your passwords must be matching!');
    }
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  async handleFetch() {
    if (this.state.name !== '') {
      if (this.state.password === '') {
        window.alert('Please enter your password!');
      } else {
        await this.fetchGuild();
      }
    } else {
      window.alert('Please enter the name of your Guild.');
    }
  }

  async handleCreate() {
    if (this.state.name !== '') {
      if (this.state.password === '' || this.state.pass2 === '') {
        window.alert('Please enter and confirm your passwords!');
      } else {
        await this.createGuild();
      }
    } else {
      window.alert('You must name your Guild!');
    }
  }

  renderGame() {
    if (!this.state.playing) {
      return (
        <div id="newdiv">
          <p>---------------------------------------------------------------------------------------------------------------------------</p>
          <h2>Welcome to Guild of Heroes!</h2>
          <p>---------------------------------------------------------------------------------------------------------------------------</p>
          <p>
            Your journey begins as a lowly mercenary, a blade-for-hire...
          </p>
          <p>
            You dream of one day owning the most successful freelancing Guild in the land...
          </p>
          <p>
            Build a name for your enterprise and enlist the aid of champions to fight for your cause!
          </p>
          <p>---------------------------------------------------------------------------------------------------------------------------</p>
          <button type="button" className="btn mainbtn" data-toggle="modal" data-target="#createModal">
            Begin a new adventure!
          </button>

          <div className="modal fade" id="createModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Create a Guild!</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <label>Choose a name for your Guild: &nbsp;&nbsp;
                    <input
                      type="text"
                      onChange={this.handleNameChange}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <br />
                  <label>Choose a password: &nbsp;&nbsp;
                    <input
                      onChange={this.handlePass}
                      type="password"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <br />
                  <label>Confirm your password: &nbsp;&nbsp;
                    <input
                      onChange={this.confirmPass}
                      type="password"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  &nbsp;
                  <button
                    id="startbtn"
                    type="submit"
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={this.handleCreate}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <button type="button" className="btn mainbtn" data-toggle="modal" data-target="#continueModal">
            Continue an existing journey!
          </button>

          <div className="modal fade" id="continueModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Continue where you left off...</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <label>Guild Name: &nbsp;&nbsp;
                  <input
                    type="text"
                    onChange={this.handleNameChange}
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </label>
                <br />
                <label>Guild Password: &nbsp;&nbsp;
                  <input
                    onChange={this.handlePass}
                    type="password"
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                &nbsp;
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={this.handleFetch}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
          <br /><br />
        </div>
      );
    } else {
      return <Home
        name={this.state.name}
        gold={this.state.gold}
        goldRange={this.state.goldRange}
        gps={this.state.gps}
        members1={this.state.members1}
        members2={this.state.members2}
        members3={this.state.members3}
        members4={this.state.members4}
        members5={this.state.members5}
        members1c={this.state.members1c}
        members2c={this.state.members2c}
        members3c={this.state.members3c}
        members4c={this.state.members4c}
        members5c={this.state.members5c}
        sp1={this.state.sp1}
        sp2={this.state.sp2}
        sp3={this.state.sp3}
        onExit={this.exit}
      />
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
