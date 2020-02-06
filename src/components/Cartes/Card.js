import React from "react";
import "./Card.css";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="containerCard" onClick={this.props.handleClick}>
        {" "}
        <p style={{ color: this.props.color }}>{this.props.value}</p>
        <div className="containerCardDos"></div>
      </div>
    );
  }
}
