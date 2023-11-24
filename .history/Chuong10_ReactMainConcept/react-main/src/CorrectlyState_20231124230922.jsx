import React, { Component } from "react";
const fectchApi = () =>
  new Promise((resolove) => {
    setTimeout(() => resolove(["A", "B", "C"]), 1000);
  });

export default class Component extends React {
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
    // Mình truyền nguyên 1 cái object với các thuộc tính giống như state ban đầu
    fectchApi().then((resolove) => {
      this.setState({
        comment: resolove,
      });
    });
  }
  render() {
    console.log(this.state.count);
    return (
      <div>
        CorrectlyState . Count :{this.state.count} , Comment :
        {this.state.comment}
      </div>
    );
  }
}
