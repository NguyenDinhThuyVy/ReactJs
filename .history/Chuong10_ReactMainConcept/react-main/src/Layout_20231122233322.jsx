import React from "react";
// class Layout extends React.Component {
//   render() {
//     console.log(this.props);
//     return <div className="layout">{this.props.children}</div>;
//   }
// }

function Layout(props) {
  return <div className="layout">{props.children}</div>;
}
export default Layout;
