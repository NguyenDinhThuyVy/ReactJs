import React, { Component } from "react";

export default class CorrectlyState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    return <div>CorrectlyState . Count :{this.state.count}</div>;
  }
}
