import React, { Component } from "react";
import "./FilterableProductTable.css";
export class FilterableProductTable extends Component {
  render() {
    return (
      <div className="FilterableProductTable">
        <form>
          <input type="text" placeholder="Search..." />
          <div>
            <input type="checkbox" /> Only show products in stock
          </div>
        </form>
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
      </div>
    );
  }
}

export default FilterableProductTable;
