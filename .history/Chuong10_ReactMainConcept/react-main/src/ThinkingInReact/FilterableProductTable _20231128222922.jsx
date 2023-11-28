import React, { Component } from "react";
import "./FilterableProductTable.css";
import SearchBar from "./SearchBar";
export class FilterableProductTable extends Component {
  render() {
    return (
      <div className="FilterableProductTable">
        <SearchBar />
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
