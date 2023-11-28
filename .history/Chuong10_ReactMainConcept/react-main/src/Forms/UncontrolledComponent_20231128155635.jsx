import React, { Component, createRef } from "react";

export class UncontrolledComponent extends Component {
  constructor(props) {
    super(props);
    this.input = createRef;
  }
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              ref={this.input}
              id="name"
            />
          </label>
          <input type="file" name="avatar" />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default UncontrolledComponent;
