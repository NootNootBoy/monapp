import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Cartes/Card";
import board from "./components/board/board";

function App() {
  let cards = [
    { value: 5, color: "black" },
    { value: 10, color: "red" },
    { value: 2, color: "red" },
    { value: 1, color: "black" },
    { value: 3, color: "black" }
  ];

  return (
    <div className="App">
      <div className="board">
        <div class="joueur1">
          {cards.map(card => {
            return <Card value={card.value} color={card.color} />;
          })}
        </div>
        <div class="joueur2">
          {cards.map(card => {
            return <Card value={card.value} color={card.color} />;
          })}
        </div>
        <div class="joueur3">
          {cards.map(card => {
            return <Card value={card.value} color={card.color} />;
          })}
        </div>
        <div class="joueur4">
          {cards.map(card => {
            return <Card value={card.value} color={card.color} />;
          })}
        </div>
        <div class="joueur5">
          {cards.map(card => {
            return <Card value={card.value} color={card.color} />;
          })}
        </div>
        <div class="deckcartes"></div>
      </div>
    </div>
  );
}

export default App;
