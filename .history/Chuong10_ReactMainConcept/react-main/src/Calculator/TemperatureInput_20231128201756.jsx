import React, { Component } from "react";

export class TemperatureInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, temperature } = this.props;
    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {title}</legend>
          <input value={temperature} />
        </fieldset>
      </div>
    );
  }
}

export default TemperatureInput;
