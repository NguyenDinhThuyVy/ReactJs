import React, { Component } from "react";

export default class ProductItem extends Component {
  const {product} = this.props
  render() {
    return <div className="product-item" key={product.id}>
    <input />
    {product.name} - {product.avatar}
  </div>;
  }
}
