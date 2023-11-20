import React from "react";

// Functional component
// function Welcome(props) {
//   return <h1>Hello,{props.name}</h1>;
// }

class Welcome extends React.Component {
  render() {
    console.log(this.props.name);
    return <h1>Hello,{this.props.name}</h1>;
  }
}

export default Welcome;
