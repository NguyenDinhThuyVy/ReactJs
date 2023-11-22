import React from "react";
class BareInput extends React.Component {
  render() {
    const { type: typeInput, ...rest } = this.props;
    return <input {...rest} type={typeInput} />;
  }
}

// function BareInput(props) {
//   const { type, ...rest } = props;
//   return <input {...rest} />;
// }
export default BareInput;
