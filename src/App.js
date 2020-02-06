import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Cartes/Card";
import board from "./components/board/board";
import { getRandomInt } from "./utils/random";
import { render } from "react-dom";

const deck = [
  { value: 1, color: "green" },
  { value: 2, color: "green" },
  { value: 3, color: "green" },
  { value: 4, color: "green" },
  { value: 5, color: "green" },
  { value: 6, color: "green" },
  { value: 7, color: "green" },
  { value: 8, color: "green" },
  { value: 9, color: "green" },
  { value: 10, color: "green" },
  { value: 5, color: "red" },
  { value: 6, color: "red" },
  { value: 7, color: "red" },
  { value: 8, color: "red" },
  { value: 9, color: "red" }
];
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      middlecard: deck[getRandomInt(deck.length)]
    };
  }

  startgame = () => {
    this.setState({
      middlecard: deck[getRandomInt(deck.length)]
    });
  };

  render() {
    let deckj1 = [{ value: 5 }, { value: 10 }, { value: 2 }, { value: 1 }, { value: 3 }];
    let deckj2 = [{ value: 5 }, { value: 10 }, { value: 2 }, { value: 1 }, { value: 3 }];
    let deckj3 = [{ value: 5 }, { value: 10 }, { value: 2 }, { value: 1 }, { value: 3 }];
    let deckj4 = [{ value: 5 }, { value: 10 }, { value: 2 }, { value: 1 }, { value: 3 }];
    let deckj5 = [{ value: 5 }, { value: 10 }, { value: 2 }, { value: 1 }, { value: 3 }];

    return (
      <div className="App">
        <button onClick={this.startgame}>lance la game</button>

        <div className="board">
          <div class="joueur1">
            {deckj1.map(card => {
              return <Card value={card.value} />;
            })}
          </div>
          <div class="joueur2">
            {deckj2.map(card => {
              return <Card value={card.value} />;
            })}
          </div>
          <div class="joueur3">
            {deckj3.map(card => {
              return <Card value={card.value} />;
            })}
          </div>
          <div class="joueur4">
            {deckj4.map(card => {
              return <Card value={card.value} />;
            })}
          </div>
          <div class="joueur5">
            {deckj5.map(card => {
              return <Card value={card.value} />;
            })}
          </div>
          <div class="deckcartes">
            <Card value={this.state.middlecard.value} color={this.state.middlecard.color} />
          </div>
        </div>
      </div>
    );
  }
}
