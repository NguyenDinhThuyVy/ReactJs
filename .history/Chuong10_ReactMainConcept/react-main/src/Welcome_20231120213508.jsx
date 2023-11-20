import React from "react";

// Functional component
// function Welcome(props) {
//   return <h1>Hello,{props.name}</h1>;
// }

class Welcome extends React.Component {
  render() {
    console.log(this.props);
    return (<h1>Hello,{this.props.name}</h1>;<h2>{this.props.class}</h2>);
  }
}

export default Welcome;
