import React, { Component } from "react";

export class TemperatureInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <fieldset>
          <legend>Enter temperature in</legend>
        </fieldset>
      </div>
    );
  }
}

export default TemperatureInput;
