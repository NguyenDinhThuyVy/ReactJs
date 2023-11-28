import React, { Component } from "react";

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
          <tr>
            <th colSpan={2}> Sporting Goods</th>
          </tr>
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
