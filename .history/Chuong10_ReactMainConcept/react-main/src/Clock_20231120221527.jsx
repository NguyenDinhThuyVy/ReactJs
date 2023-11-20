import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleDateString,
    };
  }
  render() {
    return (
      <div>
        <h1>Hello,World</h1>
        <h2>It's {this.state.time}</h2>
      </div>
    );
  }
}
