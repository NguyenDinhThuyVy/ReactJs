import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
    this.date = "20/11/2023";
  }
  getTime = () => {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  };
  render() {
    return (
      <div>
        <h1>Hello,World</h1>
        <h2>It's {this.state.time}</h2>
        <h3>It's {this.date}</h3>
        <button onClick={this.getTime}>getTime</button>
      </div>
    );
  }
}
