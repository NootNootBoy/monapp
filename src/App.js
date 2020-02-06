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
      middlecard: deck[getRandomInt(deck.length)],
      // HandDeck : Hand[getRandomInt(Hand.length)],
      deckj1: [],
      deckj2: [],
      deckj3: [],
      deckj4: [],
      deckj5: [],
      getCardNumberj1: 0,
      getCardNumberj2: 0,
      getCardNumberj3: 0,
      getCardNumberj4: 0,
      getCardNumberj5: 0,
      historiquej1: [],
      historiquej2: [],
      historiquej3: [],
      historiquej4: [],
      historiquej5: [],
      NbrGlouglouJ1: 0,
      NbrGlouglouJ2: 0,
      NbrGlouglouJ3: 0,
      NbrGlouglouJ4: 0,
      NbrGlouglouJ5: 0,
      currentPlayer: 0
    };
  }

  //Fonction début de la partie

  startgame = () => {

    let _deckj1 = [{value: 5, color: "yellow" }, { value: 10, color: "yellow" }, { value: 2, color: "yellow" }, { value: 1, color: "yellow" }, { value: 3, color: "yellow" }]
    let _deckj2 = [{value: 5, color: "yellow" }, { value: 10, color: "yellow" }, { value: 2, color: "yellow" }, { value: 1, color: "yellow" }, { value: 3, color: "yellow" }]
    let _deckj3 = [{value: 5, color: "yellow" }, { value: 10, color: "yellow" }, { value: 2, color: "yellow" }, { value: 1, color: "yellow" }, { value: 3, color: "yellow" }]
    let _deckj4 = [{value: 5, color: "yellow" }, { value: 10, color: "yellow" }, { value: 2, color: "yellow" }, { value: 1, color: "yellow" }, { value: 3, color: "yellow" }]
    let _deckj5 = [{value: 5, color: "yellow" }, { value: 10, color: "yellow" }, { value: 2, color: "yellow" }, { value: 1, color: "yellow" }, { value: 3, color: "yellow" }]

    this.setState({
     middlecard: deck[getRandomInt(deck.length)],
      // HandDeck : Hand[getRandomInt(Hand.length)],
     deckj1 : _deckj1,
     deckj2 : _deckj2,
     deckj3 : _deckj3,
     deckj4 : _deckj4,
     deckj5 : _deckj5,
     currentPlayer: 1
    });
    console.log(this.state);
  };


  displayHandOrNot = (cardValue, player) => {
 
    // Vérier si je joueur est le joueur actif

    if(player === this.state.currentPlayer){
        return cardValue;
    }

    
}
playCard = (cardNumber, player) => {
 
  

  if(player !== this.state.currentPlayer){
      return alert("pas à toi!");
  }

  let nextPlayer;


  if(this.state.currentPlayer === 5){
      nextPlayer = 1;

  } else {
      nextPlayer = this.state.currentPlayer + 1;
  }




    // switch(this.state.currentPlayer){
    //     case 1:
    //       this.state.getCardNumberj1.push(cardNumber)
    //         break;
    //     case 2:
    //       this.state.getCardNumberj2.push(cardNumber)
    //         break;
    //     case 3:
    //       this.state.getCardNumberj3.push(cardNumber)
    //         break;
    //     case 4:
    //       this.state.getCardNumberj4.push(cardNumber)
    //         break;
    //     case 5:
    //       this.state.getCardNumberj5.push(cardNumber)
    //         break;
    //     default:
    // }

  this.setState({
    currentPlayer: nextPlayer,
    
  }
    );
    
  


  this.deleteCard(player, cardNumber);

}


