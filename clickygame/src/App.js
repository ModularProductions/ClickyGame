import React, { Component } from "react";
import Portrait from "./components/Portrait/Portrait";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import portraits from "./portraits.json";
import "./App.css";
import Scoreboard from "./components/Scoreboard/Scoreboard";

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var newPortraits = shuffle(portraits);

class App extends Component {
  state = {
    newPortraits,
    score : 0
  };

  shufflePortraits = id => {

  };

  render() {
    return (
      <Wrapper>
        <Title>Ocean's Shuffle</Title>
        <Scoreboard
          score={this.state.score}
        />
        {this.state.newPortraits.map((portrait, i) => (
          <Portrait
            id={portrait.id}
            key={portrait.id}
            name={portrait.name}
            image={portrait.image}
            position={i}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
