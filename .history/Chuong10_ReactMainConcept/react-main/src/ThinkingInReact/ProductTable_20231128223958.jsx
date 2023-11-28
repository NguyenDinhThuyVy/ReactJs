import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";

export class ProductTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
         <ProductCategoryRow
          <tr>
            <td>Football</td>
            <td>$49.99</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
