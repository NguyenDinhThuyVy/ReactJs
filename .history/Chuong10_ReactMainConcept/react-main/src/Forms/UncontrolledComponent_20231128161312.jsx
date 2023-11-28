import React, { Component, createRef } from "react";

export class UncontrolledComponent extends Component {
  constructor(props) {
    super(props);
    this.input = createRef();
    this.fileInput = createRef();
    this.state = {
      selectedFile: null,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.input.current.value);
  };
  onFileChange = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={this.input} id="name" />
          </label>
          <input
            type="file"
            name="avatar"
            ref={this.input}
            onChange={this.onFileChange}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default UncontrolledComponent;
