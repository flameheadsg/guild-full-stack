import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
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

    this.questClick = this.questClick.bind(this);
    this.renderPrompt = this.renderPrompt.bind(this);
    this.addGPS = this.addGPS.bind(this);
    this.renderGPS = this.renderGPS.bind(this);
    this.renderEmptyGuild = this.renderEmptyGuild.bind(this);
    this.buyMerc = this.buyMerc.bind(this);
    this.renderMercs = this.renderMercs.bind(this);
    this.buyMage = this.buyMage.bind(this);
    this.renderMages = this.renderMages.bind(this);
    this.buyPaladin = this.buyPaladin.bind(this);
    this.renderPaladins = this.renderPaladins.bind(this);
    this.buyNecro = this.buyNecro.bind(this);
    this.renderNecros = this.renderNecros.bind(this);
    this.buyElite = this.buyElite.bind(this);
    this.renderElites = this.renderElites.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.addGPS(),
      1000
    );
  }

  addGPS() {
    this.setState((prevState) => ({
      gold: prevState.gold + this.state.gps
    }));
  }

  questClick() {
    this.setState((prevState) => ({
      gold: prevState.gold + Math.round(Math.random() * this.state.goldRange + 1)
    }));
  }

  buyMerc() {
    if (this.state.gold >= this.state.members1c) {
      this.setState((prevState) => ({
        gold: prevState.gold - prevState.members1c,
        members1: prevState.members1 + 1,
        gps: prevState.gps + 5,
        members1c: Math.round(this.state.members1c * Math.pow(1.075, (this.state.members1 + 1)))
      }));
    }

    if (this.state.sp1) {
      this.setState({
        sp1: false,
        sp2: true
      });
    }
  }

  buyMage() {
    if (this.state.gold >= this.state.members2c) {
      this.setState((prevState) => ({
        gold: prevState.gold - this.state.members2c,
        members2: prevState.members2 + 1,
        gps: prevState.gps + 50,
        members2c: Math.round(this.state.members2c * Math.pow(1.135, (this.state.members2 + 1)))
      }));
    }

    if (this.state.sp1) {
      this.setState({
        sp1: false,
        sp2: true
      });
    }
  }

  buyPaladin() {
    if (this.state.gold >= this.state.members3c) {
      this.setState((prevState) => ({
        gold: prevState.gold - this.state.members3c,
        members3: prevState.members3 + 1,
        gps: prevState.gps + 500,
        members3c: Math.round(this.state.members3c * Math.pow(1.225, (this.state.members3 + 1)))
      }));
    }

    if (this.state.sp1) {
      this.setState({
        sp1: false,
        sp2: true
      });
    }
  }

  buyNecro() {
    if (this.state.gold >= this.state.members4c) {
      this.setState((prevState) => ({
        gold: prevState.gold - this.state.members4c,
        members4: prevState.members4 + 1,
        gps: prevState.gps + 5000,
        members4c: Math.round(this.state.members4c * Math.pow(1.225, (this.state.members4 + 1)))
      }));
    }

    if (this.state.sp1) {
      this.setState({
        sp1: false,
        sp2: true
      });
    }
  }

  buyElite() {
    if (this.state.gold >= this.state.members5c) {
      this.setState((prevState) => ({
        gold: prevState.gold - this.state.members5c,
        members5: prevState.members5 + 1,
        gps: prevState.gps + 50000,
        members5c: Math.round(this.state.members5c * Math.pow(1.3, (this.state.members5 + 1)))
      }));
    }

    if (this.state.sp1 || this.state.sp2) {
      this.setState({
        sp1: false,
        sp2: false,
        sp3: true
      });
    }
  }

  renderEmptyGuild() {
    if (this.state.gps === 0) {
      return (
        <div>You have not recruited anyone into your Guild yet.</div>
      );
    }
  }

  renderMercs() {
    if (this.state.members1) {
      if (this.state.members1 === 1) {
        return (
          <div>Your Guild consists of <br /> 1 Mercenary, contributing 5 gold per second.</div>
        );
      } else {
        return (
          <div>Your Guild consists of <br /> {this.state.members1} Mercenaries, contributing {this.state.members1 * 5} gold per second.</div>
        );
      }
    }
  }

  renderMages() {
    if (this.state.members2) {
      if (this.state.members2 === 1) {
        return (
          <div>Your Guild consists of <br /> 1 Battlemage, contributing 50 gold per second.</div>
        );
      } else {
        return (
          <div>Your Guild consists of <br /> {this.state.members2} Battlemages, contributing {this.state.members2 * 50} gold per second.</div>
        );
      }
    }
  }

  renderPaladins() {
    if (this.state.members3) {
      if (this.state.members3 === 1) {
        return (
          <div>Your Guild consists of <br /> 1 Paladin, contributing 500 gold per second.</div>
        );
      } else {
        return (
          <div>Your Guild consists of <br /> {this.state.members3} Paladins, contributing {this.state.members3 * 500} gold per second.</div>
        );
      }
    }
  }

  renderNecros() {
    if (this.state.members4) {
      if (this.state.members4 === 1) {
        return (
          <div>Your Guild consists of <br /> 1 Necromancer, contributing 5000 gold per second.</div>
        );
      } else {
        return (
          <div>Your Guild consists of <br /> {this.state.members4} Necromancers, contributing {this.state.members4 * 5000} gold per second.</div>
        );
      }
    }
  }

  renderElites() {
    if (this.state.members5) {
      if (this.state.members5 === 1) {
        return (
          <div>Your Guild consists of <br /> 1 Elite Guard, contributing 50000 gold per second.</div>
        );
      } else {
        return (
          <div>Your Guild consists of <br /> {this.state.members5} Elite Guards, contributing {this.state.members5 * 50000} gold per second.</div>
        );
      }
    }
  }

  renderGPS() {
    if (this.state.gps) {
      return (
        <div>The total gold per second earned by your Guild is {this.state.gps}</div>
      );
    }
  }

  renderPrompt() {
    if (this.state.sp1) {
      return (
        <div>Embark on quests to start growing your Guild and recruit your first member.</div>
      );
    }

    if (this.state.sp2) {
      return (
        <div>New recruits will continue to bring revenue into the Guild over time. Continue growing your Guild.</div>
      );
    }

    if (this.state.sp3) {
      return (
        <div>Your Guild is among the strongest in the land.</div>
      );
    }
  }

  render() {
    return (
      <div>
        <div>
          <br /><br />
          <h2>
            Your Guild <span className="vip">{this.state.name}</span> has a balance of <span className="vip">{this.state.gold}</span> gold
          </h2>
          <br /><br />
        </div>
        <div id="homediv">
          <div className="col-2 col-md-4">
            <h4><u>Guild Recruitment</u></h4>
            <br />
            <button
              className="hirebtn"
              onClick={this.buyMerc}
            >
              Hire Mercenary - {this.state.members1c} gold
            </button>
            <br /><br />
            <button
              className="hirebtn"
              onClick={this.buyMage}
            >
              Hire Battlemage - {this.state.members2c} gold
            </button>
            <br /><br />
            <button
              className="hirebtn"
              onClick={this.buyPaladin}
            >
              Hire Paladin - {this.state.members3c} gold
            </button>
            <br /><br />
            <button
              className="hirebtn"
              onClick={this.buyNecro}
            >
              Hire Necromancer - {this.state.members4c} gold
            </button>
            <br /><br />
            <button
              className="hirebtn"
              onClick={this.buyElite}
            >
              Hire Elite Guard - {this.state.members5c} gold
            </button>
            <br /><br />
            {this.renderPrompt()}
          </div>
          <div className="col-5 col-md-4">
            <button
              id="questbtn"
              onClick={this.questClick}
            >
              Go Questing
            </button>
          </div>
          <div className="col-5 col-md-4">
            <h4><u>Guild Membership</u></h4>
            <br /><br />
            {this.renderEmptyGuild()}
            {this.renderMercs()}
            <br />
            {this.renderMages()}
            <br />
            {this.renderPaladins()}
            <br />
            {this.renderNecros()}
            <br />
            {this.renderElites()}
            <br />
            {this.renderGPS()}
          </div>
        </div>
        <br /><br />
      </div>
    );
  }
}

export default Home;
