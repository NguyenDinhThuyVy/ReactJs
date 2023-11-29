import React from "react";
import "./cart.scss";
function Cart(isShow) {
  return (
    <div className="container">
      Cart
      <div className="buttons">
        <button
          className="buttons__item"
          style={{ background: "yellow", display: isShow ? "inline" : "none" }}
        >
          ahihi
        </button>
      </div>
    </div>
  );
}

export default Cart;
