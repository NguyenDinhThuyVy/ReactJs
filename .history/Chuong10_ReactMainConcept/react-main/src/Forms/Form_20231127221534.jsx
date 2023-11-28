import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      textareaValue: "",
    };
  }
  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      value: event.target.value,
    });
  };
  handleTextArea = (event) => {
    this.setState({
      textareaValue: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.value);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
          </label>
          <input type="submit" value="Submit"></input>
          <textarea
            value={this.state.textareaValue}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;
