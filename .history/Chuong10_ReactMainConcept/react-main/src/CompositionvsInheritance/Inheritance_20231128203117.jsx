import React, { Component } from "react";
class Button extends Component {
  handleClick = (event) => {
    console.log(event.target);
  };
  render() {
    return (
      <button className="btn" onClick={this.handleClick}>
        Button
      </button>
    );
  }
}
class yellowButton extends Button {
  render() {
    return (
      <button className="btn btn-btn" onClick={this.handleClick}>
        Button
      </button>
    );
  }
}

export class Inheritance extends Component {
  render() {
    return (
      <div>
        Inheritance
        <Button />
        <yellowButton />
      </div>
    );
  }
}

export default Inheritance;
