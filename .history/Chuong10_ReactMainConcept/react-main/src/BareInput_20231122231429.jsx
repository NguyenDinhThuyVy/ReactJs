import React from "react";
// class BareInput extends React.Component {
//   render() {
//     const { type, ...rest } = this.props;
//     return <input {...rest} />;
//   }
// }

function BareInput(props) {
  const { type, ...rest } = props;
  return <input {...rest} />;
}
export default BareInput;
