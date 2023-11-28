import React, { Component, createRef } from "react";

export class UncontrolledComponent extends Component {
  constructor(props) {
    super(props);
    this.input = createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.input.current.value);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={this.input} id="name" />
          </label>
          <input type="file" name="avatar" />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default UncontrolledComponent;
