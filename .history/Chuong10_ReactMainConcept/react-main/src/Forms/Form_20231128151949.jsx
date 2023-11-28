import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      food: "coconut",
      marriage: false,
    };
  }
  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
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
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </label>
          <textarea
            name="address"
            value={this.stateaddress}
            onChange={this.handleTextArea}
          ></textarea>
          <input
            type="checkbox"
            checked={this.state.marriage}
            name="marriage"
            id=""
            onChange={this.handleCheckboxChange}
          />
          <select
            onChange={this.handleSelect}
            value={this.state.food}
            name="food"
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Form;