deleteCard = (currentPlayer, cardNumber) => {
       
  let _deck;
  switch(currentPlayer){
      case 1:
          _deck = this.state.deckj1;
          break;
      case 2:
          _deck = this.state.deckj2;
          break;
      case 3:
          _deck = this.state.deckj3;
          break;
      case 4:
          _deck = this.state.deckj4;
          break;
      case 5:
          _deck = this.state.deckj5;
          break;
      default:
          _deck = [];
  }

 
  let newDeck = _deck.filter((card) => {
      return card.value !== cardNumber;
  })
 
  let newTour = 0;

  switch(currentPlayer){
      case 1:
          this.setState({deckj1: newDeck})
          this.state.getCardNumberj1 = cardNumber
          this.state.historiquej1.push(cardNumber)
          console.log(this.state.getCardNumberj1)
          break;

      case 2:
          this.setState({deckj2: newDeck})
          this.state.getCardNumberj2 = cardNumber
          this.state.historiquej2.push(cardNumber)
          console.log(this.state.getCardNumberj2)
      break;

      case 3:
          this.setState({deckj3: newDeck})
          this.state.getCardNumberj3 = cardNumber
          this.state.historiquej3.push(cardNumber)
          console.log(this.state.getCardNumberj3)

      break;

      case 4:
          this.setState({deckj4: newDeck})
          this.state.getCardNumberj4 = cardNumber
          this.state.historiquej4.push(cardNumber)
          console.log(this.state.getCardNumberj4)
      break;

      case 5:
          this.setState({deckj5: newDeck})
          this.state.getCardNumberj5 = cardNumber
          this.state.historiquej5.push(cardNumber)
          console.log(this.state.getCardNumberj5)
          newTour++;
      break;

      default: 

  }
  if(newTour === 1)
  {
   let max = this.state.getCardNumberj1;
   let texte = "joueur 1 max";
   let indicateurWhoIsMax = 1;

   if(max < this.state.getCardNumberj2){
     max = this.state.getCardNumberj2;
     texte = "joueur 2 max";
     indicateurWhoIsMax = 2;
     alert(texte + " " + max)
   }
   else if (max < this.state.getCardNumberj3)
   {
    max = this.state.getCardNumberj3;
    texte = "joueur 3 max";
    indicateurWhoIsMax = 3;
    alert(texte + " " + max)
   }else if (max < this.state.getCardNumberj4)
   {
    max = this.state.getCardNumberj4;
    texte = "joueur 4 max";
    indicateurWhoIsMax = 4;
    alert(texte + " " + max)
   }
   else if (max < this.state.getCardNumberj5)
   {
    max = this.state.getCardNumberj5;
    texte = "joueur 5 max";
    indicateurWhoIsMax = 5;
    alert(texte + " " + max) 
  }else if ( max === this.state.getCardNumberj2 || max === this.state.getCardNumberj3 || max === this.state.getCardNumberj4 ||  max === this.state.getCardNumberj5)
    {
      indicateurWhoIsMax = 6;
     texte = "egalite";
     alert(texte + " " )
    }
   else {
    alert(texte + " " + max)
   }
   switch(indicateurWhoIsMax){

    case 1: this.state.NbrGlouglouJ1 = this.state.NbrGlouglouJ1 + max;
    break;
    case 2: this.state.NbrGlouglouJ2 = this.state.NbrGlouglouJ2 + max;
    break;
    case 3: this.state.NbrGlouglouJ3 = this.state.NbrGlouglouJ3 + max;
    break;
    case 4: this.state.NbrGlouglouJ4 = this.state.NbrGlouglouJ4 + max;
    break;
    case 5: this.state.NbrGlouglouJ5 = this.state.NbrGlouglouJ5 + max;
    break;
    case 6: console.log("personne distribue de gorgées")
    break;
   }

  console.log("nombre de glouglou à données " + this.state.NbrGlouglouJ1)
  console.log("nombre de glouglou à données " + this.state.NbrGlouglouJ2)
  console.log("nombre de glouglou à données " + this.state.NbrGlouglouJ3)
  console.log("nombre de glouglou à données " + this.state.NbrGlouglouJ4)
  console.log("nombre de glouglou à données " + this.state.NbrGlouglouJ5)


}
}
  render() {
    

    return (
      <div className="App">
        <button onClick={this.startgame}>lance la game</button>
        <button onClick={this.test}>jouer</button>
        <div className="board">
          <div class="joueur1">
          { this.state.currentPlayer === 1 ? <p>A toi de jouer </p> : <p>Attend ton tour</p> }
            {this.state.deckj1.map(card => {
              // return <Card value={card.value} color={card.color}>
              //   {this.displayHandOrNot(card.value, 1)}
              // </Card>
              return(
                <Card  handleClick={() => this.playCard(card.value, 1)} value={card.value} color={card.color}>
                    {this.displayHandOrNot(card.value, 1)}
                </Card>
                )
            })}
          </div>
          <div class="joueur2">
          { this.state.currentPlayer === 2 ? <p>A toi de jouer </p> : <p>Attend ton tour</p> }
            {this.state.deckj2.map(card => {
               return(
                
                <Card  handleClick={() => this.playCard(card.value, 2)} value={card.value} color={card.color}>
                    {this.displayHandOrNot(card.value, 2)}
                </Card>
                
                )
            })}
          </div>
          <div class="joueur3">
          { this.state.currentPlayer === 3 ? <p>A toi de jouer </p> : <p>Attend ton tour</p> }
            {this.state.deckj3.map(card => {
               return(
                <Card  handleClick={() => this.playCard(card.value, 3)} value={card.value} color={card.color}>
                    {this.displayHandOrNot(card.value, 3)}
                </Card>
                )
            })}
          </div>
          <div class="joueur4">
          { this.state.currentPlayer === 4 ? <p>A toi de jouer </p> : <p>Attend ton tour</p> }
            {this.state.deckj4.map(card => {
              return(
                <Card  handleClick={() => this.playCard(card.value, 4)} value={card.value} color={card.color}>
                    {this.displayHandOrNot(card.value, 4)}
                </Card>
                )
            })}
          </div>
          <div class="joueur5">
          { this.state.currentPlayer === 5 ? <p>A toi de jouer </p> : <p>Attend ton tour</p> }
            {this.state.deckj5.map(card => {
               return(
                <Card handleClick={() => this.playCard(card.value, 5)} value={card.value} color={card.color}>
                    {this.displayHandOrNot(card.value, 5)}
                </Card>
            
                )
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
