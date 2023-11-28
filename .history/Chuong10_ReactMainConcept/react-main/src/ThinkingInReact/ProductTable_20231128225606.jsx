import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export class ProductTable extends Component {
  render() {
    const { productList } = this.props;
    console.log(productList);
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductCategoryRow />
          <ProductRow />
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
