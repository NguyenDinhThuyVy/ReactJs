import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [
        {
          id: "1a",
          name: "Sony",
          avatar: "🎈",
        },
        {
          id: "2b",
          name: "Iphone",
          avatar: "🎉",
        },
        {
          id: "3c",
          name: "Samsung",
          avatar: "🎁",
        },
      ],
    };
  }
  render() {
    const list = this.state.productList.map((product) => (
      <ProductItem product={product} />
    ));
    return (
      <div>
        <h1>ProductList</h1>
        <div className="product-list">{list}</div>
      </div>
    );
  }
}
