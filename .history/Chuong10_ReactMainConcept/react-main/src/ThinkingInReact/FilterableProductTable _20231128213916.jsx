import React, { Component } from "react";

export class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </div>
    );
  }
}

export default FilterableProductTable;
