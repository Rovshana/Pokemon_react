import React from "react";
import GameInfo from "./data.json";
import Game from "./Game";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameData: GameInfo.pokemon,
      team1: [],
      team2: [],
      value: false,
    };
    this.handleStartGame = this.handleStartGame.bind(this);
  }
  handleStartGame() {
    let randomTeam1 = [];
    let randomTeam2 = [...this.state.gameData];

    while (randomTeam1.length < randomTeam2.length) {
      let randomItem = Math.floor(Math.random() * randomTeam2.length);
      let deleteCard = randomTeam2.splice(randomItem, 1)[0];
      randomTeam1 = [...randomTeam1, deleteCard];
    }
    this.setState({ team1: randomTeam1, team2: randomTeam2, value: true });
    console.log("team1", randomTeam1);
    console.log("team2", randomTeam2);
  }
  render() {
    let team1Score = this.state.team1.reduce(
      (total, card) => total + card.base_experience,
      0
    );
    let team2Score = this.state.team2.reduce(
      (total, card) => total + card.base_experience,
      0
    );
    return (
      <div className="App">
        {this.state.value && (
          <h1 style={{ textAlign: "center" }}>
            {team1Score > team2Score ? "Team1: won" : "Team1: Lost"}
          </h1>
        )}
        {this.state.value && <h1 style={{display: 'flex', alingItems: 'center', justifyContent: 'center'}}>{team1Score}</h1>}

        
        <Game data={this.state.team1}/>
        <br />
        <br />
        <br />
        <button
          className="btn-css"
          style={{
            display: "block",
            margin: "0 auto",
            color: "black",
            width: "300px",
            borderRadius: "100px",
            backgroundColor: "yellow",
          }}
          onClick={this.handleStartGame}
        >
          Start
        </button>
        <br />
        <br />
        {this.state.value && (
          <h1 style={{ textAlign: "center" }}>
            {team1Score < team2Score ? "Team2: won" : "Team2: Lost"}
          </h1>
        )}

        <br />
        <br />
        {this.state.value && <h1 style={{display: 'flex', alingItems: 'center', justifyContent: 'center'}}>{team2Score}</h1>}

        <Game data={this.state.team2} />
      </div>
    );
  }
}

export default App;
