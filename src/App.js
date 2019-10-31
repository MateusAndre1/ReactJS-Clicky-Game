import React, { Component } from 'react';
import SaiyanCard from "./components/SaiyanCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import saiyans from "./saiyans.json";
import "./App.css";

// shuffle arr of saiyans
function shuffleImage(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
  }
  return arr
};

class App extends Component {
  state = {
    saiyans,
    score: 0,
    topScore: 0,
    clickedSaiyans: []
  };

  clickedImage = id => {
    let clickedSaiyans = this.state.clickedSaiyans;
    let score = this.state.score;
    let topScore = this.state.topScore;

    if (clickedSaiyans.indexOf(id) === -1) {
      clickedSaiyans.push(id);
      this.handleIncrement();
      this.saiyanShuffle();
    } else if (this.state.score === 12) {
      alert("You win!")
      this.setState({
        score: 0,
        clickedSaiyans: []
      });
    } else {
      this.setState({
        score: 0,
        clickedSaiyans: []
      });
      alert("Sorry you picked the same fighter twice, try again!")
    }

    if (score > topScore) {
      topScore = score;
      this.setState({ topScore })
    }
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  }

  saiyanShuffle = () => {
    this.setState({ saiyans: shuffleImage(saiyans) })
  }


  render() {
    return (    
      <Wrapper>
         <Title 
            score={this.state.score}
            topScore={this.state.topScore} />
        <div class="container"> 
          <div class="row">
            {this.state.saiyans.map(character => (
              <SaiyanCard
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
                clickedImage={this.clickedImage}
                />
            ))}
            </div>
        </div>
      </Wrapper>
    ); 
  }
}

export default App;