import React from "react";
import "./cart.scss";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;
const StyledButton = styled(Buttons)`
  display: flex;
  justify-content: center;
`;
function Buttons({ isShow }) {
  return (
    <div className="buttons">
      <button
        className="buttons__item"
        style={{ background: "yellow", display: isShow ? "inline" : "none" }}
      >
        ahihi
      </button>
    </div>
  );
}
function Cart({ isShow }) {
  return (
    <Container>
      Cart
      <StyledButton isShow={isShow} />
    </Container>
  );
}

export default Cart;
