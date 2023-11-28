import React, { Component } from "react";
import "./FilterableProductTable.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
export class FilterableProductTable extends Component {
  render() {
    return (
      <div className="FilterableProductTable">
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}

export default FilterableProductTable;
