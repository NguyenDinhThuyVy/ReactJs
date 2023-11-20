import React from "react";

// Functional component
function Welcome(props) {
  return (
    <div>
      <h1>Hello,{this.props.name}</h1>
      <h2>{this.props.class}</h2>
    </div>
  );
}

// class Welcome extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h1>Hello,{this.props.name}</h1>
//         <h2>{this.props.class}</h2>
//       </div>
//     );
//   }
// }

export default Welcome;
