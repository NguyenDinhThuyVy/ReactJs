import React, { Component } from "react";

export class Form extends Component {
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
