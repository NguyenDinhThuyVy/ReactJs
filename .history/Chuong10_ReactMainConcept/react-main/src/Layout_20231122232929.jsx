import React from "react";
class Layout extends React.Component {
  render() {
    console.log(this.props);
    return <div className="layout">this.props.children</div>;
  }
}
export default Layout;
