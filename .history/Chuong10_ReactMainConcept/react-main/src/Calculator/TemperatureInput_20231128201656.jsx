import React, { Component } from "react";

export class TemperatureInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, value } = this.props;
    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {title}</legend>
        </fieldset>
      </div>
    );
  }
}

export default TemperatureInput;
