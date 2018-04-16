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
var pickedArr = [];

class App extends Component {
  state = {
    newPortraits,
    score : 0
  };

  selectPortrait = id => {
    if (!pickedArr.includes(id)) {
      this.setState({ score: this.state.score + 1 });
      pickedArr.push(id);
      newPortraits = shuffle(newPortraits);
    } else {
      this.setState({ score: 0 });
      pickedArr = [];
      newPortraits = shuffle(newPortraits);
    }
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
            selectPortrait={this.selectPortrait}
            id={portrait.id}
            key={portrait.id}
            name={portrait.name}
            image={portrait.image}
            position={i}
          />
        ))}
        <div className="instructions">
          <p>Click on portraits to get points, but don't click the same one twice!</p>
        </div>
      </Wrapper>
    );
  }
}

export default App;
