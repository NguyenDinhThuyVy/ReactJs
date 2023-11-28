import React, { Component } from "react";

export class Composition extends Component {
  render() {
    return (
      <>
        Composition
        <Button />
        <Button className="btn-yellow">Yellow</Button>
        <Layout
          left={<Button className="btn-left">Left</Button>}
          right={<Button className="btn-right">Right</Button>}
        />
      </>
    );
  }
}

export default Composition;
