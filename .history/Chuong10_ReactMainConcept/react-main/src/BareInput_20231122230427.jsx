import React from "react";
class BareInput extends React.Component {
  render() {
    const { type } = this.props;
    return <input {...this.props} />;
  }
}

// function BareInput(props) {
//   return <input {...props} />;
// }
export default BareInput;
