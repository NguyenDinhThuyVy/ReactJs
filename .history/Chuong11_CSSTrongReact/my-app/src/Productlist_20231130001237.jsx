import React from "react";
import "./productlist.css";
import styles from "./productList.module.scss";
function Productlist() {
  return (
    <div className="container">
      ProductList
      <div className={styles.productList}>
        <div className={styles.productItem}>Item</div>
        <div className={styles.productItem}>Item</div>
        <div className={styles.productItem}>Item</div>
        <div className={styles.productItem}>Item</div>
      </div>
    </div>
  );
}

export default Productlist;
