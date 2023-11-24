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
  orderProductList = () => {
    this.setState((prevState) => ({
      productList: prevState.productList.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }),
    }));
  };
  render() {
    const list = this.state.productList.map((product) => (
      <ProductItem product={product} key={product.id} />
    ));

    addProduct = () => {
      this.setState((prevState) => ({
        productList: [
          {
            id: "4d",
            name: "Huawei",
            avatar: "🎃",
          },
          ...prevState.productList,
        ],
      }));
    };
    return (
      <div>
        <h1>ProductList</h1>
        <button onClick={this.orderProductList}>Order Product List</button>
        <div className="product-list">{list}</div>
      </div>
    );
  }
}
