import React, { Component } from "react";
const fectchApi = () =>
  newPromise((resolove) => {
    setTimeout(() => resolove(["A", "B", "C"]), 1000);
  });
export default class CorrectlyState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      comment: [],
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.setState((prevState, props) => ({ count: prevState.count + 1 }));
    this.setState((prevState, props) => ({ count: prevState.count + 1 }));
  }
  render() {
    console.log(this.state.count);
    return <div>CorrectlyState . Count :{this.state.count}</div>;
  }
}