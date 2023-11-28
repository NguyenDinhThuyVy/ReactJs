import React, { Component } from "react";

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "",
    };
  }
  render() {
    return <div>Calculator</div>;
  }
}

export default Calculator;
