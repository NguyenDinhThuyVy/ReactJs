import React, { Component } from "react";

export class FilterableProductTable extends Component {
  render() {
    return (
      <div>
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
              <th>Sporting</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default FilterableProductTable;
