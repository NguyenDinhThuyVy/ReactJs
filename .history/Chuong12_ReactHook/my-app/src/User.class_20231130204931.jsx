import React, { Component } from "react";

export class UserClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Alex",
      age: 24,
    };
  }

  increaseAge = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };
  changeName = () => {
    this.setState((prevState) => ({
      firstName: prevState.firstName + "A",
    }));
  };
  render() {
    return (
      <div>
        <h1>User class component</h1>
        <ul>
          <li>First Name: {this.state.firstName}</li>
          <li>Age: {this.state.age}</li>
        </ul>
        <button onClick={this.increaseAge || this.changeName}>
          Increase Age
        </button>
      </div>
    );
  }
}

export default UserClassComponent;
