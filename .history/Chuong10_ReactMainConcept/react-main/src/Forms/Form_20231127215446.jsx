import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {" "}
        <form>
          <label>
            Name:
            <input type="text" name="name">
              {" "}
            </input>
          </label>
          <input type="submit" value="Submit">
            {" "}
          </input>
        </form>
      </div>
    );
  }
}

export default Form;
