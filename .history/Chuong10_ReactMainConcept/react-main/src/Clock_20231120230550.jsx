import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        created: new Date().toLocaleTimeString(),
      },
      seconds: {
        created: new Date().getSeconds(),
      },
    };
    this.date = "22/10/2023";
    this.getTime = this.getTime.bind(this);
  }

  getTime() {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString(),
      },
    };
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.time.created}.</h2>
        <h3>Seconds: {this.state.seconds.created}</h3>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    );
  }
}
