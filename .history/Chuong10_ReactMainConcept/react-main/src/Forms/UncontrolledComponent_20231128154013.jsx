import React, { Component } from "react";

export class UncontrolledComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "",
    };
  }
  render() {
    return (
      <div>
        <form>
          {" "}
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              ref={this.input}
              id="name"
              onChange={this.onChangeInput}
            />
          </label>
          <input
            type="file"
            name="avatar"
            ref={this.fileInput}
            onChange={this.onFileChange}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default UncontrolledComponent;
