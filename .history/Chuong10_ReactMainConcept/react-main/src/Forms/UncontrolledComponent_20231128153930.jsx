import React, { Component } from "react";

export class UncontrolledComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "",
    };
  }
  render() {
    return <div>UncontrolledComponent</div>;
  }
}

export default UncontrolledComponent;
