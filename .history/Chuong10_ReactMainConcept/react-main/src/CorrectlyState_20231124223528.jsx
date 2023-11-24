import React, { Component } from "react";

export default class CorrectlyState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return <div>CorrectlyState . Count :{{props}=>this.props}</div>;
  }
}
