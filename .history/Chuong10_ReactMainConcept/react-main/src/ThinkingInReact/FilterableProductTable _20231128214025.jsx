import React, { Component } from "react";

export class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search..." />
          <div>
            <input type="checkbox" />
          </div>
        </form>
      </div>
    );
  }
}

export default FilterableProductTable;
