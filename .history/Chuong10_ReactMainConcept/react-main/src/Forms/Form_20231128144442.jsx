import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      textareaValue: "",
      food: "coconut",
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
    console.log(this.state);
  };
  handleSelect = (event) => {
    this.setState({
      food: event.target.value,
    });
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
            onChange={this.handleTextArea}
          ></textarea>
          <select
            onChange={this.handleChange}
            value={this.state.food}
            name="food"
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Form;
