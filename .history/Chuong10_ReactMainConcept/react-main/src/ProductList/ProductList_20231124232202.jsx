import React, { Component } from "react";

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
    const lists = this.state.productList.map((product) => (
      <div className="product-item">
        <input />
        Sony - 🎈
      </div>
    ));
    return (
      <div>
        <h1>ProductList</h1>
        <div className="product-list">
          <div className="product-item">
            <input />
            Sony - 🎈
          </div>
          <div className="product-item">
            <input />
            Iphone - 🎉
          </div>
          <div className="product-item">
            <input />
            Samsung - 🎁
          </div>
        </div>
      </div>
    );
  }
}
