import React from "react";
class BareInput extends React.Component {
  render() {
    const { type, ...rest } = this.props;
    return <input {...rest} />;
  }
}

// function BareInput(props) {
//   return <input {...props} />;
// }
export default BareInput;
